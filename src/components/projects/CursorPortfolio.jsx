import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleBg from "../ui/ParticleBg";
import { getProjectImages } from "../../utils/placeholders";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Easily configurable theme colors
const theme = {
  primary: "accent-purple",
  secondary: "accent-blue",
  gradient: "from-accent-purple via-accent-blue to-accent-purple",
  hover: "accent-purple/80",
  background: "white/10",
  border: "white/20",
  text: "text-light dark:text-dark",
};

// Add these arrays before the component definition
const features = [
  {
    title: "Custom Cursor Effects",
    description:
      "Smooth and interactive cursor animations that respond to user interactions and hover states.",
  },
  {
    title: "3D Particle System",
    description:
      "Dynamic particle animations creating an immersive and engaging user experience.",
  },
  {
    title: "Smooth Animations",
    description:
      "Carefully crafted animations for seamless transitions and visual feedback.",
  },
  {
    title: "Dark/Light Theme",
    description:
      "Elegant theme switching with smooth color transitions and system preference detection.",
  },
  {
    title: "Responsive Design",
    description:
      "Perfectly adapted for all screen sizes and devices with fluid layouts.",
  },
  {
    title: "Performance Optimized",
    description:
      "Optimized for fast loading, smooth interactions, and efficient resource usage.",
  },
];

const galleryItems = [
  {
    title: "Homepage",
    description: "Interactive landing page with particle effects",
  },
  {
    title: "Projects",
    description: "Portfolio showcase with hover animations",
  },
  {
    title: "About",
    description: "Personal introduction with dynamic elements",
  },
  {
    title: "Contact",
    description: "Get in touch section with form validation",
  },
  {
    title: "Blog",
    description: "Technical articles and case studies",
  },
  {
    title: "Dashboard",
    description: "Admin interface with real-time updates",
  },
];

const CursorPortfolio = () => {
  const containerRef = useRef(null);
  const images = getProjectImages("cursor-portfolio");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation - More controlled sequence
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .from(".hero-back-button", {
          x: -50,
          opacity: 0,
          duration: 0.6,
          clearProps: "all",
        })
        .from(
          ".hero-title",
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            clearProps: "all",
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
            clearProps: "all",
          },
          "-=0.4"
        )
        .from(
          ".hero-image",
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            clearProps: "all",
          },
          "-=0.2"
        );

      // Features animation - Individual triggers
      const featureCards = gsap.utils.toArray(".feature-card");
      featureCards.forEach((card, index) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none none",
            once: true,
          },
          delay: index * 0.1,
          clearProps: "all",
        });
      });

      // Gallery animation - Controlled sequence
      const galleryTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery-section",
          start: "top center+=100",
          toggleActions: "play none none none",
          once: true,
        },
      });

      galleryTimeline
        .from(".gallery-title", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          clearProps: "all",
        })
        .from(
          ".gallery-item",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: {
              amount: 0.6,
              grid: "auto",
              from: "start",
            },
            clearProps: "all",
          },
          "-=0.2"
        );
    }, containerRef);

    // Proper cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-primary-light dark:bg-primary-dark pt-20">
      <ParticleBg />

      {/* Hero Section with improved spacing and hierarchy */}
      <section className="container-wrapper py-32">
        <div className="hero-content space-y-12">
          <Link
            to="/"
            className="inline-flex items-center text-accent-purple hover:text-accent-purple/80 
                     font-semibold text-lg transition-all duration-300
                     px-6 py-3 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-xl
                     border border-white/10 dark:border-white/5 hover:scale-105
                     shadow-lg hover:shadow-xl">
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>

          <div className="space-y-8 max-w-4xl">
            <h1
              className="text-7xl md:text-9xl font-display font-bold
                         bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple 
                         bg-clip-text text-transparent
                         tracking-tight leading-[0.9]">
              Portfolio
            </h1>

            <p
              className="text-2xl md:text-3xl text-text-light dark:text-text-dark 
                       font-medium leading-relaxed">
              A modern portfolio website with interactive cursor effects and
              smooth animations, showcasing creative design and technical
              excellence.
            </p>
          </div>

          <section className="space-y-8 max-w-4xl px-6 py-12">
            <h1
              className="text-7xl md:text-9xl font-display font-bold
                   bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple 
                   bg-clip-text text-transparent
                   tracking-tight leading-[0.9]">
              Challenges and Solutions
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-accent-purple">
                  Crafting a Vision-Aligned Design
                </h2>
                <p className="text-2xl md:text-3xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Translating abstract ideas into an
                  exact design that aligns with my vision.
                  <br />
                  <strong>Solution:</strong> Leveraged AI tools like ChatGPT and
                  Cursor AI to refine designs and generate functional code
                  snippets, enabling rapid iterations and achieving precision.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-accent-blue">
                  Integrating Advanced Animations
                </h2>
                <p className="text-2xl md:text-3xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Creating smooth, visually
                  appealing animations for a dynamic user experience.
                  <br />
                  <strong>Solution:</strong> Used GSAP for fine-tuned
                  animations, ensuring smooth transitions and interactive
                  elements for an engaging design.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-accent-purple">
                  Responsive and Accessible Design
                </h2>
                <p className="text-2xl md:text-3xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Ensuring the website looks great
                  and functions well across all devices and themes.
                  <br />
                  <strong>Solution:</strong> Built with TailwindCSS for
                  responsiveness, incorporating light and dark mode toggles and
                  testing on various screen sizes to optimize usability.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-accent-blue">
                  Learning Three.js
                </h2>
                <p className="text-2xl md:text-3xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Utilizing Three.js for interactive
                  3D models despite having no prior experience.
                  <br />
                  <strong>Solution:</strong> Studied Three.js documentation and
                  tutorials to implement simple 3D elements, enhancing the
                  visual appeal of the portfolio.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-accent-purple">
                  Effective Use of AI Models
                </h2>
                <p className="text-2xl md:text-3xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Communicating effectively with AI
                  tools to get the desired output.
                  <br />
                  <strong>Solution:</strong> Developed skills in prompt
                  engineering, enabling efficient interactions with AI tools
                  like ChatGPT and Cursor AI to streamline development.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Main Image with enhanced effects */}
        <div
          className="mt-24 relative rounded-2xl overflow-hidden 
                     border border-white/10 dark:border-white/5
                     shadow-2xl shadow-accent-purple/20 group
                     transform-gpu transition-all duration-700 hover:scale-[1.02]">
          <img
            src={images.main}
            alt="Cursor Portfolio"
            className="w-full h-[75vh] object-cover transform-gpu transition-transform duration-700
                     group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
                       opacity-80 group-hover:opacity-60 transition-opacity duration-700"
          />
        </div>
      </section>

      {/* Features Grid with improved cards */}
      <section className="features-section container-wrapper py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

        <h2
          className="text-6xl md:text-7xl font-display font-bold text-center mb-24 
                     bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple 
                     bg-clip-text text-transparent">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-white/5 dark:bg-black/5 rounded-2xl backdrop-blur-sm
                       border border-white/10 dark:border-white/5 shadow-lg
                       hover:shadow-xl transition-all duration-500
                       hover:bg-accent-purple/5 hover:scale-105
                       hover:border-accent-purple/30">
              <div
                className="text-5xl mb-6 text-accent-purple font-bold
                    bg-accent-purple/10 w-16 h-16 rounded-xl
                    flex items-center justify-center">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-display mb-4 text-text-light dark:text-text-dark font-bold">
                {feature.title}
              </h3>
              <p className="text-text-light/80 dark:text-text-dark/80 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery with masonry-like layout */}
      <section className="gallery-section container-wrapper py-32">
        <h2 className="gallery-title text-6xl font-display mb-24 text-center text-text-light dark:text-text-dark font-bold">
          Project Gallery
        </h2>

        <div className="grid grid-cols-12 gap-8">
          {/* Featured Items - Span multiple columns */}
          <div className="gallery-item col-span-8 row-span-2">
            <div className="group relative rounded-xl overflow-hidden aspect-[16/9]">
              <img
                src={images.gallery[0]}
                alt="Main Feature"
                className="w-full h-full object-cover transition-transform duration-700
                         group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                           opacity-0 group-hover:opacity-100 transition-all duration-500
                           flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold mb-3">
                  Homepage Design
                </h3>
                <p className="text-white/90 text-lg max-w-xl">
                  Interactive landing page with custom animations and particle
                  effects
                </p>
              </div>
            </div>
          </div>

          {/* Regular Items */}
          <div className="gallery-item col-span-4">
            <div className="group relative rounded-xl overflow-hidden aspect-square">
              <img
                src={images.gallery[1]}
                alt="Feature 1"
                className="w-full h-full object-cover transition-transform duration-700
                         group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
                           opacity-0 group-hover:opacity-100 transition-all duration-500
                           flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Projects Section
                </h3>
                <p className="text-white/80">
                  Portfolio showcase with hover effects
                </p>
              </div>
            </div>
          </div>

          {/* Add more gallery items with varying spans */}
          <div className="gallery-item col-span-6">
            {/* Similar structure */}
          </div>

          <div className="gallery-item col-span-6">
            {/* Similar structure */}
          </div>

          <div className="gallery-item col-span-4">
            {/* Similar structure */}
          </div>

          <div className="gallery-item col-span-8">
            {/* Similar structure */}
          </div>
        </div>
      </section>

      {/* Links with floating effect */}
      <section className="container-wrapper py-32 text-center">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a
              href="https://github.com/yourusername/cursor-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-accent-purple text-white font-semibold rounded-xl
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       hover:scale-105 flex items-center justify-center gap-3
                       border border-accent-purple/50 text-lg
                       hover:bg-accent-purple/90 transform-gpu">
              <FaGithub className="text-2xl" /> View Code
            </a>
            <a
              href="https://cursor-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-accent-blue text-white font-semibold rounded-xl
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       hover:scale-105 flex items-center justify-center gap-3
                       border border-accent-blue/50 text-lg
                       hover:bg-accent-blue/90 transform-gpu">
              <FaExternalLinkAlt className="text-2xl" /> Live Demo
            </a>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 
                     bg-white/5 dark:bg-black/5 hover:bg-white/10 dark:hover:bg-black/10 
                     text-text-light dark:text-text-dark font-medium rounded-xl
                     transition-all duration-300 hover:scale-105 text-lg
                     border border-white/10 dark:border-white/5
                     shadow-lg hover:shadow-xl">
            <FaArrowLeft />
            Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CursorPortfolio;
