import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const ThemeTransition = ({
  isTransitioning,
  targetTheme,
  onTransitionComplete,
}) => {
  const [transitionPhase, setTransitionPhase] = useState("enter"); // 'enter', 'change', 'exit'

  useEffect(() => {
    if (isTransitioning) {
      // Phase 1: Enter
      setTransitionPhase("enter");

      // Phase 2: Change theme (at 0.8s)
      setTimeout(() => {
        setTransitionPhase("change");
      }, 800);

      // Phase 3: Exit (at 1.6s)
      setTimeout(() => {
        setTransitionPhase("exit");
      }, 1600);

      // Complete transition (at 2s)
      setTimeout(() => {
        setTransitionPhase("enter");
        onTransitionComplete();
      }, 2000);
    }
  }, [isTransitioning]);

  if (!isTransitioning) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-800 ease-in-out
        ${transitionPhase === "enter" ? "opacity-100 translate-y-0" : ""}
        ${transitionPhase === "exit" ? "opacity-0 -translate-y-full" : ""}`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
      <LoadingScreen
        forceTheme={transitionPhase === "change" ? targetTheme : null}
      />
    </div>
  );
};

export default ThemeTransition;
