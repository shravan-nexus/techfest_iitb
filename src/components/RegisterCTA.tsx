import { ArrowRight, Calendar, MapPin, Users, Zap } from 'lucide-react';
import { useInView } from '@/hooks';

export default function RegisterCTA() {
  const { ref, inView } = useInView();

  return (
    <section id="register" ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className={`relative overflow-hidden rounded-3xl border border-aether-400/20 transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-aether-500/20 rounded-full blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-renaissance-400/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 p-8 md:p-16 lg:p-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-950/60 backdrop-blur-xl border border-aether-400/30 mb-8">
              <Zap className="w-4 h-4 text-renaissance-300" fill="currentColor" />
              <span className="text-sm font-mono text-white/80 tracking-wide">Registrations Now Open</span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
              <span className="text-white">Be Part of the</span>
              <br />
              <span className="gradient-text text-shadow-glow">Aetherial Renaissance</span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
              Whether you want to learn, compete, build, or simply experience Asia's largest
              science &amp; technology festival — this is your invitation. Registration is free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="btn-primary group text-base">
                Register Now — It's Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-secondary text-base">
                Contact Us
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-aether-400" />
                <span>Dec 16-18, 2026</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-aether-400" />
                <span>IIT Bombay, Mumbai</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-aether-400" />
                <span>Open to All Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
