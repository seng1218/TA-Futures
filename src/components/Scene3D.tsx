'use client';

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
}

export default function Scene3D({ children, className = '', perspective = 1000 }: Scene3DProps) {
  return (
    <div
      className={className}
      style={{ perspective: `${perspective}px`, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
