import { Code, Database, Server, GitBranch, Palette } from "lucide-react";
import { Skill } from "../../types/index";

// ================ Skills Section Component ================
const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: "React", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 75, category: "Frontend" },
    { name: "HTML/CSS", level: 85, category: "Frontend" },
    { name: "Bootstrap", level: 80, category: "Frontend" },
    // Backend
    { name: "C# / .NET", level: 85, category: "Backend" },
    { name: "Node.js / Express", level: 85, category: "Backend" },
    { name: "Integration Development", level: 95, category: "Backend" },
    { name: "REST APIs", level: 80, category: "Backend" },
    // Database
    { name: "MSSQL", level: 85, category: "Database" },
    { name: "MySQL", level: 80, category: "Database" },
    { name: "PostgreSQL", level: 70, category: "Database" },
    { name: "MongoDB", level: 65, category: "Database" },
    { name: "Azure SQL", level: 75, category: "Database" },
    // Tools
    { name: "Git", level: 90, category: "Tools" },
    { name: "Azure DevOps", level: 65, category: "Tools" },
    { name: "CI/CD", level: 75, category: "Tools" },
    { name: "Docker", level: 60, category: "Tools" },
    { name: "Jira", level: 90, category: "Tools" },
    { name: "Unit Testing", level: 90, category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Database", "Tools"];
  const categoryData: Record<string, { icon: React.ReactNode; color: string }> =
    {
      Frontend: { icon: <Palette size={24} />, color: "#667eea" },
      Backend: { icon: <Server size={24} />, color: "#764ba2" },
      Database: { icon: <Database size={24} />, color: "#f093fb" },
      Tools: { icon: <GitBranch size={24} />, color: "#4facfe" },
    };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5" style={{ color: "#667eea" }}>
          <Code className="me-3" size={45} />
          Technical Skills
        </h2>

        <div className="row g-4">
          {categories.map((category, catIndex) => (
            <div key={category} className="col-lg-6">
              <div
                className="h-100 p-4"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "25px",
                  border: "1px solid rgba(102, 126, 234, 0.2)",
                  animation: `fadeInUp 0.8s ease ${catIndex * 0.1}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(102, 126, 234, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h4 className="mb-4 text-white d-flex align-items-center">
                  <span
                    style={{
                      marginRight: "10px",
                      color: categoryData[category].color,
                    }}
                  >
                    {categoryData[category].icon}
                  </span>
                  {category} Skills
                </h4>

                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className="mb-3"
                      style={{
                        animation: `slideInRight 0.5s ease ${
                          index * 0.05
                        }s both`,
                      }}
                    >
                      <div className="d-flex justify-content-between mb-1">
                        <span
                          className="text-white"
                          style={{ fontSize: "14px", fontWeight: 500 }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            color: categoryData[category].color,
                            fontSize: "13px",
                            fontWeight: 600,
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: "8px",
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${skill.level}%`,
                            height: "100%",
                            background: `linear-gradient(90deg, ${categoryData[category].color} 0%, ${categoryData[category].color}dd 100%)`,
                            borderRadius: "10px",
                            position: "relative",
                            animation: `progressLoad 1.5s ease ${
                              index * 0.1
                            }s both`,
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background:
                                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                              animation: "shimmer 2s infinite",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
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
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes progressLoad {
          from { width: 0; }
        }
        
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
