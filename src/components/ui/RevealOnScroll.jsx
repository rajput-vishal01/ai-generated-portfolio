import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealOnScroll = ({
  children,
  direction = "up", // 'up', 'down', 'left', 'right'
  delay = 0,
  duration = 1,
  distance = 50,
  className = "",
  threshold = 0.2, // When to start the animation (0-1)
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Initial state based on direction
    const initialProps = {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
    };

    // Animation properties
    const animateProps = {
      opacity: 1,
      y: 0,
      x: 0,
      duration: duration,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        end: "top center",
        toggleActions: "play none none reset",
        markers: false,
      },
    };

    // Set initial state
    gsap.set(element, initialProps);

    // Create animation
    const animation = gsap.to(element, animateProps);

    return () => {
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction, delay, duration, distance, threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
