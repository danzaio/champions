"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ChampionGrid } from "@/components/ChampionGrid";
import { Changelog } from "@/components/Changelog";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/moving-border";
import { MessageCircle, Send, Youtube } from "lucide-react";
import Link from "next/link";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import React from "react";

export default function Home() {
  const { t } = useLanguage();
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <section id="champions" className="py-24 bg-transparent relative z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              {t("champions.title").split(" ").map((word: string, i: number, arr: string[]) => (
                <React.Fragment key={i}>
                  {word === "Champions" || word === "英雄" ? <span className="text-gold-500">{word}</span> : word}
                  {i < arr.length - 1 ? " " : ""}
                </React.Fragment>
              ))}
            </h2>
            <div className="h-1 w-20 bg-gold-500 rounded-full" />
          </motion.div>
          <ChampionGrid />
        </div>
      </section>
      <Changelog />

      {/* Footer CTA */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{t("home.cta.title")}</h2>
          <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto">
            {t("home.cta.description")}
          </p>
          <div className="flex flex-col items-center justify-center gap-8">
             <Link href="https://dsc.gg/danzaio">
                <Button
                   borderRadius="1.75rem"
                   className="bg-gold-500 text-black font-bold text-lg hover:bg-gold-400 transition-colors border-none"
                   containerClassName="h-14 w-auto min-w-[200px]"
                   borderClassName="bg-white opacity-50"
                 >
                   {t("home.cta.button")}
                 </Button>
             </Link>


             <div className="flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="https://dsc.gg/danzaio"
                  target="_blank"
                  className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
                >
                  <MessageCircle size={20} className="group-hover:text-gold-500 transition-colors" />
                  <span className="font-medium">Discord</span>
                </Link>

                <Link
                  href="https://t.me/danzaio"
                  target="_blank"
                  className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
                >
                  <Send size={20} className="group-hover:text-gold-500 transition-colors" />
                  <span className="font-medium">Telegram</span>
                </Link>

                <Link
                  href="https://youtube.com/@danzaio"
                  target="_blank"
                  className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
                >
                  <Youtube size={20} className="group-hover:text-gold-500 transition-colors" />
                  <span className="font-medium">YouTube</span>
                </Link>
             </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
