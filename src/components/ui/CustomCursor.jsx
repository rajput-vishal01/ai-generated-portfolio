// Custom cursor component with trailing shadow effect
// Uses requestAnimationFrame for smooth animation
// Handles touch device detection and cleanup

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  // Refs for cursor elements
  const cursorRef = useRef(null);
  const cursorShadowRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const shadowPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorShadow = cursorShadowRef.current;

    if (!cursor || !cursorShadow) return;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      mousePosition.current = { x: clientX, y: clientY };
    };

    const animateCursor = () => {
      // Main cursor
      const mainX = mousePosition.current.x - 10;
      const mainY = mousePosition.current.y - 10;
      cursor.style.transform = `translate3d(${mainX}px, ${mainY}px, 0)`;

      // Shadow with much more delay
      const shadowX = shadowPosition.current.x;
      const shadowY = shadowPosition.current.y;
      const targetX = mousePosition.current.x - 20;
      const targetY = mousePosition.current.y - 20;

      // Reduced to 0.025 for 3x more delay
      const lerpFactor = 0.025;

      shadowPosition.current = {
        x: shadowX + (targetX - shadowX) * lerpFactor,
        y: shadowY + (targetY - shadowY) * lerpFactor,
      };

      cursorShadow.style.transform = `translate3d(${shadowPosition.current.x}px, ${shadowPosition.current.y}px, 0)`;

      requestAnimationFrame(animateCursor);
    };

    const addHoverClass = () => {
      cursor.classList.add("hovering");
      cursorShadow.classList.add("hovering");
    };

    const removeHoverClass = () => {
      cursor.classList.remove("hovering");
      cursorShadow.classList.remove("hovering");
    };

    // Initialize positions
    mousePosition.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    shadowPosition.current = { ...mousePosition.current };

    // Add event listeners
    document.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(animateCursor);

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverClass);
      el.addEventListener("mouseleave", removeHoverClass);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverClass);
        el.removeEventListener("mouseleave", removeHoverClass);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorShadowRef} className="cursor-shadow" />
      <div ref={cursorRef} className="custom-cursor" />
    </>
  );
};

export default CustomCursor;
