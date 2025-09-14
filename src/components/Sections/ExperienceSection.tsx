import { Briefcase, MapPin, Calendar, Star, CheckCircle } from "lucide-react";
import { Experience } from "../../types/index";

// ================ Experience Section Component ================
const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Integration Developer",
      company: "Frends Technology / HiQ Finland",
      period: "May 2022 - Present",
      location: "Espoo, Finland",
      description: [
        "Designed and implemented business critical processes and integrations",
        "Developed REST APIs and automated complex business workflows",
        "Performed debugging and maintenance of production systems",
        "Worked as IT Operator handling production failures",
      ],
      technologies: ["C#", "SQL", "APIs", "XML", "JSON", ".NET", "GitHub"],
    },
    {
      title: "Storage Worker",
      company: "Makita",
      period: "December 2018 - January 2021",
      location: "Vantaa, Finland",
      description: [
        "Managed logistics operations and order fulfillment",
        "Enhanced attention to detail and organizational skills",
        "Part-time responsibilities for order sheet examination and reporting",
      ],
      technologies: ["Logistics", "Time Management", "Attention to Detail"],
    },
    {
      title: "Truck Driver",
      company: "Posti",
      period: "July 2018 - November 2018",
      location: "Uusimaa, Finland",
      description: [
        "Started with parcel distribution and advanced to pallet distribution",
        "Developed time management skills and perseverance",
      ],
      technologies: ["Time Management", "Customer Service"],
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5" style={{ color: "#667eea" }}>
          <Briefcase className="me-3" size={45} />
          Work Experience
        </h2>

        <div className="row">
          <div className="col-lg-8">
            <div style={{ position: "relative", paddingLeft: "40px" }}>
              {/* Timeline Line */}
              <div
                style={{
                  position: "absolute",
                  left: "15px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background:
                    "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
                }}
              />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="mb-4"
                  style={{
                    position: "relative",
                    animation: `slideInLeft 0.8s ease ${index * 0.2}s both`,
                  }}
                >
                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-30px",
                      top: "15px",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background:
                        index === 0
                          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          : "rgba(102, 126, 234, 0.5)",
                      border: "3px solid rgba(10, 10, 15, 0.95)",
                      boxShadow:
                        index === 0
                          ? "0 0 20px rgba(102, 126, 234, 0.6)"
                          : "0 0 10px rgba(102, 126, 234, 0.3)",
                      animation: index === 0 ? "pulse 2s infinite" : "none",
                    }}
                  />

                  <div
                    className="p-4"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "20px",
                      border: "1px solid rgba(102, 126, 234, 0.2)",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(5px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(102, 126, 234, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <h4 className="text-white mb-1">{exp.title}</h4>
                    <h5 style={{ color: "#667eea", fontSize: "1.1rem" }}>
                      {exp.company}
                    </h5>
                    <p
                      className="mb-3"
                      style={{ color: "rgba(160, 160, 160, 0.9)" }}
                    >
                      <Calendar className="me-2" size={16} />
                      {exp.period} | <MapPin className="me-1" size={16} />{" "}
                      {exp.location}
                    </p>
                    <ul
                      style={{
                        color: "rgba(160, 160, 160, 0.9)",
                        paddingLeft: "20px",
                      }}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="badge"
                          style={{
                            background: "rgba(102, 126, 234, 0.2)",
                            color: "#667eea",
                            border: "1px solid rgba(102, 126, 234, 0.3)",
                            padding: "4px 10px",
                            borderRadius: "15px",
                            fontSize: "11px",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "100px" }}>
              <div
                className="p-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                  borderRadius: "25px",
                  border: "1px solid rgba(102, 126, 234, 0.2)",
                }}
              >
                <h4 className="text-white mb-4">
                  <Star className="me-2" size={24} />
                  Core Strengths
                </h4>
                {[
                  "Team Player",
                  "Problem Solving",
                  "Continuous Learning",
                  "Attention to Detail",
                  "Time Management",
                  "Agile Development",
                  "Communication",
                  "Adaptability",
                ].map((strength, index) => (
                  <div
                    key={strength}
                    className="mb-2"
                    style={{
                      animation: `fadeIn 0.5s ease ${index * 0.1}s both`,
                    }}
                  >
                    <CheckCircle
                      className="me-2"
                      size={16}
                      style={{ color: "#667eea" }}
                    />
                    <span style={{ color: "rgba(160, 160, 160, 0.9)" }}>
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
