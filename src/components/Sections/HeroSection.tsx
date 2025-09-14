import React, { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

// ================ Hero Section Component ================
const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    "Building robust integrations",
    "Creating scalable solutions",
    "Solving complex problems",
    "Writing clean code",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center position-relative">
      <div className="container text-center">
        <div style={{ animation: "fadeInUp 1s ease" }}>
          <h1
            className="display-1 fw-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-2px",
            }}
          >
            Tatu Pulkkinen
          </h1>

          <div className="mb-4" style={{ minHeight: "50px" }}>
            <span
              className="fs-3"
              style={{
                fontFamily: "monospace",
                color: "#667eea",
                fontWeight: 500,
              }}
            >
              {typedText}
              <span
                style={{
                  animation: "blink 1s infinite",
                  color: "#764ba2",
                  fontWeight: "bold",
                }}
              >
                |
              </span>
            </span>
          </div>

          <p
            className="lead mb-5"
            style={{
              color: "rgba(160, 160, 160, 0.9)",
              fontSize: "1.3rem",
            }}
          >
            Integration Developer | Full-Stack Engineer | Problem Solver
          </p>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a
              href="https://github.com/tatukristiani"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                padding: "14px 35px",
                borderRadius: "50px",
                fontWeight: 600,
                transition: "all 0.3s",
                boxShadow: "0 5px 20px rgba(102, 126, 234, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(102, 126, 234, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(102, 126, 234, 0.3)";
              }}
            >
              <Github className="me-2" size={22} /> GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/pulkkinentatu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{
                background: "transparent",
                color: "#667eea",
                border: "2px solid #667eea",
                padding: "14px 35px",
                borderRadius: "50px",
                fontWeight: 600,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#667eea";
                e.currentTarget.style.borderColor = "#667eea";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Linkedin className="me-2" size={22} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
