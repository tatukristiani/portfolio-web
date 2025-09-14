import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin,
  Loader2,
  CheckCircle2,
  XCircle,
  MoveRight,
} from "lucide-react";
import { ContactForm } from "../../types/index";
import emailjs from "@emailjs/browser";

// ================ Contact Section Component ================
const ContactSection: React.FC = () => {
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const initEmailJS = () => {
    emailjs.init({
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  };

  initEmailJS(); // Initialize EmailJS

  const handleSubmit = () => {
    if (!validate()) return;

    try {
      setStatus("loading");
      setTimeout(() => {
        emailjs
          .send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID!,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
            {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
            }
          )
          .then(
            (response) => {
              if (response.status === 200) {
                setStatus("success");
                setTimeout(() => setStatus("idle"), 3000); // Reset status after 3s
                setFormData({ name: "", email: "", message: "" });
                setErrors({});
              } else {
                setStatus("error");
              }
            },
            (error) => {
              setStatus("error");
            }
          );
      }, 1000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  // Validate contact informations
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update error status to idle when the contact form is modified
  useEffect(() => {
    if (status === "error") {
      setTimeout(() => {
        setStatus("idle");
        setErrors({});
      }, 1000);
    }
  }, [formData]);

  return (
    <section className="py-5 mb-5">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5" style={{ color: "#667eea" }}>
          <Send className="me-3" size={45} />
          Get In Touch
        </h2>

        <div className="row g-4">
          <div className="col-lg-6">
            <div
              className="h-100 p-4"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                borderRadius: "25px",
                border: "1px solid rgba(102, 126, 234, 0.2)",
              }}
            >
              <h4 className="text-white mb-4">Send Me a Message</h4>

              <div className="mb-3">
                <label className="form-label text-white">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(102, 126, 234, 0.3)",
                    color: "white",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label text-white">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(102, 126, 234, 0.3)",
                    color: "white",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              <div className="mb-4">
                <label className="form-label text-white">Message</label>
                <textarea
                  className="form-control"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(102, 126, 234, 0.3)",
                    color: "white",
                    borderRadius: "10px",
                    padding: "12px",
                    resize: "none",
                  }}
                />
                {errors.message && (
                  <small className="text-danger">{errors.message}</small>
                )}
              </div>

              <div className="d-flex flex-column align-items-center">
                <button
                  onClick={handleSubmit}
                  className={`btn btn-lg w-100 d-flex justify-content-center align-items-center gap-2 ${
                    status === "success"
                      ? "btn-success"
                      : status === "error"
                      ? "btn-danger"
                      : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    padding: "14px",
                    fontWeight: 600,
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {status === "idle" && (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                  {status === "loading" && (
                    <>
                      <Loader2 className="spin" size={20} /> Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle2
                        className="bounce"
                        color="green"
                        size={25}
                      />{" "}
                      Message sent!
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <XCircle size={25} color="#6e0f0fff" />{" "}
                      {"Failed to send message. My email"}
                      <MoveRight size={25} />
                    </>
                  )}
                </button>

                <style>
                  {`
            .spin {
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            .bounce {
                animation: bounce 0.6s ease;
            }
            @keyframes bounce {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.3); }
            }
            `}
                </style>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="h-100 p-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                borderRadius: "25px",
                border: "1px solid rgba(102, 126, 234, 0.2)",
              }}
            >
              <h4 className="text-white mb-4">Let's Connect</h4>
              <p className="mb-4" style={{ color: "rgba(160, 160, 160, 0.9)" }}>
                I'm always interested in hearing about new opportunities and
                exciting projects. Feel free to reach out if you'd like to
                collaborate or just have a chat!
              </p>

              <div className="mb-3">
                <Mail className="me-3" style={{ color: "#667eea" }} size={20} />
                <a
                  href="mailto:tatukristian@gmail.com"
                  style={{
                    color: "rgba(160, 160, 160, 0.9)",
                    textDecoration: "none",
                  }}
                >
                  tatukristian@gmail.com
                </a>
              </div>

              <div className="mb-4">
                <MapPin
                  className="me-3"
                  style={{ color: "#667eea" }}
                  size={20}
                />
                <span style={{ color: "rgba(160, 160, 160, 0.9)" }}>
                  Vantaa, Finland
                </span>
              </div>

              <h5 className="text-white mb-3">Connect on Social</h5>
              <div className="d-flex gap-3">
                {[
                  {
                    icon: <Github size={24} />,
                    url: "https://github.com/tatukristiani",
                    name: "GitHub",
                  },
                  {
                    icon: <Linkedin size={24} />,
                    url: "https://www.linkedin.com/in/pulkkinentatu",
                    name: "LinkedIn",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "rgba(160, 160, 160, 0.9)",
                      border: "1px solid rgba(102, 126, 234, 0.3)",
                      borderRadius: "15px",
                      padding: "12px 20px",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(102, 126, 234, 0.2)";
                      e.currentTarget.style.color = "#667eea";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.color = "rgba(160, 160, 160, 0.9)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {social.icon}
                    <span className="ms-2">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
