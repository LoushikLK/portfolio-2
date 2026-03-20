"use client";

import { ChangeEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal, ShieldCheck, Wifi, Loader2, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "transmitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
    // Clear error when typing
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {
      name: !name.trim() ? "AUTHOR_ID_REQUIRED" : "",
      email: !email.trim() ? "ENCRYPTION_PATH_REQUIRED" : "",
      message: !message.trim() ? "PAYLOAD_EMPTY" : "",
    };
    
    if (Object.values(newErrors).some(err => err)) {
      setErrors(newErrors);
      return;
    }

    setStatus("transmitting");

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject: name, message }),
      });

      if (!response.ok) throw new Error("TRANSMISSION_FAILED");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      
      // Auto-reset after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="w-full relative z-50 pt-12 pb-12" id="contact">
      {/* Background Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-matrix/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="custom-container relative">
        {/* Section Header */}
        <div className="flex items-center w-full mb-20 gap-6">
          <h3 className="font-mono text-matrix text-sm tracking-[0.3em] uppercase">
            // 04. Transmission_HUB
          </h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-matrix/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: System Status Card */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-matrix/20 bg-black/40 backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Terminal className="text-matrix" size={20} />
                  <span className="font-mono text-xs text-white uppercase tracking-widest">Broadcast_Status</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-matrix animate-pulse shadow-[0_0_8px_#10e956]" />
                  <span className="font-mono text-[10px] text-matrix uppercase">UPLINK_READY</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Establish a secure connection for data transmission. All communications are channeled through my direct neural interface for immediate processing.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-matrix/5 border border-matrix/10">
                    <span className="block font-mono text-[9px] text-matrix/50 uppercase mb-1">Latency</span>
                    <span className="font-mono text-xs text-white">~24ms (Optimal)</span>
                  </div>
                  <div className="p-4 rounded-xl bg-matrix/5 border border-matrix/10">
                    <span className="block font-mono text-[9px] text-matrix/50 uppercase mb-1">Security</span>
                    <span className="font-mono text-xs text-white">End-to-End</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-matrix/10 flex items-center gap-4 text-matrix/60">
                <ShieldCheck size={16} />
                <span className="font-mono text-[10px] uppercase">Identity_Verification_Protocol: ACTIVE</span>
              </div>
            </div>

            {/* Visual Decorative Element */}
            <div className="hidden lg:flex flex-col gap-4 opacity-50">
              <div className="h-px w-full bg-gradient-to-r from-matrix/40 to-transparent" />
              <div className="h-px w-3/4 bg-gradient-to-r from-matrix/20 to-transparent" />
              <div className="h-px w-1/2 bg-gradient-to-r from-matrix/10 to-transparent" />
            </div>
          </div>

          {/* Right Side: Transmission Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-12 rounded-2xl border border-matrix/40 bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]"
                >
                  <div className="w-16 h-16 rounded-full bg-matrix/10 flex items-center justify-center text-matrix mb-4">
                    <Wifi size={32} />
                  </div>
                  <h3 className="font-mono text-lg text-white uppercase tracking-widest">Transmission_Received</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Your payload has been successfully integrated into the system archive. Response sequence initiated.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 font-mono text-[10px] text-matrix hover:text-white transition-colors"
                  >
                    [ RETURN_TO_INPUT ]
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div className="space-y-2 group">
                    <label className="font-mono text-[10px] text-matrix/50 uppercase tracking-widest pl-1">AUTHOR_ID</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Define your subject identifier..."
                        className={`w-full bg-[#0D0208]/60 border ${errors.name ? "border-red-500/50" : "border-matrix/20"} focus:border-matrix/60 p-4 rounded-xl text-white font-mono text-sm outline-none transition-all focus:shadow-[0_0_15px_rgba(16,233,86,0.1)] placeholder:text-gray-700`}
                      />
                      {errors.name && (
                        <span className="absolute right-4 top-4 text-red-500">
                          <AlertCircle size={18} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2 group">
                    <label className="font-mono text-[10px] text-matrix/50 uppercase tracking-widest pl-1">ENCRYPTION_PATH</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="your@system.node"
                        className={`w-full bg-[#0D0208]/60 border ${errors.email ? "border-red-500/50" : "border-matrix/20"} focus:border-matrix/60 p-4 rounded-xl text-white font-mono text-sm outline-none transition-all focus:shadow-[0_0_15px_rgba(16,233,86,0.1)] placeholder:text-gray-700`}
                      />
                      {errors.email && (
                        <span className="absolute right-4 top-4 text-red-500">
                          <AlertCircle size={18} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2 group">
                    <label className="font-mono text-[10px] text-matrix/50 uppercase tracking-widest pl-1">MESSAGE_PAYLOAD</label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter the contents of your transmission..."
                        className={`w-full bg-[#0D0208]/60 border ${errors.message ? "border-red-500/50" : "border-matrix/20"} focus:border-matrix/60 p-4 rounded-xl text-white font-mono text-sm outline-none transition-all focus:shadow-[0_0_15px_rgba(16,233,86,0.1)] placeholder:text-gray-700 resize-none`}
                      />
                      {errors.message && (
                        <span className="absolute right-4 bottom-4 text-red-500">
                          <AlertCircle size={18} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Transmit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === "transmitting"}
                      className="w-full group relative overflow-hidden p-0.5 rounded-xl bg-gradient-to-r from-matrix/40 via-matrix/10 to-matrix/40 transition-all hover:bg-matrix/60 active:scale-[0.98]"
                    >
                      <div className="bg-[#0D0208] rounded-[10px] px-8 py-4 flex items-center justify-center gap-3 transition-colors group-hover:bg-transparent">
                        {status === "transmitting" ? (
                          <>
                            <Loader2 className="animate-spin text-matrix" size={20} />
                            <span className="font-mono text-sm text-matrix uppercase tracking-widest">Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="text-matrix" size={20} />
                            <span className="font-mono text-sm text-white uppercase tracking-widest">Initiate_Broadcast</span>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
