export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "Web App" | "UI/UX" | "Mobile" | "Backend" | "Design";
  techStack: string[];
  role: string;
  problem: string;
  solution: string;
  result: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  gallery?: string[];
};

export type Skill = { id: string; name: string; category: "Frontend" | "Backend" | "Database" | "Tools" | "Design" | "Soft Skills"; level: number };
export type Experience = { id: string; position: string; company: string; location: string; startDate: string; endDate: string | null; description: string; achievements: string[] };
export type BlogPost = { id: string; slug: string; title: string; excerpt: string; content: string; category: string; tags: string[]; coverImageUrl: string; createdAt: string };

const img = (seed: string, w = 800, h = 600) => `https://images.unsplash.com/photo-${seed}?w=${w}&h=${h}&fit=crop&auto=format`;

export const profile = {
  fullName: "Dany Risky Ardiansyah",
  role: "Business Planner & UI Designer",
  bio: "I am a student of Semarang State University class of 2024 who has an interest in UI/UX Design, business design, digital business, and eloping technology-based business ideas..",
  location: "Semarang, Indonesia",
  email: "danyrizkya@gmail.com",
  phone: "+62 877-7172-7353",
  avatarUrl: "PP.svg",
};

export const projects: Project[] = [
  // {
  //   id: "1", slug: "kanban-flow", title: "Kanban Flow",
  //   shortDescription: "Aplikasi manajemen task drag-and-drop untuk tim remote.",
  //   fullDescription: "Kanban Flow adalah platform kolaborasi tim yang membantu tim remote mengelola pekerjaan dengan board visual, real-time updates, dan integrasi kalender.",
  //   category: "Web App",
  //   techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
  //   role: "Lead Full-Stack Developer",
  //   problem: "Tim klien kesulitan tracking progress lintas zona waktu dan kehilangan visibility ke pekerjaan.",
  //   solution: "Dashboard real-time dengan presence indicator, komentar threaded, dan notifikasi cerdas berbasis prioritas.",
  //   result: "Meningkatkan velocity tim sebesar 38% dan mengurangi meeting sync mingguan dari 5 menjadi 2.",
  //   imageUrl: img("1611224923853-80b023f02d71"),
  //   demoUrl: "https://example.com", githubUrl: "https://github.com",
  //   isFeatured: true,
  //   gallery: [img("1517292987719-0369a794ec0f"), img("1454165804606-c3d57bc86b40"), img("1519389950473-47ba0277781c")],
  // },
  // {
  //   id: "2", slug: "finlite-banking", title: "FinLite Banking",
  //   shortDescription: "Mobile banking dengan pengalaman onboarding 60 detik.",
  //   fullDescription: "Aplikasi neobank yang fokus pada UMKM dengan fitur pembukuan otomatis, kartu virtual, dan analitik cashflow.",
  //   category: "Mobile",
  //   techStack: ["React Native", "Expo", "Supabase", "Stripe"],
  //   role: "Product Designer & Developer",
  //   problem: "UMKM butuh akses keuangan cepat tanpa proses verifikasi bertele-tele.",
  //   solution: "Onboarding KYC otomatis dengan OCR + verifikasi wajah, dashboard cashflow yang mudah dimengerti.",
  //   result: "10K+ pengguna aktif dalam 3 bulan launching, retention 7-day 64%.",
  //   imageUrl: img("1563013544-824ae1b704d3"),
  //   demoUrl: "https://example.com", githubUrl: "https://github.com",
  //   isFeatured: true,
  // },
  // {
  //   id: "3", slug: "ritmo-music", title: "Ritmo Music",
  //   shortDescription: "Player musik indie dengan komunitas dan tipping artist.",
  //   fullDescription: "Platform streaming khusus musisi indonesia dengan model fair-pay dan komunitas yang aktif.",
  //   category: "Web App",
  //   techStack: ["Next.js", "tRPC", "Prisma", "PostgreSQL"],
  //   role: "Full-Stack Developer",
  //   problem: "Musisi indie kesulitan monetisasi dengan platform streaming mainstream.",
  //   solution: "Sistem tipping langsung, playlist editorial komunitas, dan distribusi pendapatan transparan.",
  //   result: "500+ artist onboarded, $25K dibayarkan ke artist dalam 6 bulan.",
  //   imageUrl: img("1511671782779-c97d3d27a1d4"),
  //   isFeatured: false,
  // },
  // {
  //   id: "4", slug: "studio-portofolio", title: "Studio Portofolio",
  //   shortDescription: "Website portofolio interaktif untuk studio desain.",
  //   fullDescription: "Microsite untuk studio kreatif dengan transisi sinematik dan case study mendalam.",
  //   category: "UI/UX",
  //   techStack: ["React", "Framer Motion", "GSAP", "Vite"],
  //   role: "Designer & Developer",
  //   problem: "Studio butuh portofolio yang menonjol di antara kompetitor agensi besar.",
  //   solution: "Pendekatan editorial dengan tipografi besar, transisi page yang halus, dan interaksi mikro yang playful.",
  //   result: "Memenangkan 2 design award dan menambah 3 klien enterprise.",
  //   imageUrl: img("1561070791-2526d30994b8"),
  //   isFeatured: true,
  // },
  // {
  //   id: "5", slug: "api-gateway-edge", title: "API Gateway Edge",
  //   shortDescription: "Gateway berkecepatan rendah-latensi untuk microservices.",
  //   fullDescription: "Internal tooling untuk routing, rate-limiting, dan observability microservices di edge.",
  //   category: "Backend",
  //   techStack: ["Go", "Redis", "Kubernetes", "gRPC"],
  //   role: "Backend Engineer",
  //   problem: "Latensi tinggi dan tidak ada visibility unified ke 30+ microservices.",
  //   solution: "Edge gateway dengan caching cerdas, distributed tracing, dan dashboard observability.",
  //   result: "Latensi p99 turun 45%, error rate berkurang 70%.",
  //   imageUrl: img("1558494949-ef010cbdcc31"),
  //   isFeatured: false,
  // },
  {
    id: "6", slug: "brand-system-bold", title: "BOLD Brand System",
    shortDescription: "Sistem desain dan branding lengkap untuk startup F&B.",
    fullDescription: "Identitas visual menyeluruh termasuk logo, packaging, guideline, dan komponen digital.",
    category: "Design",
    techStack: ["Figma", "Illustrator", "After Effects"],
    role: "Brand Designer",
    problem: "Startup butuh identitas yang kuat untuk bersaing dengan brand lokal yang sudah established.",
    solution: "Sistem visual berani dengan tipografi kustom, palette warna ekspresif, dan motion guideline.",
    result: "Diadopsi di 12 outlet, brand recall naik 3x dalam survei pelanggan.",
    imageUrl: img("1626785774573-4b799315345d"),
    isFeatured: false,
  },
];

export const skills: Skill[] = [
  { id: "s1", name: "React", category: "Frontend", level: 50 },
  { id: "s2", name: "TypeScript", category: "Frontend", level: 50 },
  { id: "s3", name: "Tailwind CSS", category: "Frontend", level: 50 },
  { id: "s4", name: "Next.js", category: "Frontend", level: 50 },
  { id: "s5", name: "Framer Motion", category: "Frontend", level: 50 },
  { id: "s6", name: "Node.js", category: "Backend", level: 50 },
  { id: "s7", name: "Express", category: "Backend", level: 50 },
  { id: "s8", name: "Go", category: "Backend", level: 30 },
  { id: "s9", name: "PostgreSQL", category: "Database", level: 50 },
  { id: "s10", name: "Supabase", category: "Database", level: 50 },
  { id: "s11", name: "Redis", category: "Database", level: 50 },
  { id: "s12", name: "Git", category: "Tools", level: 50 },
  { id: "s13", name: "Docker", category: "Tools", level: 50 },
  { id: "s14", name: "Vercel", category: "Tools", level: 50 },
  { id: "s15", name: "Figma", category: "Design", level: 90 },
  { id: "s16", name: "UI/UX", category: "Design", level: 85 },
  { id: "s17", name: "Komunikasi", category: "Soft Skills", level: 92 },
  { id: "s18", name: "Kepemimpinan", category: "Soft Skills", level: 85 },
  { id: "s19", name: "Problem Solving", category: "Soft Skills", level: 95 },
];

export const experiences: Experience[] = [
  // {
  //   id: "e1", position: "Staff Ahli Ekonomi Kreatif", company: "Himpunan Mahasiswa Ilmu Komputer", location: "Universitas Negeri Semarang",
  //   startDate: "2023-03", endDate: null,
  //   description: "Memimpin tim 5 engineer membangun produk SaaS analitik untuk klien enterprise.",
  //   achievements: ["Migrasi monolith ke microservices, latency turun 40%", "Mentor 4 junior developer hingga promosi", "Bangun design system internal yang dipakai 3 produk"],
  // },
  // {
  //   id: "e2", position: "Full-Stack Developer", company: "Rakit Digital", location: "Bandung",
  //   startDate: "2021-06", endDate: "2023-02",
  //   description: "Membangun web app dan API untuk berbagai klien startup dan enterprise.",
  //   achievements: ["Ship 12+ project produksi", "Setup CI/CD pipeline standar perusahaan", "Speaker di 3 meetup teknologi lokal"],
  // },
  {
    id: "e3", position: "Head of Division Economy & Creative", company: "Himpunan Mahasiswa Ilmu Komputer", location: "Universitas Negeri Semarang",
    startDate: "2019-08", endDate: "2021-05",
    description: "Fokus pada implementasi UI presisi tinggi dan optimisasi performa untuk e-commerce.",
    achievements: ["Lighthouse score rata-rata 95+", "Komponen library reusable untuk 5+ klien"],
  },
  {
    id: "e4", position: "Creative Economy Expert Staff", company: "Himpunan Mahasiswa Ilmu Komputer", location: "Universitas Negeri Semarang",
    startDate: "2025-02", endDate: "2026-02",
    description: "Contributed to the Creative Economy Division of the UNNES Computer Science Student Association, focusing on developing work programs based on creativity, entrepreneurship, and digital business. Involved in developing activity ideas, internal coordination, program implementation, and cross-committee collaboration. This experience strengthened my skills in communication, teamwork, activity management, and creative concept development.",
    achievements: ["Koordinator Peralatan Dan Kebutuhan WorkShop Digital Business - 2024", "Staff Kegiatan Interface 2025- Sie Perkap", "Staff Kegiatan Computer Science & Sport 2025- Sie Perkap"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1", slug: "kenapa-neobrutalism-balik-lagi", title: "Kenapa Neobrutalism Balik Lagi di 2025?",
    excerpt: "Tren desain web bergerak menjauh dari minimalism steril menuju ekspresi yang lebih jujur dan playful.",
    content: "Neobrutalism bukan sekadar estetika. Ia adalah pernyataan: bahwa web boleh menyenangkan, boleh berisik, dan boleh punya karakter. Setelah satu dekade dominasi minimalism dan glassmorphism, designer mulai mencari cara untuk membuat brand mereka menonjol kembali...",
    category: "Design", tags: ["design", "trend", "ui"],
    coverImageUrl: img("1561070791-2526d30994b8"), createdAt: "2025-09-12",
  },
  {
    id: "b2", slug: "react-server-components-realita", title: "React Server Components: Hype vs Realita",
    excerpt: "Setelah setahun pakai RSC di produksi, ini yang saya pelajari—yang baik dan yang menyakitkan.",
    content: "RSC menjanjikan banyak hal: bundle lebih kecil, akses langsung ke data layer, model mental yang lebih sederhana. Tapi realitanya? Ada banyak trade-off yang jarang dibicarakan...",
    category: "Engineering", tags: ["react", "performance", "rsc"],
    coverImageUrl: img("1633356122544-f134324a6cee"), createdAt: "2025-08-03",
  },
  {
    id: "b3", slug: "design-system-startup-kecil", title: "Design System untuk Startup Kecil: Worth It?",
    excerpt: "Tim 3 orang, deadline mepet—apakah investasi design system masuk akal?",
    content: "Banyak startup menunda design system karena dianggap overhead. Padahal dengan tools modern, kamu bisa mulai dari yang minimal dan tumbuh secara organik...",
    category: "Design", tags: ["design-system", "startup"],
    coverImageUrl: img("1559028012-481c04fa702d"), createdAt: "2025-07-21",
  },
];
