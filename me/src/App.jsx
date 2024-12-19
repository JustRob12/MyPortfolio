import Navbar from './components/Navbar';
import GlowingCursor from './components/GlowingCursor';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="relative bg-black min-h-screen">
      <GlowingCursor />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;