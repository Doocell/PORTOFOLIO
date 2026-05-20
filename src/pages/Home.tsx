import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Star, Zap } from "lucide-react";
import { BrutalButton } from "@/components/BrutalButton";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { TypingRoles } from "@/components/TypingRoles";
import { profile, projects, skills } from "@/lib/mockData";

export default function Home() {
  const featured = projects.filter((p) => p.isFeatured).slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="container py-12 md:py-20 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <BrutalBadge color="mint" className="animate-fade-in"><Sparkles size={12} /> Tersedia untuk project baru</BrutalBadge>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
              Hello, I am <span className="bg-primary brutal-border px-2 inline-block -rotate-1">{profile.fullName.split(" ")[0]}</span>.
              <br />
              I make <span className="text-stroke">Design</span> professional
            </h1>
            <p className="text-xl md:text-2xl font-semibold">
              I am a{" "}
              <span className="bg-secondary brutal-border px-2">
                <TypingRoles roles={["Business Planing", "UI/UX Designer", "Creativity & Innovation", "Business Development"]} />
              </span>
            </p>
            <p className="text-base md:text-lg max-w-2xl text-muted-foreground">{profile.bio}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/projects"><BrutalButton size="lg">View Projects <ArrowRight size={18} /></BrutalButton></Link>
              <a href="CVFIX.pdf" download><BrutalButton size="lg" variant="ghost"><Download size={18} /> Download CV</BrutalButton></a>
              <Link to="/contact"><BrutalButton size="lg" variant="secondary"><Mail size={18} /> Contact Me</BrutalButton></Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[420px] md:h-[480px]">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-0 right-4 z-30">
              <BrutalCard color="primary" className="p-5 w-56 -rotate-3">
                <div className="flex items-center gap-2 mb-2"><Zap size={18} /> <span className="font-display">6+ Bulan</span></div>
                <p className="text-sm">Pengalaman membangun produk digital</p>
              </BrutalCard>
            </motion.div>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-8 left-0 z-20">
              <BrutalCard color="pink" className="p-5 w-60 rotate-2">
                <div className="flex items-center gap-2 mb-2"><Star size={18} /> <span className="font-display">10+ Project</span></div>
                <p className="text-sm">Dikirim ke production untuk klien global</p>
              </BrutalCard>
            </motion.div>
            <BrutalCard color="accent" className="absolute inset-x-8 top-12 bottom-12 overflow-hidden rotate-1">
              <img src={profile.avatarUrl} alt={profile.fullName} className="w-full h-full object-cover" />
            </BrutalCard>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden border-y-[3px] border-foreground bg-secondary -mx-6 md:-mx-0">
          <div className="flex animate-marquee whitespace-nowrap py-3 font-display text-2xl">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-8 pr-8">
                {["DESIGN", "•", "BUILD", "•", "DESIGN", "•", "REPEAT", "•", "BUILD", "•", "PLAYFUL", "•", "FAST", "•"].map((w, i) => (
                  <span key={i}>{w}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="container py-16">
        <h2 className="font-display text-4xl md:text-5xl mb-8">Apa yang saya kerjakan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { color: "primary" as const, title: "Web Apps", desc: "SaaS, dashboard, e-commerce — siap produksi dan bisa di-scale." },
            { color: "secondary" as const, title: "UI / UX Design", desc: "Desain antarmuka yang playful, jelas, dan punya karakter." },
            //{ color: "mint" as const, title: "Backend & API", desc: "Arsitektur API yang rapi dengan PostgreSQL dan Node/Go." },
          ].map((s) => (
            <BrutalCard key={s.title} color={s.color} hover className="p-6">
              <h3 className="font-display text-2xl mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </BrutalCard>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-8 gap-4">
          <h2 className="font-display text-4xl md:text-5xl">Featured Projects</h2>
          <Link to="/projects"><BrutalButton variant="ghost" size="sm">Lihat semua <ArrowRight size={16} /></BrutalButton></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link to={`/projects/${p.slug}`} key={p.id}>
              <BrutalCard hover className="overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground bg-muted">
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <BrutalBadge color="primary" className="mb-2 self-start">{p.category}</BrutalBadge>
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="text-sm mt-1 text-muted-foreground flex-1">{p.shortDescription}</p>
                </div>
              </BrutalCard>
            </Link>
          ))}
        </div>
      </section>

      {/* SKILLS PEEK */}
      <section className="container py-16">
        <h2 className="font-display text-4xl md:text-5xl mb-8">Stack favorit</h2>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 12).map((s, i) => (
            <BrutalBadge key={s.id} color={(["primary","secondary","mint","pink","lilac","accent"] as const)[i % 6]}>{s.name}</BrutalBadge>
          ))}
        </div>
      </section>
    </>
  );
}
