"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  Line,
  OrbitControls,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/** Even point distribution on a sphere (Fibonacci) — the modern "node globe" look. */
function fibonacciSphere(samples: number, radius: number) {
  const pts: THREE.Vector3[] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius
      )
    );
  }
  return pts;
}

function NodeGlobe() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (group.current) group.current.rotation.y += d * 0.1;
  });

  const radius = 1.6;

  const points = useMemo(() => {
    const arr = fibonacciSphere(1600, radius);
    const geo = new THREE.BufferGeometry().setFromPoints(arr);
    return geo;
  }, []);

  // brighter hub nodes
  const hubs = useMemo(() => fibonacciSphere(28, radius * 1.002), []);

  const arcs = useMemo(() => {
    const surface = () => {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };
    const lines: THREE.Vector3[][] = [];
    for (let i = 0; i < 8; i++) {
      const a = surface();
      const b = surface();
      const mid = a
        .clone()
        .add(b)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(radius * (1.35 + Math.random() * 0.25));
      lines.push(new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(50));
    }
    return lines;
  }, []);

  return (
    <group ref={group} rotation={[0.35, 0, 0.12]}>
      {/* glass core */}
      <mesh>
        <sphereGeometry args={[radius * 0.96, 64, 64]} />
        <meshStandardMaterial
          color="#cdddff"
          transparent
          opacity={0.35}
          roughness={0.25}
          metalness={0.3}
        />
      </mesh>

      {/* dotted surface */}
      <points geometry={points}>
        <pointsMaterial
          color="#2f5fff"
          size={0.045}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>

      {/* atmosphere halo */}
      <mesh>
        <sphereGeometry args={[radius * 1.16, 64, 64]} />
        <meshBasicMaterial
          color="#3a6bff"
          transparent
          opacity={0.28}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {/* tighter inner glow */}
      <mesh>
        <sphereGeometry args={[radius * 1.04, 64, 64]} />
        <meshBasicMaterial
          color="#5988ff"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* hub dots */}
      {hubs.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.028, 10, 10]} />
          <meshBasicMaterial color="#1a3fe6" />
        </mesh>
      ))}

      {/* arcs */}
      {arcs.map((pts, i) => (
        <group key={i}>
          <Line points={pts} color="#1a3fe6" lineWidth={1.4} transparent opacity={0.75} />
          <TravellingDot points={pts} speed={0.18 + Math.random() * 0.12} />
        </group>
      ))}
    </group>
  );
}

function TravellingDot({
  points,
  speed,
}: {
  points: THREE.Vector3[];
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const t = useRef(Math.random());
  useFrame((_, d) => {
    t.current = (t.current + d * speed) % 1;
    const idx = Math.floor(t.current * (points.length - 1));
    const p = points[idx];
    if (ref.current && p) ref.current.position.copy(p);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.035, 10, 10]} />
      <meshBasicMaterial color="#1530b4" />
    </mesh>
  );
}

function Container({
  position,
  scale = 1,
  rot,
}: {
  position: [number, number, number];
  scale?: number;
  rot: [number, number, number];
}) {
  return (
    <Float speed={1.8} rotationIntensity={0.7} floatIntensity={1.1}>
      <group position={position} scale={scale} rotation={rot}>
        <mesh>
          <boxGeometry args={[0.6, 0.4, 0.4]} />
          <meshStandardMaterial color="#1a3fe6" metalness={0.85} roughness={0.18} />
        </mesh>
        {/* corrugation ridges */}
        {[-0.22, -0.07, 0.07, 0.22].map((x) => (
          <mesh key={x} position={[x, 0, 0.205]}>
            <boxGeometry args={[0.04, 0.36, 0.02]} />
            <meshStandardMaterial color="#0e1844" metalness={0.6} roughness={0.4} />
          </mesh>
        ))}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(0.6, 0.4, 0.4)]} />
          <lineBasicMaterial color="#8eb3ff" transparent opacity={0.5} />
        </lineSegments>
      </group>
    </Float>
  );
}

export default function Globe3D({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      // Pause the render loop when the hero is scrolled out of view so the
      // GPU is free for smooth page scrolling.
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 4.7], fov: 44 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={1} color="#2f5fff" />

      {/* In-scene reflections (no network HDR needed) */}
      <Environment resolution={128}>
        <Lightformer
          intensity={2}
          position={[3, 3, 3]}
          scale={6}
          color="#9fc0ff"
        />
        <Lightformer
          intensity={1.2}
          position={[-4, 1, -2]}
          scale={5}
          color="#1a3fe6"
        />
      </Environment>

      <Stars radius={24} depth={32} count={700} factor={2} fade speed={0.5} />
      <Sparkles count={40} scale={7} size={2.2} speed={0.3} opacity={0.5} color="#2f5fff" />

      <NodeGlobe />

      <Container position={[2.5, 1.25, 0.2]} scale={0.95} rot={[0.4, 0.6, 0.1]} />
      <Container position={[-2.6, -1.05, 0.4]} scale={0.7} rot={[0.2, -0.5, -0.1]} />
      <Container position={[2.25, -1.5, -0.4]} scale={0.6} rot={[-0.3, 0.4, 0.2]} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.45}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}
