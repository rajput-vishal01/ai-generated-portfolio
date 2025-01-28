const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-light dark:bg-section-dark py-8">
      <div className="container-wrapper">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-text-light dark:text-text-dark">
              © {currentYear} Vishal Rajput. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/rajput-vishal01"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-text-light dark:text-text-dark hover:text-accent-light 
                       dark:hover:text-accent-dark transition-colors">
              GitHub
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-light dark:bg-accent-dark 
                           group-hover:w-full transition-all duration-300"
              />
            </a>
            <a
              href="mailto:askvishal.me@gmail.com"
              className="relative group text-text-light dark:text-text-dark hover:text-accent-light 
                       dark:hover:text-accent-dark transition-colors">
              Email
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-light dark:bg-accent-dark 
                           group-hover:w-full transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
