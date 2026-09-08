import { MARQUEE_ITEMS } from '@/data';

export default function Marquee() {
  return (
    <div className="relative py-6 border-y border-white/10 bg-ink-900/50 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="font-display font-semibold text-2xl md:text-3xl text-white/30 hover:text-aether-300 transition-colors">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-aether-400/40" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <div className="w-32 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="w-32 bg-gradient-to-l from-ink-950 to-transparent" />
      </div>
    </div>
  );
}
