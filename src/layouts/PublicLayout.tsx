import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress, BackToTop } from "@/components/ScrollUtilities";
import { CommandPalette } from "@/components/CommandPalette";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
      <BackToTop />
      <CommandPalette />
    </div>
  );
}
