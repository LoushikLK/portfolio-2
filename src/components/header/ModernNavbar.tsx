"use client";

import Image from "next/image";
import { navLink } from "@/config";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
const ModernNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active hash based on scroll position
      const sections = navLink.map(link => link.path.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveHash(`#${section}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-6 left-0 right-0 mx-auto w-fit z-[1000] px-6 py-3 rounded-full border transition-all duration-300 hidden lg:flex items-center gap-8 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-matrix/30 shadow-[0_0_20px_rgba(16,233,86,0.1)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center gap-3 mr-4">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-matrix/40">
          <Image
            src="/profile.webp"
            alt="Loushik Profile"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-matrix font-bold tracking-tighter text-xl uppercase">
          LOUSHIK
        </span>
      </div>

      <nav className="flex items-center gap-6">
        {navLink?.map((item) => (
          <Link
            href={item?.path}
            key={item?.label}
            className="relative group py-1"
            onClick={() => setActiveHash(item.path)}
          >
            <span
              className={`text-sm font-medium transition-colors duration-300 ${
                activeHash === item.path
                  ? "text-matrix"
                  : "text-gray-400 group-hover:text-matrix-light"
              }`}
            >
              {item?.label}
            </span>
            {activeHash === item.path && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-matrix shadow-[0_0_8px_#10e956]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="ml-4 px-5 py-2 rounded-full bg-matrix text-black font-bold text-sm hover:shadow-[0_0_15px_#10e956] transition-shadow duration-300"
      >
        RESUME
      </motion.a>
    </motion.div>
  );
};

export default ModernNavbar;
