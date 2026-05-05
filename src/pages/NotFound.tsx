import { Link } from "react-router-dom";
import { BrutalButton } from "@/components/BrutalButton";
import { BrutalCard } from "@/components/BrutalCard";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center container py-16">
    <BrutalCard color="primary" className="p-10 max-w-md text-center -rotate-1">
      <h1 className="font-display text-7xl md:text-8xl">404</h1>
      <p className="text-xl font-bold mt-2">Halaman tersesat 🫠</p>
      <p className="text-muted-foreground mt-2">Mungkin link salah ketik, atau halaman sudah dipindah.</p>
      <Link to="/" className="inline-block mt-5"><BrutalButton variant="ghost">Kembali ke Home</BrutalButton></Link>
    </BrutalCard>
  </div>
);

export default NotFound;
