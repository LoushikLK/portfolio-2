"use client";

import { Github, VisitLink } from "@/assets/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Cpu, Heart, Share2, Globe, Command } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Github", icon: <Github width={18} height={18} />, url: "https://github.com/LoushikLK" },
    { name: "LinkedIn", icon: <Share2 size={18} />, url: "https://linkedin.com/in/loushik" },
    { name: "Portfolio", icon: <Globe size={18} />, url: "https://loushik.dev" },
  ];

  return (
    <footer className="w-full relative py-8 border-t border-matrix/10 bg-black/60 backdrop-blur-xl z-50 overflow-hidden">
      {/* Background Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-matrix/20 to-transparent" />
      
      <div className="custom-container relative flex flex-col items-center gap-12 text-center">
        {/* Core Metadata */}
        <div className="flex flex-col items-center gap-4">
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-matrix/5 border border-matrix/20"
          >
            <Cpu size={12} className="text-matrix" />
            <span className="font-mono text-[10px] text-matrix uppercase tracking-widest">
              Session_End_Line_Reached
            </span>
          </motion.div>
          <h2 className="text-white/40 font-mono text-xs uppercase tracking-[0.2em]">
            // Handcrafted_Experience_Complete
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center">
          {/* Copyright Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-mono text-[10px] text-matrix/40 uppercase">© {currentYear} Loushik_Infrastructure</span>
            <div className="flex items-center gap-1 text-gray-500 font-mono text-[9px] uppercase">
              <Command size={10} />
              <span>build_v4.0.2-stable</span>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center justify-center gap-6 p-2 rounded-2xl bg-[#0D0208] border border-matrix/5">
            {socialLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.url} 
                target="_blank"
                className="p-3 rounded-xl hover:bg-matrix/10 hover:text-matrix text-gray-400 transition-all duration-300 group relative"
              >
                {link.icon}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-matrix text-black text-[9px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Attribution Section */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-gray-400">MADE_WITH</span>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={14} fill="currentColor" />
              </motion.div>
              <span className="font-mono text-[10px] text-gray-400">BY</span>
              <span className="font-mono text-[10px] text-matrix font-bold tracking-widest">LOUSHIK</span>
            </div>
            <div className="flex items-center gap-2 text-matrix/40 font-mono text-[9px] uppercase">
              <Terminal size={10} />
              <span>neural_handshake: OK</span>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="flex flex-col items-center gap-2 opacity-20 group">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-matrix to-transparent group-hover:w-48 transition-all duration-700" />
          <span className="font-mono text-[8px] text-matrix animate-pulse">SYSTEM_STABLE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
