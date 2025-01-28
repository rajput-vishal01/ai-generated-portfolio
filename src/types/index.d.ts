// Add TypeScript types
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  video: string;
}

interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}
