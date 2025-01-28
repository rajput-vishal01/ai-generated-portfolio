// Theme management context
// Handles theme persistence, system preference, and transitions
// Provides theme toggle functionality to entire app

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      // Get theme from localStorage or use system preference
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === null) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return savedTheme === "true"; // Convert string to boolean
    } catch (error) {
      console.warn("Error reading theme from localStorage:", error);
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    try {
      // Save theme as string 'true' or 'false'
      localStorage.setItem("theme", String(isDark));
      document.documentElement.classList.toggle("dark", isDark);
    } catch (error) {
      console.warn("Error saving theme to localStorage:", error);
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
