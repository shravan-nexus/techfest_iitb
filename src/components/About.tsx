import { Award, Globe, Users, Trophy } from 'lucide-react';
import { STATS } from '@/data';
import { useInView, useCountUp } from '@/hooks';

const ICONS = [Trophy, Award, Users, Globe];

function StatCard({ stat, index, inView }: { stat: typeof STATS[number]; index: number; inView: boolean }) {
  const numericValue = parseFloat(stat.value);
  const count = useCountUp(numericValue, 2000, inView);
  const Icon = ICONS[index];
  const displayValue = stat.value.includes('.') ? count.toFixed(2).replace(/\.?0+$/, '') : Math.floor(count).toString();

  return (
    <div
      className={`glass-card glass-card-hover p-6 md:p-8 text-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-aether-400/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-aether-300" />
      </div>
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="font-display font-bold text-4xl md:text-5xl gradient-text tabular-nums">
          {displayValue}
        </span>
        <span className="font-display font-bold text-2xl md:text-3xl text-renaissance-300">
          {stat.suffix}
        </span>
      </div>
      <div className="mt-2 text-sm font-semibold text-white/80">{stat.label}</div>
      <div className="mt-1 text-xs text-white/40">{stat.sublabel}</div>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-aether-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-renaissance-400/5 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-aether-400/10 border border-aether-400/20 mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-aether-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-aether-300">Our Legacy</span>
          </div>
          <h2 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            Where <span className="gradient-text">Innovation</span> Meets <span className="gradient-text-gold">Imagination</span>
          </h2>
          <p className={`text-lg text-white/60 leading-relaxed transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            Since 1998, Techfest has been the pinnacle of science and technology festivals in Asia.
            What began as a celebration of engineering excellence has evolved into a global platform
            where the brightest minds converge to compete, create, and experience the beauty of technology.
            From robotics battles to space exploration, from quantum coding to AI breakthroughs —
            Techfest is where the future is built today.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
