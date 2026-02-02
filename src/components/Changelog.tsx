"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, ChevronRight, Plus, RefreshCw, Wrench } from "lucide-react";
import { CHANGELOG } from "@/lib/changelog";
import React, { useRef } from "react";

export const Changelog = () => {
  const { language, t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="changelog" className="py-24 bg-transparent relative z-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              {t("changelog.title").split(" ").map((word, i, arr) => (
                <React.Fragment key={i}>
                  {word === "Updates" || word === "更新" ? <span className="text-gold-500">{word}</span> : word}
                  {i < arr.length - 1 ? " " : ""}
                </React.Fragment>
              ))}
            </h2>
            <div className="h-1 w-20 bg-gold-500 rounded-full mx-auto mb-4" />
            <p className="text-xl text-white/40 font-light">
              {t("changelog.subtitle")}
            </p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold-500/50 before:via-white/5 before:to-transparent">
            {CHANGELOG.map((item, index) => (
              <motion.div
                key={item.version}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gold-500 bg-black text-gold-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <CheckCircle2 size={20} />
                </div>

                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-gold-500/30 transition-all shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-gold-500 text-black font-bold uppercase">v{item.version}</Badge>
                      <span className="text-xs text-white/30 font-bold uppercase tracking-widest flex items-center gap-1">
                        <Calendar size={12} /> {item.date}
                      </span>
                    </div>
                    <Badge variant="outline" className="border-white/10 text-white/40 uppercase text-[10px] tracking-widest">{item.type}</Badge>
                  </div>
                  
                  <div className="space-y-6">
                    {item.features.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-gold-500 mb-3">
                          <Plus size={16} />
                          <span className="text-xs font-bold uppercase tracking-widest">{t("changelog.newFeatures")}</span>
                        </div>
                        <ul className="space-y-2">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-white/50 font-light">
                              <ChevronRight size={14} className="mt-1 text-gold-500/50 shrink-0" />
                              {feature[language]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.addedChampions.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-blue-500 mb-3">
                          <Plus size={16} />
                          <span className="text-xs font-bold uppercase tracking-widest">{t("changelog.addedChampions")}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.addedChampions.map((champ) => (
                            <Badge key={champ} variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20 capitalize">
                              {champ}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.updatedChampions.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-green-500 mb-3">
                          <RefreshCw size={16} />
                          <span className="text-xs font-bold uppercase tracking-widest">{t("changelog.updatedChampions")}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.updatedChampions.map((champ) => (
                            <Badge key={champ} variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20 capitalize">
                              {champ}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.fixes.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-red-500 mb-3">
                          <Wrench size={16} />
                          <span className="text-xs font-bold uppercase tracking-widest">{t("changelog.fixes")}</span>
                        </div>
                        <ul className="space-y-2">
                          {item.fixes.map((fix, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-white/50 font-light">
                              <ChevronRight size={14} className="mt-1 text-red-500/50 shrink-0" />
                              {fix[language]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
