"use client";

import Image from "next/image";
import { navLink } from "@/config";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ModernMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      clipPath: "circle(2200px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 w-full z-[1001]">
      <div className="flex justify-between items-center p-6 bg-black/40 backdrop-blur-sm relative z-[1002]">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-matrix/40">
            <Image
              src="/profile.webp"
              alt="Loushik Profile"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-matrix font-bold tracking-tighter text-2xl uppercase">
            LOUSHIK
          </span>
        </div>
        <button
          onClick={toggleMenu}
          className="p-2 text-matrix bg-matrix/10 rounded-lg border border-matrix/20"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-[1001]"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
               {/* Subtle background effect could go here */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(16,233,86,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,233,86,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <nav className="flex flex-col items-center gap-8 relative z-[1002]">
              {navLink?.map((item, i) => (
                <motion.div
                  key={item?.label}
                  custom={i}
                  variants={itemVariants}
                >
                  <Link
                    href={item?.path}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-gray-400 hover:text-matrix transition-colors duration-300 tracking-widest"
                  >
                    {item?.label?.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navLink.length}
                variants={itemVariants}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="mt-4 px-10 py-4 rounded-full bg-matrix text-black font-bold text-lg shadow-[0_0_20px_rgba(16,233,86,0.4)]"
                >
                  RESUME
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernMobileNav;
