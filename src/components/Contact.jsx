"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    { label: "Email", value: "primedev100@gmail.com", icon: "✉️" },
    { label: "Phone", value: "+234 (0) 8067091463", icon: "📞" },
    { label: "Location", value: "Port Harcourt, Nig.", icon: "📍" },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <p className="section-header mb-6 text-center">#contact</p>

        <div className="text-center mb-16 max-w-3xl mx-auto">
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
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-5 rounded-2xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                {["GH", "LI", "TW", "DR"].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-sm font-bold text-muted-foreground hover:gradient-bg hover:text-primary-foreground hover:border-transparent transition-all duration-300"
                  >
                    {social}
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

            <button
              type="submit"
              className="w-full px-8 py-4 gradient-bg text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
