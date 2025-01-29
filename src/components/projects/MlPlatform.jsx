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
  primary: "accent-orange",
  secondary: "accent-purple",
  gradient: "from-accent-orange via-accent-purple to-accent-orange",
  hover: "accent-orange/80",
  background: "white/10",
  border: "white/20",
  text: "text-light dark:text-dark",
};

// Content configuration
const features = [
  {
    title: "User Authentication",
    description:
      "Secure sign-up and login functionality ensuring user-specific content access.",
  },
  {
    title: "Create and Read Blogs",
    description:
      "Allow users to create new blog posts and read existing ones after logging in.",
  },
  {
    title: "Rich Text Editing",
    description:
      "Create engaging blog content using TinyMCE’s rich text editor with extensive formatting options.",
  },
  {
    title: "Responsive Design",
    description:
      "Optimized UI/UX for seamless usage across various devices and screen sizes.",
  },
  {
    title: "Appwrite Backend Integration",
    description:
      "Seamlessly integrates Appwrite for authentication, database management, and API handling.",
  },
  {
    title: "State Management",
    description:
      "Efficient state management using Redux Toolkit to handle application-wide state.",
  },
];

// const stats = [
//   { label: "Blog Posts", value: "20+" },
//   { label: "Active Users", value: "50+" },
//   { label: "Comments", value: "100+" },
//   { label: "Total Views", value: "500+" },
// ];

const MLPlatform = () => {
  const containerRef = useRef(null);
  const images = getProjectImages("ml-platform");

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
            y: 100,
            opacity: 0,
            duration: 0.8,
            clearProps: "all",
          },
          "-=0.3"
        )
        .from(
          ".hero-stats",
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

      // Dashboard previews animation
      gsap.from(".dashboard-preview", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".dashboard-section",
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
          className="hero-back-button inline-flex items-center text-accent-orange hover:text-accent-orange/80 
                   font-semibold text-lg transition-all duration-300
                   px-6 py-3 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-xl
                   border border-white/10 dark:border-white/5 hover:scale-105
                   shadow-lg hover:shadow-xl">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>

        {/* Unique Hero Layout */}
        <div className="mt-16  gap-8">
          {/* Left Column - Title and Description */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <h1
              className="text-7xl font-display font-bold
                         bg-gradient-to-r from-accent-orange via-accent-purple to-accent-orange 
                         bg-clip-text text-transparent
                         tracking-tight leading-[1.1]">
              ByteCraft - Blog App
            </h1>

            <p
              className="text-2xl text-text-light dark:text-text-dark 
                       font-medium leading-relaxed">
              ByteCraft is a SaaS platform that enables seamless blog creation,
              sharing, and engagement. Built with React and Vite for a fast
              frontend, and Appwrite for backend functionality, it ensures
              secure authentication (sign-up/login) and session management. The
              intuitive rich text editor empowers users to craft visually
              appealing posts effortlessly.
            </p>

            <h1
              className="text-7xl font-display font-bold 
                   bg-gradient-to-r from-accent-orange via-accent-purple to-accent-orange 
                   bg-clip-text text-transparent 
                   tracking-tight leading-[1.1]">
              Challenges Faced and Solutions
            </h1>
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-3xl font-semibold text-accent-orange">
                  Secure User Authentication
                </h2>
                <p className="text-2xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Ensuring user data and sessions
                  are secure.
                  <br />
                  <strong>Solution:</strong> Leveraged Appwrite's authentication
                  services to implement secure token-based login and
                  registration processes.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-accent-purple">
                  Rich Text Editor Integration
                </h2>
                <p className="text-2xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Integrating a feature-rich text
                  editor without performance issues.
                  <br />
                  <strong>Solution:</strong> Customized and optimized TinyMCE
                  integration for smooth and responsive content editing.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-accent-orange">
                  State Management
                </h2>
                <p className="text-2xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Managing global state effectively
                  across components.
                  <br />
                  <strong>Solution:</strong> Implemented Redux Toolkit for
                  efficient state management and to ensure consistent
                  application behavior.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-accent-purple">
                  Optimized Performance
                </h2>
                <p className="text-2xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Ensuring fast load times and
                  responsive interactions.
                  <br />
                  <strong>Solution:</strong> Used Vite for faster builds and
                  React optimizations for improved performance across the app.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-accent-orange">
                  Scalability for Growth
                </h2>
                <p className="text-2xl text-text-light dark:text-text-dark font-medium leading-relaxed">
                  <strong>Challenge:</strong> Designing the app for a growing
                  number of users and blog posts.
                  <br />
                  <strong>Solution:</strong> Optimized database queries and
                  structured the backend with scalability in mind using
                  Appwrite’s database services.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {["React", "Node.js", "Appwrite", "Tailwind"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent-orange/10 rounded-lg text-accent-orange
                           font-mono text-sm">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          {/* <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl" />

             
              <div
                className="relative grid grid-cols-2 gap-6 p-8 bg-white/5 dark:bg-black/5 rounded-2xl backdrop-blur-sm
                           border border-white/10 dark:border-white/5">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/5 dark:bg-black/5 rounded-xl
                           border border-white/10 dark:border-white/5
                           hover:border-accent-orange/30 transition-colors">
                    <div
                      className="text-4xl font-bold bg-gradient-to-r from-accent-orange to-accent-purple 
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
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="container-wrapper py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-orange/5 to-transparent" />

        <h2
          className="text-5xl font-display font-bold text-center mb-24 
                     bg-gradient-to-r from-accent-orange to-accent-purple 
                     bg-clip-text text-transparent">
          Platform Features
        </h2>

        {/* Features Grid with Alternating Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card p-8 bg-white/5 dark:bg-black/5 rounded-2xl backdrop-blur-sm
                       border border-white/10 dark:border-white/5 shadow-lg
                       hover:shadow-xl transition-all duration-500
                       hover:bg-accent-orange/5 hover:scale-105
                       hover:border-accent-orange/30
                       ${index % 2 === 0 ? "lg:translate-y-8" : ""}`}>
              <div className="flex items-start gap-6">
                <span
                  className="text-4xl font-bold text-accent-orange
                             bg-accent-orange/10 w-16 h-16 rounded-xl
                             flex items-center justify-center shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-display mb-4 text-text-light dark:text-text-dark font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-text-light/80 dark:text-text-dark/80 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="dashboard-section container-wrapper py-32">
        <h2
          className="text-5xl font-display font-bold text-center mb-24 
                     text-text-light dark:text-text-dark">
          Platform Interface
        </h2>

        <div className="space-y-24">
          {/* Main Dashboard */}
          <div className="dashboard-preview relative">
            <div className="absolute -inset-4 bg-accent-orange/20 blur-2xl rounded-3xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dbifuyxna/image/upload/v1738084807/ByteCraft/fcitqiqcmbj5hssd14xt.png"
                alt="Main Dashboard"
                className="w-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Feature Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Image Pair Section */}
            <div className="flex flex-col md:flex-row gap-4 rounded-xl">
              <img
                src="https://res.cloudinary.com/dbifuyxna/image/upload/v1738084807/ByteCraft/ccvsc7juqogkcokbkhtl.png"
                alt=""
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dbifuyxna/image/upload/v1738084807/ByteCraft/uvxuwtfnxqn0ifevux2t.png"
                alt=""
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <br />
          <div>
            <h2 className="text-3xl font-semibold text-accent-orange">
              TinyMCE integration :
            </h2>
          </div>

          <br />

          {/* Wide Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
              <img
                src="https://res.cloudinary.com/dbifuyxna/image/upload/v1738084807/ByteCraft/lijppiulwzxc3tqjjhmr.png"
                alt=""
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dbifuyxna/image/upload/v1738084808/ByteCraft/cmqdvn18azwupv0n7r6z.png"
                alt=""
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="container-wrapper py-32 text-center">
        <div className="space-y-12">
          <p
            className="text-2xl text-text-light dark:text-text-dark 
                         font-medium leading-relaxed">
            Note: Currently, when logged into the app on Vercel, you may need to
            reload the page (or link) before being able to post. This issue
            doesn't occur on localhost.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a
              href="https://github.com/rajput-vishal01/byteCraft"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-accent-orange text-white font-semibold rounded-xl
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       hover:scale-105 flex items-center justify-center gap-3
                       border border-accent-orange/50 text-lg
                       hover:bg-accent-orange/90 transform-gpu">
              <FaGithub className="text-2xl" /> View Code
            </a>
            <a
              href="https://project-bytecraft-01.vercel.app"
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

export default MLPlatform;
