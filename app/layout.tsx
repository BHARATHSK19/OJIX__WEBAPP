import type { Metadata } from "next";
import "./globals.css";
import "./reference.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "OJIX — Built for reality.",
  description: "Independent software product studio. Custom platforms, production AI, and resilient cloud systems, engineered in Bengaluru.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning><body className="antialiased font-sans"><SiteShell>{children}</SiteShell></body></html>;
}
