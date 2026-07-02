"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  Line,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const RADIUS = 1.42;

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

/**
 * Pointer-reactive rig: eases the whole scene toward the cursor so the globe
 * feels alive ("fidgety") even before the user grabs and spins it.
 */
function Rig({ children, reduced = false }: { children: React.ReactNode; reduced?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((state, d) => {
    if (!group.current || reduced) return;
    const t = state.clock.elapsedTime;
    // idle micro-wobble + spring toward the pointer
    const targetX = pointer.y * -0.22 + Math.sin(t * 0.6) * 0.03;
    const targetY = pointer.x * 0.35 + Math.cos(t * 0.4) * 0.04;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetX,
      3.2,
      d
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetY,
      3.2,
      d
    );
    // gentle breathing scale
    const s = 1 + Math.sin(t * 0.8) * 0.008;
    group.current.scale.setScalar(s);
  });
  return <group ref={group}>{children}</group>;
}

function NodeGlobe({ pointCount = 1500, reduced = false }: { pointCount?: number; reduced?: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (group.current && !reduced) group.current.rotation.y += d * 0.12;
  });

  const points = useMemo(() => {
    const arr = fibonacciSphere(pointCount, RADIUS);
    return new THREE.BufferGeometry().setFromPoints(arr);
  }, [pointCount]);

  // brighter hub nodes
  const hubs = useMemo(() => fibonacciSphere(26, RADIUS * 1.004), []);

  const arcs = useMemo(() => {
    const surface = () => {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      return new THREE.Vector3(
        RADIUS * Math.sin(phi) * Math.cos(theta),
        RADIUS * Math.cos(phi),
        RADIUS * Math.sin(phi) * Math.sin(theta)
      );
    };
    const lines: THREE.Vector3[][] = [];
    for (let i = 0; i < 9; i++) {
      const a = surface();
      const b = surface();
      const mid = a
        .clone()
        .add(b)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(RADIUS * (1.3 + Math.random() * 0.22));
      lines.push(new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(50));
    }
    return lines;
  }, []);

  return (
    <group ref={group} rotation={[0.35, 0, 0.14]}>
      {/* glass core */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.96, 64, 64]} />
        <meshStandardMaterial
          color="#d7f0e8"
          transparent
          opacity={0.4}
          roughness={0.2}
          metalness={0.25}
        />
      </mesh>

      {/* faint lat/long cage for structure */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.985, 24, 16]} />
        <meshBasicMaterial
          color="#8fd5c2"
          wireframe
          transparent
          opacity={0.14}
        />
      </mesh>

      {/* dotted surface */}
      <points geometry={points}>
        <pointsMaterial
          color="#2f9e85"
          size={0.042}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>

      {/* atmosphere halo */}
      <mesh>
        <sphereGeometry args={[RADIUS * 1.15, 64, 64]} />
        <meshBasicMaterial
          color="#2f9e85"
          transparent
          opacity={0.22}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[RADIUS * 1.045, 64, 64]} />
        <meshBasicMaterial
          color="#58b9a2"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* hub dots with pulse rings */}
      {hubs.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i % 4 === 0 ? 0.034 : 0.026, 10, 10]} />
          <meshBasicMaterial color={i % 4 === 0 ? "#e5a232" : "#1f826d"} />
        </mesh>
      ))}

      {/* trade-lane arcs */}
      {arcs.map((pts, i) => (
        <group key={i}>
          <Line
            points={pts}
            color="#1f826d"
            lineWidth={1.3}
            transparent
            opacity={0.7}
          />
          {!reduced && (
            <TravellingDot points={pts} speed={0.16 + Math.random() * 0.14} />
          )}
        </group>
      ))}
    </group>
  );
}

/** Tilted orbit ring with a tiny cargo container circling the globe. */
function OrbitRing({ reduced = false }: { reduced?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const boxRef = useRef<THREE.Group>(null);
  const r = RADIUS * 1.45;
  useFrame((state, d) => {
    if (reduced) return;
    if (ref.current) ref.current.rotation.z += d * 0.05;
    if (boxRef.current) {
      const t = state.clock.elapsedTime * 0.45;
      boxRef.current.position.set(Math.cos(t) * r, 0, Math.sin(t) * r);
      boxRef.current.rotation.y = -t;
    }
  });
  return (
    <group rotation={[Math.PI / 2.35, 0.15, 0.4]} ref={ref}>
      <mesh>
        <torusGeometry args={[r, 0.006, 8, 128]} />
        <meshBasicMaterial color="#8fd5c2" transparent opacity={0.55} />
      </mesh>
      <group ref={boxRef}>
        <mesh>
          <boxGeometry args={[0.22, 0.13, 0.13]} />
          <meshStandardMaterial color="#1f826d" metalness={0.8} roughness={0.2} />
        </mesh>
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(0.22, 0.13, 0.13)]} />
          <lineBasicMaterial color="#bfe7db" transparent opacity={0.8} />
        </lineSegments>
      </group>
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
      <sphereGeometry args={[0.032, 10, 10]} />
      <meshBasicMaterial color="#e5a232" />
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
    <Float speed={2.2} rotationIntensity={0.9} floatIntensity={1.3}>
      <group position={position} scale={scale} rotation={rot}>
        <mesh>
          <boxGeometry args={[0.55, 0.36, 0.36]} />
          <meshStandardMaterial color="#1f826d" metalness={0.85} roughness={0.18} />
        </mesh>
        {[-0.2, -0.065, 0.065, 0.2].map((x) => (
          <mesh key={x} position={[x, 0, 0.185]}>
            <boxGeometry args={[0.036, 0.32, 0.018]} />
            <meshStandardMaterial color="#0d2b25" metalness={0.6} roughness={0.4} />
          </mesh>
        ))}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(0.55, 0.36, 0.36)]} />
          <lineBasicMaterial color="#8fd5c2" transparent opacity={0.5} />
        </lineSegments>
      </group>
    </Float>
  );
}

export default function Globe3D({ active = true }: { active?: boolean }) {
  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const isMobile = useMemo(
    () => typeof window !== "undefined" && window.innerWidth < 768,
    []
  );
  const pointCount = isMobile ? 800 : 1500;

  return (
    <Canvas
      // Pause the render loop when the hero is scrolled out of view or reduced motion is active
      frameloop={active && !reduced ? "always" : "demand"}
      camera={{ position: [0, 0.15, 5.1], fov: 40 }}
      dpr={isMobile ? [1, 1.4] : [1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={0.9} color="#2f9e85" />

      {/* In-scene reflections (no network HDR needed) */}
      <Environment resolution={128}>
        <Lightformer intensity={2} position={[3, 3, 3]} scale={6} color="#9ad8c6" />
        <Lightformer intensity={1.2} position={[-4, 1, -2]} scale={5} color="#1f826d" />
      </Environment>

      {!reduced && (
        <Sparkles count={isMobile ? 12 : 26} scale={6.5} size={1.8} speed={0.28} opacity={0.4} color="#2f9e85" />
      )}

      <Rig reduced={reduced}>
        <NodeGlobe pointCount={pointCount} reduced={reduced} />
        {!reduced && <OrbitRing />}
        {!isMobile && (
          <>
            <Container position={[2.3, 1.15, 0.1]} scale={0.85} rot={[0.4, 0.6, 0.1]} />
            <Container position={[-2.35, -1.0, 0.35]} scale={0.62} rot={[0.2, -0.5, -0.1]} />
          </>
        )}
      </Rig>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.07}
        rotateSpeed={0.9}
        autoRotate={!reduced}
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 2.7}
        maxPolarAngle={Math.PI / 1.65}
      />
    </Canvas>
  );
}
