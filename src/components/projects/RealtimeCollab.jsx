import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaUsers,
  FaHistory,
  FaCode,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleBg from "../ui/ParticleBg";
import { getProjectImages } from "../../utils/placeholders";

gsap.registerPlugin(ScrollTrigger);

// Mock users for live collaboration demo
const activeUsers = [
  { id: 1, name: "John Doe", color: "#FF5733" },
  { id: 2, name: "Sarah Smith", color: "#33FF57" },
  { id: 3, name: "Mike Johnson", color: "#3357FF" },
];

// Features configuration
const features = [
  {
    title: "Real-time Editing",
    description:
      "Collaborative document editing with instant updates and conflict resolution.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Version Control",
    description:
      "Built-in version history with automatic change tracking and rollback capabilities.",
    icon: <FaHistory className="text-3xl" />,
  },
  {
    title: "Code Collaboration",
    description:
      "Specialized code editor with syntax highlighting and real-time pair programming.",
    icon: <FaCode className="text-3xl" />,
  },
];

const RealtimeCollab = () => {
  const containerRef = useRef(null);
  const images = getProjectImages("realtime-collab");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .from(".hero-content > *", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          clearProps: "all",
        })
        .from(
          ".active-users",
          {
            x: -30,
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
            className="inline-flex items-center text-accent-purple hover:text-accent-purple/80 
                     font-semibold text-lg transition-all duration-300
                     px-6 py-3 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-xl
                     border border-white/10 dark:border-white/5 hover:scale-105
                     shadow-lg hover:shadow-xl">
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1
                className="text-7xl font-display font-bold
                           bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple 
                           bg-clip-text text-transparent
                           tracking-tight leading-[1.1]">
                Realtime Collaboration
              </h1>

              <p
                className="text-2xl text-text-light dark:text-text-dark 
                         font-medium leading-relaxed">
                A Google Docs-like collaborative editing platform with real-time
                sync and version control capabilities.
              </p>

              <div className="flex flex-wrap gap-4">
                {["React", "Socket.io", "MongoDB", "Redis"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent-purple/10 rounded-lg text-accent-purple
                             font-mono text-sm">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Active Users Preview */}
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl" />

              <div
                className="relative bg-white/5 dark:bg-black/5 rounded-2xl p-8 backdrop-blur-sm
                           border border-white/10 dark:border-white/5">
                <h3 className="text-2xl font-display mb-6 text-text-light dark:text-text-dark">
                  Active Collaborators
                </h3>

                <div className="space-y-4">
                  {activeUsers.map((user) => (
                    <div
                      key={user.id}
                      className="active-users flex items-center gap-4 p-4
                               bg-white/5 dark:bg-black/5 rounded-xl
                               border border-white/10 dark:border-white/5">
                      <div
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{ backgroundColor: user.color }}
                      />
                      <span className="text-text-light dark:text-text-dark">
                        {user.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-wrapper py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

        <h2
          className="text-5xl font-display font-bold text-center mb-24 
                     bg-gradient-to-r from-accent-purple to-accent-blue 
                     bg-clip-text text-transparent">
          Collaboration Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-white/5 dark:bg-black/5 rounded-2xl backdrop-blur-sm
                       border border-white/10 dark:border-white/5 shadow-lg
                       hover:shadow-xl transition-all duration-500
                       hover:bg-accent-purple/5 hover:scale-105
                       hover:border-accent-purple/30">
              <div className="text-accent-purple mb-6">{feature.icon}</div>
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

      {/* Interface Preview */}
      <section className="container-wrapper py-32">
        <h2
          className="text-5xl font-display font-bold text-center mb-24 
                     text-text-light dark:text-text-dark">
          Collaboration Interface
        </h2>

        <div className="space-y-24">
          {/* Main Interface */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent-purple/20 blur-2xl rounded-3xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.gallery[0]}
                alt="Main Interface"
                className="w-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Feature Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {images.gallery.slice(1, 3).map((img, index) => (
              <div key={index} className="group relative">
                <div
                  className="absolute -inset-4 bg-accent-blue/20 blur-2xl rounded-3xl opacity-0 
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
              href="https://github.com/yourusername/realtime-collab"
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
              href="https://realtime-collab.herokuapp.com"
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

export default RealtimeCollab;
