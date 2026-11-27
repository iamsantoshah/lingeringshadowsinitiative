'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check for hover target attributes
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('[data-cursor]');
      if (interactiveEl) {
        const text = interactiveEl.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isClickable = target?.closest('a, button, [role="button"], input, textarea');
        setIsHovered(!!isClickable);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Damped trailing physics loop
  useEffect(() => {
    let animationFrameId: number;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };
    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor fixed inset-0 pointer-events-none z-[10000]">
      {/* Central pinpoint */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-terracotta-600 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Trailing Aura Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border flex items-center justify-center transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? cursorText
              ? 'w-24 h-24 bg-terracotta-600/90 text-parchment-50 border-terracotta-500 shadow-glow-terracotta backdrop-blur-sm'
              : 'w-14 h-14 bg-terracotta-600/20 border-terracotta-600 scale-110'
            : isClicking
            ? 'w-6 h-6 border-terracotta-600 bg-terracotta-600/30'
            : 'w-9 h-9 border-ink-900/30 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-center px-1">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
