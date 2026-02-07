"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TerminalLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lines, setLines] = useState<{text: string, type: 'cmd' | 'info' | 'success' | 'warning'}[]>([]);
  const [progress, setProgress] = useState(0);
  
  interface TerminalLine {
    text: string;
    type: 'cmd' | 'info' | 'success' | 'warning';
  }

  const terminalLines: TerminalLine[] = [
    { text: "DANZ-AIO OS [Version 10.0.22631.4751]", type: 'info' },
    { text: "(c) DanZ Corporation. All rights reserved.", type: 'info' },
    { text: "", type: 'info' },
    { text: "C:\\> initialize_kernel.exe --mode=performance", type: 'cmd' },
    { text: "Loading core modules...", type: 'info' },
    { text: "Neural Prediction Engine: [OK]", type: 'success' },
    { text: "DataDragon Sync: [OK]", type: 'success' },
    { text: "Bilingual Translation Layer: [OK]", type: 'success' },
    { text: "SDK Bridge: [CONNECTED]", type: 'success' },
    { text: "", type: 'info' },
    { text: "C:\\> start_interface.sh", type: 'cmd' },
    { text: "Compiling shaders...", type: 'warning' },
    { text: "Optimizing UI components...", type: 'warning' },
    { text: "System status: SECURE", type: 'success' },
    { text: "Welcome back, User.", type: 'info' }
  ];

  useEffect(() => {
    let currentLine = 0;
    const lineInterval = setInterval(() => {
      if (currentLine < terminalLines.length) {
        setLines(prev => [...prev, terminalLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(lineInterval);
        setTimeout(() => setIsVisible(false), 300);
      }
    }, 50);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 5;
        return 100;
      });
    }, 40);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, []); // terminalLines is constant inside the component but defined outside useEffect correctly now

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono p-4 md:p-10 overflow-hidden"
        >
          {/* CRT Scanline & Glitch Effect Overlay */}
          <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
             <motion.div 
               animate={{ 
                 y: ["0%", "100%", "0%"],
                 opacity: [0.05, 0.1, 0.05]
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 bg-white/5 h-1 w-full blur-sm"
             />
          </div>
          
          <div className="max-w-3xl w-full h-[500px] border border-gold-500/30 bg-zinc-950/90 p-8 rounded-lg shadow-[0_0_100px_rgba(255,215,0,0.1)] relative overflow-hidden flex flex-col backdrop-blur-xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_#27c93f]" />
              </div>
              <div className="text-[10px] text-gold-500/50 uppercase tracking-[0.3em] font-black italic">
                DANZ-AIO KERNEL v2.4.0
              </div>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 overflow-hidden space-y-1.5">
              {lines.map((line, i) => {
                if (!line) return null;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-sm md:text-base ${
                      line.type === 'cmd' ? "text-gold-400 font-bold" :
                      line.type === 'success' ? "text-green-400" :
                      line.type === 'warning' ? "text-yellow-400" :
                      "text-white/70"
                    }`}
                  >
                    {line.text && line.text.startsWith("C:\\>") && <span className="text-blue-400 mr-2 font-bold">admin@danz-aio:~$</span>}
                    {line.text || "\u00A0"}
                  </motion.div>
                );
              })}
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2.5 h-5 bg-gold-500 inline-block align-middle ml-1 shadow-[0_0_10px_#ffd700]"
              />
            </div>

            {/* Progress Bar */}
            <div className="mt-8 space-y-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="text-white/40">Booting System Components</span>
                <span className="text-gold-500">{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  className="h-full bg-gradient-to-r from-gold-600 to-gold-400 shadow-[0_0_20px_rgba(255,215,0,0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Background Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
               <span className="text-[250px] font-black italic tracking-tighter">DANZ</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
