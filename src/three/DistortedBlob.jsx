import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";

export default function DistortedBlob({ position = [0, 0, 0], scale = 1.6 }) {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const { pointer, clock } = state;

    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.11;

    meshRef.current.rotation.y += pointer.x * 0.01;
    meshRef.current.rotation.x += -pointer.y * 0.01;

    if (materialRef.current) {
      materialRef.current.distort = 0.42 + Math.sin(clock.elapsedTime * 0.6) * 0.08;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#0c1f14"
          emissive="#3fe873"
          emissiveIntensity={0.35}
          wireframe
          distort={0.42}
          speed={1.6}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
}
