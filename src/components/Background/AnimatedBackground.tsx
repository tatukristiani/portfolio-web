import React, { useEffect } from "react";
import "../../styles/background.css";

// ================ Animated Background Component ================
const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("particles-container");
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "floating-particle";

      // Random horizontal position
      particle.style.left = Math.random() * 100 + "%";

      // Random duration so speeds differ
      particle.style.animationDuration = 15 + Math.random() * 10 + "s";

      // Random delay so they don't all sync
      particle.style.animationDelay = Math.random() * 20 + "s";

      // Give them a random vertical starting offset below screen
      const startOffset = Math.random() * 100; // vh
      particle.style.transform = `translateY(${startOffset + 100}vh)`;
      // ensures all start below viewport at different depths

      container.appendChild(particle);
    };

    for (let i = 0; i < 30; i++) {
      createParticle();
    }
  }, []);

  return (
    <>
      <div className="animated-gradient-bg" />
      <div
        id="particles-container"
        className="particles-container"
      />
    </>
  );
};

export default AnimatedBackground;
