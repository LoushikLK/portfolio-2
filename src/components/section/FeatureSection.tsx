"use client";

import { Github, VisitLink } from "@/assets/icons";
import { PROJECT_DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github as GithubIcon,
  Terminal,
  Monitor,
  Code2,
  Cpu,
} from "lucide-react";

const FeaturedProject = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className={`relative w-full flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-12 mb-32 group`}
    >
      {/* Background Decorative Number */}
      <span
        className={`absolute -top-20 ${isEven ? "left-0" : "right-0"} font-mono text-[12rem] text-matrix/10 font-bold pointer-events-none select-none z-0 hidden lg:block`}
      >
        0{index + 1}
      </span>
      <span className="absolute -top-10 left-0 font-mono text-[6rem] text-matrix/10 font-bold pointer-events-none select-none z-0 lg:hidden">
        0{index + 1}
      </span>

      {/* Project Image Console */}
      <div className="relative flex-1 w-full aspect-video rounded-2xl overflow-hidden border border-matrix/20 bg-black/40 group-hover:border-matrix/40 transition-colors duration-500 z-10">
        <motion.div style={{ y }} className="relative w-full h-full scale-110">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* Scanning Line Animation */}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-matrix/30 shadow-[0_0_15px_#10e956] z-20 pointer-events-none"
        />

        {/* Console Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-60 pointer-events-none" />

        {/* Project Type Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 border border-matrix/30 backdrop-blur-md">
          <span className="font-mono text-[10px] text-matrix uppercase tracking-tighter flex items-center gap-2">
            <Monitor size={10} /> System_Module
          </span>
        </div>
      </div>

      {/* Project Info Content */}
      <div
        className={`flex-1 flex flex-col ${isEven ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"} space-y-6 z-20`}
      >
        <div className="space-y-2">
          <span className="font-mono text-matrix text-xs tracking-widest uppercase">
            [ Featured_Project ]
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-matrix transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        {/* Description Glass Card */}
        <motion.div
          whileHover={{ x: isEven ? -10 : 10 }}
          className="p-6 md:p-8 rounded-2xl bg-[#0D0208]/80 backdrop-blur-xl border border-matrix/10 shadow-2xl relative z-30"
        >
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            {project.description}
          </p>

          {/* Status Metadata */}
          <div
            className={`mt-6 pt-4 border-t border-matrix/5 flex items-center gap-4 ${isEven ? "justify-end" : "justify-start"}`}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-matrix animate-pulse" />
              <span className="font-mono text-[9px] text-matrix/60 uppercase">
                Stable_Build
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500">
              <Code2 size={12} />
              <span className="font-mono text-[9px] uppercase">
                v2.1.0-delta
              </span>
            </div>
          </div>
        </motion.div>

        {/* Tooling Tags */}
        <div
          className={`flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-matrix/70 ${isEven ? "justify-end" : "justify-start"}`}
        >
          {project.tooling.map((tag: string) => (
            <span
              key={tag}
              className="hover:text-matrix transition-colors duration-200"
            >
              #{tag.replace(/\s+/g, "_").toLowerCase()}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div
          className={`flex items-center gap-6 pt-4 ${isEven ? "justify-end font-medium tracking-wide text-2xl hover:text-theme transition-all ease-in-out duration-300 text-gray-400" : "justify-start font-medium tracking-wide text-2xl hover:text-theme transition-all ease-in-out duration-300 text-gray-400"}`}
        >
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="p-3 rounded-full bg-matrix/5 border border-matrix/10 text-gray-400 hover:text-matrix hover:border-matrix/40 transition-all duration-300 shadow-lg hover:shadow-matrix/5"
            >
              <GithubIcon size={20} />
            </Link>
          )}
          {project.websiteLink && (
            <Link
              href={project.websiteLink}
              target="_blank"
              className="p-3 rounded-full bg-matrix/5 border border-matrix/10 text-gray-400 hover:text-matrix hover:border-matrix/40 transition-all duration-300 shadow-lg hover:shadow-matrix/5"
            >
              <ExternalLink size={20} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedSection = () => {
  const featuredProjects = PROJECT_DATA.filter((p) => p.isFeatured);

  return (
    <section
      className="w-full relative pt-32 pb-12 overflow-hidden z-50"
      id="work"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10e9560a_1px,transparent_1px),linear-gradient(to_bottom,#10e9560a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="custom-container relative">
        {/* Section Header */}
        <div className="flex items-center w-full mb-24 gap-6">
          <h3 className="font-mono text-matrix text-sm tracking-[0.3em] uppercase">
            {"// 03. Artifact_Archive"}
          </h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-matrix/30 to-transparent" />
        </div>

        <div className="flex flex-col">
          {featuredProjects.map((project, idx) => (
            <FeaturedProject key={project.key} project={project} index={idx} />
          ))}
        </div>

        {/* Link to Archive Placeholder */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center mt-12"
        >
          <Link 
            href="/archive" 
            className="px-8 py-3 rounded-xl border border-matrix/20 text-matrix font-mono text-sm hover:bg-matrix/10 transition-all duration-300 group flex items-center gap-3"
          >
            <Terminal size={16} />
            Request_System_Full_Archive
            <span className="animate-pulse">_</span>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FeaturedSection;
