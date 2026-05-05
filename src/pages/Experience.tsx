import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { experiences } from "@/lib/mockData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <div className="container py-12 md:py-20 space-y-10">
      <header className="space-y-3">
        <BrutalBadge color="secondary">Experience</BrutalBadge>
        <h1 className="font-display text-5xl md:text-6xl">Perjalanan profesional</h1>
        <p className="text-muted-foreground max-w-2xl">Tempat-tempat saya pernah belajar, bertumbuh, dan ikut membangun produk.</p>
      </header>

      <ol className="relative border-l-[4px] border-foreground ml-4 space-y-8">
        {experiences.map((e, i) => (
          <li key={e.id} className="ml-8 relative animate-fade-in">
            <span className="absolute -left-[42px] top-2 w-8 h-8 bg-primary brutal-border rounded-[var(--radius)] flex items-center justify-center">
              <Briefcase size={14} />
            </span>
            <BrutalCard color={i % 2 === 0 ? "default" : "primary"} className="p-6">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-display text-2xl">{e.position}</h3>
                <BrutalBadge color="secondary">{e.company}</BrutalBadge>
              </div>
              <p className="text-xs font-mono text-muted-foreground">{e.startDate} → {e.endDate ?? "Sekarang"} · {e.location}</p>
              <p className="mt-3">{e.description}</p>
              <ul className="mt-4 space-y-1.5">
                {e.achievements.map((a, k) => (
                  <li key={k} className="flex gap-2"><span className="font-display">→</span><span>{a}</span></li>
                ))}
              </ul>
            </BrutalCard>
          </li>
        ))}
      </ol>
    </div>
  );
}
