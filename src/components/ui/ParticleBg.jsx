import { useEffect, useRef } from 'react';

const ParticleBg = ({ density = 30 }) => {
  const svgRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const particleElements = [];

    // Create particles with optimized animation
    for (let i = 0; i < density; i++) {
      const particle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      particle.setAttribute("r", Math.random() * 2 + 1);
      particle.setAttribute("fill", "url(#particle-gradient)");
      particle.setAttribute("data-seed", i);
      particle.style.setProperty('--accent-color', '#60a5fa');
      svg.appendChild(particle);
      particleElements.push(particle);
    }

    particlesRef.current = particleElements;

    const animate = () => {
      particleElements.forEach((particle, i) => {
        const time = Date.now() / 3000;
        const seed = parseInt(particle.getAttribute("data-seed"));
        const x = Math.sin(time + seed) * 20;
        const y = Math.cos(time * 0.8 + seed) * 20;
        
        particle.style.transform = `translate(${x}px, ${y}px)`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      particleElements.forEach(p => p.remove());
    };
  }, [density]);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="particle-gradient">
          <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ParticleBg; 