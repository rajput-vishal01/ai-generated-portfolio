// import { useParams, Link } from 'react-router-dom';
// import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import ParticleBg from '../ui/ParticleBg';

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const containerRef = useRef(null);

//   // Temporary project data with unique layouts and animations
//   const projects = {
//     'cursor-portfolio': {
//       title: "Cursor Portfolio",
//       layout: "split", // Split screen layout
//       description: "A modern portfolio website with interactive cursor effects and smooth animations.",
//       longDescription: `
//         A comprehensive portfolio platform built with modern technologies.
//         Features include custom cursor effects, 3D particle animations,
//         smooth transitions, and responsive design.
//       `,
//       technologies: ["React", "Three.js", "GSAP", "Tailwind"],
//       github: "https://github.com/yourusername/cursor-portfolio",
//       demo: "https://cursor-portfolio.vercel.app",
//       image: "https://placehold.co/1200x600/8685ef/ffffff?text=Portfolio",
//       features: [
//         "Custom cursor with trailing effect",
//         "3D particle system",
//         "Theme switching with animations",
//         "Responsive design",
//         "Performance optimized"
//       ],
//       color: "#8685ef" // Custom accent color
//     },
//     'ai-saas': {
//       title: "AI SaaS Platform",
//       layout: "grid", // Grid layout
//       description: "Full-stack SaaS platform for AI-powered content generation.",
//       longDescription: `
//         A sophisticated SaaS platform that leverages AI for content generation.
//         Includes user authentication, subscription management, and API integration.
//       `,
//       technologies: ["Next.js", "OpenAI", "Prisma", "Stripe"],
//       github: "https://github.com/yourusername/ai-saas",
//       demo: "https://ai-saas.vercel.app",
//       image: "https://placehold.co/1200x600/60a5fa/ffffff?text=AI+SaaS",
//       features: [
//         "AI-powered content generation",
//         "User authentication",
//         "Subscription management",
//         "API integration",
//         "Real-time processing"
//       ],
//       color: "#60a5fa"
//     },
//     'blockchain-explorer': {
//       title: "Blockchain Explorer",
//       layout: "scroll", // Scroll-based layout
//       description: "Web application for exploring blockchain transactions.",
//       longDescription: `
//         A comprehensive blockchain explorer that allows users to track transactions,
//         analyze smart contracts, and visualize blockchain data in real-time.
//       `,
//       technologies: ["React", "Web3.js", "Node.js", "GraphQL"],
//       github: "https://github.com/yourusername/blockchain-explorer",
//       demo: "https://blockchain-explorer.dev",
//       image: "https://placehold.co/1200x600/10b981/ffffff?text=Blockchain",
//       features: [
//         "Real-time transaction tracking",
//         "Smart contract analysis",
//         "Interactive visualizations",
//         "Multi-chain support",
//         "Advanced filtering"
//       ],
//       color: "#10b981"
//     },
//     'ml-platform': {
//       title: "ML Model Platform",
//       layout: "cards", // Card-based layout
//       description: "Platform for deploying and managing ML models.",
//       longDescription: `
//         A robust platform for machine learning model deployment and management.
//         Features automated scaling, monitoring, and version control.
//       `,
//       technologies: ["Python", "FastAPI", "React", "Docker"],
//       github: "https://github.com/yourusername/ml-platform",
//       demo: "https://ml-platform.dev",
//       image: "https://placehold.co/1200x600/f59e0b/ffffff?text=ML+Platform",
//       features: [
//         "Model versioning",
//         "Automated deployment",
//         "Performance monitoring",
//         "A/B testing",
//         "Resource optimization"
//       ],
//       color: "#f59e0b"
//     },
//     'realtime-collab': {
//       title: "Realtime Collaboration App",
//       layout: "grid",
//       description: "Google Docs-like collaborative editing platform with real-time sync.",
//       longDescription: `
//         A sophisticated real-time collaboration platform inspired by Google Docs.
//         Features include collaborative editing, version control, and real-time sync
//         using WebSocket technology. Built with performance and scalability in mind.
//       `,
//       technologies: ["React", "Socket.io", "MongoDB", "Redis"],
//       github: "https://github.com/yourusername/realtime-collab",
//       demo: "https://realtime-collab.herokuapp.com",
//       image: "https://placehold.co/1200x600/60a5fa/ffffff?text=Collab",
//       features: [
//         "Real-time collaborative editing",
//         "Version control system",
//         "Document sharing",
//         "User authentication",
//         "Auto-save functionality"
//       ],
//       color: "#60a5fa"
//     },
//     'smart-home': {
//       title: "Smart Home Automation",
//       layout: "scroll", // Using scroll-based layout
//       description: "IoT-based home automation system with AI-powered features.",
//       longDescription: `
//         A comprehensive smart home automation platform that combines IoT devices
//         with artificial intelligence for optimal energy usage and enhanced security.
//         Features include real-time monitoring, predictive maintenance, and
//         automated scene management.
//       `,
//       technologies: ["React Native", "Node.js", "TensorFlow", "MQTT"],
//       github: "https://github.com/yourusername/smart-home",
//       demo: "https://smart-home.dev",
//       image: "https://placehold.co/1200x600/8685ef/ffffff?text=Smart+Home",
//       features: [
//         "AI-powered energy optimization",
//         "Real-time security monitoring",
//         "Automated scene management",
//         "Predictive maintenance",
//         "Voice control integration",
//         "Mobile app control"
//       ],
//       color: "#8685ef"
//     }
//   };

//   const project = projects[id];

//   useEffect(() => {
//     if (!project || !containerRef.current) return;

//     // Different animations based on layout
//     const animations = {
//       split: () => {
//         gsap.from(".project-image", {
//           x: -100,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out"
//         });
//         gsap.from(".project-content", {
//           x: 100,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out"
//         });
//       },
//       grid: () => {
//         gsap.from(".grid-item", {
//           y: 50,
//           opacity: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power2.out"
//         });
//       },
//       scroll: () => {
//         gsap.from(".scroll-section", {
//           y: 100,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.3,
//           scrollTrigger: {
//             trigger: ".scroll-section",
//             start: "top bottom",
//             end: "top center",
//             toggleActions: "play none none reverse"
//           }
//         });
//       },
//       cards: () => {
//         gsap.from(".card", {
//           scale: 0.8,
//           opacity: 0,
//           duration: 0.6,
//           stagger: 0.15,
//           ease: "back.out(1.7)"
//         });
//       }
//     };

//     // Run layout-specific animation
//     animations[project.layout]?.();
//   }, [id, project]);

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-primary-light dark:bg-primary-dark">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Project not found</h2>
//           <Link to="/" className="text-accent-light hover:underline">
//             Return to home
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Layout-specific render functions
//   const layouts = {
//     split: () => (
//       <div className="grid md:grid-cols-2 gap-12">
//         <div className="project-image">
//           <img src={project.image} alt={project.title} className="rounded-lg shadow-xl" />
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {[1, 2, 3, 4].map((i) => (
//               <img
//                 key={i}
//                 src={`https://placehold.co/600x400/8685ef/ffffff?text=Detail+${i}`}
//                 alt={`Detail ${i}`}
//                 className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
//               />
//             ))}
//           </div>
//         </div>
//         <div className="project-content space-y-8">
//           <div className="prose prose-lg dark:prose-invert">
//             <p>{project.longDescription}</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Key Features</h3>
//             <ul className="space-y-2">
//               {project.features.map((feature, index) => (
//                 <li key={index} className="flex items-center">
//                   <span className="w-2 h-2 bg-accent-light rounded-full mr-3" />
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex gap-4">
//             <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
//               <FaGithub className="mr-2" /> View Code
//             </a>
//             {project.demo && (
//               <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
//                 <FaExternalLinkAlt className="mr-2" /> Live Demo
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     ),

//     grid: () => (
//       <div className="space-y-16">
//         <div className="grid-item">
//           <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-xl mb-8" />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="grid-item col-span-2">
//             <div className="prose prose-lg dark:prose-invert">
//               <p>{project.longDescription}</p>
//             </div>
//           </div>
//           <div className="grid-item space-y-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Technologies</h3>
//               <div className="flex flex-wrap gap-2">
//                 {project.technologies.map((tech, index) => (
//                   <span key={index} className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10
//                                            text-accent-light dark:text-accent-dark rounded-full">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="flex flex-col gap-4">
//               <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
//                 <FaGithub className="mr-2" /> View Code
//               </a>
//               {project.demo && (
//                 <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
//                   <FaExternalLinkAlt className="mr-2" /> Live Demo
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 grid-item">
//           {[1, 2, 3, 4].map((i) => (
//             <img
//               key={i}
//               src={`https://placehold.co/600x400/60a5fa/ffffff?text=Feature+${i}`}
//               alt={`Feature ${i}`}
//               className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
//             />
//           ))}
//         </div>
//       </div>
//     ),

//     scroll: () => (
//       <div className="space-y-32">
//         <div className="scroll-section">
//           <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-xl mb-16" />
//         </div>
//         <div className="scroll-section grid grid-cols-1 md:grid-cols-2 gap-16">
//           <div>
//             <h3 className="text-3xl font-display mb-8">Overview</h3>
//             <div className="prose prose-lg dark:prose-invert">
//               <p>{project.longDescription}</p>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-3xl font-display mb-8">Features</h3>
//             <ul className="space-y-4">
//               {project.features.map((feature, index) => (
//                 <li key={index} className="flex items-start gap-4">
//                   <span className="w-8 h-8 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full
//                                 flex items-center justify-center text-accent-light dark:text-accent-dark">
//                     {index + 1}
//                   </span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="scroll-section">
//           <h3 className="text-3xl font-display mb-8">Gallery</h3>
//           <div className="grid grid-cols-2 gap-8">
//             {[1, 2].map((i) => (
//               <img
//                 key={i}
//                 src={`https://placehold.co/800x600/10b981/ffffff?text=Screenshot+${i}`}
//                 alt={`Screenshot ${i}`}
//                 className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     ),

//     cards: () => (
//       <div className="space-y-16">
//         <div className="card">
//           <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-xl mb-8" />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="card">
//             <h3 className="text-3xl font-display mb-6">Project Overview</h3>
//             <div className="prose prose-lg dark:prose-invert">
//               <p>{project.longDescription}</p>
//             </div>
//           </div>
//           <div className="card">
//             <h3 className="text-3xl font-display mb-6">Tech Stack</h3>
//             <div className="grid grid-cols-2 gap-4">
//               {project.technologies.map((tech, index) => (
//                 <div key={index} className="p-4 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg">
//                   <span className="font-mono text-accent-light dark:text-accent-dark">{tech}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="card">
//               <img
//                 src={`https://placehold.co/600x400/f59e0b/ffffff?text=Feature+${i}`}
//                 alt={`Feature ${i}`}
//                 className="rounded-lg shadow-md mb-4"
//               />
//               <h4 className="text-xl font-bold mb-2">Feature {i}</h4>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   };

//   // Add return to home button at the bottom of each layout
//   const ReturnHomeButton = () => (
//     <div className="mt-16 text-center">
//       <Link
//         to="/"
//         className="inline-flex items-center gap-2 px-6 py-3 bg-accent-light/10 dark:bg-accent-dark/10
//                   rounded-lg hover:bg-accent-light/20 dark:hover:bg-accent-dark/20 transition-colors"
//       >
//         <FaArrowLeft />
//         Return to Home
//       </Link>
//     </div>
//   );

//   // Update the return statement to include the ReturnHomeButton
//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-primary-light dark:bg-primary-dark pt-20"
//       style={{ "--project-color": project.color }}
//     >
//       <ParticleBg />
//       <div className="container-wrapper py-12">
//         {/* Common header */}
//         <div className="mb-16">
//           <Link
//             to="/"
//             className="inline-flex items-center text-accent-light hover:text-accent-dark transition-colors mb-8"
//           >
//             <FaArrowLeft className="mr-2" /> Back to Projects
//           </Link>
//           <h1 className="text-4xl md:text-6xl font-display mb-6">{project.title}</h1>
//           <p className="text-xl text-gray-600 dark:text-gray-400">{project.description}</p>
//         </div>

//         {/* Layout-specific content */}
//         {layouts[project.layout]?.()}

//         {/* Return home button */}
//         <ReturnHomeButton />
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;
