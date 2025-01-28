// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// gsap.registerPlugin(ScrollTrigger);

// const ProjectCard = ({
//   title,
//   description,
//   technologies,
//   github,
//   demo,
//   image,
// }) => (
//   <div className="group relative overflow-hidden rounded-lg bg-neutral-50 dark:bg-neutral-800/50 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-500">
//     {/* Image Container */}
//     <div className="relative h-64 overflow-hidden">
//       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
//       />
//       {/* Overlay Links */}
//       <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         <a
//           href={github}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-3 bg-white/90 dark:bg-neutral-900/90 rounded-full hover:scale-110 transition-transform"
//         >
//           <FaGithub className="text-xl" />
//         </a>
//         {demo && (
//           <a
//             href={demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-3 bg-white/90 dark:bg-neutral-900/90 rounded-full hover:scale-110 transition-transform"
//           >
//             <FaExternalLinkAlt className="text-xl" />
//           </a>
//         )}
//       </div>
//     </div>

//     {/* Content */}
//     <div className="p-6">
//       <h3 className="font-nagasaki text-xl tracking-wider mb-3 dark:text-white">
//         {title}
//       </h3>
//       <p className="text-gray-600 dark:text-gray-300 font-humane text-lg mb-4">
//         {description}
//       </p>
//       <div className="flex flex-wrap gap-2">
//         {technologies.map((tech, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 text-sm font-mono bg-accent-light/10 dark:bg-accent-dark/10
//                      text-accent-light dark:text-accent-dark rounded-full"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const Projects = () => {
//   const projectsRef = useRef(null);

//   const projects = [
//     {
//       title: "AI Image Generator",
//       description: "Advanced AI-powered image generation platform using DALL-E API and stable diffusion models.",
//       technologies: ["React", "Python", "TensorFlow", "OpenAI API"],
//       github: "https://github.com/rajput-vishal01/ai-image-gen",
//       demo: "https://ai-image-gen-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=AI+Image+Gen"
//     },
//     {
//       title: "Real-time Chat App",
//       description: "Feature-rich chat application with real-time messaging, file sharing, and video calls.",
//       technologies: ["Next.js", "Socket.io", "WebRTC", "MongoDB"],
//       github: "https://github.com/rajput-vishal01/chat-app",
//       demo: "https://chat-app-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=Chat+App"
//     },
//     {
//       title: "DevOps Dashboard",
//       description: "Comprehensive dashboard for monitoring and managing containerized applications.",
//       technologies: ["React", "Docker", "Kubernetes", "Node.js"],
//       github: "https://github.com/rajput-vishal01/devops-dashboard",
//       demo: "https://devops-dashboard-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=DevOps"
//     },
//     {
//       title: "ML Model Deployment Platform",
//       description: "Platform for deploying and managing machine learning models in production.",
//       technologies: ["Python", "FastAPI", "TensorFlow", "Docker"],
//       github: "https://github.com/rajput-vishal01/ml-platform",
//       demo: "https://ml-platform-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=ML+Platform"
//     },
//     {
//       title: "E-Learning Platform",
//       description: "Interactive learning platform with video courses, quizzes, and progress tracking.",
//       technologies: ["React", "Node.js", "MongoDB", "AWS"],
//       github: "https://github.com/rajput-vishal01/e-learning",
//       demo: "https://e-learning-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=E-Learning"
//     },
//     {
//       title: "Blockchain Explorer",
//       description: "Web application for exploring and analyzing blockchain transactions and smart contracts.",
//       technologies: ["React", "Web3.js", "Node.js", "MongoDB"],
//       github: "https://github.com/rajput-vishal01/blockchain-explorer",
//       demo: "https://blockchain-explorer-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=Blockchain"
//     },
//     {
//       title: "IoT Dashboard",
//       description: "Real-time monitoring dashboard for IoT devices with data visualization.",
//       technologies: ["React", "MQTT", "Node.js", "InfluxDB"],
//       github: "https://github.com/rajput-vishal01/iot-dashboard",
//       demo: "https://iot-dashboard-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=IoT"
//     },
//     {
//       title: "Social Media Analytics",
//       description: "Analytics platform for tracking and analyzing social media engagement metrics.",
//       technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
//       github: "https://github.com/rajput-vishal01/social-analytics",
//       demo: "https://social-analytics-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=Analytics"
//     },
//     {
//       title: "Code Review Assistant",
//       description: "AI-powered tool for automated code review and quality analysis.",
//       technologies: ["Python", "NLP", "FastAPI", "React"],
//       github: "https://github.com/rajput-vishal01/code-review",
//       demo: "https://code-review-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=Code+Review"
//     },
//     {
//       title: "Cloud Cost Optimizer",
//       description: "Tool for analyzing and optimizing cloud infrastructure costs across providers.",
//       technologies: ["React", "Node.js", "AWS SDK", "GCP API"],
//       github: "https://github.com/rajput-vishal01/cloud-optimizer",
//       demo: "https://cloud-optimizer-demo.com",
//       image: "https://placehold.co/600x400/8685ef/ffffff?text=Cloud+Costs"
//     }
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".project-card", {
//         y: 30,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: projectsRef.current,
//           start: "top center+=100",
//           toggleActions: "play none none reverse",
//         },
//       });
//     }, projectsRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="projects"
//       ref={projectsRef}
//       className="section-padding bg-gradient-to-b from-primary-light to-neutral-50
//                  dark:from-primary-dark dark:to-neutral-900"
//     >
//       <div className="container-wrapper">
//         <h2 className="text-4xl md:text-5xl font-nagasaki text-center mb-4 tracking-super-wide">
//           Projects
//         </h2>
//         <p className="text-center text-gray-600 dark:text-gray-400 mb-16 font-humane text-xl tracking-widest">
//           Some things I've built
//         </p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="project-card">
//               <ProjectCard {...project} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
