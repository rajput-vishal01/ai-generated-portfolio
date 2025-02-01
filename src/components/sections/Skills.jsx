import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleBg from "../ui/ParticleBg";

gsap.registerPlugin(ScrollTrigger);

// Simple debounce function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="font-display tracking-wider text-lg">{skill}</span>
      <span className="font-mono text-accent-light dark:text-accent-dark">
        {percentage}%
      </span>
    </div>
    <div className="h-2 bg-white/5 dark:bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
      <div
        className="h-full bg-accent-light dark:bg-accent-dark rounded-full progress-bar"
        style={{
          width: "0%",
          willChange: "width",
          transition: "width 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const sectionRef = useRef(null);

  const skills = [
    { name: "Frontend Development", percentage: 85 },
    { name: "Backend Development", percentage: 80 },
    { name: "Data Structures & Algorithms", percentage: 85 }, // Added DSA as it's a key strength
    { name: "DevOps & Cloud (Learning Docker & Kubernetes)", percentage: 65 },
    { name: "Cloud Computing & Deployment", percentage: 70 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill bars immediately when in view
      ScrollTrigger.batch(".progress-bar", {
        onEnter: (elements) => {
          elements.forEach((bar) => {
            const parent = bar.closest(".skill-bar");
            const percentage = parent.getAttribute("data-percentage");
            gsap.to(bar, {
              width: `${percentage}%`,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.1,
            });
          });
        },
        start: "top bottom-=50",
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 bg-gradient-to-b from-primary-light to-neutral-50 
                 dark:from-primary-dark dark:to-neutral-900">
      <ParticleBg density={15} speed={0.3} />
      <div className="container-wrapper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-display text-center mb-8">
            Expertise
          </h2>
          <p className="text-center text-2xl text-gray-600 dark:text-gray-400 font-mono mb-16">
            Technologies I work with
          </p>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-bar"
                data-percentage={skill.percentage}>
                <SkillBar skill={skill.name} percentage={skill.percentage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
