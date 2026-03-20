"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Database, Globe, Layers, Terminal } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const capabilities = [
    {
      icon: <Globe size={20} />,
      title: "Neural Frontend",
      desc: "Crafting immersive, high-performance user interfaces.",
    },
    {
      icon: <Database size={20} />,
      title: "Data Synthesis",
      desc: "Architecting robust and scalable backend ecosystems.",
    },
    {
      icon: <Layers size={20} />,
      title: "System Architecture",
      desc: "Designing end-to-end full-stack solutions.",
    },
    {
      icon: <Cpu size={20} />,
      title: "Logic Core",
      desc: "Optimizing algorithms and performance bottlenecks.",
    },
  ];

  return (
    <section className="w-full relative z-50 py-24 overflow-hidden" id="about">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-matrix/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="custom-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="w-full"
        >
          {/* Section Header */}
          <div className="flex items-center w-full mb-16 gap-6">
            <h3 className="font-mono text-matrix text-sm tracking-[0.3em] uppercase">
              // 01. Identity_Profile
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-matrix/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Bio & Cards */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 text-matrix/80 mb-2">
                  <Terminal size={18} />
                  <span className="font-mono text-xs uppercase tracking-widest">
                    System_Initialization... Success
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Engineering digital realities since{" "}
                  <span className="text-matrix">2021</span>.
                </h2>

                <div className="space-y-4 text-gray-400 font-medium leading-relaxed">
                  <p>
                    I am a full-stack engineer dedicated to the pursuit of
                    digital excellence. My journey is fueled by a constant drive
                    to transform complex fragments of code into seamless,
                    high-performance human experiences.
                  </p>
                  <p>
                    Specializing in the{" "}
                    <span className="text-matrix-light">Backend ecosystem</span>
                    , I bridge the gap between abstract requirements and
                    crystalline implementations across the entire software
                    stack.
                  </p>
                </div>
              </motion.div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(16, 233, 86, 0.05)",
                    }}
                    className="p-5 rounded-xl border border-matrix/10 bg-black/40 backdrop-blur-sm transition-all duration-300"
                  >
                    <div className="text-matrix mb-3">{cap.icon}</div>
                    <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">
                      {cap.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-normal">
                      {cap.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Profile & Stats */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <motion.div variants={itemVariants} className="relative group">
                {/* Profile Image with Scanner Effect */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-matrix/20 group-hover:border-matrix/50 transition-colors duration-500">
                  <Image
                    src={"/profile.webp"}
                    alt="Loushik"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                  />

                  {/* Scanner Line */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-matrix shadow-[0_0_15px_#10e956] z-10 opacity-50"
                  />

                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                {/* Decorative Frame Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-matrix/30 rounded-tr-3xl pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-matrix/30 rounded-bl-3xl pointer-events-none" />

                {/* Status Badge */}
                <div className="absolute -bottom-2 -right-2 bg-black border border-matrix/40 px-4 py-2 rounded-lg flex items-center gap-2 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-matrix animate-pulse shadow-[0_0_8px_#10e956]" />
                  <span className="font-mono text-[10px] text-matrix uppercase tracking-widest">
                    Status: Active
                  </span>
                </div>
              </motion.div>

              {/* Technical Core Metadata */}
              <motion.div
                variants={itemVariants}
                className="mt-12 w-full lg:w-72 p-6 border-l border-matrix/20 bg-gradient-to-r from-matrix/5 to-transparent rounded-r-lg"
              >
                <h5 className="font-mono text-[10px] text-matrix/60 uppercase mb-4 tracking-[0.2em]">
                  Core_Directives
                </h5>
                <ul className="space-y-3 font-mono text-[11px] text-gray-400">
                  <li className="flex justify-between">
                    <span>Performance</span>
                    <span className="text-matrix">99.8%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Scalability</span>
                    <span className="text-matrix">Optimal</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Security</span>
                    <span className="text-matrix">Hardened</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
