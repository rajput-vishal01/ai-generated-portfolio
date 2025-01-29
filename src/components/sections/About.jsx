import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTensorflow,
  SiKubernetes,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";

import ParticleBg from "../ui/ParticleBg";

gsap.registerPlugin(ScrollTrigger);

const SkillIcon = ({ icon: Icon }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: Math.random() * 2,
    });
  }, []);

  return (
    <div ref={iconRef} className="group cursor-pointer">
      <div
        className="relative aspect-square w-24 rounded-xl bg-white/5 backdrop-blur-sm 
                    transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
                    hover:shadow-lg hover:shadow-accent-light/20 dark:hover:shadow-accent-dark/20
                    flex items-center justify-center overflow-hidden">
        <Icon
          className="text-7xl text-accent-light dark:text-accent-dark 
                     transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
        />
        <div
          className="absolute inset-0 bg-accent-light/20 dark:bg-accent-dark/20 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl -z-10"
        />
      </div>
    </div>
  );
};

const About = () => {
  const skills = {
    development: [
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: FaDatabase, name: "SQL" },
      { icon: DiMongodb, name: "MongoDB" },
    ],
    cloud: [
      { icon: FaDocker, name: "Docker" },
      { icon: SiKubernetes, name: "K8s" },
      { icon: FaAws, name: "AWS" },
      { icon: FaGitAlt, name: "Git" },
    ],
    ai: [
      // { icon: FaPython, name: "Python" },
      // { icon: SiTensorflow, name: "TensorFlow" },
    ],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".skill-section", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="relative section-padding bg-section-light dark:bg-section-dark">
      <ParticleBg />
      <div className="container-wrapper">
        <div className="max-w-7xl mx-auto">
          {/* About Content */}
          <div className="about-content text-center mb-32">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-display mb-16">
              About Me
            </h2>
            <p className="text-3xl md:text-4xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A passionate developer focused on building scalable applications
              that solve real-world problems. Skilled in the MERN stack applying
              Data Structures and Algorithms (DSA) to solve complex problems, I
              aim to deliver impactful solutions while continuously honing my
              web development skills and exploring innovative technologies.
            </p>
          </div>

          {/* Skills Grid - Grape-like structure */}
          <div className="skills-container space-y-8">
            {" "}
            {/* Reduced spacing between groups */}
            {/* Development - Wider spread */}
            <div className="skill-section transform hover:scale-105 transition-transform duration-500">
              <div className="flex flex-wrap justify-center gap-6">
                {" "}
                {/* Reduced gap */}
                {skills.development.map((skill, index) => (
                  <SkillIcon key={index} {...skill} />
                ))}
              </div>
            </div>
            {/* Cloud & DevOps - Centered cluster */}
            <div className="skill-section transform hover:scale-105 transition-transform duration-500">
              <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
                {skills.cloud.map((skill, index) => (
                  <SkillIcon key={index} {...skill} />
                ))}
              </div>
            </div>
            {/* AI & ML - Compact cluster */}
            <div className="skill-section transform hover:scale-105 transition-transform duration-500">
              <div className="flex flex-wrap justify-center gap-6 max-w-xs mx-auto">
                {skills.ai.map((skill, index) => (
                  <SkillIcon key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
