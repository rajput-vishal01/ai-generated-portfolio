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
              This project stands out as a unique experiment in AI-driven web
              development. The goal was to build a modern portfolio website
              entirely through AI models, with no human code intervention until
              the project was complete. The AI handled all aspects of
              functionality, from interactive cursor effects to smooth
              animations even ThreeJS, creating a fully operational site. Once the project
              was finished.
            </p>

            <br />

            <p
              className="text-2xl md:text-3xl text-text-light dark:text-text-dark 
                       font-medium leading-relaxed">
              I stepped in to personalize and fine-tune the content, ensuring it
              aligned with my vision. This “No Code” approach highlights the
              evolution of AI, testing its ability to manage both creative
              design and technical execution independently.
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
                  Enhancing AI-Generated Code Precision
                </h2>
                <p className="text-2xl md:text-3xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Correcting inaccuracies in Cursor
                  AI’s generated code, where elements were misaligned or
                  functionality was not as intended.
                  <br />
                  <strong>Solution:</strong> Carefully reviewed and refined the
                  AI-generated output by referencing element{" "}
                  <strong>name tags</strong> and <strong>class names</strong>,
                  providing more detailed configuration to guide the AI in
                  producing the desired results.
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
            src="https://res.cloudinary.com/dbifuyxna/image/upload/v1738162107/portfolio/sfxcroqcan3v1hd7k4im.png"
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

      <section className="container-wrapper py-32 text-center">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-accent-purple">
              Personalized & Interactive Portfolio
            </h2>
            <p className="text-2xl md:text-3xl text-text-light dark:text-text-dark font-medium leading-relaxed flex flex-col gap-2">
              <span>
                This portfolio is a <strong>unique representation</strong> of my{" "}
                <strong>skills</strong>,<strong>creativity</strong>, and{" "}
                <strong>expertise</strong> in web development. The project was
                built using a combination of{" "}
                <strong>modern technologies</strong> and{" "}
                <strong>AI-assisted workflows</strong>, resulting in a{" "}
                <strong>highly customized</strong> and{" "}
                <strong>optimized solution</strong>.
              </span>
              <span>
                Due to the <strong>extensive AI-generated code</strong> and its{" "}
                <strong>complexity</strong>, I have chosen{" "}
                <strong>not to make the source code publicly available</strong>{" "}
                to maintain its originality and avoid{" "}
                <strong>unauthorized replication</strong>. However, you are
                already experiencing the
                <strong>live version</strong> of my portfolio as you browse this
                site.
              </span>
            </p>
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
