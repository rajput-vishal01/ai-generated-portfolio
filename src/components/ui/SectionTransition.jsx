import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTransition = ({ position = "top" }) => {
  const transitionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate particles on scroll
      gsap.to(".transition-particle", {
        y: "random(-50, 50)",
        x: "random(-50, 50)",
        rotation: "random(-90, 90)",
        scrollTrigger: {
          trigger: transitionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, transitionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={transitionRef}
      className={`absolute ${
        position === "top" ? "-top-40" : "-bottom-40"
      } left-0 w-full h-80 overflow-hidden pointer-events-none`}>
      {/* Particles matching the 3D effect */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="transition-particle absolute rounded-full bg-accent-light/5 dark:bg-accent-dark/5 blur-xl"
          style={{
            width: Math.random() * 100 + 50 + "px",
            height: Math.random() * 100 + 50 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 ${
          position === "top"
            ? "bg-gradient-to-b from-primary-light dark:from-primary-dark"
            : "bg-gradient-to-t from-primary-light dark:from-primary-dark"
        } opacity-80`}
      />
    </div>
  );
};

export default SectionTransition;
