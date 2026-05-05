import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/lib/mockData";

export function Footer() {
  return (
    <footer className="mt-20 border-t-[3px] border-foreground bg-primary">
      <div className="container py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-3xl">{profile.fullName}</h3>
          <p className="mt-2 max-w-xs">{profile.role}</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Kontak</h4>
          <ul className="space-y-1 text-sm">
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
            <li>{profile.location}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Sosial</h4>
          <div className="flex gap-2 flex-wrap">
            {[
              { Icon: Github, label: "GitHub", href: "https://github.com/Doocell" },
              { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/danyriskyardiansyah" },
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/dnyysides/" },
              { Icon: Mail, label: "Email", href: `mailto:${profile.email}` },
              { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/6287771727353" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 bg-card brutal-border brutal-shadow-sm brutal-hover brutal-press rounded-[var(--radius)] flex items-center justify-center"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-[3px] border-foreground py-4 text-center text-sm font-bold">
        © {new Date().getFullYear()} {profile.fullName}. Dibuat dengan hati.
      </div>
    </footer>
  );
}
