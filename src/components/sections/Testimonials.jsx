import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaQuoteLeft } from "react-icons/fa";
import ParticleBg from "../ui/ParticleBg";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "React Enthusiast",
    role: "MERN Stack Developer",
    content:
      "Skilled in building scalable full-stack applications using React, Node.js, and MongoDB. Passionate about crafting clean, efficient code and providing a seamless user experience.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "AI & DSA Learner",
    role: "AI and Data Science Enthusiast",
    content:
      "Focused on understanding the intricacies of training AI models and applying Data Structures and Algorithms (DSA) to solve complex problems. Always exploring new ways to optimize AI workflows and enhance problem-solving skills.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Docker & Hackathon Enthusiast",
    role: "DevOps Learner & Hackathon Participant",
    content:
      "Currently diving into Docker for containerization and automation, enhancing my ability to build scalable and efficient applications. Actively participating in hackathons to challenge myself, learn from others, and quickly prototype solutions in high-pressure environments.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },

  // {
  //   name: "David Kim",
  //   role: "Lead Architect at Netflix",
  //   content:
  //     "Vishal's system design skills are top-notch. They implemented scalable solutions that significantly improved our application performance. Their attention to detail and architectural decisions were impressive.",
  //   image: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   name: "Lisa Wang",
  //   role: "Product Manager at Amazon",
  //   content:
  //     "An exceptional developer who consistently delivers high-quality solutions. Their ability to understand business requirements and translate them into technical solutions is remarkable. A true asset to any team.",
  //   image: "https://randomuser.me/api/portraits/women/3.jpg",
  // },
];

const TestimonialCard = ({ name, role, content, image, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // Set initial state
    gsap.set(card, {
      y: 100,
      opacity: 0,
      scale: 0.9,
      rotateX: -15,
    });

    // Create animation
    const anim = gsap.to(card, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        end: "top center",
        toggleActions: "play none none none",
      },
    });

    // Cleanup
    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-neutral-50 dark:bg-neutral-800 p-12 rounded-2xl shadow-lg hover:shadow-xl 
                 transform hover:-translate-y-2 transition-all duration-300 min-h-[300px] flex flex-col
                 w-full"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}>
      <FaQuoteLeft className="text-6xl text-accent-light dark:text-accent-dark mb-8 opacity-20" />
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-display leading-relaxed flex-grow">
        {content}
      </p>
      <div className="flex items-center gap-6 mt-auto">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover ring-4 ring-accent-light/20 dark:ring-accent-dark/20"
        />
        <div>
          <h4 className="text-2xl font-display tracking-wide mb-1">{name}</h4>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-mono">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Set initial state for title
    gsap.set(".section-title", {
      y: 50,
      opacity: 0,
    });

    // Create title animation
    const titleAnim = gsap.to(".section-title", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top center+=100",
        toggleActions: "play none none none",
      },
    });

    // Cleanup
    return () => {
      titleAnim.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 bg-gradient-to-b from-primary-light to-neutral-50 
                 dark:from-primary-dark dark:to-neutral-900">
      <ParticleBg />
      <div className="container-wrapper">
        <div className="section-title text-center mb-32">
          <h2 className="text-7xl md:text-8xl font-display mb-8">
            Testimonials
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-400 font-mono">
            What people say about my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[1600px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
