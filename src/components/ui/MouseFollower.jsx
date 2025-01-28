import { useEffect, useRef } from "react";

const MouseFollower = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gridRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate position relative to center
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;

      // Update grid perspective
      gridRef.current.style.transform = `
        perspective(1000px)
        rotateX(${y * 5}deg)
        rotateY(${x * 5}deg)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={gridRef}
      className="absolute right-0 top-20 w-[400px] h-[400px] pointer-events-none transition-transform duration-300 ease-out opacity-50 dark:opacity-30">
      <div className="grid grid-cols-8 grid-rows-8 gap-2 w-full h-full">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className="bg-accent/10 dark:bg-accent/20 rounded-sm transform transition-all duration-300"
            style={{
              animationDelay: `${i * 0.05}s`,
              transform: `translateZ(${Math.random() * 20}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MouseFollower;
