import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { profile, experiences } from "@/lib/mockData";
import { Code2, Palette, Database, Rocket } from "lucide-react";

const services = [
  { Icon: Code2, title: "Frontend", desc: "React, Next.js, Tailwind, Framer Motion" },
  { Icon: Palette, title: "Design", desc: "Figma, Design System, Branding" },
  //{ Icon: Database, title: "Backend", desc: "Node.js, Go, PostgreSQL, Redis" },
  //{ Icon: Rocket, title: "DevOps", desc: "Docker, CI/CD, Vercel, Cloudflare" },
];

export default function About() {
  return (
    <div className="container py-12 md:py-20 space-y-16">
      <header className="grid md:grid-cols-3 gap-8 items-center">
        <BrutalCard color="primary" className="overflow-hidden aspect-square -rotate-2">
          <img src={profile.avatarUrl} alt={profile.fullName} className="w-full h-full object-cover" />
        </BrutalCard>
        <div className="md:col-span-2 space-y-4">
          <BrutalBadge color="mint">Tentang Saya</BrutalBadge>
          <h1 className="font-display text-5xl md:text-6xl">{profile.fullName}</h1>
          <p className="text-lg">{profile.bio}</p>
          <p className="text-muted-foreground">Saya percaya bahwa produk yang baik lahir dari kombinasi engineering yang kuat dan desain yang punya empati. Saya senang bekerja di intersection antara keduanya.</p>
          <div className="flex flex-wrap gap-2 pt-2">
            <BrutalBadge color="secondary">📍 {profile.location}</BrutalBadge>
            <BrutalBadge color="pink">✉️ {profile.email}</BrutalBadge>
          </div>
        </div>
      </header>

      <section>
        <h2 className="font-display text-4xl mb-6">What I Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <BrutalCard key={s.title} hover className="p-5">
              <s.Icon size={28} className="mb-3" />
              <h3 className="font-display text-xl">{s.title}</h3>
              <p className="text-sm mt-1 text-muted-foreground">{s.desc}</p>
            </BrutalCard>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-4xl mb-6">Perjalanan</h2>
        <ol className="relative border-l-[4px] border-foreground ml-4 space-y-6">
          {experiences.map((e) => (
            <li key={e.id} className="ml-6">
              <span className="absolute -left-[14px] w-6 h-6 bg-primary brutal-border rounded-full" />
              <BrutalCard className="p-5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-xl">{e.position}</h3>
                  <BrutalBadge color="secondary">{e.company}</BrutalBadge>
                </div>
                <p className="text-xs font-mono mt-1 text-muted-foreground">{e.startDate} → {e.endDate ?? "sekarang"} · {e.location}</p>
                <p className="mt-2">{e.description}</p>
              </BrutalCard>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
