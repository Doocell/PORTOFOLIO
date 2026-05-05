import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrutalButton } from "./BrutalButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-background border-b-[3px] border-foreground">
      <nav className="container flex items-center justify-between h-16 md:h-20" aria-label="Main">
        <Link to="/" className="font-display text-xl md:text-2xl flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-9 h-9 bg-primary brutal-border brutal-shadow-sm rounded-[var(--radius)] group-hover:animate-wiggle">D</span>
          <span>DANY.DEV</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 font-bold uppercase text-sm tracking-wide rounded-[var(--radius)] transition-all",
                    "hover:bg-primary hover:brutal-border hover:brutal-shadow-sm",
                    isActive && "bg-primary brutal-border brutal-shadow-sm",
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="w-10 h-10 brutal-border brutal-shadow-sm brutal-hover brutal-press bg-card rounded-[var(--radius)] flex items-center justify-center"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/contact" className="hidden md:block">
            <BrutalButton size="sm" variant="secondary">Hire Me</BrutalButton>
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 brutal-border brutal-shadow-sm bg-card rounded-[var(--radius)] flex items-center justify-center"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t-[3px] border-foreground bg-background animate-fade-in">
          <ul className="container py-4 flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-3 font-bold uppercase rounded-[var(--radius)] brutal-border",
                      isActive ? "bg-primary brutal-shadow-sm" : "bg-card",
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
