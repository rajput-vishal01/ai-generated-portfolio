import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Force exactly 2 seconds duration
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    let progressInterval;

    // Start with 0% progress
    setProgress(0);

    // Animate progress from 0 to 100 over 2 seconds
    progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progressPercentage = Math.min((elapsedTime / duration) * 100, 100);
      setProgress(progressPercentage);
    }, 16); // ~60fps for smooth animation

    // Force the loader to stay visible for exactly 2 seconds
    const hideTimeout = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);

      // Add a small delay for the final fade-out
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimeout);
    };
  }, []); // Empty dependency array ensures this only runs once

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-light dark:bg-primary-dark">
      <div className="space-y-8 text-center">
        <div className="relative w-64 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-accent-light dark:bg-accent-dark transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-2xl font-mono text-text-light dark:text-text-dark">
          Loading... {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
