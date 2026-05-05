import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { BrutalButton } from "@/components/BrutalButton";
import { blogPosts } from "@/lib/mockData";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-20 text-center space-y-4">
        <h1 className="font-display text-4xl">Artikel tidak ditemukan</h1>
        <Link to="/blog"><BrutalButton><ArrowLeft size={16} /> Kembali ke Blog</BrutalButton></Link>
      </div>
    );
  }

  return (
    <article className="container py-12 md:py-16 max-w-3xl space-y-8">
      <Link to="/blog" className="inline-flex items-center gap-2 font-bold uppercase text-sm hover:underline">
        <ArrowLeft size={16} /> Kembali ke Blog
      </Link>
      <header className="space-y-3">
        <div className="flex gap-2">
          <BrutalBadge color="primary">{post.category}</BrutalBadge>
          <span className="text-xs font-mono text-muted-foreground self-center">{post.createdAt}</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl">{post.title}</h1>
      </header>
      <BrutalCard className="overflow-hidden">
        <img src={post.coverImageUrl} alt={post.title} className="w-full aspect-[16/9] object-cover" />
      </BrutalCard>
      <div className="prose-lg space-y-4 text-lg leading-relaxed">
        <p className="text-xl font-semibold">{post.excerpt}</p>
        <p>{post.content}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-4 border-t-[3px] border-foreground">
        {post.tags.map((t) => <BrutalBadge key={t} color="lilac">#{t}</BrutalBadge>)}
      </div>
    </article>
  );
}
