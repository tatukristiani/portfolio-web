import React, { useState } from "react";
import {
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Home,
  User,
  Code,
  Briefcase,
  FolderOpen,
  Send,
  Menu,
  X,
} from "lucide-react";
import { NavItem } from "../../types/index";

// ================ Sidebar Navigation Component ================
const SidebarNavigation: React.FC<{
  activeSection: string;
  onNavigate: (section: string) => void;
}> = ({ activeSection, onNavigate }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "skills", label: "Skills", icon: <Code size={20} /> },
    { id: "projects", label: "Projects", icon: <FolderOpen size={20} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={20} /> },
    { id: "contact", label: "Contact", icon: <Send size={20} /> },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle d-lg-none"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1060,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          borderRadius: "15px",
          padding: "12px",
          color: "white",
          boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
          transition: "all 0.3s",
        }}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav
        className={`sidebar-nav ${isMobileOpen ? "mobile-open" : ""} ${
          isCollapsed ? "collapsed" : ""
        }`}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: isCollapsed ? "113px" : "280px",
          background:
            "linear-gradient(180deg, rgba(15, 15, 25, 0.98) 0%, rgba(25, 25, 40, 0.98) 100%)",
          backdropFilter: "blur(20px)",
          borderRight: "1px solid rgba(102, 126, 234, 0.3)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 1050,
          display: window.innerWidth < 992 && !isMobileOpen ? "none" : "flex",
          flexDirection: "column",
          boxShadow: "5px 0 40px rgba(102, 126, 234, 0.15)",
        }}
      >
        {/* Logo Section */}
        <div
          className="sidebar-logo-section"
          style={{
            padding: "30px 20px",
            borderBottom: "1px solid rgba(102, 126, 234, 0.2)",
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "25px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "bold",
              color: "white",
              margin: "0 auto",
              animation: "pulse 3s ease-in-out infinite",
              position: "relative",
            }}
          >
            <span style={{ zIndex: 1 }}>TP</span>
          </div>

          {!isCollapsed && (
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <h5
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Tatu Pulkkinen
              </h5>
              <small
                style={{ color: "rgba(160, 160, 160, 0.9)", fontSize: "13px" }}
              >
                Software Engineer
              </small>
            </div>
          )}

          {/* Collapse Toggle Button */}
          <button
            className="d-none d-lg-flex"
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              position: "absolute",
              right: "-15px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "3px solid rgba(10, 10, 15, 0.95)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
              transition: "all 0.3s",
            }}
          >
            <ChevronRight
              size={16}
              style={{
                transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.3s",
              }}
            />
          </button>
        </div>

        {/* Navigation Items */}
        <div style={{ flex: 1, padding: "20px 0", overflow: "hidden" }}>
          {navItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                position: "relative",
                animation: `slideInLeft 0.5s ease ${index * 0.1}s both`,
              }}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  width: "100%",
                  padding: isCollapsed ? "15px 0" : "15px 25px",
                  background: "transparent",
                  border: "none",
                  color:
                    activeSection === item.id
                      ? "#667eea"
                      : "rgba(160, 160, 160, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isCollapsed ? "center" : "flex-start",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  position: "relative",
                  transform:
                    hoveredItem === item.id
                      ? "translateX(5px)"
                      : "translateX(0)",
                }}
              >
                {/* Active Indicator Bar */}
                {activeSection === item.id && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "4px",
                      height: "35px",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: "0 4px 4px 0",
                      boxShadow: "0 0 20px rgba(102, 126, 234, 0.6)",
                    }}
                  />
                )}

                {/* Icon Container */}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background:
                      activeSection === item.id
                        ? "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)"
                        : hoveredItem === item.id
                        ? "rgba(102, 126, 234, 0.1)"
                        : "transparent",
                    marginRight: isCollapsed ? "0" : "15px",
                    transition: "all 0.3s",
                    boxShadow:
                      activeSection === item.id
                        ? "0 4px 15px rgba(102, 126, 234, 0.2)"
                        : "none",
                  }}
                >
                  {item.icon}
                </span>

                {/* Label */}
                {(isMobileOpen || !isCollapsed) && (
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: activeSection === item.id ? 600 : 400,
                      letterSpacing:
                        activeSection === item.id ? "0.5px" : "0px",
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Social Links Section */}

        {!isCollapsed && (
          <div
            style={{
              padding: "20px",
              borderTop: "1px solid rgba(102, 126, 234, 0.2)",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {[
              {
                icon: <Github size={22} />,
                url: "https://github.com/tatukristiani",
                color: "#667eea",
              },
              {
                icon: <Linkedin size={22} />,
                url: "https://www.linkedin.com/in/pulkkinentatu",
                color: "#0077b5",
              },
              {
                icon: <Mail size={22} />,
                url: "mailto:tatukristian@gmail.com",
                color: "#ea4335",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(160, 160, 160, 0.9)",
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(160, 160, 160, 0.9)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @media (max-width: 991px) {
          .sidebar-nav.mobile-open {
            display: flex !important;
            width: 280px !important;
          }
        }
      `}</style>
    </>
  );
};

export default SidebarNavigation;
