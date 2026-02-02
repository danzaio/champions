"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ASCII_LOGO = `
 ██████╗  █████╗ ███╗   ██╗███████╗
 ██╔══██╗██╔══██╗████╗  ██║╚══███╔╝
 ██║  ██║███████║██╔██╗ ██║  ███╔╝ 
 ██║  ██║██╔══██║██║╚██╗██║ ███╔╝  
 ██████╔╝██║  ██║██║ ╚████║███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝`;

const TerminalLine = ({ text, type }: { text: string; type: string }) => {
  const color = 
    type === "success" ? "text-green-400" :
    type === "system" ? "text-blue-400" :
    type === "ready" ? "text-gold-500 font-bold" :
    type === "sub" ? "text-white/40 pl-4" : "text-white/80";

  return (
    <div className={`font-mono text-[9px] md:text-[11px] ${color} leading-none mb-0.5`}>
      {text}
    </div>
  );
};

const CRTOverlay = () => (
  <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
    {/* Scanlines - Ultra subtle horizontal noise */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.02)_50%)] bg-[length:100%_2px] opacity-10" />
    {/* Screen Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02)_0%,transparent_85%)] opacity-40" />
    {/* Vignette */}
    <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]" />
    {/* Flicker Layer */}
    <div className="absolute inset-0 bg-white/[0.005] animate-flicker pointer-events-none" />
  </div>
);

export const TerminalLoader = () => {
  const { t } = useLanguage();
  const [displayedLogs, setDisplayedLogs] = useState<number>(0);
  const [showWebsite, setShowWebsite] = useState(false);
  const [isPoweringOff, setIsPoweringOff] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const BOOT_LOGS = [
    { text: t("terminal.initializing"), type: "info" },
    { text: t("terminal.detection"), type: "system" },
    { text: t("terminal.searching"), type: "info" },
    { text: t("terminal.found"), type: "success" },
    { text: t("terminal.attaching"), type: "system" },
    { text: t("terminal.scanning"), type: "info" },
    { text: t("terminal.resolved"), type: "success" },
    { text: t("terminal.bypassing"), type: "success" },
    { text: t("terminal.loading_engine"), type: "info" },
    { text: t("terminal.weights"), type: "system" },
    { text: t("terminal.hooking").replace("{api}", "OnProcessSpell"), type: "success" },
    { text: t("terminal.hooking").replace("{api}", "OnIssueOrder"), type: "success" },
    { text: t("terminal.injecting"), type: "info" },
    { text: t("terminal.module_ok").replace("{module}", "EZREAL"), type: "sub" },
    { text: t("terminal.module_ok").replace("{module}", "LEESIN"), type: "sub" },
    { text: t("terminal.module_ok").replace("{module}", "VAYNE"), type: "sub" },
    { text: t("terminal.ready"), type: "ready" },
  ];

  useEffect(() => {
    if (displayedLogs < BOOT_LOGS.length) {
      const timeout = setTimeout(() => {
        setDisplayedLogs(prev => prev + 1);
      }, displayedLogs < 5 ? 10 : (displayedLogs < 12 ? 40 : 80)); // Cascading speed
      return () => clearTimeout(timeout);
    } else {
      const timer = setTimeout(() => {
        setIsPoweringOff(true);
        setTimeout(() => setShowWebsite(true), 450);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [displayedLogs, BOOT_LOGS.length, t]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLogs]);

  if (showWebsite) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center overflow-hidden"
      >
        <CRTOverlay />
        
        <motion.div 
          animate={isPoweringOff ? { 
            scaleX: [1, 1.2, 0.001],
            scaleY: [1, 0.005, 0.001],
            filter: ["blur(0px)", "blur(2px)", "blur(10px)"],
            opacity: [1, 1, 0]
          } : { scale: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full max-w-lg p-6 relative z-10"
        >
          {/* Terminal Window */}
          <div className="relative bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden p-6 shadow-[0_0_80px_rgba(0,0,0,1)]">
            {/* Top Bar - Ultra Soft */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />


            
            {/* ASCII Logo */}
            <pre className="text-gold-500/80 text-[6px] md:text-[8px] leading-none mb-8 font-mono select-none">
              {ASCII_LOGO}
            </pre>

            {/* Logs Container */}
            <div 
              ref={scrollRef}
              className="h-48 overflow-hidden font-mono"
            >
              {BOOT_LOGS.slice(0, displayedLogs).map((log, i) => (
                <TerminalLine key={i} text={log.text} type={log.type} />
              ))}
              {displayedLogs < BOOT_LOGS.length && (
                <span className="inline-block w-2 h-4 bg-gold-500 animate-pulse align-middle ml-1" />
              )}
            </div>

            {/* Hardware Stats */}
            <div className="mt-6 flex justify-between items-end border-t border-white/5 pt-4">
              <div className="space-y-1">
                <div className="flex gap-2 text-[8px] uppercase text-white/20 font-mono">
                  <span>{t("terminal.cpu")}:</span>
                  <span className="text-gold-500/40">12.4%</span>
                </div>
                <div className="flex gap-2 text-[8px] uppercase text-white/20 font-mono">
                  <span>{t("terminal.gpu")}:</span>
                  <span className="text-gold-500/40">2440MB</span>
                </div>
              </div>
              <div className="text-[10px] text-white/30 font-mono flex flex-col items-end">
                 <span>{t("terminal.status")}</span>
                 <span className="text-green-500/50 animate-pulse">{t("terminal.online")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
