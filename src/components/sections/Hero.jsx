import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import AnimatedSphere from "../3d/AnimatedSphere";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating orbs that match the 3D particle system */}
    <div
      className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-light/5 dark:bg-accent-dark/5 
                    rounded-full blur-3xl animate-float-slow"
    />
    <div
      className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-light/10 dark:bg-accent-dark/10 
                    rounded-full blur-3xl animate-float-medium"
    />
    <div
      className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent-light/5 dark:bg-accent-dark/5 
                    rounded-full blur-2xl animate-float-fast"
    />

    {/* Grid pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
  </div>
);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const sphereRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger the main content animations
      const tl = gsap.timeline();

      tl.from(".hero-element", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Continuous floating animation for the scroll indicator
      gsap.to(textRef.current, {
        y: "20px",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Add parallax effect to 3D model with proper positioning
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sphereRef.current) return;

      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(sphereRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundElements />

      {/* 3D Model Container with proper positioning */}
      <div
        ref={sphereRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}>
        <AnimatedSphere />
      </div>

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary-light/90 via-primary-light/50 to-primary-light/90 
                    dark:from-primary-dark/90 dark:via-primary-dark/50 dark:to-primary-dark/90"
      />

      {/* Main Content */}
      <div className="container-wrapper relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 text-center">
            {/* Role Tag */}
            <div className="hero-element inline-block">
              <span
                className="px-8 py-3 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full 
                           text-accent-light dark:text-accent-dark font-mono text-base tracking-wider">
                Software Engineer
              </span>
            </div>

            {/* Main Heading */}
            <div className="hero-element space-y-4">
              <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                <span className="block transform hover:scale-105 transition-transform duration-300">
                  Building Complex
                </span>
                <span className="block text-accent-light dark:text-accent-dark mt-2 transform hover:scale-105 transition-transform duration-300">
                  Systems, Simply
                </span>
              </h1>
              <p className="font-mono text-lg md:text-xl text-gray-600 dark:text-gray-400">
                {"< Code && Architecture && Innovation / >"}
              </p>
            </div>

            {/* Description */}
            <p className="hero-element font-sans text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer with expertise in scalable applications and
              AI integration. Transforming complex problems into elegant
              solutions.
            </p>

            {/* CTA Buttons */}
            <div className="hero-element flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="group relative px-10 py-5 bg-accent-light dark:bg-accent-dark text-white rounded-lg 
                         overflow-hidden transform hover:scale-105 transition-all duration-300 font-mono text-lg">
                <span className="relative z-10">{"<View_Works />"}</span>
                <div
                  className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 
                              transition-transform duration-300 origin-left"
                />
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="group px-10 py-5 border-2 border-accent-light dark:border-accent-dark 
                         text-accent-light dark:text-accent-dark rounded-lg transform hover:scale-105
                         hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-300 font-mono text-lg">
                {"<Contact_Me />"}
              </Link>
            </div>

            {/* Tech Stack Pills */}
            <div className="hero-element flex flex-wrap justify-center gap-4 pt-8">
              {["JavaScript", "React", "Node.js", "MongoDB", "Express"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-6 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-base font-mono">
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Scroll Indicator */}
            <div
              ref={textRef}
              className="hero-element absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3
                       text-gray-600 dark:text-gray-400">
              <span className="font-mono text-base tracking-widest">
                scroll.down()
              </span>
              <FaArrowDown className="text-2xl text-accent-light dark:text-accent-dark animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
