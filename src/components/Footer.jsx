import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/primestacks", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/primestack", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://x.com/primedev100", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border/60 py-8 px-4 sm:px-6 lg:px-8 bg-card/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="text-center sm:text-left">
          &copy; {currentYear} Nwachukwu Tony Uju: Primdev100 portfolio. Built
          with passion.
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                <span>{social.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
