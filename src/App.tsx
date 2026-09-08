import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Competitions from '@/components/Competitions';
import Workshops from '@/components/Workshops';
import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import RegisterCTA from '@/components/RegisterCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Competitions />
        <Workshops />
        <Events />
        <Gallery />
        <RegisterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
