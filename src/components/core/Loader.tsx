"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Check for common bot user agents to avoid affecting SEO
    if (typeof window !== "undefined") {
      const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(
        navigator.userAgent
      );
      if (isBot) {
        setLoading(false);
        return;
      }
    }

    // Lock scroll while loading
    document.body.classList.add("loading-lock");

    // Simulate loading progress
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("loading-lock");
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.classList.remove("loading-lock");
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#051009] flex flex-col items-center justify-center font-mono selection:bg-matrix selection:text-black"
        >
          <div className="relative w-72 md:w-96 flex flex-col items-center">
            {/* Holographic Scanner Effect Container */}
            <div className="absolute -inset-10 bg-matrix/5 blur-[80px] rounded-full animate-pulse pointer-events-none" />

            {/* Header Status */}
            <div className="w-full flex justify-between items-end mb-4 px-1">
              <div className="flex flex-col">
                <span className="text-[10px] text-matrix/40 uppercase tracking-[0.2em]">
                  Booting_Protocol
                </span>
                <span className="text-matrix text-lg font-bold tracking-tighter uppercase flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-matrix animate-ping" />
                  System_Initialization
                </span>
              </div>
              <span className="text-matrix font-bold text-2xl tracking-tighter">
                {percent}%
              </span>
            </div>

            {/* Main Progress Bar */}
            <div className="w-full h-1.5 bg-matrix/10 rounded-full overflow-hidden border border-matrix/20 relative backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                className="h-full bg-gradient-to-r from-matrix/50 via-matrix to-matrix-light shadow-[0_0_20px_#10e956] relative"
              />
            </div>

            {/* Sub-status and Metadata */}
            <div className="w-full mt-6 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg border border-matrix/10 bg-black/40 backdrop-blur-md">
                <span className="block text-[8px] text-matrix/40 uppercase mb-1">
                  Architecture
                </span>
                <span className="text-[10px] text-white font-medium uppercase tracking-widest">
                  Neural_Core_v4
                </span>
              </div>
              <div className="p-3 rounded-lg border border-matrix/10 bg-black/40 backdrop-blur-md">
                <span className="block text-[8px] text-matrix/40 uppercase mb-1">
                  Encryption
                </span>
                <span className="text-[10px] text-white font-medium uppercase tracking-widest">
                  Quantum_Hardened
                </span>
              </div>
            </div>

            {/* Bottom Console Text */}
            <div className="mt-8 flex flex-col items-center gap-1">
              <span className="text-[9px] text-matrix/60 uppercase tracking-[0.3em] font-medium">
                Establishing_Secure_Link... Success
              </span>
              <div className="flex gap-2 items-center opacity-30 mt-2">
                <div className="w-1 h-1 rounded-full bg-matrix animate-bounce" />
                <div
                  className="w-1 h-1 rounded-full bg-matrix animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="w-1 h-1 rounded-full bg-matrix animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
