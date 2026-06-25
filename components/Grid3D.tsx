"use client";

/**
 * CSS-only animated 3D perspective grid floor — reads as a moving
 * logistics/tech ground plane without the cost of another WebGL canvas.
 */
export default function Grid3D({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`grid3d pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="grid3d__plane" />
    </div>
  );
}
