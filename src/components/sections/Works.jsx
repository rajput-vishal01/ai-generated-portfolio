// Works section with interactive project cards
// Features video preview on hover
// Handles smooth animations and transitions
// Manages proper cleanup of animations and events

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// Add this component definition before the Works component
const WorkItem = ({ project, index, onHover, onLeave }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative border-t border-gray-200 dark:border-gray-800 last:border-b cursor-pointer"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onLeave}
      onClick={() => navigate(`/work/${project.id}`)}>
      <div className="py-32 group-hover:bg-gray-50/50 dark:group-hover:bg-gray-900/50 transition-all duration-700">
        <div className="container-wrapper">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-4">
              <span className="text-accent-light dark:text-accent-dark font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-4xl md:text-5xl font-display">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 
                             text-accent-light dark:text-accent-dark rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                onClick={(e) => e.stopPropagation()}>
                <FaGithub className="text-2xl" />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  onClick={(e) => e.stopPropagation()}>
                  <FaExternalLinkAlt className="text-2xl" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const previewRef = useRef(null);
  const videoRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  const projects = [

    
   
    {
      id: "ai-saas",
      title: "SkillSphere-A Networking Platform",
      description: "Professional networking platform that connects talent with opportunities",
      technologies: ["ReactJs", "NodeJs", "Tailwind","MongoDB"],
      github: "https://github.com/rajput-vishal01/SkillSphere",
      demo: "https://skillsphere-ywey.onrender.com",
      video: "/videos/SkillSphere.mp4",
    },
    {
      id: "ml-platform",
      title: "ByteCraft - Blog App",
      description:
        "Full-stack SaaS Blog platform.",
      technologies: ["React", "Node.js", "Appwrite", "Tailwind"],
      github: "https://github.com/rajput-vishal01/byteCraft",
      demo: "https://project-bytecraft-01.vercel.app",
      video: "/videos/ByteCraft.mp4",
    },
    {
      id: "cursor-portfolio",
      title: "Cursor Portfolio",
      description:
        "A modern portfolio website with interactive cursor effects and smooth animations.",
      technologies: ["React", "GSAP", "Tailwind"],
      github: "https://github.com/rajput-vishal01/cursor-portfolio",
      
      video: "/videos/Cursor.mp4",
    },
    
    // {
    //   id: "smart-home",
    //   title: "SkillSphere-A Networking Platform",
    //   description: "professional networking platform that connects talent with opportunities,",
    //   technologies: ["MongoDB", "React", "Express","Tailwind", "NodeJS"],
    //   github: "https://github.com/yourusername/smart-home",
    //   demo: "https://smart-home.dev",
    //   video: "/videos/smart-home.mp4",
    // },

    
   
  ];

  // Handle mouse movement for video preview
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

      if (previewRef.current && activeProject) {
        gsap.to(previewRef.current, {
          x: e.clientX + 10,
          y: e.clientY - 200,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [activeProject]);

  const handleProjectHover = (project) => {
    if (activeProject?.id === project.id) return;

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveProject(project);
        gsap.to(previewRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });
  };

  const handleProjectLeave = () => {
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setActiveProject(null),
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(".work-item", {
        onEnter: (elements) => {
          gsap.from(elements, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          });
        },
        start: "top bottom-=100",
        once: true, // Only trigger once
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative py-32 bg-primary-light dark:bg-primary-dark overflow-hidden">
      <div className="container-wrapper mb-24">
        <h2 className="text-5xl md:text-6xl font-display text-center mb-4">
          Selected Works
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 font-mono text-lg">
          Featured projects that showcase my expertise
        </p>
      </div>

      <div className="work-list">
        {projects.map((project, index) => (
          <WorkItem
            key={project.id}
            project={project}
            index={index}
            onHover={handleProjectHover}
            onLeave={handleProjectLeave}
          />
        ))}
      </div>

      {/* Video Preview */}
      <div
        ref={previewRef}
        className="fixed pointer-events-none z-50 opacity-0"
        style={{
          width: "600px",
          height: "400px",
          position: "fixed",
          top: 0,
          left: 0,
          transform: `translate(${mousePosition.current.x + 10}px, ${
            mousePosition.current.y - 200
          }px)`,
        }}>
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
          {activeProject && (
            <video
              key={activeProject.id}
              ref={videoRef}
              src={activeProject.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
