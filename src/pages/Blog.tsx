import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { blogPosts } from "@/lib/mockData";

export default function Blog() {
  const categories = useMemo(() => ["Semua", ...Array.from(new Set(blogPosts.map((p) => p.category)))], []);
  const [cat, setCat] = useState("Semua");
  const filtered = cat === "Semua" ? blogPosts : blogPosts.filter((p) => p.category === cat);

  return (
    <div className="container py-12 md:py-20 space-y-8">
      <header className="space-y-3">
        <BrutalBadge color="pink">Blog & Notes</BrutalBadge>
        <h1 className="font-display text-5xl md:text-6xl">Catatan & pikiran</h1>
        <p className="text-muted-foreground max-w-2xl">Tulisan singkat tentang engineering, design, dan hal-hal yang saya pelajari.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-3 py-1.5 text-sm font-bold uppercase brutal-border rounded-[var(--radius)] ${cat === c ? "bg-primary brutal-shadow-sm" : "bg-card hover:bg-muted"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Link key={p.id} to={`/blog/${p.slug}`}>
            <BrutalCard hover className="overflow-hidden h-full flex flex-col">
              <div className="aspect-[16/10] overflow-hidden border-b-[3px] border-foreground bg-muted">
                <img src={p.coverImageUrl} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <BrutalBadge color="secondary">{p.category}</BrutalBadge>
                  <span className="text-muted-foreground">{p.createdAt}</span>
                </div>
                <h2 className="font-display text-xl">{p.title}</h2>
                <p className="text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <span key={t} className="text-xs font-mono px-2 py-0.5 bg-muted brutal-border rounded">#{t}</span>)}
                </div>
              </div>
            </BrutalCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
