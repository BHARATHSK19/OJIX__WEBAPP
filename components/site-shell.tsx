"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, ArrowsMerge, Buildings, ChartLineUp, CheckCircle, Cloud, Code, Compass, FileText, HardDrives, List, Moon, Scales, ShieldCheck, ShoppingBag, Sparkle, Sun, Truck, X, CaretDown } from "@phosphor-icons/react";
import { industries, products, services } from "@/lib/content";

type MenuName="services"|"industries"|"products";
const serviceIcons=[Code,Sparkle,Cloud,ArrowsMerge,ChartLineUp,Compass];
const industryIcons=[Cloud,Buildings,ShieldCheck,ShoppingBag,Code,HardDrives,Truck,Scales];
const productIcons=[Scales,ShieldCheck,FileText,HardDrives];
const previewImages={services:["photo-1522071820081-009f0129c71c","photo-1618005182384-a83a8bd57fbe","photo-1558494949-ef010cbdcc31","photo-1551288049-bebda4e38f71","photo-1460925895917-afdab827c52f","photo-1531403009284-440f080d1e12"],industries:["photo-1451187580459-43490279c0fa","photo-1563013544-824ae1b704d3","photo-1576091160399-112ba8d25d1d","photo-1556742049-0cfed4f6a45d","photo-1509062522246-3755977927d7","photo-1586528116311-ad8dd3c8310d","photo-1519003722824-194d4455a60c","photo-1450101499163-c8848c66ca85"],products:["photo-1450101499163-c8848c66ca85","photo-1516321318423-f06f85e504b3","photo-1551288049-bebda4e38f71","photo-1558494949-ef010cbdcc31"]};

export function SiteShell({children}:{children:React.ReactNode}){
 const pathname=usePathname();
 const isHome=pathname==="/"||pathname==="";
 const isAbout=pathname==="/about";
 const [open,setOpen]=useState<MenuName|null>(null),[mobile,setMobile]=useState(false),[industryIndex,setIndustryIndex]=useState(0),[productIndex,setProductIndex]=useState(0),[serviceIndex,setServiceIndex]=useState(0);
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null);

 const close=()=>{if(timer.current)clearTimeout(timer.current);setOpen(null);setMobile(false)};

 useEffect(()=>{
  const saved=localStorage.getItem("ojix-theme");
  const selected=saved||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
  document.documentElement.dataset.theme=selected;
 },[]);

 useEffect(()=>{
  const elements=document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){
   elements.forEach(el=>el.classList.add("active"));
   return;
  }
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){
    entry.target.classList.add("active");
    revealObserver.unobserve(entry.target);
   }
  }),{threshold:0.06,rootMargin:"0px 0px 80px 0px"});

  elements.forEach(el=>{
   const rect=el.getBoundingClientRect();
   if(rect.top<window.innerHeight+50&&rect.bottom>-50){
    el.classList.add("active");
   }else{
    revealObserver.observe(el);
   }
  });

  return()=>revealObserver.disconnect();
 },[pathname]);

 const [prevPath, setPrevPath] = useState(pathname);
 if (prevPath !== pathname) {
  setPrevPath(pathname);
  if (open !== null) setOpen(null);
  if (mobile) setMobile(false);
 }

 useEffect(()=>{
  const handleKeyDown=(e:KeyboardEvent)=>{if(e.key==="Escape")close()};
  const handleClickOutside=(e:MouseEvent)=>{
   const target=e.target as HTMLElement;
   if(!target.closest("#site-header")){
    close();
   }
  };
  window.addEventListener("keydown",handleKeyDown);
  document.addEventListener("mousedown",handleClickOutside);
  return()=>{
   window.removeEventListener("keydown",handleKeyDown);
   document.removeEventListener("mousedown",handleClickOutside);
  };
 },[]);

 function showMenu(name:MenuName){if(timer.current)clearTimeout(timer.current);setOpen(name)}
 function hideSoon(){if(timer.current)clearTimeout(timer.current);timer.current=setTimeout(()=>setOpen(null),140)}
 function toggleTheme(){const next=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=next;localStorage.setItem("ojix-theme",next)}
 return <><header id="site-header" className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 flex flex-col items-center" onMouseLeave={hideSoon} onMouseEnter={()=>timer.current&&clearTimeout(timer.current)}>
  <nav className="w-full max-w-5xl bg-theme-surface/85 backdrop-blur-xl border border-theme-border/80 rounded-full px-3 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between shadow-soft theme-transition relative" aria-label="Main navigation">
   <Link href="/" onClick={close} className="flex items-center group py-0.5" aria-label="OJIX Home"><Image priority className="theme-logo-light h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105" src="/ojix-logo-light.svg" width={755} height={380} alt="OJIX"/><Image priority className="theme-logo-dark h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105" src="/ojix-logo-dark.svg" width={755} height={380} alt="" aria-hidden="true"/></Link>
   <div className="hidden md:flex items-center gap-1 bg-theme-bg/70 border border-theme-border/50 p-1 rounded-full text-xs font-semibold theme-transition" id="nav-pill-container">
    <Link href="/" onClick={close} className={`nav-link px-3.5 py-1.5 rounded-full transition-all duration-200 ${isHome?"active text-white bg-theme-accent font-bold shadow-sm":"text-theme-muted hover:text-theme-text"}`}>Home</Link>
    <div className={`nav-dropdown-item service-nav-wrapper relative inline-flex items-center${open==="services"?" open active":""}`} onMouseEnter={()=>showMenu("services")}>
     <button type="button" onMouseEnter={()=>showMenu("services")} onFocus={()=>showMenu("services")} onClick={()=>open==="services"?close():showMenu("services")} className={`nav-link px-3.5 py-1.5 rounded-full text-theme-muted hover:text-theme-text transition-all duration-200 flex items-center gap-1 cursor-pointer ${open==="services"?"active":""}`} aria-expanded={open==="services"}>Service <CaretDown size={11} className="nav-caret transition-transform duration-200"/><span className="nav-active-dot"/></button>
     <MegaMenu kind="services" open={open==="services"} close={close} hideSoon={hideSoon} keepOpen={()=>timer.current&&clearTimeout(timer.current)} selected={serviceIndex} setSelected={setServiceIndex}/>
    </div>
    <div className={`nav-dropdown-item relative inline-flex items-center${open==="industries"?" open active":""}`} onMouseEnter={()=>showMenu("industries")}>
     <button type="button" onMouseEnter={()=>showMenu("industries")} onFocus={()=>showMenu("industries")} onClick={()=>open==="industries"?close():showMenu("industries")} className={`nav-link px-3.5 py-1.5 rounded-full text-theme-muted hover:text-theme-text transition-all duration-200 flex items-center gap-1 cursor-pointer ${open==="industries"?"active":""}`} aria-expanded={open==="industries"}>Industries <CaretDown size={11} className="nav-caret transition-transform duration-200"/><span className="nav-active-dot"/></button>
     <MegaMenu kind="industries" open={open==="industries"} close={close} hideSoon={hideSoon} keepOpen={()=>timer.current&&clearTimeout(timer.current)} selected={industryIndex} setSelected={setIndustryIndex}/>
    </div>
    <div className={`nav-dropdown-item relative inline-flex items-center${open==="products"?" open active":""}`} onMouseEnter={()=>showMenu("products")}>
     <button type="button" onMouseEnter={()=>showMenu("products")} onFocus={()=>showMenu("products")} onClick={()=>open==="products"?close():showMenu("products")} className={`nav-link px-3.5 py-1.5 rounded-full text-theme-muted hover:text-theme-text transition-all duration-200 flex items-center gap-1 cursor-pointer ${open==="products"?"active":""}`} aria-expanded={open==="products"}>Products <CaretDown size={11} className="nav-caret transition-transform duration-200"/><span className="nav-active-dot"/></button>
     <MegaMenu kind="products" open={open==="products"} close={close} hideSoon={hideSoon} keepOpen={()=>timer.current&&clearTimeout(timer.current)} selected={productIndex} setSelected={setProductIndex}/>
    </div>
    <Link href="/about" onClick={close} className={`nav-link px-3.5 py-1.5 rounded-full transition-all duration-200 ${isAbout?"active text-white bg-theme-accent font-bold shadow-sm":"text-theme-muted hover:text-theme-text"}`}>about</Link>
   </div>
   <div className="flex items-center gap-2 sm:gap-2.5">
    <button onClick={toggleTheme} className="w-9 h-9 rounded-full flex items-center justify-center border border-theme-border text-theme-muted hover:text-theme-text hover:bg-theme-hover theme-transition" aria-label="Toggle theme" title="Toggle theme"><Moon size={16} className="theme-moon"/><Sun size={16} className="theme-sun"/></button>
    <a href="https://wa.me/919008877883" className="hidden sm:inline-flex items-center gap-1.5 bg-theme-surface border border-theme-border text-theme-text hover:border-[#25D366] hover:text-[#25D366] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm"><span className="text-[#25D366]">●</span> WhatsApp</a>
    <Link href="/contact" onClick={close} className="inline-flex items-center gap-1.5 sm:gap-2 bg-theme-accent text-white px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold hover:brightness-110 transition-all shadow-sm hover:shadow-md"><span>Contact</span><ArrowRight size={13}/></Link>
    <button className="md:hidden w-9 h-9 rounded-full border border-theme-border bg-theme-surface grid place-items-center" onClick={()=>setMobile(!mobile)} aria-label={mobile?"Close navigation":"Open navigation"}>{mobile?<X size={18}/>:<List size={18}/>}</button>
   </div>
  </nav>
  {mobile&&<div className="mobile-reference-menu md:hidden"><div className="mobile-reference-links"><Link href="/" onClick={close}>Home</Link><Link href="/#what-we-build" onClick={close}>Service <span>Six disciplines</span></Link><Link href="/#work" onClick={close}>Industries <span>Eight sectors</span></Link><Link href="/#products" onClick={close}>Products <span>Four products</span></Link><Link href="/about" onClick={close}>About</Link><Link href="/contact" onClick={close}>Contact <ArrowUpRight size={14}/></Link></div></div>}
 </header>
 <main>{children}</main>
 <footer id="contact" className="bg-theme-surface border-t border-theme-border pt-24 pb-12 px-6 theme-transition">
  <div className="max-w-4xl mx-auto text-center reveal mb-20"><span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">LET’S BUILD SOMETHING REAL</span><h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 theme-transition">Tell us what you want to build.</h2><p className="text-lg md:text-xl text-theme-muted font-medium leading-relaxed mb-10 max-w-3xl mx-auto theme-transition">An engineer replies directly. Get a technical perspective on your architecture, bottlenecks, and build roadmap with <strong className="text-theme-text font-bold">zero sales fluff</strong>.</p><div className="flex flex-col sm:flex-row justify-center items-center gap-4"><Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-theme-text text-theme-surface px-8 py-4 rounded-xl font-bold hover:bg-theme-accent hover:text-white transition-colors">Start a project <ArrowRight size={16}/></Link><a href="mailto:info@ojix.in" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-theme-bg border border-theme-border text-theme-text px-8 py-4 rounded-xl font-bold hover:border-theme-accent transition-colors theme-transition">info@ojix.in</a></div></div>
  <div className="max-w-7xl mx-auto pt-16 border-t border-theme-border/60"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"><div className="lg:col-span-4 pr-0 lg:pr-6 space-y-5"><Link href="/" onClick={close}><Image className="theme-logo-light h-9 sm:h-10 w-auto" src="/ojix-logo-light.svg" width={755} height={380} alt="OJIX"/><Image className="theme-logo-dark h-9 sm:h-10 w-auto" src="/ojix-logo-dark.svg" width={755} height={380} alt="OJIX"/></Link><p className="text-sm text-theme-muted leading-relaxed max-w-sm">Software product studio building custom platforms, AI systems, cloud infrastructure, and DevOps. Production-grade from day one.</p><div className="font-mono text-xs font-bold uppercase tracking-widest text-theme-accent">BENGALURU · INDIA</div></div><div className="lg:col-span-2"><h4 className="text-xs font-mono font-bold uppercase tracking-widest text-theme-accent mb-4">Explore</h4><ul className="space-y-2.5 text-sm"><li><Link href="/" className="text-theme-muted hover:text-theme-accent transition-colors font-medium">Home</Link></li><li><Link href="/#what-we-build" className="text-theme-muted hover:text-theme-accent transition-colors font-medium">What we build</Link></li><li><Link href="/#products" className="text-theme-muted hover:text-theme-accent transition-colors font-medium">Products</Link></li><li><Link href="/#work" className="text-theme-muted hover:text-theme-accent transition-colors font-medium">Industries</Link></li><li><Link href="/about" className="text-theme-muted hover:text-theme-accent transition-colors font-medium">About</Link></li></ul></div><div className="lg:col-span-3"><h4 className="text-xs font-mono font-bold uppercase tracking-widest text-theme-accent mb-4">Contact</h4><ul className="space-y-2.5 text-sm"><li><Link href="/contact" className="text-theme-muted hover:text-theme-accent">Start a project</Link></li><li><a href="tel:+919008877883" className="text-theme-muted hover:text-theme-accent">+91 90088 77883</a></li><li><a href="mailto:info@ojix.in" className="text-theme-muted hover:text-theme-accent">info@ojix.in</a></li></ul></div><div className="lg:col-span-3"><h4 className="text-xs font-mono font-bold uppercase tracking-widest text-theme-accent mb-4">Ownership</h4><p className="text-sm text-theme-muted">100% code ownership. Direct engineering access. Clear milestones and working demos.</p></div></div><div className="flex justify-between items-center gap-5 flex-wrap mt-16 pt-6 border-t border-theme-border/60 text-xs text-theme-muted"><span>© {new Date().getFullYear()} OJIX Studio · Built with intent. Not assembled.</span><div className="flex items-center gap-5"><Link href="/privacy" className="hover:text-theme-accent transition-colors">Privacy Policy</Link><span className="opacity-30">·</span><Link href="/terms" className="hover:text-theme-accent transition-colors">Terms of Service</Link></div></div></div>
 </footer></>;
}

function MegaMenu({kind,open,close,hideSoon,keepOpen,selected,setSelected}:{kind:MenuName;open:boolean;close:()=>void;hideSoon:()=>void;keepOpen:()=>void;selected:number;setSelected:(i:number)=>void}){
 const list=kind==="services"?services:kind==="industries"?industries:products;
 const item=list[Math.min(selected,list.length-1)];
 const Icon=kind==="services"?serviceIcons[selected]:kind==="industries"?industryIcons[selected]:productIcons[selected];
 const href=kind==="services"?`/services/${item.slug}`:kind==="industries"?`/industries/${item.slug}`:`/products/${item.slug}`;
 const image=previewImages[kind][selected];
 return <div onMouseEnter={keepOpen} onMouseLeave={hideSoon} onFocus={keepOpen} className={`mega-menu-panel ${kind==="services"?"mega-services":"mega-preview-menu"} ${open?"open":""}`} role="region" aria-label={`${kind} menu`} aria-hidden={!open}>
  {kind==="services"?<><aside className="mega-sidebar"><div className="flex items-center justify-between pb-3 mb-1 border-b border-white/10 px-1"><span className="font-mono text-[10px] uppercase tracking-wider text-slate-300 font-bold">Services & Architecture</span><span className="text-[11px] font-mono text-orange-400 font-semibold">01 / Method</span></div><div className="mega-tab-btn active"><div className="mega-tab-title">What we build</div><div className="mega-tab-desc">Six disciplines. Everything custom for your business.</div></div><div className="mt-auto pt-3 border-t border-white/10 px-1 flex items-center justify-between text-[11px] text-slate-400"><span>Zero templates. Production code.</span><Link href="/#what-we-build" onClick={close} className="text-orange-400 font-bold hover:underline flex items-center gap-1">All Services <ArrowRight size={13}/></Link></div></aside><div className="mega-content-area"><div className="mega-tab-panel grid-3 active">{services.map((s,i)=>{const ServiceIcon=serviceIcons[i];return <Link prefetch={false} href={`/services/${s.slug}`} onClick={close} key={s.slug} className="mega-grid-item group"><div className="mega-item-top"><div className="mega-icon-box"><ServiceIcon size={19}/></div><div className="mega-head-row"><span className="mega-arrow"><ArrowRight size={14}/></span><h4 className="mega-item-title">{s.name}</h4></div><div className="mega-item-sub">{s.kicker}</div></div><p className="mega-item-desc">{s.intro}</p></Link>})}</div></div></>:<><aside className="mega-sidebar-wide"><div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 px-1"><span className="font-mono text-[10px] uppercase tracking-wider text-slate-300 font-bold">{kind==="industries"?"Industries & Solutions":"OJIX Product Suite"}</span><span className="text-[11px] font-mono text-orange-400 font-semibold">0{selected+1} / 0{list.length}</span></div><div className={`mega-list-scroll ${kind=== "products"?"products-scroll":""}`}>{list.map((x,i)=>{const ItemIcon=kind==="industries"?industryIcons[i]:productIcons[i];const itemHref=kind==="industries"?`/industries/${x.slug}`:`/products/${x.slug}`;return <Link key={x.slug} href={itemHref} prefetch={false} onClick={close} className={`${kind==="industries"?"industry-tab-btn":"product-tab-btn"} ${i===selected?"active":""}`} onMouseEnter={()=>setSelected(i)} onFocus={()=>setSelected(i)}>{kind==="industries"?<><span className="industry-icon-box"><ItemIcon size={16}/></span><span className="industry-tab-name">{x.name}</span></>:<><span className="product-tab-icon"><ItemIcon size={17}/></span><span className="product-tab-title">{x.name}</span></>}<ArrowRight size={12} className="industry-tab-arrow"/></Link>})}</div><Link prefetch={false} href={kind==="industries"?"/#work":"/#products"} onClick={close} className="mega-view-all">View all {kind} <ArrowRight size={13}/></Link></aside><div className="mega-content-area"><div className="industry-preview-pane active"><Link prefetch={false} href={href} onClick={close} className="block group"><div className="industry-preview-top"><span className="industry-preview-badge"><Icon size={14}/>{kind==="industries"?"Industry / Solution":"Product / OJIX Studio"}</span><h3 className="industry-preview-title group-hover:text-theme-accent transition-colors">{item.name}</h3><p className="industry-preview-desc">{kind==="industries"?(item as typeof industries[number]).brief:(item as typeof products[number]).description}</p><div className="industry-preview-pills">{(kind==="industries"?["Custom Platforms","Automation","Secure Systems"]:(item as typeof products[number]).benefits.slice(0,3)).map(p=><span key={p} className="industry-preview-pill">{p}</span>)}</div></div><div className="industry-preview-media"><Image loading="lazy" src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=80`} alt={item.name} fill unoptimized sizes="(max-width: 1050px) 60vw, 600px" className="industry-preview-img"/><div className="industry-preview-overlay"><span className="industry-preview-overlay-text"><CheckCircle size={16}/> Built for real-world operations</span></div></div></Link><div className="industry-preview-footer"><Link prefetch={false} href={href} onClick={close} className="industry-preview-link">Explore {item.name} <ArrowUpRight size={14}/></Link><span className="text-xs text-theme-muted font-mono font-semibold">0{selected+1} / 0{list.length}</span></div></div></div></>}
 </div>;
}
