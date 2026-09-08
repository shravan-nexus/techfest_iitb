import { Brain, Bot, ShieldCheck, Blocks, Cpu, Cloud, Glasses, BarChart3, TrendingUp, Rocket, Dna, Gamepad2, ArrowRight } from 'lucide-react';
import { WORKSHOPS } from '@/data';
import { useInView } from '@/hooks';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Bot, ShieldCheck, Blocks, Cpu, Cloud, Glasses, BarChart3, TrendingUp, Rocket, Dna, Gamepad2,
};

export default function Workshops() {
  const { ref, inView } = useInView();

  return (
    <section id="workshops" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-aether-500/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-aether-400/10 border border-aether-400/20 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-aether-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-aether-300">Hands-On Learning</span>
          </div>
          <h2 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <span className="text-white">Workshops Across</span>
            <br />
            <span className="gradient-text">25+ In-Demand Domains</span>
          </h2>
          <p className={`text-white/50 max-w-2xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            Dive into cutting-edge domains, build practical skills, and learn directly from industry experts
            through immersive workshops designed for the technologies shaping tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {WORKSHOPS.map((workshop, i) => {
            const Icon = ICON_MAP[workshop.icon] || Brain;
            return (
              <div
                key={workshop.title}
                className={`group relative overflow-hidden rounded-2xl bg-ink-800/40 border border-white/10 p-5 hover:border-aether-400/30 transition-all duration-500 hover:bg-ink-800/60 cursor-pointer ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i % 4) * 80 + 300}ms` }}
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-aether-400/5 rounded-full blur-2xl group-hover:bg-aether-400/10 transition-all" />

                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-aether-400/15 transition-colors">
                    <Icon className="w-5 h-5 text-aether-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white mb-1.5 group-hover:text-aether-200 transition-colors">
                    {workshop.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                    {workshop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-10 flex justify-center transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="btn-primary group">
            Register for Workshops
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
