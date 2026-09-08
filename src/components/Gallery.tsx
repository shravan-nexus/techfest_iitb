import { GALLERY_IMAGES } from '@/data';
import { useInView } from '@/hooks';

export default function Gallery() {
  const { ref, inView } = useInView();

  return (
    <section id="gallery" ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-aether-400/10 border border-aether-400/20 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-aether-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-aether-300">Glimpses</span>
          </div>
          <h2 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <span className="text-white">The</span> <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-sm font-medium text-white/90">{img.alt}</p>
              </div>
              <div className="absolute inset-0 border-2 border-aether-400/0 group-hover:border-aether-400/30 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
