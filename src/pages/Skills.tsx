import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { skills, type Skill } from "@/lib/mockData";

const groupColors: Record<Skill["category"], "primary" | "secondary" | "mint" | "pink" | "lilac" | "accent"> = {
  Frontend: "primary",
  Backend: "secondary",
  Database: "mint",
  Tools: "lilac",
  Design: "pink",
  "Soft Skills": "accent",
};

export default function Skills() {
  const groups = (Object.keys(groupColors) as Skill["category"][]).map((cat) => ({
    cat, items: skills.filter((s) => s.category === cat),
  }));

  return (
    <div className="container py-12 md:py-20 space-y-10">
      <header className="space-y-3">
        <BrutalBadge color="mint">Skills</BrutalBadge>
        <h1 className="font-display text-5xl md:text-6xl">Apa yang ada di toolbox</h1>
        <p className="text-muted-foreground max-w-2xl">Skill teknis dan non-teknis yang saya pakai sehari-hari membangun produk.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <BrutalCard key={g.cat} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-2xl">{g.cat}</h2>
              <BrutalBadge color={groupColors[g.cat]}>{g.items.length}</BrutalBadge>
            </div>
            <ul className="space-y-3">
              {g.items.map((s) => (
                <li key={s.id}>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold">{s.name}</span>
                    <span className="font-mono text-xs">{s.level}%</span>
                  </div>
                  {(() => {
                    const c = groupColors[g.cat];
                    const varName = c === "primary" || c === "secondary" || c === "accent" ? c : `pop-${c}`;
                    return (
                      <div className="h-3 bg-muted brutal-border rounded-sm overflow-hidden">
                        <div className="h-full" style={{ width: `${s.level}%`, backgroundColor: `hsl(var(--${varName}))` }} />
                      </div>
                    );
                  })()}
                </li>
              ))}
            </ul>
          </BrutalCard>
        ))}
      </div>
    </div>
  );
}
