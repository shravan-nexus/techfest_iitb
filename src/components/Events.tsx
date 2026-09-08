import { Mic, Telescope, Sparkles, Trophy, ArrowUpRight } from 'lucide-react';
import { EVENTS } from '@/data';
import { useInView } from '@/hooks';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Mic, Telescope, Sparkles, Trophy,
};

export default function Events() {
  const { ref, inView } = useInView();

  return (
    <section id="events" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-aether-500/5 rounded-full blur-[150px]" />

      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-renaissance-400/10 border border-renaissance-400/20 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Sparkles className="w-3.5 h-3.5 text-renaissance-300" />
            <span className="text-xs font-mono uppercase tracking-widest text-renaissance-300">Flagship Events</span>
          </div>
          <h2 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <span className="text-white">More Than</span>{' '}
            <span className="gradient-text">Competitions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {EVENTS.map((event, i) => {
            const Icon = ICON_MAP[event.icon] || Sparkles;
            return (
              <div
                key={event.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <div className="w-12 h-12 rounded-xl bg-ink-950/60 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-aether-300" />
                    </div>
                  </div>

                  <div className="absolute top-5 right-5">
                    <span className="px-3 py-1.5 rounded-full bg-aether-400/20 backdrop-blur-xl border border-aether-400/30 text-xs font-mono uppercase tracking-widest text-aether-200">
                      {event.highlight}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2 group-hover:text-aether-200 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed line-clamp-2 md:line-clamp-none">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-aether-400/20 backdrop-blur-xl border border-aether-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-aether-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
