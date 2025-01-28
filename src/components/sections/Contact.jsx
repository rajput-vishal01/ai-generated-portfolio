import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import ParticleBg from "../ui/ParticleBg";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".contact-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top bottom-=100",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Links animation
      gsap.from(".contact-link", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-links",
          start: "top bottom-=100",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative py-40 bg-gradient-to-b from-primary-light to-neutral-50 
                 dark:from-primary-dark dark:to-neutral-900">
      <ParticleBg />
      <div className="container-wrapper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="contact-title text-7xl md:text-8xl font-display mb-8">
            Get in Touch
          </h2>
          <p className="contact-title text-2xl text-gray-600 dark:text-gray-400 font-mono mb-16">
            Let's create something amazing together
          </p>

          <div className="contact-links flex flex-col md:flex-row justify-center items-center gap-8">
            <a
              href="mailto:askvishal.me@gmail.com"
              className="contact-link group flex items-center gap-4 px-8 py-4 bg-accent-light/10 dark:bg-accent-dark/10 
                       rounded-xl hover:bg-accent-light/20 dark:hover:bg-accent-dark/20 transition-colors">
              <FaEnvelope className="text-2xl text-accent-light dark:text-accent-dark" />
              <span className="font-mono">Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/askvishal01"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group flex items-center gap-4 px-8 py-4 bg-accent-light/10 dark:bg-accent-dark/10 
                       rounded-xl hover:bg-accent-light/20 dark:hover:bg-accent-dark/20 transition-colors">
              <FaLinkedin className="text-2xl text-accent-light dark:text-accent-dark" />
              <span className="font-mono">LinkedIn</span>
            </a>

            <a
              href="https://github.com/rajput-vishal01"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group flex items-center gap-4 px-8 py-4 bg-accent-light/10 dark:bg-accent-dark/10 
                       rounded-xl hover:bg-accent-light/20 dark:hover:bg-accent-dark/20 transition-colors">
              <FaGithub className="text-2xl text-accent-light dark:text-accent-dark" />
              <span className="font-mono">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
