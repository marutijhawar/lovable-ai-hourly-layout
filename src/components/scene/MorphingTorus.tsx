import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export type ModelOption = "openai" | "claude" | "both";

interface Props {
  model: ModelOption;
}

function TorusMesh({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.2;
      ref.current.rotation.y = t * 0.3;
      const s = 1 + Math.sin(t * 1.2) * 0.05; // subtle morph-like pulsing
      ref.current.scale.setScalar(s);
    }
  });

  return (
    <Float floatIntensity={1.2} rotationIntensity={0.3} speed={1}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.6, 0.48, 220, 48]} />
        <MeshDistortMaterial
          transparent
          opacity={0.35}
          color={color}
          metalness={0.3}
          roughness={0.2}
          distort={0.35}
          speed={1.2}
          envMapIntensity={0.8}
        />
      </mesh>
    </Float>
  );
}

const colorMix = (model: ModelOption) => {
  // Use a blend between OpenAI black and Claude orange; brighten for visibility
  const openai = new THREE.Color("#0f0f0f");
  const claude = new THREE.Color("#ff8a1a");
  if (model === "openai") return openai.lerp(claude, 0.35).getStyle();
  if (model === "claude") return claude.lerp(openai, 0.2).getStyle();
  return openai.lerp(claude, 0.5).getStyle();
};

export const MorphingTorusBackground = ({ model }: Props) => {
  const tint = useMemo(() => colorMix(model), [model]);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 60 }} className="pointer-events-none">
        {/* Lights with subtle warm tint */}
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 2, 5]} intensity={0.9} color={tint} />
        <pointLight position={[-4, -2, -6]} intensity={0.7} color={tint} />
        <TorusMesh color={tint} />
      </Canvas>
      {/* Soft vignette to enhance readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/10" />
    </div>
  );
};

export default MorphingTorusBackground;
