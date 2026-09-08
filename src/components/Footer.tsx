import { Zap, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '@/data';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/techfest_iitbombay', label: 'Instagram' },
    { icon: Linkedin, href: 'https://in.linkedin.com/company/techfest', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/iitbombaytechfest', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@techfestiitbombay', label: 'YouTube' },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-aether-500/5 rounded-full blur-[100px]" />

      <div className="container-max relative z-10 px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-aether-300 to-aether-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-ink-950" fill="currentColor" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-tight">Techfest</span>
                <span className="text-[10px] font-mono text-aether-300 tracking-widest uppercase">IIT Bombay</span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Asia's largest science and technology festival. An Aetherial Renaissance awaits.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-aether-300 hover:border-aether-400/30 hover:bg-aether-400/10 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/80 mb-4">Navigate</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-white/40 hover:text-aether-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/80 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="https://techfest.org/competitions" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-aether-300 transition-colors">Competitions</a></li>
              <li><a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-aether-300 transition-colors">Workshops</a></li>
              <li><a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-aether-300 transition-colors">Accommodation</a></li>
              <li><a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-aether-300 transition-colors">Register</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/80 mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-aether-400 mt-0.5 shrink-0" />
                <span className="text-sm text-white/40">IIT Bombay, Powai, Mumbai 400076</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-aether-400 shrink-0" />
                <a href="mailto:info@techfest.org" className="text-sm text-white/40 hover:text-aether-300 transition-colors">info@techfest.org</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-aether-400 shrink-0" />
                <span className="text-sm text-white/40">+91 22 2576 4xxx</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Techfest, IIT Bombay. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-mono">
            30th Edition · An Aetherial Renaissance
          </p>
          <button
            onClick={() => scrollTo('#hero')}
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-aether-300 hover:border-aether-400/30 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
