import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NAV_LINKS } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 md:px-12">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-aether-400 blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-aether-300 to-aether-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-ink-950" fill="currentColor" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg tracking-tight">Techfest</span>
            <span className="text-[10px] font-mono text-aether-300 tracking-widest uppercase">IIT Bombay</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-px bg-aether-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#register"
            onClick={(e) => { e.preventDefault(); handleNavClick('#register'); }}
            className="btn-primary text-sm py-2.5 px-6"
          >
            Register Now
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 space-y-1 bg-ink-900/95 backdrop-blur-xl border-t border-white/10 mt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={(e) => { e.preventDefault(); handleNavClick('#register'); }}
              className="btn-primary text-sm w-full justify-center mt-2"
            >
              Register Now
            </a>
          </div>
        </div>
    </header>
  );
}
