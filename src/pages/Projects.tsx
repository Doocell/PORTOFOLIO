import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { projects } from "@/lib/mockData";

const categories = ["Semua", "Web App", "UI/UX", "Mobile", "Backend", "Design"] as const;

export default function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Semua");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => projects.filter((p) => {
    const okCat = cat === "Semua" || p.category === cat;
    const okQ = !q || p.title.toLowerCase().includes(q.toLowerCase()) || p.shortDescription.toLowerCase().includes(q.toLowerCase()) || p.techStack.some((t) => t.toLowerCase().includes(q.toLowerCase()));
    return okCat && okQ;
  }), [cat, q]);

  return (
    <div className="container py-12 md:py-20 space-y-8">
      <header className="space-y-3">
        <BrutalBadge color="secondary">Projects</BrutalBadge>
        <h1 className="font-display text-5xl md:text-6xl">Karya pilihan</h1>
        <p className="text-muted-foreground max-w-2xl">Kumpulan project yang saya kerjakan—dari web app, mobile, sampai sistem desain.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-1.5 text-sm font-bold uppercase brutal-border rounded-[var(--radius)] transition-all ${cat === c ? "bg-primary brutal-shadow-sm" : "bg-card hover:bg-muted"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 brutal-border brutal-shadow-sm bg-card rounded-[var(--radius)] px-3 py-2 max-w-sm w-full">
          <Search size={16} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari project, tech, atau judul..."
            aria-label="Search projects"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <BrutalCard className="p-10 text-center">
          <p className="font-display text-2xl">Hmm, tidak ada hasil</p>
          <p className="text-muted-foreground mt-1">Coba ganti filter atau kata kunci.</p>
        </BrutalCard>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.id} to={`/projects/${p.slug}`}>
              <BrutalCard hover className="overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground bg-muted">
                  <img src={p.imageUrl} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <BrutalBadge color="primary">{p.category}</BrutalBadge>
                    {p.isFeatured && <BrutalBadge color="pink">★ Featured</BrutalBadge>}
                  </div>
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{p.shortDescription}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-0.5 bg-muted brutal-border rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </BrutalCard>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
