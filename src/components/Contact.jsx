("use client");
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCopy,
  FaPhone,
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        "EmailJS configuration missing. Please ensure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY are set in your .env file."
      );
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: `[PORTFOLIO CONTACT FORM]\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`,
        from_name: `${formData.name} (via Primedev100 Portfolio)`,
        from_email: formData.email,
        reply_to: formData.email,
        subject: `[Portfolio Inquiry] New message from ${formData.name}`,
        source: "Primedev100 Portfolio Website",
        site_name: "Primedev100 Portfolio",
        portfolio_source: "Primedev100 Portfolio Website",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrorMessage(
        "Failed to send email. Please try again or reach out directly via email."
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const contactInfo = [
    { label: "Email", value: "primedev100@gmail.com", icon: "✉️" },
    { label: "Phone", value: "+234 (0) 8067091463", icon: "📞" },
    { label: "Location", value: "Port Harcourt, Nig.", icon: "📍" },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl hidden sm:block"></div>
      <div className="absolute right-0 top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl hidden md:block"></div>

      <div className="relative z-10">
        <p className="section-header mb-4 text-center">#contact</p>

        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-balance leading-tight mb-6">
            Let's Build <span className="gradient-text">Something Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a project in mind or just want to collaborate? I'm always
            excited to discuss new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-xl">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">
                      {info.value}
                    </p>
                    {info.label === "Email" && (
                      <button
                        onClick={() => copyToClipboard(info.value)}
                        className="p-1 rounded-md hover:bg-muted transition-colors"
                        title="Copy email"
                      >
                        <FaCopy className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </button>
                    )}
                    {info.label === "Phone" && (
                      <a
                        href={`tel:${info.value.replace(/\s+/g, "")}`}
                        className="p-1 rounded-md hover:bg-muted transition-colors"
                        title="Call"
                      >
                        <FaPhone className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-5 rounded-2xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: FaGithub,
                    url: "https://github.com/primestacks",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    url: "https://linkedin.com/in/primestack",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaTwitter,
                    url: "https://x.com/primedev100",
                    label: "Twitter",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-card border border-border/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/10 hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-card border-2 border-border focus:border-primary focus:outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-card border-2 border-border focus:border-primary focus:outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3.5 rounded-xl bg-card border-2 border-border focus:border-primary focus:outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Tell me about your project..."
              />
            </div>

            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-medium">
                {errorMessage}
              </div>
            )}

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm font-medium flex items-center gap-2">
                <span>✓</span> Message sent successfully! I will get back to you shortly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className={`w-full px-8 py-4 gradient-bg text-primary-foreground rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] ${
                isSending ? "opacity-75 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isSending
                ? "Sending Message..."
                : submitted
                ? "✓ Message Sent!"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
