import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VideoPreviewParticles = ({ onComplete, mousePosition }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const particles = new Array(100).fill(null).map(() => {
      const particle = document.createElement("div");
      particle.className =
        "absolute w-1 h-1 bg-accent-light dark:bg-accent-dark rounded-full";
      containerRef.current.appendChild(particle);
      return particle;
    });

    const tl = gsap.timeline({
      onComplete: () => {
        particles.forEach((p) => p.remove());
        onComplete?.();
      },
    });

    // Random starting positions from bottom
    gsap.set(particles, {
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 100,
      scale: Math.random() * 2 + 1,
      opacity: 0,
    });

    // Animate particles to converge
    tl.to(particles, {
      duration: 1,
      y: mousePosition.y,
      opacity: 1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      ease: "power2.out",
    });

    // Converge to center
    tl.to(particles, {
      duration: 0.5,
      x: mousePosition.x,
      scale: 0.5,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
      ease: "power2.in",
    });

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [onComplete, mousePosition]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
};

export default VideoPreviewParticles;
