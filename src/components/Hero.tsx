"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight, MessageCircle, Send, Youtube } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { HeaderTerminal } from "@/components/HeaderTerminal";
import { useRef } from "react";

export const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const terminalY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const spotlightY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent antialiased">
       <motion.div style={{ y: spotlightY }} className="absolute inset-0 pointer-events-none">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
       </motion.div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div style={{ y: textY }} className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-200">
                {t("home.hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-8xl md:text-[10rem] font-bold tracking-tighter mb-6 leading-[0.8]"
            >
              <span className="text-white block relative overflow-hidden group">
                DanZ
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_infinite] blur-xl"
                  initial={false}
                />
              </span>
              <span className="text-gold-500 block ml-4 md:ml-20">
                AIO
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/40 font-light mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {t("home.hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link href="#champions">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-black text-white flex items-center gap-2 px-8 py-3 text-lg font-bold"
                >
                  <span>{t("home.hero.cta")}</span>
                  <ArrowRight size={20} />
                </HoverBorderGradient>
              </Link>

              <Link
                href="https://dsc.gg/danzaio"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm transition-all hover:bg-white/10 hover:border-white/20 h-[52px]"
              >
                <MessageCircle size={18} />
                Discord
              </Link>

              <Link
                href="https://t.me/danzaio"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm transition-all hover:bg-white/10 hover:border-white/20 h-[52px]"
              >
                <Send size={18} />
                Telegram
              </Link>

              <Link
                href="https://youtube.com/@danzaio"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm transition-all hover:bg-white/10 hover:border-white/20 h-[52px]"
              >
                <Youtube size={18} />
                YouTube
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div
            style={{ y: terminalY }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block flex-1 flex justify-end"
          >
             <HeaderTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
