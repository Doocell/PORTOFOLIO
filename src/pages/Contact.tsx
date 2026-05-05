import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { BrutalButton } from "@/components/BrutalButton";
import { profile } from "@/lib/mockData";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi";
    else if (form.name.length > 100) e.name = "Maksimal 100 karakter";
    if (!form.email.trim()) e.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Format email tidak valid";
    if (!form.subject.trim()) e.subject = "Subject wajib diisi";
    if (!form.message.trim()) e.message = "Pesan wajib diisi";
    else if (form.message.length > 1000) e.message = "Maksimal 1000 karakter";
    return e;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length > 0) {
      toast.error("Form belum lengkap", { description: "Periksa kembali isian kamu." });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Pesan terkirim!", { description: "Saya akan balas secepatnya." });
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  const inputCls = "w-full px-3 py-2.5 bg-card brutal-border rounded-[var(--radius)] outline-none focus:brutal-shadow-sm transition-shadow";

  return (
    <div className="container py-12 md:py-20 grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <BrutalBadge color="accent">Contact</BrutalBadge>
        <h1 className="font-display text-5xl md:text-6xl">Mari ngobrol.</h1>
        <p className="text-muted-foreground">Saya selalu terbuka untuk project menarik, kolaborasi, atau sekadar ngopi virtual.</p>

        <div className="space-y-3">
          {[
            { Icon: Mail, label: profile.email, color: "primary" as const },
            { Icon: Phone, label: profile.phone, color: "secondary" as const },
            { Icon: MapPin, label: profile.location, color: "mint" as const },
          ].map((c) => (
            <BrutalCard key={c.label} color={c.color} className="p-4 flex items-center gap-3">
              <c.Icon size={20} /><span className="font-bold">{c.label}</span>
            </BrutalCard>
          ))}
        </div>
      </div>

      <BrutalCard className="lg:col-span-3 p-6 md:p-8">
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold uppercase mb-1">Nama</label>
              <input id="name" className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} aria-invalid={!!errors.name} />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase mb-1">Email</label>
              <input id="email" type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} aria-invalid={!!errors.email} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-bold uppercase mb-1">Subject</label>
            <input id="subject" className={inputCls} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} maxLength={200} aria-invalid={!!errors.subject} />
            {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold uppercase mb-1">Pesan</label>
            <textarea id="message" rows={6} className={inputCls + " resize-none"} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} aria-invalid={!!errors.message} />
            <div className="flex justify-between mt-1">
              {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : <span />}
              <p className="text-xs font-mono text-muted-foreground">{form.message.length}/1000</p>
            </div>
          </div>
          <BrutalButton type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
            <Send size={18} /> {loading ? "Mengirim..." : "Kirim Pesan"}
          </BrutalButton>
        </form>
      </BrutalCard>
    </div>
  );
}
