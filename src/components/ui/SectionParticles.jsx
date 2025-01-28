import { useRef, useEffect } from "react";
import * as THREE from "three";

const SectionParticles = ({ color = "#8685ef", density = 50, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesCount = density * 100;
    const positions = new Float32Array(particlesCount * 3);
    const randomMotions = new Float32Array(particlesCount * 3);
    const originalPositions = new Float32Array(particlesCount * 3);

    // Initialize particles with more spread
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      // Position - wider spread
      positions[i3] = (Math.random() - 0.5) * 5;
      positions[i3 + 1] = (Math.random() - 0.5) * 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 5;

      // Store original positions
      originalPositions[i3] = positions[i3];
      originalPositions[i3 + 1] = positions[i3 + 1];
      originalPositions[i3 + 2] = positions[i3 + 2];

      // Faster random motion
      randomMotions[i3] = (Math.random() - 0.5) * 0.02 * speed;
      randomMotions[i3 + 1] = (Math.random() - 0.5) * 0.02 * speed;
      randomMotions[i3 + 2] = (Math.random() - 0.5) * 0.02 * speed;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Brighter material with larger particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: color,
      transparent: true,
      opacity: 0.8,
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
      const rect = containerRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((event.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particlesGeometry.attributes.position.array;

      for (let i = 0; i < particlesCount * 3; i += 3) {
        // Mix between mouse influence and random motion
        const distanceToMouse =
          Math.abs(positions[i] - mousePosition.current.x * 3) +
          Math.abs(positions[i + 1] - mousePosition.current.y * 3);

        const mouseInfluence = Math.max(0, 1 - distanceToMouse / 3);

        positions[i] +=
          randomMotions[i] + mousePosition.current.x * mouseInfluence * 0.01;
        positions[i + 1] +=
          randomMotions[i + 1] +
          mousePosition.current.y * mouseInfluence * 0.01;
        positions[i + 2] += randomMotions[i + 2];

        // Boundary check with smoother reversal
        if (Math.abs(positions[i]) > 2.5) {
          positions[i] = Math.sign(positions[i]) * 2.5;
          randomMotions[i] *= -0.8;
        }
        if (Math.abs(positions[i + 1]) > 2.5) {
          positions[i + 1] = Math.sign(positions[i + 1]) * 2.5;
          randomMotions[i + 1] *= -0.8;
        }
        if (Math.abs(positions[i + 2]) > 2.5) {
          positions[i + 2] = Math.sign(positions[i + 2]) * 2.5;
          randomMotions[i + 2] *= -0.8;
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;

      // Gentle rotation
      particlesMesh.rotation.y += 0.0003 * speed;
      particlesMesh.rotation.x += 0.0002 * speed;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [color, density, speed]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      style={{ opacity: 0.6 }}
    />
  );
};

export default SectionParticles;
