import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { detectWebGL } from "./three/webgl";
import FallbackBackground from "./three/FallbackBackground";

const Background3D = lazy(() => import("./three/Background3D"));

function Background() {
  const [webglOk, setWebglOk] = useState(null);

  useEffect(() => {
    setWebglOk(detectWebGL());
  }, []);

  // El fondo estático siempre queda montado como base y el canvas 3D se
  // desvanece encima cuando está listo. Así las tarjetas glass siempre tienen
  // algo detrás que difuminar (sin flash de blur tardío ni salto de fondo).
  return (
    <>
      <FallbackBackground />
      {webglOk !== false && (
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      )}
    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
