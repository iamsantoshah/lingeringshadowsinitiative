'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveCanvasNebula() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let scrollY = window.scrollY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Chiaroscuro Shadow Tendrils and Luminescent Particles
    interface Luminary {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
      alpha: number;
      phase: number;
      frequency: number;
      layer: number;
    }

    const luminaries: Luminary[] = [];
    const count = 38;
    const hues = [
      'rgba(185, 40, 21, ',   // Terracotta
      'rgba(191, 149, 51, ',  // Ochre / Gold
      'rgba(61, 97, 66, ',    // Sage
      'rgba(20, 17, 19, ',    // Deep Ink
    ];

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      luminaries.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 2.8 + 0.8,
        baseColor: hues[i % hues.length],
        alpha: Math.random() * 0.45 + 0.1,
        phase: Math.random() * Math.PI * 2,
        frequency: Math.random() * 0.015 + 0.005,
        layer: Math.floor(Math.random() * 3) + 1,
      });
    }

    let animationId: number;
    let time = 0;

    const render = () => {
      time += 0.012;
      mouseX += (targetX - mouseX) * 0.045;
      mouseY += (targetY - mouseY) * 0.045;

      ctx.clearRect(0, 0, width, height);

      // Chiaroscuro Atmospheric Radial Vignette (Lingering Shadow meets Light)
      const lightGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        20,
        mouseX,
        mouseY,
        width * 0.5
      );
      lightGrad.addColorStop(0, 'rgba(240, 171, 160, 0.07)');
      lightGrad.addColorStop(0.35, 'rgba(227, 203, 145, 0.035)');
      lightGrad.addColorStop(0.7, 'rgba(199, 218, 201, 0.02)');
      lightGrad.addColorStop(1, 'rgba(250, 246, 238, 0)');

      ctx.fillStyle = lightGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Luminaries
      for (let i = 0; i < luminaries.length; i++) {
        const p = luminaries[i];
        p.phase += p.frequency;
        
        // Gentle organic harmonic float with subtle parallax against scroll
        const parallaxOffset = (scrollY * 0.08) / p.layer;
        p.x += Math.sin(p.phase) * 0.6 + p.vx;
        p.y += Math.cos(p.phase * 0.8) * 0.5 + p.vy - parallaxOffset * 0.005;

        // Interactive magnetic deflection near cursor
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 160) {
          const repelForce = ((160 - dist) / 160) * 1.6;
          p.x -= (dx / dist) * repelForce;
          p.y -= (dy / dist) * repelForce;
        }

        // Screen boundary wrap
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Draw luminary node
        const currentAlpha = p.alpha * (0.8 + 0.2 * Math.sin(p.phase * 2));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.baseColor}${currentAlpha})`;
        ctx.fill();

        // Connect closely linked nodes with archival hairline filament lines
        for (let j = i + 1; j < luminaries.length; j++) {
          const p2 = luminaries[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 115) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - distNodes / 115) * 0.08;
            ctx.strokeStyle = `rgba(185, 40, 21, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
