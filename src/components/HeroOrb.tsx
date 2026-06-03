import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

const Core = () => {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.15;
    ref.current.rotation.y += dt * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.4, 1]}>
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#7c3aed"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.6}
          wireframe={false}
        />
      </Icosahedron>
      <Icosahedron args={[1.7, 1]}>
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.18} />
      </Icosahedron>
    </Float>
  );
};

const HeroOrb = () => {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.2], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]} intensity={1.6} color="#60a5fa" />
      <pointLight position={[-4, -2, 2]} intensity={1.4} color="#a78bfa" />
      <Suspense fallback={null}>
        <Core />
      </Suspense>
    </Canvas>
  );
};

export default HeroOrb;
