import {
  Github,
  FolderOpen,
  ExternalLink,
  Globe,
  Gamepad,
  ShoppingCart,
  Terminal,
  Film,
  Layers,
  HouseIcon
} from "lucide-react";
import { Project } from "../../types/index";

// ================ Projects Section Component ================
const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "My Movies",
      description:
        "Full-stack web app for tracking watched movies with user authentication and personal ratings.",
      icon: <Film size={40} />,
      techStack: ["C#", "React", "Azure SQL", "CI/CD", ".NET Core"],
      liveUrl: "https://mymovieonline.azurewebsites.net",
      githubUrl: "https://github.com/tatukristiani/azure-mymovies-react",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: 2,
      title: "Forgotten Brotherhood",
      description:
        "2D Unity platformer game with custom mechanics, level design, and engaging gameplay.",
      icon: <Gamepad size={40} />,
      techStack: ["Unity 2D", "C#", "Game Design"],
      liveUrl: "https://simmer.io/@tatukristian/forgotten-brotherhood",
      githubUrl: "https://github.com/tatukristiani/ForgottenBrotherhoodUnity",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: 3,
      title: "Portfolio Website v1.0",
      description:
        "Modern portfolio built with React, TypeScript, and stunning animations.",
      icon: <Globe size={40} />,
      techStack: ["React", "TypeScript", "Bootstrap", "Modern UI/UX"],
      githubUrl: "https://github.com/tatukristiani/portfolio",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
     {
      id: 4,
      title: "Portfolio Website v2.0",
      description:
        "More improved and visually appealing portfolio website built with React, TypeScript, and stunning animations.",
      icon: <Globe size={40} />,
      techStack: ["React", "TypeScript", "Bootstrap", "Modern UI/UX"],
      githubUrl: "https://github.com/tatukristiani/portfolio-web",
      gradient: "linear-gradient(135deg, #7a86ecff 0%, #fed6e3 100%)",
    },
    {
      id: 5,
      title: "Villa Rater",
      description:
        "Group decision-making app for choosing the perfect holiday villa",
      icon: <HouseIcon size={40} />,
      techStack: ["React", "TypeScript", "Bootstrap", "Supabase", "PostgreSQL", "AI", "Vite"],
      githubUrl: "https://github.com/tatukristiani/villa-rater",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: 6,
      title: "Console Chess",
      description:
        "Fully functional chess game with AI opponent, move validation, and game state management.",
      icon: <Terminal size={40} />,
      techStack: ["C#", "Algorithms", "Game Logic"],
      githubUrl: "https://github.com/tatukristiani/console-chess",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: 7,
      title: "Sales Alert Pro",
      description:
        "Web scraping application for monitoring product prices with automated alert system.",
      icon: <ShoppingCart size={40} />,
      techStack: ["React", "Node.js", "Express", "MongoDB", "Web Scraping"],
      githubUrl: "https://github.com/tatukristiani/shop-scraper-frontend",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: 8,
      title: "Vincit Project",
      description:
        "Bitcoin data analyzer with advanced visualization and historical data analysis.",
      icon: <Layers size={40} />,
      techStack: ["JavaScript", "Data Visualization", "API Integration"],
      githubUrl: "https://github.com/tatukristiani/VincitProject",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    },
    {
      id: 9,
      title: "Genapi",
      description:
        "Application still in development which could be utilized to generate a data-driven APIs with user inputs. Github repo is private for the backend.",
      icon: <Layers size={40} />,
      techStack: ["C#", "React", "Azure SQL", "CI/CD", ".NET Core"],
      githubUrl: "https://github.com/tatukristiani/genapi",
      gradient: "linear-gradient(135deg, #520202ff 0%, #fc9f9fff 100%)",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5" style={{ color: "#667eea" }}>
          <FolderOpen className="me-3" size={45} />
          Featured Projects
        </h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div
                className="h-100"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "25px",
                  border: "1px solid rgba(102, 126, 234, 0.2)",
                  overflow: "hidden",
                  transition: "all 0.3s",
                  animation: `fadeInUp 0.8s ease ${index * 0.1}s both`,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(102, 126, 234, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    height: "180px",
                    background: project.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-50%",
                      right: "-50%",
                      width: "200%",
                      height: "200%",
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                      animation: "rotate 20s linear infinite",
                    }}
                  />
                  {project.icon}
                </div>

                <div className="p-4">
                  <h4 className="text-white mb-2">{project.title}</h4>
                  <p
                    style={{
                      color: "rgba(160, 160, 160, 0.9)",
                      fontSize: "14px",
                      minHeight: "60px",
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="badge"
                        style={{
                          background: "rgba(102, 126, 234, 0.2)",
                          color: "#667eea",
                          border: "1px solid rgba(102, 126, 234, 0.3)",
                          padding: "5px 12px",
                          borderRadius: "20px",
                          fontSize: "11px",
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          color: "white",
                          border: "none",
                          borderRadius: "20px",
                          padding: "6px 15px",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} className="me-1" /> Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm"
                      style={{
                        background: "transparent",
                        color: "#667eea",
                        border: "1px solid #667eea",
                        borderRadius: "20px",
                        padding: "6px 15px",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(102, 126, 234, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <Github size={14} className="me-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
