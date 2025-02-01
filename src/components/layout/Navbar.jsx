import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaDownload, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="relative font-humane text-xl tracking-wider cursor-pointer transition-colors px-5 py-2 group">
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-left" />
  </Link>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Replace '/resume.pdf' with the actual path to your resume file
    const resumeUrl =
      "https://drive.google.com/file/d/1Ee_1n_Q7uR8i0zmCL8dAh_601tlZ8lrw/view?usp=sharing";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "askvishal.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-sm
        ${
          isScrolled
            ? "bg-white/80 dark:bg-neutral-900/80 shadow-lg py-5"
            : "bg-transparent py-7"
        }`}>
      <div className="container-wrapper">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            className="font-display text-3xl tracking-widest cursor-pointer hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            Dev.
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="about">About</NavLink>
            <a
              href="https://www.linkedin.com/in/askvishal01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 font-mono text-accent-light dark:text-accent-dark 
                       hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 rounded-lg transition-colors">
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-5 py-2 font-mono text-accent-light dark:text-accent-dark 
                       border-2 border-accent-light dark:border-accent-dark rounded-lg
                       hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors">
              <FaDownload className="text-sm" />
              Resume
            </button>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }>
              {isDark ? (
                <FaSun className="text-xl text-accent-dark" />
              ) : (
                <FaMoon className="text-xl text-accent-light" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300
                  ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-opacity duration-300
                  ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300
                  ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col items-center space-y-4 pt-4 pb-6">
            <NavLink to="about">About</NavLink>
            <a
              href="https://www.linkedin.com/in/askvishal01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 font-mono text-accent-light dark:text-accent-dark 
                       hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 rounded-lg transition-colors">
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-5 py-2 font-mono text-accent-light dark:text-accent-dark 
                       border-2 border-accent-light dark:border-accent-dark rounded-lg
                       hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors">
              <FaDownload className="text-sm" />
              Resume
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }>
              {isDark ? (
                <FaSun className="text-xl text-accent-dark" />
              ) : (
                <FaMoon className="text-xl text-accent-light" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
