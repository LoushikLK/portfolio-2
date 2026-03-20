"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal, Cpu, Box, Layout } from "lucide-react";
import { PROJECT_DATA } from "@/data";
import Link from "next/link";

const WorkSection = () => {
  // Filter for projects that are NOT featured to show in this secondary grid
  const secondaryProjects = PROJECT_DATA.filter((p) => !p.isFeatured);

  if (secondaryProjects.length === 0) return null;

  return (
    <section className="w-full relative py-12 pb-24 z-50 overflow-hidden" id="other-work">
      <div className="custom-container relative">
        {/* Subtle Section Divider/Header */}
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-matrix/5 border border-matrix/10 backdrop-blur-sm">
            <Box size={14} className="text-matrix" />
            <span className="font-mono text-[10px] text-matrix uppercase tracking-[0.2em]">
              Secondary_Artifact_Registry
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 font-mono uppercase tracking-tighter">
            Other_Noteworthy_Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-[#0D0208]/40 backdrop-blur-md border border-matrix/10 hover:border-matrix/30 transition-all duration-500 flex flex-col justify-between overflow-hidden h-full"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-matrix/5 blur-[50px] rounded-full group-hover:bg-matrix/10 transition-colors" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-matrix/5 border border-matrix/10 text-matrix group-hover:scale-110 transition-transform duration-300">
                    <Terminal size={20} />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubLink && (
                      <Link 
                        href={project.githubLink} 
                        target="_blank" 
                        className="text-gray-500 hover:text-matrix transition-colors"
                      >
                        <Github size={18} />
                      </Link>
                    )}
                    {project.websiteLink && (
                      <Link 
                        href={project.websiteLink} 
                        target="_blank" 
                        className="text-gray-500 hover:text-matrix transition-colors"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-matrix transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="relative mt-8 pt-4 border-t border-matrix/5 flex flex-wrap gap-x-3 gap-y-2">
                {project.tooling.map((tool) => (
                  <span 
                    key={tool} 
                    className="font-mono text-[9px] text-matrix/50 uppercase tracking-wider"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Archive Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="https://github.com/LoushikLK"
            target="_blank"
            className="group relative px-10 py-4 bg-matrix/5 border border-matrix/20 rounded-xl overflow-hidden active:scale-95 transition-all"
          >
            <div className="absolute inset-0 bg-matrix/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center gap-3">
              <span className="font-mono text-xs text-matrix group-hover:text-white transition-colors tracking-[0.2em] font-bold uppercase">
                Browse_Global_Repository
              </span>
              <Cpu size={16} className="text-matrix group-hover:text-white transition-all animate-spin-slow" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
