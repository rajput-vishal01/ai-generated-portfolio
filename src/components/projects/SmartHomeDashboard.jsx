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
  primary: "accent-pink",
  secondary: "accent-purple",
  gradient: "from-accent-pink via-accent-purple to-accent-pink",
  hover: "accent-pink/80",
  background: "white/10",
  border: "white/20",
  text: "text-light dark:text-dark",
};

// Content configuration
const features = [
  {
    title: "Energy Monitoring",
    description:
      "Real-time energy consumption tracking and optimization suggestions.",
  },
  {
    title: "Smart Controls",
    description:
      "Intuitive controls for lights, temperature, and security systems.",
  },
  {
    title: "AI Automation",
    description:
      "Intelligent automation based on user behavior and preferences.",
  },
  {
    title: "Security System",
    description: "Advanced security monitoring with instant notifications.",
  },
  {
    title: "Scene Management",
    description: "Customizable scenes for different times and activities.",
  },
  {
    title: "Voice Control",
    description: "Seamless integration with voice assistants and commands.",
  },
];

const deviceStats = [
  { label: "Connected Devices", value: "50+" },
  { label: "Active Scenes", value: "12" },
  { label: "Energy Saved", value: "30%" },
  { label: "Automations", value: "100+" },
];

const SmartHomeDashboard = () => {
  const containerRef = useRef(null);
  const images = getProjectImages("smart-home");

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
          ".hero-content",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            clearProps: "all",
          },
          "-=0.3"
        )
        .from(
          ".device-stats",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            clearProps: "all",
          },
          "-=0.4"
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
        <Link
          to="/"
          className="hero-back-button inline-flex items-center text-accent-pink hover:text-accent-pink/80 
                   font-semibold text-lg transition-all duration-300
                   px-6 py-3 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-xl
                   border border-white/10 dark:border-white/5 hover:scale-105
                   shadow-lg hover:shadow-xl">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>

        {/* Unique Hero Layout */}
        <div className="mt-16 grid grid-cols-12 gap-8">
          {/* Left Column - Title and Description */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <h1
              className="text-7xl font-display font-bold
                         bg-gradient-to-r from-accent-pink via-accent-purple to-accent-pink 
                         bg-clip-text text-transparent
                         tracking-tight leading-[1.1]">
              Smart Home Dashboard
            </h1>

            <p
              className="text-2xl text-text-light dark:text-text-dark 
                       font-medium leading-relaxed">
              IoT-based home automation system with AI-powered features and
              intuitive controls for modern smart homes.
            </p>

            <div className="flex flex-wrap gap-4">
              {["React Native", "Node.js", "TensorFlow", "MQTT"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent-pink/10 rounded-lg text-accent-pink
                           font-mono text-sm">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Column - Device Stats */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-pink/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl" />

              {/* Device Stats Grid */}
              <div className="relative grid grid-cols-2 gap-6">
                {deviceStats.map((stat, index) => (
                  <div
                    key={index}
                    className="device-stats p-6 bg-white/5 dark:bg-black/5 rounded-xl
                           border border-white/10 dark:border-white/5
                           hover:border-accent-pink/30 transition-colors
                           backdrop-blur-sm">
                    <div
                      className="text-4xl font-bold bg-gradient-to-r from-accent-pink to-accent-purple 
                                 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-light/80 dark:text-text-dark/80 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-wrapper py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-pink/5 to-transparent" />

        <h2
          className="text-5xl font-display font-bold text-center mb-24 
                     bg-gradient-to-r from-accent-pink to-accent-purple 
                     bg-clip-text text-transparent">
          Smart Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-white/5 dark:bg-black/5 rounded-2xl backdrop-blur-sm
                       border border-white/10 dark:border-white/5 shadow-lg
                       hover:shadow-xl transition-all duration-500
                       hover:bg-accent-pink/5 hover:scale-105
                       hover:border-accent-pink/30">
              <div
                className="text-5xl mb-6 text-accent-pink font-bold
              bg-accent-pink/10 w-16 h-16 rounded-xl
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
          Dashboard Interface
        </h2>

        <div className="space-y-24">
          {/* Main Dashboard */}
          <div className="interface-preview relative">
            <div className="absolute -inset-4 bg-accent-pink/20 blur-2xl rounded-3xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.gallery[0]}
                alt="Main Dashboard"
                className="w-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Feature Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {images.gallery.slice(1, 3).map((img, index) => (
              <div key={index} className="interface-preview group relative">
                <div
                  className="absolute -inset-4 bg-accent-purple/20 blur-2xl rounded-3xl opacity-0 
                             group-hover:opacity-50 transition-opacity duration-700"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={img}
                    alt={`Interface ${index + 1}`}
                    className="w-full transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
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
              href="https://github.com/yourusername/smart-home"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-accent-pink text-white font-semibold rounded-xl
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       hover:scale-105 flex items-center justify-center gap-3
                       border border-accent-pink/50 text-lg
                       hover:bg-accent-pink/90 transform-gpu">
              <FaGithub className="text-2xl" /> View Code
            </a>
            <a
              href="https://smart-home.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-accent-purple text-white font-semibold rounded-xl
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       hover:scale-105 flex items-center justify-center gap-3
                       border border-accent-purple/50 text-lg
                       hover:bg-accent-purple/90 transform-gpu">
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

export default SmartHomeDashboard;
