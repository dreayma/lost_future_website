import { useEffect, useRef } from "react";

export default function RainEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Raindrops array
    const raindrops: Array<{
      x: number;
      y: number;
      length: number;
      opacity: number;
      speed: number;
    }> = [];

    // Create raindrops - much fewer and more sparse
    const createRaindrops = () => {
      for (let i = 0; i < 30; i++) {
        raindrops.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 12 + 8,
          opacity: Math.random() * 0.15 + 0.05,
          speed: Math.random() * 2 + 1,
        });
      }
    };

    createRaindrops();

    // Animation loop
    const animate = () => {
      // Clear canvas with very subtle fade
      ctx.fillStyle = "rgba(15, 27, 46, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update raindrops
      ctx.strokeStyle = "rgba(197, 211, 224, 0.4)";
      ctx.lineWidth = 0.8;

      raindrops.forEach((drop) => {
        // Draw raindrop
        ctx.globalAlpha = drop.opacity;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();

        // Update position
        drop.y += drop.speed;

        // Reset if off screen
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}
