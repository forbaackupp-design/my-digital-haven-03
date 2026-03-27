import { Github, Linkedin, Code2, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/sh4dowedsoul", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kishan-pandey2008", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/shadowedsoul/", label: "LeetCode" },
  { icon: Mail, href: "mailto:infernokishan@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="py-10 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
      <div className="flex gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="glow-btn inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary"
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kishan Pandey. Built with passion.
      </p>
    </div>
  </footer>
);

export default Footer;
