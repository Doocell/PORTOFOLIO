import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { BrutalButton } from "@/components/BrutalButton";
import { projects } from "@/lib/mockData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container py-20 text-center space-y-4">
        <h1 className="font-display text-4xl">Project tidak ditemukan</h1>
        <Link to="/projects"><BrutalButton><ArrowLeft size={16} /> Kembali ke Projects</BrutalButton></Link>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16 space-y-10">
      <Link to="/projects" className="inline-flex items-center gap-2 font-bold uppercase text-sm hover:underline">
        <ArrowLeft size={16} /> Kembali ke Projects
      </Link>

      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <BrutalBadge color="primary">{project.category}</BrutalBadge>
          {project.isFeatured && <BrutalBadge color="pink">★ Featured</BrutalBadge>}
        </div>
        <h1 className="font-display text-5xl md:text-7xl">{project.title}</h1>
        <p className="text-lg md:text-xl max-w-3xl">{project.fullDescription}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer"><BrutalButton variant="primary"><ExternalLink size={16} /> Live Demo</BrutalButton></a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><BrutalButton variant="ghost"><Github size={16} /> Source Code</BrutalButton></a>}
        </div>
      </header>

      <BrutalCard className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full aspect-[16/9] object-cover" />
      </BrutalCard>

      <div className="grid md:grid-cols-3 gap-6">
        <BrutalCard color="primary" className="p-5">
          <h3 className="font-display text-lg mb-2">Role</h3>
          <p>{project.role}</p>
        </BrutalCard>
        <BrutalCard color="secondary" className="p-5">
          <h3 className="font-display text-lg mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span key={t} className="text-xs font-mono px-2 py-0.5 bg-card brutal-border rounded">{t}</span>
            ))}
          </div>
        </BrutalCard>
        <BrutalCard color="mint" className="p-5">
          <h3 className="font-display text-lg mb-2">Hasil</h3>
          <p>{project.result}</p>
        </BrutalCard>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <BrutalCard className="p-6">
          <h3 className="font-display text-2xl mb-2">🎯 Problem</h3>
          <p>{project.problem}</p>
        </BrutalCard>
        <BrutalCard className="p-6">
          <h3 className="font-display text-2xl mb-2">💡 Solution</h3>
          <p>{project.solution}</p>
        </BrutalCard>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <section>
          <h2 className="font-display text-3xl mb-4">Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.gallery.map((src, i) => (
              <BrutalCard key={i} hover className="overflow-hidden">
                <img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </BrutalCard>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
