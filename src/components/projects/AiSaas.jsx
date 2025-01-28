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
  primary: "accent-blue",
  secondary: "accent-purple",
  gradient: "from-accent-blue via-accent-purple to-accent-blue",
  hover: "accent-blue/80",
  background: "white/10",
  border: "white/20",
  text: "text-light dark:text-dark",
};

// Content configuration
const features = [
  {
    title: "Scalable Networking",
    description:
      "SkillSphere empowers users to build professional networks with seamless and dynamic connections.",
  },
  {
    title: "Real-time Updates",
    description:
      "Receive instant notifications when connection requests are accepted, keeping you connected at all times.",
  },
  {
    title: "Secure User Authentication",
    description:
      "JWT-based authentication ensures that all user interactions and data are protected and secure.",
  },
  {
    title: "Responsive Interface",
    description:
      "An intuitive and mobile-friendly design built with TailwindCSS and DaisyUI for smooth user experiences.",
  },
  {
    title: "Image Management",
    description:
      "Easily upload and manage images with Cloudinary for profile customization and content sharing.",
  },
  {
    title: "Email Notifications",
    description:
      "Users receive email notifications for registration, connection requests, and important updates powered by Mailtrap.",
  },
];

// const stats = [
//   { label: "Profiles Created", value: "20+" },
//   { label: "Connections Made", value: "30+" },
//   { label: "API Endpoints Available", value: "5+" },
//   { label: "Emails Delivered", value: "10+" },
// ];

const AiSaas = () => {
  const containerRef = useRef(null);
  const images = getProjectImages("ai-saas");

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
          ".stats-item",
          {
            y: 30,
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

      // Screenshots animation
      gsap.from(".screenshot", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".screenshots-section",
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
            className="inline-flex items-center text-accent-blue hover:text-accent-blue/80 
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
                           bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue 
                           bg-clip-text text-transparent
                           tracking-tight leading-[1.1]">
                SkillSphere - A Networking Platform
              </h1>

              <p
                className="text-2xl text-text-light dark:text-text-dark 
                         font-medium leading-relaxed">
                SkillSphere is a comprehensive platform designed to enhance
                professional networking and skills sharing. This application
                brings together powerful features for collaboration, learning,
                and professional growth
              </p>

              <div className="flex flex-wrap gap-4">
                {["ReactJs", "NodeJs", "Tailwind", "MongoDB"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent-blue/10 rounded-lg text-accent-blue
                             font-mono text-sm">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <img
                src="../../../assets/SkillSphere/logo.png"
                alt="AI SaaS Platform"
                className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-light/80 dark:from-primary-dark/80 to-transparent rounded-2xl" />
            </div>
          </div>

          <h1
            className="text-7xl font-display font-bold
                           bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue 
                           bg-clip-text text-transparent
                           tracking-tight leading-[1.1]">
            Unleash Your Networking Potential
          </h1>

          <p
            className="text-2xl text-text-light dark:text-text-dark 
                         font-medium leading-relaxed">
            SkillSphere is more than just a platform—it's a dynamic ecosystem
            designed to bring professionals together. By blending cutting-edge
            technology with an intuitive interface, SkillSphere helps users
            foster meaningful connections, share valuable insights, and unlock
            new opportunities for personal and professional growth.
          </p>

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stats-item text-center p-6 bg-white/5 dark:bg-black/5 rounded-xl
                         border border-white/10 dark:border-white/5 backdrop-blur-sm">
                <div
                  className="text-4xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple 
                             bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-light/80 dark:text-text-dark/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container-wrapper py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />

        <h2
          className="text-5xl font-display font-bold text-center mb-24 
                     bg-gradient-to-r from-accent-blue to-accent-purple 
                     bg-clip-text text-transparent">
          Platform Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-white/5 dark:bg-black/5 rounded-2xl backdrop-blur-sm
                       border border-white/10 dark:border-white/5 shadow-lg
                       hover:shadow-xl transition-all duration-500
                       hover:bg-accent-blue/5 hover:scale-105
                       hover:border-accent-blue/30">
              <div
                className="text-5xl mb-6 text-accent-blue font-bold
              bg-accent-blue/10 w-16 h-16 rounded-xl
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




      

      {/* Screenshots Section */}
      <section className="screenshots-section container-wrapper py-32">
        <h2
          className="text-5xl font-display font-bold text-center mb-24 
                     text-text-light dark:text-text-dark">
          Platform Interface
        </h2>

        <div className="space-y-16">
          <div className="screenshot relative rounded-2xl overflow-hidden shadow-2xl">
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
                className="screenshot relative rounded-2xl overflow-hidden shadow-xl">
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
              href="https://github.com/rajput-vishal01/SkillSphere"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-accent-blue text-white font-semibold rounded-xl
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       hover:scale-105 flex items-center justify-center gap-3
                       border border-accent-blue/50 text-lg
                       hover:bg-accent-blue/90 transform-gpu">
              <FaGithub className="text-2xl" /> View Code
            </a>
            <a
              href="https://skillsphere-ywey.onrender.com"
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

export default AiSaas;
