import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";
import DistortedBlob from "./DistortedBlob";
import Rig from "./Rig";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

export default function Background3D() {
  const scrollRef = useRef(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <CanvasErrorBoundary>
      <div
        className={`fixed inset-0 -z-10 transition-opacity duration-300 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <Canvas
          onCreated={() => setReady(true)}
          dpr={[1, 1.6]}
          camera={{ position: [0, 0, 6.4], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <color attach="background" args={["#05070a"]} />
          <fog attach="fog" args={["#05070a", 6, 15]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[4, 4, 4]} intensity={40} color="#6bff8f" />
          <pointLight position={[-4, -3, -2]} intensity={15} color="#1c8f4a" />

          <ParticleField />
          <DistortedBlob position={[2.4, 0.4, -1.5]} scale={1.5} />
          <DistortedBlob position={[-2.6, -1.1, -3]} scale={0.9} />

          <Rig scrollRef={scrollRef} />
        </Canvas>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05070a_85%)]" />
      </div>
    </CanvasErrorBoundary>
  );
}
