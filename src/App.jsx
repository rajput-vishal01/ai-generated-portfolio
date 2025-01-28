import { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

// Lazy load project components
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

// Lazy load project detail component
const ProjectDetail = lazy(() => import("./components/sections/ProjectDetail"));

// Lazy load NotFound component
const NotFound = lazy(() => import("./components/pages/NotFound"));

// Main content component
const MainContent = () => (
  <main className="min-h-screen bg-primary-light dark:bg-primary-dark">
    <Hero />
    <About />
    <Skills />
    <Works />
    <Testimonials />
    <Contact />
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
                path="/work/*"
                element={
                  <div className="page-transition">
                    <Routes>
                      <Route
                        path="cursor-portfolio"
                        element={<CursorPortfolio />}
                      />
                      <Route path="ai-saas" element={<AiSaas />} />
                      <Route
                        path="blockchain-explorer"
                        element={<BlockchainExplorer />}
                      />
                      <Route path="ml-platform" element={<MlPlatform />} />
                      <Route
                        path="smart-home"
                        element={<SmartHomeDashboard />}
                      />
                      <Route
                        path="realtime-collab"
                        element={<RealtimeCollab />}
                      />
                    </Routes>
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
