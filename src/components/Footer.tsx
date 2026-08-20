import React, { useState } from 'react';
import { Globe2, Send, Check, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/olaadetokunboh/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    )
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/Emvic12',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/CapeGlobalSolutions',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z"/>
      </svg>
    )
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.525 2.25c.072 1.332.617 2.6 1.536 3.518a5.955 5.955 0 0 0 3.689 1.582V10.8a9.42 9.42 0 0 1-3.702-.857c-.504-.233-.976-.525-1.408-.87v6.626c0 1.256-.37 2.484-1.063 3.528A6.87 6.87 0 0 1 8.78 21.8c-1.268.324-2.602.214-3.8-.315a6.837 6.837 0 0 1-3.093-2.677 6.892 6.892 0 0 1-.887-4.004c.231-1.313.916-2.502 1.942-3.372A6.822 6.822 0 0 1 6.55 10.12v3.468a3.396 3.396 0 0 0-1.922.95 3.42 3.42 0 0 0-.962 1.986 3.443 3.443 0 0 0 .438 2.022 3.41 3.41 0 0 0 1.542 1.332 3.432 3.432 0 0 0 2.03.158 3.428 3.428 0 0 0 1.768-.96 3.425 3.425 0 0 0 .976-1.782c.071-.433.071-.875 0-1.308V2.25h3.115z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@adetoks123',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
];

export default function Footer({ setCurrentTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const keyPages = [
    { label: 'Home Page', id: 'home' },
    { label: 'About Agency', id: 'about' },
    { label: 'Services Portfolio', id: 'services' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const resourceLinks = [
    { label: 'Project Case Studies', id: 'projects' },
    { label: 'Capacity Development', id: 'capacity' },
    { label: 'Audiovisuals Library', id: 'audiovisuals' },
  ];

  return (
    <footer className="bg-[#EAE4D9] border-t border-stone-300/80 pt-16 pb-12 relative overflow-hidden text-left" id="main-app-footer">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Relocated Contact Us Box */}
        <div className="bg-white border border-stone-300/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left" id="relocated-contact-box">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest font-semibold block">
              Direct Advisory & Inquiries
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-stone-900 tracking-tight">
              Ready to collaborate or request strategic consultation?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Connect directly with Dr. Ola Adetokunboh and the Cape Global Solutions team for executive coaching, capacity development, or institutional reskilling.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => {
                setCurrentTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto py-3 px-6 rounded-xl bg-brand-primary hover:bg-brand-primary/95 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-xs group"
              id="bottom-contact-btn"
            >
              <Mail className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform opacity-80" />
            </button>
            <a
              href="mailto:admin@capeglobal.org"
              className="w-full sm:w-auto py-3 px-5 rounded-xl border border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-800 text-xs font-medium transition-all text-center"
            >
              admin@capeglobal.org
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div
              className="flex items-center gap-2.5 cursor-pointer group inline-flex"
              onClick={() => {
                setCurrentTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-purple shadow-xs">
                <span className="font-display font-bold text-white text-base">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-stone-900 tracking-tight leading-none text-sm">
                  CAPE GLOBAL
                </span>
                <span className="font-mono text-[8px] text-stone-500 tracking-widest uppercase font-semibold">
                  Solutions
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 font-normal leading-relaxed max-w-sm">
              Cape Global Solutions is a premium professional consulting, research and capacity development agency designed to help professionals, researchers, company executives, managers and postgraduate scholars navigate key transitions and move forward.
            </p>

            <div className="flex gap-4 text-xs font-mono text-stone-500">
              <span className="hover:text-stone-900 transition-colors cursor-default">Atlanta, US</span>
              <span>•</span>
              <span className="hover:text-stone-900 transition-colors cursor-default">Global Cohorts</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider font-semibold mr-1">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      aria-label={social.name}
                      className="w-8 h-8 rounded-lg bg-stone-200/80 hover:bg-brand-primary text-stone-700 hover:text-white transition-all duration-200 flex items-center justify-center shadow-2xs hover:scale-105"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-stone-500 uppercase tracking-widest font-semibold">
              Navigation & Resources
            </h4>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">Key Pages</span>
                <ul className="space-y-1.5">
                  {keyPages.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => {
                          setCurrentTab(link.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-stone-600 hover:text-brand-primary transition-colors text-left font-normal"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">Resources</span>
                <ul className="space-y-1.5">
                  {resourceLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => {
                          setCurrentTab(link.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-stone-600 hover:text-brand-primary transition-colors text-left font-normal"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter Sign up */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-stone-500 uppercase tracking-widest font-semibold">
              Join our mailing list
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              We dispatch quarterly briefs covering national reskilling studies, academic research guides, and key change framework updates.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Institutional email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-brand-primary flex-grow shadow-2xs"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="p-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white transition-colors flex items-center justify-center shrink-0 shadow-xs"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] font-mono text-emerald-700 block font-semibold">
                Subscription requested! Check your inbox for validation.
              </span>
            )}
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-stone-300/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-stone-500">
          <p>© {new Date().getFullYear()} Cape Global Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={`bottom-${social.name}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    aria-label={social.name}
                    className="hover:text-brand-primary text-stone-500 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
            <span>•</span>
            <span className="hover:text-stone-900 transition-colors cursor-default flex items-center gap-1">
              <Globe2 className="w-3 h-3 text-brand-primary" /> Multi-Sensory Agency Model
            </span>
            <span>•</span>
            <span className="hover:text-stone-900 transition-colors cursor-default">
              Terms of Engagement
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
