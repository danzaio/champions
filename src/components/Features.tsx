"use client";

import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { 
  ShieldCheck, 
  Zap, 
  Target, 
  MousePointer2, 
  Cpu, 
  Infinity 
} from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className,
  index,
}: { 
  title: string; 
  description: string; 
  icon: any; 
  className?: string;
  index: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition-colors duration-300 hover:bg-zinc-900/80 hover:border-gold-500/20",
        className
      )}
    >
      {/* Interactive Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-gold-500 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="mb-3 text-xl font-bold tracking-tight text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const Features = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={containerRef} id="features" className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            {t("home.features.title").includes("Elite") ? (
              t("home.features.title").split(" ").map((word: string, i: number, arr: string[]) => (
                <React.Fragment key={i}>
                  {word === "Elite" ? <span className="text-gold-500">{word}</span> : word}
                  {i < arr.length - 1 ? " " : ""}
                </React.Fragment>
              ))
            ) : t("home.features.title").includes("精英") ? (
              <>
                {t("home.features.title").split("精英")[0]}
                <span className="text-gold-500">精英</span>
                {t("home.features.title").split("精英")[1]}
              </>
            ) : (
              t("home.features.title")
            )}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/40 leading-relaxed"
          >
            {t("home.features.description")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            index={0}
            title={t("home.features.prediction.title")}
            description={t("home.features.prediction.description")}
            icon={Target}
          />

          <FeatureCard
            index={1}
            title={t("home.features.security.title")}
            description={t("home.features.security.description")}
            icon={ShieldCheck}
          />

          <FeatureCard
            index={2}
            title={t("home.features.latency.title")}
            description={t("home.features.latency.description")}
            icon={Zap}
          />

          <FeatureCard
            index={3}
            title={t("home.features.combos.title")}
            description={t("home.features.combos.description")}
            icon={MousePointer2}
          />

          <FeatureCard
            index={4}
            title={t("home.features.core.title")}
            description={t("home.features.core.description")}
            icon={Cpu}
          />

          <FeatureCard
            index={5}
            title={t("home.features.updates.title")}
            description={t("home.features.updates.description")}
            icon={Infinity}
          />
        </div>
      </div>
    </section>
  );
};
