"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export type SceneVariant = "containers" | "orbits" | "waves" | "frames" | "flow";

/* ---------------------------------------------------------------- helpers */

function PointerRig({
  children,
  strength = 0.3,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((state, d) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      pointer.y * -strength * 0.6 + Math.sin(t * 0.5) * 0.03,
      3,
      d
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      pointer.x * strength + Math.cos(t * 0.35) * 0.04,
      3,
      d
    );
  });
  return <group ref={group}>{children}</group>;
}

function CargoBox({
  position,
  scale = 1,
  rot = [0, 0, 0] as [number, number, number],
  color = "#1a3fe6",
}: {
  position: [number, number, number];
  scale?: number;
  rot?: [number, number, number];
  color?: string;
}) {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
      <group position={position} scale={scale} rotation={rot}>
        <mesh>
          <boxGeometry args={[0.9, 0.55, 0.55]} />
          <meshStandardMaterial color={color} metalness={0.75} roughness={0.25} />
        </mesh>
        {[-0.32, -0.11, 0.11, 0.32].map((x) => (
          <mesh key={x} position={[x, 0, 0.283]}>
            <boxGeometry args={[0.055, 0.5, 0.02]} />
            <meshStandardMaterial color="#0e1844" metalness={0.5} roughness={0.5} />
          </mesh>
        ))}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(0.9, 0.55, 0.55)]} />
          <lineBasicMaterial color="#8eb3ff" transparent opacity={0.6} />
        </lineSegments>
      </group>
    </Float>
  );
}

/* ---------------------------------------------------------------- variants */

/** About — a floating stack of cargo containers, like a deconstructed yard. */
function ContainersScene() {
  return (
    <PointerRig strength={0.4}>
      <CargoBox position={[0, 0.75, 0]} rot={[0.1, 0.5, 0.04]} color="#1a3fe6" />
      <CargoBox position={[-0.55, 0, 0.3]} rot={[0, 0.9, 0]} scale={0.9} color="#2f5fff" />
      <CargoBox position={[0.7, -0.05, -0.2]} rot={[0.05, 0.3, -0.05]} scale={0.8} color="#1530b4" />
      <CargoBox position={[0.05, -0.8, 0.15]} rot={[-0.05, 0.7, 0.06]} scale={1.05} color="#2f5fff" />
    </PointerRig>
  );
}

/** Quote — a gyroscope of rings with cubes riding the orbits. */
function OrbitsScene() {
  const rings = [
    { r: 1.5, tilt: [Math.PI / 2.2, 0, 0.3] as [number, number, number], speed: 0.5 },
    { r: 1.15, tilt: [Math.PI / 3, 0.4, -0.4] as [number, number, number], speed: -0.7 },
    { r: 0.82, tilt: [Math.PI / 1.8, -0.4, 0.9] as [number, number, number], speed: 0.95 },
  ];
  return (
    <PointerRig strength={0.5}>
      <mesh>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial
          color="#2f5fff"
          metalness={0.6}
          roughness={0.2}
          flatShading
        />
      </mesh>
      {rings.map((ring, i) => (
        <OrbitRingWithRider key={i} {...ring} />
      ))}
    </PointerRig>
  );
}

function OrbitRingWithRider({
  r,
  tilt,
  speed,
}: {
  r: number;
  tilt: [number, number, number];
  speed: number;
}) {
  const rider = useRef<THREE.Mesh>(null);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + phase;
    if (rider.current) {
      rider.current.position.set(Math.cos(t) * r, 0, Math.sin(t) * r);
      rider.current.rotation.y = -t;
    }
  });
  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[r, 0.008, 8, 100]} />
        <meshBasicMaterial color="#8eb3ff" transparent opacity={0.6} />
      </mesh>
      <mesh ref={rider}>
        <boxGeometry args={[0.14, 0.09, 0.09]} />
        <meshStandardMaterial color="#1a3fe6" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

/** Insights — a calm dot-grid ocean wave. */
function WavesScene() {
  const ref = useRef<THREE.Points>(null);
  const { positions, base } = useMemo(() => {
    const cols = 44;
    const rows = 26;
    const pos = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        pos[i++] = (x / (cols - 1) - 0.5) * 5.4;
        pos[i++] = 0;
        pos[i++] = (z / (rows - 1) - 0.5) * 3.2;
      }
    }
    return { positions: pos, base: pos.slice() };
  }, []);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const arr = (ref.current.geometry.attributes.position as THREE.BufferAttribute)
      .array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      const x = base[i];
      const z = base[i + 2];
      arr[i + 1] =
        Math.sin(x * 1.4 + t * 1.1) * 0.16 + Math.cos(z * 2 + t * 0.8) * 0.12;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  return (
    <PointerRig strength={0.25}>
      <points ref={ref} rotation={[0.55, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#2f5fff"
          size={0.045}
          sizeAttenuation
          transparent
          opacity={0.75}
        />
      </points>
    </PointerRig>
  );
}

/** Gallery — floating glass photo frames drifting in parallax. */
function FramesScene() {
  const frames: {
    pos: [number, number, number];
    rot: [number, number, number];
    w: number;
    h: number;
  }[] = [
    { pos: [-1.15, 0.55, 0], rot: [0.05, 0.45, -0.04], w: 1.15, h: 0.8 },
    { pos: [0.85, 0.8, -0.4], rot: [-0.06, -0.35, 0.05], w: 0.9, h: 1.2 },
    { pos: [0.15, -0.55, 0.25], rot: [0.08, 0.15, 0.03], w: 1.3, h: 0.85 },
    { pos: [-0.95, -1.0, -0.3], rot: [0, -0.5, -0.06], w: 0.85, h: 0.6 },
    { pos: [1.35, -0.35, 0.1], rot: [0.04, 0.55, 0], w: 0.7, h: 0.95 },
  ];
  return (
    <PointerRig strength={0.45}>
      {frames.map((f, i) => (
        <Float key={i} speed={1.6 + i * 0.2} rotationIntensity={0.35} floatIntensity={0.8}>
          <group position={f.pos} rotation={f.rot}>
            <mesh>
              <planeGeometry args={[f.w, f.h]} />
              <meshStandardMaterial
                color="#dbe7ff"
                transparent
                opacity={0.5}
                metalness={0.4}
                roughness={0.2}
                side={THREE.DoubleSide}
              />
            </mesh>
            <lineSegments>
              <edgesGeometry args={[new THREE.PlaneGeometry(f.w, f.h)]} />
              <lineBasicMaterial color="#2f5fff" transparent opacity={0.8} />
            </lineSegments>
          </group>
        </Float>
      ))}
    </PointerRig>
  );
}

/** Detail pages — braided bezier streams with travelling freight dots. */
function FlowScene() {
  const curves = useMemo(() => {
    const out: THREE.Vector3[][] = [];
    for (let i = 0; i < 6; i++) {
      const y = (i - 2.5) * 0.42;
      const a = new THREE.Vector3(-2.6, y, 0);
      const b = new THREE.Vector3(2.6, -y * 0.6, 0);
      const mid = new THREE.Vector3(
        (Math.random() - 0.5) * 1.4,
        y * 1.8 + (Math.random() - 0.5),
        0.4
      );
      out.push(new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(60));
    }
    return out;
  }, []);
  return (
    <PointerRig strength={0.3}>
      {curves.map((pts, i) => (
        <group key={i}>
          <Line points={pts} color="#5988ff" lineWidth={1.1} transparent opacity={0.45} />
          <FlowDot points={pts} speed={0.1 + Math.random() * 0.18} />
        </group>
      ))}
    </PointerRig>
  );
}

function FlowDot({ points, speed }: { points: THREE.Vector3[]; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const t = useRef(Math.random());
  useFrame((_, d) => {
    t.current = (t.current + d * speed) % 1;
    const p = points[Math.floor(t.current * (points.length - 1))];
    if (ref.current && p) ref.current.position.copy(p);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 10, 10]} />
      <meshBasicMaterial color="#1a3fe6" />
    </mesh>
  );
}

/* ---------------------------------------------------------------- shell */

const SCENES: Record<SceneVariant, React.ComponentType> = {
  containers: ContainersScene,
  orbits: OrbitsScene,
  waves: WavesScene,
  frames: FramesScene,
  flow: FlowScene,
};

/**
 * Lightweight per-page 3D vignette. Each top-level page gets its own variant
 * so every tab carries a signature scene like the homepage globe.
 */
export default function PageScene({ variant }: { variant: SceneVariant }) {
  const Scene = SCENES[variant];
  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 5, 5]} intensity={1} />
      <pointLight position={[-4, -2, 3]} intensity={0.7} color="#2f5fff" />
      <Scene />
    </Canvas>
  );
}
