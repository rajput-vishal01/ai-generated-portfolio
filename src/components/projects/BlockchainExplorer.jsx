import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleBg from "../ui/ParticleBg";
import { getProjectImages } from "../../utils/placeholders";

gsap.registerPlugin(ScrollTrigger);

// Theme configuration
const theme = {
  primary: "accent-green",
  secondary: "accent-blue",
  gradient: "from-accent-green via-accent-blue to-accent-green",
  hover: "accent-green/80",
  background: "white/10",
  border: "white/20",
  text: "text-light dark:text-dark",
};

// Content configuration
const features = [
  {
    title: "Real-time Tracking",
    description:
      "Live transaction monitoring and block exploration with instant updates.",
  },
  {
    title: "Smart Contract Analysis",
    description:
      "Advanced smart contract verification and interaction capabilities.",
  },
  {
    title: "Token Analytics",
    description: "Comprehensive token tracking and market analysis tools.",
  },
  {
    title: "Multi-chain Support",
    description: "Support for multiple blockchain networks and protocols.",
  },
  {
    title: "Advanced Search",
    description:
      "Powerful search functionality for transactions, addresses, and contracts.",
  },
  {
    title: "API Integration",
    description: "Robust API endpoints for blockchain data integration.",
  },
];

const metrics = [
  { label: "Transactions Tracked", value: "100M+" },
  { label: "Blocks Analyzed", value: "15M+" },
  { label: "Smart Contracts", value: "500K+" },
  { label: "Daily Users", value: "50K+" },
];

const BlockchainExplorer = () => {
  const containerRef = useRef(null);
  const images = getProjectImages("blockchain-explorer");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
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
          ".metrics-grid",
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            clearProps: "all",
          },
          "-=0.2"
        );

      // Features animation
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

      // Interface previews animation
      gsap.from(".interface-preview", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".interface-section",
          start: "top center+=100",
          toggleActions: "play none none none",
          once: true,
        },
        clearProps: "all",
      });
    }, containerRef);

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

      {/* Hero Section */}
      <section className="container-wrapper py-32">
        <div className="hero-content space-y-12">
          <Link
            to="/"
            className="hero-back-button inline-flex items-center text-accent-green hover:text-accent-green/80 
                     font-semibold text-lg transition-all duration-300
                     px-6 py-3 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-xl
                     border border-white/10 dark:border-white/5 hover:scale-105
                     shadow-lg hover:shadow-xl">
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1
                className="hero-title text-7xl font-display font-bold
                           bg-gradient-to-r from-accent-green via-accent-blue to-accent-green 
                           bg-clip-text text-transparent
                           tracking-tight leading-[1.1]">
                Blockchain Explorer
              </h1>

              <p
                className="hero-description text-2xl text-text-light dark:text-text-dark 
                         font-medium leading-relaxed">
                Advanced blockchain explorer with real-time transaction tracking
                and comprehensive smart contract analysis capabilities.
              </p>

              <div className="flex flex-wrap gap-4">
                {["React", "Web3.js", "Node.js", "GraphQL"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent-green/10 rounded-lg text-accent-green
                             font-mono text-sm">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="metrics-grid grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 dark:bg-black/5 rounded-xl
                           border border-white/10 dark:border-white/5
                           hover:border-accent-green/30 transition-colors
                           backdrop-blur-sm">
                  <div
                    className="text-3xl font-bold bg-gradient-to-r from-accent-green to-accent-blue 
                               bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-text-light/80 dark:text-text-dark/80 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-wrapper py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-green/5 to-transparent" />

        <h2
          className="text-5xl font-display font-bold text-center mb-24 
                     bg-gradient-to-r from-accent-green to-accent-blue 
                     bg-clip-text text-transparent">
          Explorer Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-white/5 dark:bg-black/5 rounded-2xl backdrop-blur-sm
                       border border-white/10 dark:border-white/5 shadow-lg
                       hover:shadow-xl transition-all duration-500
                       hover:bg-accent-green/5 hover:scale-105
                       hover:border-accent-green/30">
              <div
                className="text-5xl mb-6 text-accent-green font-bold
                            bg-accent-green/10 w-16 h-16 rounded-xl
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

      {/* Interface Section */}
      <section className="interface-section container-wrapper py-32">
        <h2
          className="text-5xl font-display font-bold text-center mb-24 
                     text-text-light dark:text-text-dark">
          Explorer Interface
        </h2>

        <div className="space-y-16">
          <div className="interface-preview relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images.gallery[0]}
              alt="Dashboard"
              className="w-full transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.gallery.slice(1, 3).map((img, index) => (
              <div
                key={index}
                className="interface-preview relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={img}
                  alt={`Interface ${index + 1}`}
                  className="w-full transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-wrapper py-32 text-center">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a
              href="https://github.com/yourusername/blockchain-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-accent-green text-white font-semibold rounded-xl
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       hover:scale-105 flex items-center justify-center gap-3
                       border border-accent-green/50 text-lg
                       hover:bg-accent-green/90 transform-gpu">
              <FaGithub className="text-2xl" /> View Code
            </a>
            <a
              href="https://blockchain-explorer.dev"
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

export default BlockchainExplorer;
