"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  Line,
  OrbitControls,
  Sparkles,
  Sphere,
  Stars,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Globe() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  const rings = useMemo(() => {
    const r = 1.6;
    const data: THREE.Vector3[][] = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: THREE.Vector3[] = [];
      const phi = (lat * Math.PI) / 180;
      for (let lon = 0; lon <= 360; lon += 6) {
        const theta = (lon * Math.PI) / 180;
        points.push(
          new THREE.Vector3(
            r * Math.cos(phi) * Math.cos(theta),
            r * Math.sin(phi),
            r * Math.cos(phi) * Math.sin(theta)
          )
        );
      }
      data.push(points);
    }
    for (let lon = 0; lon < 180; lon += 30) {
      const points: THREE.Vector3[] = [];
      const theta = (lon * Math.PI) / 180;
      for (let lat = -90; lat <= 90; lat += 6) {
        const phi = (lat * Math.PI) / 180;
        points.push(
          new THREE.Vector3(
            r * Math.cos(phi) * Math.cos(theta),
            r * Math.sin(phi),
            r * Math.cos(phi) * Math.sin(theta)
          )
        );
      }
      data.push(points);
    }
    return data;
  }, []);

  const dots = useMemo(() => {
    const r = 1.62;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 70; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta)
        )
      );
    }
    return pts;
  }, []);

  const arcs = useMemo(() => {
    const r = 1.6;
    const surface = () => {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      return new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    };
    const lines: THREE.Vector3[][] = [];
    for (let i = 0; i < 7; i++) {
      const start = surface();
      const end = surface();
      const mid = start
        .clone()
        .add(end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(r * 1.45);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      lines.push(curve.getPoints(48));
    }
    return lines;
  }, []);

  return (
    <group ref={group} rotation={[0.32, 0, 0.12]}>
      {/* Core sphere */}
      <Sphere args={[1.54, 64, 64]}>
        <meshStandardMaterial
          color="#eaf1ff"
          transparent
          opacity={0.22}
          roughness={0.15}
          metalness={0.2}
        />
      </Sphere>

      {/* Atmosphere halo (additive back-facing shell) */}
      <Sphere args={[1.78, 64, 64]}>
        <meshBasicMaterial
          color="#5988ff"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </Sphere>

      {rings.map((points, i) => (
        <Line
          key={`ring-${i}`}
          points={points}
          color="#2f5fff"
          lineWidth={0.8}
          transparent
          opacity={0.35}
        />
      ))}

      {arcs.map((points, i) => (
        <Line
          key={`arc-${i}`}
          points={points}
          color="#1530b4"
          lineWidth={1.5}
          transparent
          opacity={0.75}
        />
      ))}

      {dots.map((p, i) => (
        <mesh key={`dot-${i}`} position={p}>
          <sphereGeometry args={[0.022, 8, 8]} />
          <meshBasicMaterial color="#1a3fe6" />
        </mesh>
      ))}
    </group>
  );
}

function FloatingCrate({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh position={position} scale={scale} rotation={[0.4, 0.6, 0.1]}>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
        <meshStandardMaterial color="#1a3fe6" metalness={0.45} roughness={0.22} />
        {/* edge highlight */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(0.42, 0.42, 0.42)]} />
          <lineBasicMaterial color="#8eb3ff" transparent opacity={0.6} />
        </lineSegments>
      </mesh>
    </Float>
  );
}

function OrbitingNode({
  radius,
  speed,
  offset,
  color,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const trail = useRef<THREE.Line>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    if (ref.current) {
      ref.current.position.set(
        Math.cos(t) * radius,
        Math.sin(t * 0.8) * 0.4,
        Math.sin(t) * radius
      );
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.08, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Globe3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffffff" />
      <directionalLight position={[-5, -2, -5]} intensity={0.7} color="#5988ff" />
      <pointLight position={[0, 0, 3]} intensity={1.1} color="#2f5fff" />

      {/* Depth: faint starfield + drifting sparkles */}
      <Stars
        radius={20}
        depth={30}
        count={900}
        factor={2}
        saturation={0}
        fade
        speed={0.6}
      />
      <Sparkles
        count={40}
        scale={6}
        size={2.4}
        speed={0.3}
        opacity={0.5}
        color="#2f5fff"
      />

      <Globe />

      <OrbitingNode radius={2.3} speed={0.5} offset={0} color="#2f5fff" />
      <OrbitingNode radius={2.6} speed={0.35} offset={2} color="#1530b4" />
      <OrbitingNode radius={2.1} speed={0.6} offset={4} color="#5988ff" />

      <FloatingCrate position={[2.4, 1.2, 0]} scale={0.9} />
      <FloatingCrate position={[-2.5, -1, 0.5]} scale={0.7} />
      <FloatingCrate position={[2.2, -1.4, -0.5]} scale={0.6} />

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[0.18, 0]} position={[-2.2, 1.3, 0]}>
          <meshStandardMaterial color="#162a8f" metalness={0.6} roughness={0.2} />
        </Icosahedron>
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}
