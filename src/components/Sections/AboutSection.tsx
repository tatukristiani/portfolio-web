import {
  User,
  Code,
  Briefcase,
  Award,
  MapPin,
  Heart,
  Target,
} from "lucide-react";

// ================ About Section Component ================
const AboutSection: React.FC = () => {
  const stats = [
    { number: "3+", label: "Years Experience", color: "#667eea" },
    { number: "10+", label: "Technologies", color: "#764ba2" },
    { number: "9+", label: "Projects", color: "#667eea" },
    { number: "28+", label: "Age", color: "#764ba2" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2
          className="display-4 fw-bold mb-5"
          style={{
            color: "#667eea",
            animation: "slideInLeft 0.8s ease",
          }}
        >
          <User className="me-3" size={45} />
          About Me
        </h2>

        <div className="row g-4">
          <div className="col-lg-8">
            <div
              className="h-100 p-4"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                borderRadius: "25px",
                border: "1px solid rgba(102, 126, 234, 0.2)",
                animation: "fadeIn 1s ease",
              }}
            >
              <h3 className="mb-4 text-white">
                Software Engineer from Finland 🇫🇮
              </h3>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3">
                    <Award
                      style={{
                        color: "#667eea",
                        marginRight: "12px",
                        marginTop: "3px",
                      }}
                      size={20}
                    />
                    <div>
                      <strong className="text-white">Education:</strong>
                      <p
                        className="mb-0"
                        style={{ color: "rgba(160, 160, 160, 0.9)" }}
                      >
                        Bachelor of ICT Engineering - Software Engineering
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <MapPin
                      style={{
                        color: "#667eea",
                        marginRight: "12px",
                        marginTop: "3px",
                      }}
                      size={20}
                    />
                    <div>
                      <strong className="text-white">Location:</strong>
                      <p
                        className="mb-0"
                        style={{ color: "rgba(160, 160, 160, 0.9)" }}
                      >
                        Vantaa, Finland
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <Briefcase
                      style={{
                        color: "#667eea",
                        marginRight: "12px",
                        marginTop: "3px",
                      }}
                      size={20}
                    />
                    <div>
                      <strong className="text-white">Current Role:</strong>
                      <p
                        className="mb-0"
                        style={{ color: "rgba(160, 160, 160, 0.9)" }}
                      >
                        Integration Developer at Frends Technology
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3">
                    <Heart
                      style={{
                        color: "#764ba2",
                        marginRight: "12px",
                        marginTop: "3px",
                      }}
                      size={20}
                    />
                    <div>
                      <strong className="text-white">Passion:</strong>
                      <p
                        className="mb-0"
                        style={{ color: "rgba(160, 160, 160, 0.9)" }}
                      >
                        Full SW development process from idea to product
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <Code
                      style={{
                        color: "#764ba2",
                        marginRight: "12px",
                        marginTop: "3px",
                      }}
                      size={20}
                    />
                    <div>
                      <strong className="text-white">Love:</strong>
                      <p
                        className="mb-0"
                        style={{ color: "rgba(160, 160, 160, 0.9)" }}
                      >
                        Backend technologies & challenging myself
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <Target
                      style={{
                        color: "#764ba2",
                        marginRight: "12px",
                        marginTop: "3px",
                      }}
                      size={20}
                    />
                    <div>
                      <strong className="text-white">Focus:</strong>
                      <p
                        className="mb-0"
                        style={{ color: "rgba(160, 160, 160, 0.9)" }}
                      >
                        Clean code, scalability, best practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <blockquote
                className="mt-4 p-3"
                style={{
                  borderLeft: "4px solid #667eea",
                  background: "rgba(102, 126, 234, 0.1)",
                  borderRadius: "15px",
                  fontStyle: "italic",
                }}
              >
                <p className="mb-0 text-white">
                  "With a little bit of motivation & the right tools, anything
                  is possible."
                </p>
              </blockquote>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="h-100 p-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                borderRadius: "25px",
                border: "1px solid rgba(102, 126, 234, 0.2)",
                animation: "fadeIn 1s ease 0.2s both",
              }}
            >
              <h4 className="text-white mb-4 text-center">Quick Stats</h4>
              <div className="row g-3">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6 text-center">
                    <div
                      style={{
                        padding: "15px",
                        borderRadius: "15px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: `1px solid ${stat.color}33`,
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.03)";
                      }}
                    >
                      <h2
                        style={{
                          color: stat.color,
                          fontSize: "2.5rem",
                          margin: 0,
                          fontWeight: "bold",
                        }}
                      >
                        {stat.number}
                      </h2>
                      <p
                        style={{
                          color: "rgba(160, 160, 160, 0.9)",
                          fontSize: "0.9rem",
                          margin: 0,
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
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
      `}</style>
    </section>
  );
};

export default AboutSection;
