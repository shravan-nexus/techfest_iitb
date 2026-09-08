import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { FESTIVAL_DATE } from '@/data';

function useCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const distance = FESTIVAL_DATE.getTime() - now;

      if (distance > 0) {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-ink-800/60 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden group hover:border-aether-400/40 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-b from-aether-400/5 to-transparent" />
        <span className="relative font-display font-bold text-2xl md:text-3xl text-white tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aether-400/50 to-transparent" />
      </div>
      <span className="mt-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/50">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const time = useCountdown();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-40" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aether-500/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-renaissance-400/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aether-600/10 rounded-full blur-[150px] animate-glow-pulse" style={{ animationDelay: '0.7s' }} />
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 border border-aether-400/20 rounded-full animate-spin-slow opacity-30" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-renaissance-400/20 rounded-full animate-spin-reverse opacity-20" />

      <div className="relative z-10 container-max px-6 md:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-800/60 backdrop-blur-xl border border-aether-400/20 mb-8 animate-fade-down">
          <Sparkles className="w-4 h-4 text-renaissance-300" />
          <span className="text-xs md:text-sm font-mono text-white/80 tracking-wide">30th Edition · December 16-18, 2026</span>
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight animate-fade-up animate-delay-100">
          <span className="block text-white">An Aetherial</span>
          <span className="block gradient-text text-shadow-glow">Renaissance</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
          Asia's largest science and technology festival returns to IIT Bombay.
          Three days of competitions, workshops, exhibitions, and innovation that redefine what's possible.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
          <button onClick={() => scrollTo('#register')} className="btn-primary group">
            Register Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => scrollTo('#competitions')} className="btn-secondary">
            Explore Competitions
          </button>
        </div>

        <div className="mt-14 animate-fade-up animate-delay-500">
          <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Countdown to Techfest 2026</p>
          <div className="flex items-center justify-center gap-3 md:gap-5">
            <CountdownUnit value={time.days} label="Days" />
            <span className="text-2xl text-aether-400/30 font-display font-bold">:</span>
            <CountdownUnit value={time.hours} label="Hours" />
            <span className="text-2xl text-aether-400/30 font-display font-bold">:</span>
            <CountdownUnit value={time.minutes} label="Minutes" />
            <span className="text-2xl text-aether-400/30 font-display font-bold">:</span>
            <CountdownUnit value={time.seconds} label="Seconds" />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40 animate-fade-up animate-delay-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-aether-400" />
            <span>Dec 16-18, 2026</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-aether-400" />
            <span>IIT Bombay, Mumbai</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-1000">
        <div className="w-px h-12 bg-gradient-to-b from-aether-400/50 to-transparent" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">Scroll</span>
      </div>
    </section>
  );
}
