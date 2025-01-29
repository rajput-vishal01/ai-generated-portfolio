import { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import LoadingScreen from "./components/ui/LoadingScreen";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollToTop from "./components/ui/ScrollToTop";

// Lazy load components
const Hero = lazy(() => import("./components/sections/Hero"));
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Works = lazy(() => import("./components/sections/Works"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const Contact = lazy(() => import("./components/sections/Contact"));

// Project component imports
const CursorPortfolio = lazy(() =>
  import("./components/projects/CursorPortfolio")
);
const AiSaas = lazy(() => import("./components/projects/AiSaas"));
const BlockchainExplorer = lazy(() =>
  import("./components/projects/BlockchainExplorer")
);
const MlPlatform = lazy(() => import("./components/projects/MlPlatform"));
const SmartHomeDashboard = lazy(() =>
  import("./components/projects/SmartHomeDashboard")
);
const RealtimeCollab = lazy(() =>
  import("./components/projects/RealtimeCollab")
);
const NotFound = lazy(() => import("./components/pages/NotFound"));

// Project mapping configuration
const PROJECT_CONFIG = {
  "cursor-portfolio": {
    component: CursorPortfolio,
    displayName: "portfolio",
  },
  "ai-saas": {
    component: AiSaas,
    displayName: "SkillSphere",
  },
  "blockchain-explorer": {
    component: BlockchainExplorer,
    displayName: "ChainScan",
  },
  "ml-platform": {
    component: MlPlatform,
    displayName: "ByteCraft",
  },
  "smart-home": {
    component: SmartHomeDashboard,
    displayName: "HomeHub",
  },
  "realtime-collab": {
    component: RealtimeCollab,
    displayName: "CollabSpace",
  },
};

// Project Handler Component
const ProjectHandler = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = Object.entries(PROJECT_CONFIG).find(
    ([id, config]) => id === projectId || config.displayName === projectId
  );

  useEffect(() => {
    if (project) {
      const [actualId, config] = project;
      // Only mask URL if using technical ID
      if (actualId === projectId) {
        navigate(`/work/${config.displayName}`, { replace: true });
      }
    }
  }, [project, projectId, navigate]);

  if (!project) return <NotFound />;

  const ProjectComponent = project[1].component;
  return <ProjectComponent />;
};

// Main content component
const MainContent = () => (
  <main className="min-h-screen bg-primary-light dark:bg-primary-dark">
    <Suspense fallback={<LoadingScreen />}>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Testimonials />
      <Contact />
    </Suspense>
  </main>
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="relative">
          <CustomCursor />
          <Navbar />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="page-transition">
                    <MainContent />
                  </div>
                }
              />

              <Route
                path="/work/:projectId"
                element={
                  <div className="page-transition">
                    <ProjectHandler />
                  </div>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
