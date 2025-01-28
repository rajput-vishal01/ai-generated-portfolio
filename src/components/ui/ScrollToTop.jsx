import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full bg-accent-light dark:bg-accent-dark text-white 
                 shadow-lg transform transition-all duration-300 z-50
                 ${
                   isVisible
                     ? "translate-y-0 opacity-100"
                     : "translate-y-20 opacity-0"
                 }`}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
