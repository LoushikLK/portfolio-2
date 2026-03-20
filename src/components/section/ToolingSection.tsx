"use client";

import {
  Amazonaws,
  Docker,
  Expressjs,
  Firebase,
  Golang,
  Javascript,
  Linux,
  Mongodb,
  Nextjs,
  Nodejs,
  Postgresql,
  Python,
  Rabbitmq,
  ReactIcon,
  Typescript,
} from "@/assets/icons";
import { motion } from "framer-motion";
import { Code2, Server, Database, Shield, Zap, Share2, Box, Cpu, Layers } from "lucide-react";

const toolingData = [
  {
    category: "CORE_LOGIC",
    icon: <Code2 size={16} />,
    tools: [
      { title: "Golang", icon: <Golang className="text-current text-2xl" /> },
      { title: "Python", icon: <Python className="text-current text-xl" /> },
      { title: "Typescript", icon: <Typescript className="text-current text-xl" /> },
      { title: "Javascript", icon: <Javascript className="text-current text-xl" /> },
    ],
  },
  {
    category: "SYSTEM_ARCHITECTURE",
    icon: <Box size={16} />,
    tools: [
      { title: "Nodejs", icon: <Nodejs className="text-current text-xl" /> },
      { title: "Expressjs", icon: <Expressjs className="text-current text-xl" /> },
      { title: "Gin", icon: <Zap size={20} /> },
      { title: "Microservices", icon: <Share2 size={16} /> },
    ],
  },
  {
    category: "MODULAR_SERVICES",
    icon: <Share2 size={16} />,
    tools: [
      { title: "RabbitMQ", icon: <Rabbitmq className="text-current text-xl" /> },
      { title: "gRPC", icon: <Cpu size={20} /> },
      { title: "Redis", icon: <Zap size={20} /> },
      { title: "Kafka", icon: <Share2 size={20} /> },
    ],
  },
  {
    category: "DATA_SYNTHESIS",
    icon: <Database size={16} />,
    tools: [
      { title: "Mongodb", icon: <Mongodb className="text-current text-xl" /> },
      { title: "Postgresql", icon: <Postgresql className="text-current text-xl" /> },
      { title: "Firebase", icon: <Firebase className="text-current text-xl" /> },
    ],
  },
  {
    category: "INTERFACE_LAYER",
    icon: <Server size={16} />,
    tools: [
      { title: "React", icon: <ReactIcon className="text-current text-xl" /> },
      { title: "Nextjs", icon: <Nextjs className="text-current text-xl" /> },
    ],
  },
  {
    category: "INFRA_ORCHESTRATION",
    icon: <Shield size={16} />,
    tools: [
      { title: "Docker", icon: <Docker className="text-current text-xl" /> },
      { title: "Kubernetes", icon: <Layers size={20} /> },
      { title: "AWS", icon: <Amazonaws className="text-current text-xl" /> },
      { title: "Linux", icon: <Linux className="text-current text-xl" /> },
    ],
  },
];

const ToolingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full relative z-50 py-20 pb-32" id="expertise">
      <div className="custom-container">
        {/* Section Header */}
        <div className="flex items-center w-full mb-16 gap-6">
          <h3 className="font-mono text-matrix text-sm tracking-[0.3em] uppercase">
            {"// 02. System_Registry"}
          </h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-matrix/30 to-transparent" />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {toolingData.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              variants={itemVariants}
              className="relative p-6 rounded-2xl border border-matrix/10 bg-black/40 backdrop-blur-md group hover:border-matrix/30 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-matrix/10 text-matrix">
                  {group.icon}
                </div>
                <h4 className="font-mono text-xs text-matrix/60 tracking-widest uppercase">
                  [{group.category}]
                </h4>
              </div>

              {/* Tools List */}
              <div className="grid grid-cols-1 gap-3">
                {group.tools.map((tool, toolIdx) => (
                  <motion.div
                    key={toolIdx}
                    whileHover={{ x: 5, backgroundColor: "rgba(16, 233, 86, 0.05)" }}
                    className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-matrix/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-gray-400 group-hover:text-matrix transition-colors duration-300">
                        {tool.icon}
                      </div>
                      <span className="font-mono text-[13px] text-gray-300 group-hover:text-white transition-colors duration-300">
                        {tool.title}
                      </span>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-matrix/40 uppercase hidden sm:inline">Active</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-matrix/40 shadow-[0_0_5px_rgba(16,233,86,0.3)]" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-matrix/5 rounded-tr-2xl group-hover:border-matrix/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-matrix/5 rounded-bl-2xl group-hover:border-matrix/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolingSection;
