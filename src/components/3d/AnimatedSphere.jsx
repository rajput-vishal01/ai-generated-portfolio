import { useRef, useEffect } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      powerPreference: "high-performance",
      antialias: false,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesCount = 10000;
    const positions = new Float32Array(particlesCount * 3);
    const randomMotions = new Float32Array(particlesCount * 3);
    const particleTypes = new Float32Array(particlesCount);
    const originalPositions = new Float32Array(particlesCount * 3);
    // Store original positions

    // Initialize particles
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      // Position - spread across entire space
      positions[i3] = (Math.random() - 0.5) * 5;
      positions[i3 + 1] = (Math.random() - 0.5) * 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 5;

      // Store original positions
      originalPositions[i3] = positions[i3];
      originalPositions[i3 + 1] = positions[i3 + 1];
      originalPositions[i3 + 2] = positions[i3 + 2];

      // Random motion vector
      randomMotions[i3] = (Math.random() - 0.5) * 0.02;
      randomMotions[i3 + 1] = (Math.random() - 0.5) * 0.02;
      randomMotions[i3 + 2] = (Math.random() - 0.5) * 0.02;

      // Randomly assign particle type (50% chance for each type)
      particleTypes[i] = Math.random() > 0.5 ? 1 : 0;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Create brighter material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: "#1e90ff", // Vivid electric blue
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);
    camera.position.z = 3;

    // Mouse movement handler
    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Optimized animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Update only visible particles
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        if (particleTypes[i] === 1) {
          // Mouse following behavior with influence from original position
          const targetX = mousePosition.current.x * 2;
          const targetY = mousePosition.current.y * 2;

          // Mix between mouse position and original position
          const mixFactor = 0.3; // Adjust this to control how much particles spread
          const offsetX = (Math.random() - 0.5) * 0.1; // Small random offset
          const offsetY = (Math.random() - 0.5) * 0.1;

          positions[i3] +=
            (targetX * mixFactor +
              originalPositions[i3] * (1 - mixFactor) +
              offsetX -
              positions[i3]) *
            0.02;
          positions[i3 + 1] +=
            (targetY * mixFactor +
              originalPositions[i3 + 1] * (1 - mixFactor) +
              offsetY -
              positions[i3 + 1]) *
            0.02;
          positions[i3 + 2] +=
            (originalPositions[i3 + 2] - positions[i3 + 2]) * 0.01; // Gentle z-axis movement
        } else {
          // Random motion behavior
          positions[i3] += randomMotions[i3];
          positions[i3 + 1] += randomMotions[i3 + 1];
          positions[i3 + 2] += randomMotions[i3 + 2];

          // Boundary check
          if (Math.abs(positions[i3]) > 2.5) randomMotions[i3] *= -1;
          if (Math.abs(positions[i3 + 1]) > 2.5) randomMotions[i3 + 1] *= -1;
          if (Math.abs(positions[i3 + 2]) > 2.5) randomMotions[i3 + 2] *= -1;
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;

      // Gentle rotation
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    const cleanup = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };

    return cleanup;
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{
        opacity: 0.6,
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default AnimatedSphere;
