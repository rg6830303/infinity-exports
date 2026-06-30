"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  Line,
  OrbitControls,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const R = 1.6;

/** Even point distribution on a sphere (Fibonacci) — the "node globe" look. */
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

function latLngToVec3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// India (Kolkata) as the central export origin.
const ORIGIN = { lat: 22.57, lng: 88.36 };

// Global destination regions — clean, not cluttered.
const DESTINATIONS = [
  { lat: 25.2, lng: 55.27 }, // Middle East (Dubai)
  { lat: 1.35, lng: 103.82 }, // Southeast Asia (Singapore)
  { lat: 51.92, lng: 4.48 }, // Europe (Rotterdam)
  { lat: 6.45, lng: 3.39 }, // Africa (Lagos)
  { lat: 40.71, lng: -74.0 }, // North America (New York)
  { lat: -23.55, lng: -46.63 }, // South America (São Paulo)
  { lat: -33.87, lng: 151.21 }, // Australia (Sydney)
];

function arcPoints(a: THREE.Vector3, b: THREE.Vector3) {
  const mid = a.clone().add(b).multiplyScalar(0.5);
  const dist = a.distanceTo(b);
  mid.normalize().multiplyScalar(R * (1 + dist / R / 3.4));
  return new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(64);
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
      <sphereGeometry args={[0.032, 12, 12]} />
      <meshBasicMaterial color="#1530b4" toneMapped={false} />
    </mesh>
  );
}

function PulseNode({
  position,
  phase,
  animate,
}: {
  position: THREE.Vector3;
  phase: number;
  animate: boolean;
}) {
  const ring = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ring.current || !animate) return;
    const m = (state.clock.elapsedTime * 0.6 + phase) % 1;
    const s = 1 + m * 2.4;
    ring.current.scale.setScalar(s);
    const mat = ring.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.5 * (1 - m);
  });
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.035, 14, 14]} />
        <meshBasicMaterial color="#2f5fff" toneMapped={false} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.05, 0.07, 24]} />
        <meshBasicMaterial
          color="#5988ff"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function NodeGlobe({
  reduced,
  pointCount,
}: {
  reduced: boolean;
  pointCount: number;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (group.current && !reduced) group.current.rotation.y += d * 0.06;
  });

  const points = useMemo(() => {
    const arr = fibonacciSphere(pointCount, R);
    return new THREE.BufferGeometry().setFromPoints(arr);
  }, [pointCount]);

  const origin = useMemo(() => latLngToVec3(ORIGIN.lat, ORIGIN.lng, R), []);
  const dests = useMemo(
    () => DESTINATIONS.map((d) => latLngToVec3(d.lat, d.lng, R)),
    []
  );
  const arcs = useMemo(() => dests.map((d) => arcPoints(origin, d)), [origin, dests]);

  return (
    <group ref={group} rotation={[0.32, -0.6, 0.08]}>
      {/* glass core */}
      <mesh>
        <sphereGeometry args={[R * 0.965, 64, 64]} />
        <meshStandardMaterial
          color="#d6e4ff"
          transparent
          opacity={0.32}
          roughness={0.2}
          metalness={0.35}
        />
      </mesh>

      {/* dotted surface */}
      <points geometry={points}>
        <pointsMaterial
          color="#3a6bff"
          size={0.04}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>

      {/* atmosphere halo */}
      <mesh>
        <sphereGeometry args={[R * 1.16, 64, 64]} />
        <meshBasicMaterial
          color="#3a6bff"
          transparent
          opacity={0.22}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[R * 1.04, 64, 64]} />
        <meshBasicMaterial
          color="#5988ff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* export route arcs from India */}
      {arcs.map((pts, i) => (
        <group key={i}>
          <Line
            points={pts}
            color="#1a3fe6"
            lineWidth={1.3}
            transparent
            opacity={0.7}
          />
          {!reduced && (
            <TravellingDot points={pts} speed={0.16 + (i % 3) * 0.05} />
          )}
        </group>
      ))}

      {/* destination nodes (pulsing) */}
      {dests.map((p, i) => (
        <PulseNode key={i} position={p} phase={i / dests.length} animate={!reduced} />
      ))}

      {/* origin node — India */}
      <group position={origin}>
        <mesh>
          <sphereGeometry args={[0.06, 18, 18]} />
          <meshBasicMaterial color="#0e1844" toneMapped={false} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.1, 18, 18]} />
          <meshBasicMaterial
            color="#2f5fff"
            transparent
            opacity={0.28}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

function Crate({
  position,
  scale = 1,
  rot,
}: {
  position: [number, number, number];
  scale?: number;
  rot: [number, number, number];
}) {
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      <group position={position} scale={scale} rotation={rot}>
        <mesh>
          <boxGeometry args={[0.6, 0.4, 0.4]} />
          <meshStandardMaterial color="#1a3fe6" metalness={0.8} roughness={0.22} />
        </mesh>
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
      frameloop={active && !reduced ? "always" : "demand"}
      camera={{ position: [0, 0, 4.7], fov: 44 }}
      dpr={isMobile ? [1, 1.4] : [1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 5, 5]} intensity={1.25} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={0.9} color="#2f5fff" />

      <Environment resolution={128}>
        <Lightformer intensity={2} position={[3, 3, 3]} scale={6} color="#bcd2ff" />
        <Lightformer intensity={1.1} position={[-4, 1, -2]} scale={5} color="#1a3fe6" />
      </Environment>

      <NodeGlobe reduced={reduced} pointCount={pointCount} />

      {!isMobile && (
        <>
          <Crate position={[2.5, 1.25, 0.2]} scale={0.85} rot={[0.4, 0.6, 0.1]} />
          <Crate position={[-2.6, -1.05, 0.4]} scale={0.62} rot={[0.2, -0.5, -0.1]} />
        </>
      )}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reduced}
        autoRotateSpeed={0.32}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}
