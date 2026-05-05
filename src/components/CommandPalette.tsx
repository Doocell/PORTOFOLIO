import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

const items = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="fixed inset-0 z-[70] bg-foreground/40 flex items-start justify-center pt-24 px-4 animate-fade-in" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg bg-card brutal-border brutal-shadow-lg rounded-[var(--radius)]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 px-4 py-3 border-b-[3px] border-foreground">
          <Search size={18} />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari halaman..."
            className="flex-1 bg-transparent outline-none font-mono"
          />
          <button onClick={() => setOpen(false)} aria-label="Close"><X size={18} /></button>
        </div>
        <ul className="p-2 max-h-80 overflow-auto">
          {filtered.length === 0 && <li className="p-4 text-center text-muted-foreground">Tidak ada hasil</li>}
          {filtered.map((i) => (
            <li key={i.to}>
              <button
                className="w-full text-left px-3 py-2 font-bold uppercase hover:bg-primary rounded-[var(--radius)]"
                onClick={() => { navigate(i.to); setOpen(false); setQ(""); }}
              >
                {i.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="px-4 py-2 border-t-[3px] border-foreground text-xs font-mono text-muted-foreground">
          Tekan <kbd className="px-1.5 py-0.5 bg-muted brutal-border">Ctrl/⌘ K</kbd> untuk toggle
        </div>
      </div>
    </div>
  );
}
