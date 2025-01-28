import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-0 top-0 h-full w-1 z-50">
      <div
        className="h-full bg-accent-light/20 dark:bg-accent-dark/20"
        style={{
          transform: `scaleY(${scrollProgress / 100})`,
          transformOrigin: "top",
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
