import { ArrowUpRight, Trophy, Swords, Calculator, Code2, Rocket, Bot, Lightbulb, CircuitBoard, Plane, Wind, Gamepad2, Waves, Gauge } from 'lucide-react';
import { COMPETITIONS } from '@/data';
import { useInView } from '@/hooks';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Swords, Calculator, Code2, Rocket, Bot, Lightbulb,
  CircuitBoard, Plane, Wind, Gamepad2, Waves, Gauge,
};

export default function Competitions() {
  const { ref, inView } = useInView();

  return (
    <section id="competitions" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-renaissance-400/5 rounded-full blur-[100px]" />

      <div className="container-max relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-renaissance-400/10 border border-renaissance-400/20 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Trophy className="w-3.5 h-3.5 text-renaissance-300" />
              <span className="text-xs font-mono uppercase tracking-widest text-renaissance-300">Compete & Win</span>
            </div>
            <h2 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
              <span className="gradient-text-gold">14 Competitions.</span>
              <br />
              <span className="text-white">One Arena.</span>
            </h2>
          </div>
          <p className={`text-white/50 max-w-md transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            Compete across AI, Robotics, Coding, Engineering, and more. Free registration for all students.
            Prize pool exceeding ₹1 Crore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMPETITIONS.map((comp, i) => {
            const Icon = ICON_MAP[comp.icon] || Trophy;
            return (
              <div
                key={comp.name}
                className={`glass-card glass-card-hover p-6 group cursor-pointer transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i % 3) * 100 + 300}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aether-400/20 to-renaissance-400/10 flex items-center justify-center group-hover:from-aether-400/30 group-hover:to-renaissance-400/20 transition-all">
                    <Icon className="w-6 h-6 text-aether-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-aether-300 group-hover:rotate-45 transition-all duration-300" />
                </div>

                <div className="mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-renaissance-300/80">
                    {comp.category}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-xl text-white mb-2 group-hover:text-aether-200 transition-colors">
                  {comp.name}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-2">
                  {comp.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">Prize Pool</span>
                    <div className="font-display font-bold text-lg gradient-text-gold">{comp.prize}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end max-w-[50%]">
                    {comp.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/40 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <a href="https://techfest.org/competitions" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View All Competitions
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
