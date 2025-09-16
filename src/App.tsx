import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react"
import SidebarNavigation from "./components/Navigation/SidebarNavigation";
import HeroSection from "./components/Sections/HeroSection";
import AboutSection from "./components/Sections/AboutSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import ContactSection from "./components/Sections/ContactSection";
import AnimatedBackground from "./components/Background/AnimatedBackground";

// ================ Main App Component ================
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [navWidth, setNavWidth] = useState(280);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 50;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Check navigation width
  useEffect(() => {
    const checkNavWidth = () => {
      const nav = document.querySelector(".sidebar-nav");
      if (nav) {
        const isCollapsed = nav.classList.contains("collapsed");
        setNavWidth(isCollapsed ? 113 : 280);
      }
    };

    const interval = setInterval(checkNavWidth, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "#0a0a0f",
          color: "#e0e0e0",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Sidebar Navigation */}
        <SidebarNavigation
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Main Content */}
        <main
          style={{
            marginLeft: window.innerWidth >= 992 ? `${navWidth}px` : "0",
            transition: "margin-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            paddingTop: window.innerWidth < 992 ? "60px" : "0",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div id="home">
            <HeroSection />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="projects">
            <ProjectsSection />
          </div>
          <div id="experience">
            <ExperienceSection />
          </div>
          <div id="contact" style={{ marginBottom: "330px" }}>
            <ContactSection />
          </div>

          {/* Footer */}
          <footer
            className="text-center py-4"
            style={{
              background: "rgba(10, 10, 15, 0.95)",
              borderTop: "1px solid rgba(102, 126, 234, 0.2)",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <p className="mb-0" style={{ color: "rgba(160, 160, 160, 0.9)" }}>
              © 2025 Tatu Pulkkinen. Built with React, TypeScript and Bootstrap
            </p>
          </footer>
        </main>
      </div>
      <Analytics/> {/* Vercel Analytics  */}
    </>
  );
};

export default App;
