/**
 * OJIX Enterprise Application & API Server
 * Production-ready, hardened Node.js/Express server.
 * Implements strict security safeguards and DPDP Act 2023 statutory compliance.
 */

'use strict';

require('dotenv').config();
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PROD = NODE_ENV === 'production';

// Trust proxy for rate limiting behind load balancers / cloud platforms (Fly.io, Render, AWS, etc.)
app.set('trust proxy', 1);

// Disable X-Powered-By
app.disable('x-powered-by');

// 1. HARDENED HTTP SECURITY HEADERS VIA HELMET
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
        formAction: ["'self'", "mailto:"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
        connectSrc: ["'self'"],
        manifestSrc: ["'self'"],
        workerSrc: ["'self'"],
        upgradeInsecureRequests: IS_PROD ? [] : null
      }
    },
    crossOriginOpenerPolicy: { policy: "same-origin" },
    crossOriginResourcePolicy: { policy: "same-origin" },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    hsts: IS_PROD
      ? {
          maxAge: 31536000,
          includeSubDomains: true,
          preload: true
        }
      : false
  })
);

// Custom Permissions-Policy header
app.use((req, res, next) => {
  res.setHeader(
    'Permissions-Policy',
    'accelerometer=(), camera=(), geolocation=(), gyroscope=(), microphone=(), payment=(), usb=()'
  );
  // Statutory Data Localization & DPDP Header
  res.setHeader('X-DPDP-Compliance-Jurisdiction', 'Republic of India (Act No. 22 of 2023)');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

// 2. CORS CONFIGURATION
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
  : ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:8080', 'http://127.0.0.1:8080', 'https://ojix.in', 'https://www.ojix.in'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, same-origin)
      if (!origin || allowedOrigins.includes(origin) || !IS_PROD) {
        return callback(null, true);
      }
      return callback(new Error('CORS request blocked by statutory policy.'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    maxAge: 86400
  })
);

// 3. BODY PARSING WITH STRICT SIZE LIMITS (Prevents payload-based DoS)
app.use(express.json({ limit: '64kb' }));
app.use(express.urlencoded({ extended: true, limit: '64kb' }));

// 4. RATE LIMITING
const globalApiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests. Please wait a moment before trying again.'
  }
});

const submissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Max 10 form submissions per 15 minutes per IP
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Submission rate limit reached. Under security safeguards, please retry in a few minutes.'
  }
});

app.use('/api/', globalApiLimiter);

// 5. SANITIZATION AND VALIDATION HELPERS
function sanitizeString(str, maxLen = 500) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // Strip script injection tags
    .replace(/[\0\x08\x09\x1a\n\r]/g, ' ') // Strip control chars
    .trim()
    .slice(0, maxLen);
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  // RFC 5322 regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim()) && email.length <= 120;
}

// 6. API ENDPOINTS

/**
 * Health check & liveness probe for Docker / K8s / Cloud Run / Railway
 */
app.get(['/health', '/api/health'], (req, res) => {
  const stats = db.getStorageStats();
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: NODE_ENV,
    jurisdiction: 'India (DPDP 2023)',
    storage: stats,
    complianceStatus: 'ACTIVE'
  });
});

/**
 * Lead & Project Inquiry Endpoint (Contact Form, LegalOS, CampusOS, ProcureOS)
 */
app.post('/api/inquiry', submissionLimiter, (req, res) => {
  try {
    const { name, email, interest, message, honeypot, _hp_check } = req.body;

    // Honeypot bot trap
    if (honeypot || _hp_check) {
      console.warn('[SPAM BOT CAUGHT] Honeypot field was filled.');
      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been queued for verification.'
      });
    }

    // Required fields check
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Full name and official work email are statutory requirements.'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid corporate or official email address.'
      });
    }

    const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'] || '';

    const sanitizedData = {
      name: sanitizeString(name, 100),
      email: email.trim().toLowerCase(),
      interest: sanitizeString(interest || 'General Platform Inquiry', 100),
      message: sanitizeString(message || 'No additional notes provided.', 2500),
      ip: clientIp,
      userAgent
    };

    const auditRecord = db.recordInquiry(sanitizedData);

    return res.status(201).json({
      success: true,
      message: 'Inquiry received. Our engineering team will review and respond within 24 hours under DPDP statutory guidelines.',
      referenceId: auditRecord.referenceId,
      consentId: auditRecord.consentId,
      consentTimestamp: auditRecord.timestamp,
      lawfulBasis: auditRecord.lawfulBasis
    });
  } catch (err) {
    console.error('[API ERROR] Failed to record inquiry:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your statutory request. Please email info@ojix.in directly.'
    });
  }
});

/**
 * DPDP Technical Architecture Audit Request Endpoint (dpdp-compliance.html)
 */
app.post('/api/audit-request', submissionLimiter, (req, res) => {
  try {
    const {
      name,
      email,
      organization,
      'fiduciary-class': fiduciaryClass,
      interest,
      message,
      honeypot,
      _hp_check
    } = req.body;

    // Honeypot bot trap
    if (honeypot || _hp_check) {
      return res.status(200).json({
        success: true,
        message: 'Your compliance audit request has been registered.'
      });
    }

    if (!name || !email || !organization) {
      return res.status(400).json({
        success: false,
        error: 'Enterprise Name, Officer Name, and Official Email are required for audit scheduling.'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid corporate or statutory DPO email address.'
      });
    }

    const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'] || '';

    const sanitizedData = {
      name: sanitizeString(name, 100),
      email: email.trim().toLowerCase(),
      organization: sanitizeString(organization, 150),
      fiduciaryClass: sanitizeString(fiduciaryClass || 'Standard Data Fiduciary', 100),
      interest: sanitizeString(interest || 'DPDP Technical Architecture Audit', 100),
      message: sanitizeString(message || 'Requesting technical architecture audit and readiness review under DPDP Act 2023 & Rules 2025.', 2500),
      ip: clientIp,
      userAgent
    };

    const auditRecord = db.recordInquiry(sanitizedData);

    return res.status(201).json({
      success: true,
      message: 'Confidential DPDP architecture audit request registered. An OJIX principal solutions engineer will contact you under NDA.',
      referenceId: auditRecord.referenceId,
      consentId: auditRecord.consentId,
      consentTimestamp: auditRecord.timestamp,
      fiduciaryClass: sanitizedData.fiduciaryClass,
      lawfulBasis: auditRecord.lawfulBasis
    });
  } catch (err) {
    console.error('[API ERROR] Failed to record audit request:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to process compliance audit request. Please email info@ojix.in.'
    });
  }
});

/**
 * Data Principal Right to Erasure Endpoint (DPDP Act 2023 Section 12)
 */
app.post('/api/dpdp/erasure', submissionLimiter, (req, res) => {
  try {
    const { email, confirmation } = req.body;
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'A valid email address is required to locate records for erasure.'
      });
    }
    if (confirmation !== 'ERASE_PERSONAL_DATA') {
      return res.status(400).json({
        success: false,
        error: 'Confirmation token ERASE_PERSONAL_DATA is required to execute statutory erasure.'
      });
    }

    const result = db.requestErasureByEmail(email);
    return res.status(200).json(result);
  } catch (err) {
    console.error('[API ERROR] Erasure request failed:', err);
    return res.status(500).json({
      success: false,
      error: 'Erasure execution error. Contact info@ojix.in directly.'
    });
  }
});

// 7. HIGH-PERFORMANCE STATIC FILE SERVING WITH CACHING HEADERS
const staticOptions = {
  dotfiles: 'ignore',
  etag: true,
  lastModified: true,
  maxAge: IS_PROD ? '7d' : 0,
  setHeaders: (res, filePath) => {
    // HTML pages should always revalidate so font & style updates are immediate
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    } else if (filePath.match(/\.(css|js|woff2|svg|png|jpg|webp)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
    }
  }
};

app.use(express.static(path.join(__dirname), staticOptions));

// Clean URL rewrites (Clean professional slugs + direct legacy compatibility)
const pageRoutes = [
  // Primary clean slugs
  { path: '/company-management', file: 'companyos.html' },
  { path: '/legal-practice-system', file: 'legalos.html' },
  { path: '/purchase-inventory', file: 'procureos.html' },
  { path: '/school-college-system', file: 'campusos.html' },
  { path: '/construction-system', file: 'buildos.html' },
  { path: '/travel-booking', file: 'travelos.html' },
  { path: '/gym-fitness-system', file: 'fitos.html' },
  { path: '/data-privacy-vault', file: 'dpdp-compliance.html' },
  // Backwards compatibility routes
  { path: '/companyos', file: 'companyos.html' },
  { path: '/legalos', file: 'legalos.html' },
  { path: '/procureos', file: 'procureos.html' },
  { path: '/campusos', file: 'campusos.html' },
  { path: '/buildos', file: 'buildos.html' },
  { path: '/travelos', file: 'travelos.html' },
  { path: '/fitos', file: 'fitos.html' },
  { path: '/dpdp-compliance', file: 'dpdp-compliance.html' },
  { path: '/dpdp', file: 'dpdp-compliance.html' }
];

pageRoutes.forEach(({ path: routePath, file }) => {
  app.get(routePath, (req, res) => {
    res.sendFile(path.join(__dirname, file));
  });
});

// Fallback to index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 Handler
app.use((req, res) => {
  if (req.accepts('html')) {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.status(404).json({ success: false, error: 'Endpoint or resource not found.' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[SERVER ERROR]', err);
  res.status(500).json({
    success: false,
    error: IS_PROD ? 'Internal server error.' : err.message
  });
});

// 8. START SERVER & GRACEFUL SHUTDOWN
const server = app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  OJIX Premium Platform Server is running`);
  console.log(`  Environment: ${NODE_ENV}`);
  console.log(`  Listening at: http://localhost:${PORT}`);
  console.log(`  Health probe: http://localhost:${PORT}/health`);
  console.log(`  DPDP Act 2023 Statutory Compliance: ACTIVE`);
  console.log(`====================================================`);
});

const gracefulShutdown = (signal) => {
  console.log(`[OJIX SERVER] Received ${signal}. Closing HTTP server gracefully...`);
  server.close(() => {
    console.log('[OJIX SERVER] HTTP server closed. Process terminating safely.');
    process.exit(0);
  });
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

module.exports = app;
