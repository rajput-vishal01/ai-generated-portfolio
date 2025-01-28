import { gsap } from "gsap";

export const animationDefaults = {
  fadeUp: {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  },
  fadeIn: {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },
  slideIn: {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  },
};

export const scrollTriggerDefaults = {
  start: "top bottom-=100",
  end: "top center",
  toggleActions: "play none none none",
  once: true,
};

export const setupScrollAnimation = (element, animation, trigger = {}) => {
  return gsap.from(element, {
    ...animationDefaults[animation],
    scrollTrigger: {
      trigger: element,
      ...scrollTriggerDefaults,
      ...trigger,
    },
  });
};

export const cleanupGSAP = () => {
  const ctx = gsap.context(() => {});
  return () => {
    ctx.revert();
    gsap.killTweensOf("*");
  };
};
