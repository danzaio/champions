"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useMotionTemplate } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Champion } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Cpu, Zap, Shield, Target, Swords, Loader2 } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

interface ChampionCardProps {
  champion: Champion;
  onClick: () => void;
}

const RoleIcon = ({ role }: { role: string }) => {
  switch (role) {
    case 'adc': return <Swords size={14} />;
    case 'support': return <Shield size={14} />;
    case 'mid': return <Target size={14} />;
    case 'jungle': return <Zap size={14} />;
    case 'top': return <Shield size={14} />;
    default: return <Cpu size={14} />;
  }
};

const ChampionImage = ({ champion }: { champion: Champion }) => {
  const id = champion.id.toLowerCase();
  const [src, setSrc] = useState<string>(`/champions/card/${id}.jpg`);
  const [isLoading, setIsLoading] = useState(true);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setSrc(`/champions/card/${id}.jpg`);
    setIsLoading(true);
    setErrorCount(0);
  }, [id]);

  const handleError = () => {
    const base = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${id}/skins/base/`;
    const remoteSources = [
      `${base}${id}loadscreen.jpg`,
      `${base}${id}loadscreen_0.jpg`,
      `${base}images/${id}_load_screen_0.jpg`,
      `${base}images/${id}_splash_uncentered_0.jpg`,
    ];

    if (errorCount < remoteSources.length) {
      setSrc(remoteSources[errorCount]);
      setErrorCount(prev => prev + 1);
    } else {
      setSrc('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png');
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-full w-full">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-zinc-900 animate-pulse"
          >
            <div 
              className="absolute inset-0 opacity-20"
              style={{ background: `radial-gradient(circle at center, ${champion.color}, transparent)` }}
            />
            <Loader2 className="w-6 h-6 text-gold-500/20 animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
      {src && (
        <img
          src={src}
          alt={champion.name}
          className={cn(
            "h-full w-full object-cover transition-all duration-700",
            isLoading ? "scale-110 blur-xl opacity-0" : "scale-100 blur-0 opacity-100 group-hover:scale-110"
          )}
          onLoad={() => setIsLoading(false)}
          onError={handleError}
        />
      )}
    </div>
  );
};

export const ChampionCard = ({ champion, onClick }: ChampionCardProps) => {
  const { language } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse tracking for spotlight (pixels)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    
    // For Tilt
    const xPct = mX / width - 0.5;
    const yPct = mY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    // For Spotlight
    mouseX.set(mX);
    mouseY.set(mY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={cardRef}
      onClick={onClick} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 0 40px ${champion.color}30`
      }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 transition-all duration-500 hover:border-white/20 hover:bg-zinc-900"
    >
      <div className="aspect-[2/3] relative w-full overflow-hidden" style={{ transform: "translateZ(50px)" }}>
        <ChampionImage champion={champion} />
        
        {/* Color Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                ${champion.color}20,
                transparent 80%
              )
            `,
          }}
        />

        {/* Diagonal Shimmer Beam */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute inset-0 h-full w-[300%] blur-[100px]"
            style={{
              background: `linear-gradient(110deg, transparent 40%, ${champion.color}05 48%, ${champion.color}15 50%, ${champion.color}05 52%, transparent 60%)`,
            }}
            animate={{
              x: ["-150%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-20" style={{ transform: "translateZ(60px)" }}>
           <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
            <RoleIcon role={champion.role} />
          </div>
          {champion.tag && (
            <div className={cn(
              "px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border",
              champion.tag === 'HOT' ? "bg-red-500/80 border-red-400/50" :
              champion.tag === 'NEW' ? "bg-blue-500/80 border-blue-400/50" :
              "bg-gold-500/80 border-gold-400/50 text-black"
            )}>
              {champion.tag}
            </div>
          )}
        </div>

        {/* Bottom Content */}
        <div className="absolute inset-x-0 bottom-0 p-4 z-30" style={{ transform: "translateZ(80px)" }}>
          <div className="flex items-center gap-2 mb-1">
             <motion.div 
               className="h-1.5 w-1.5 rounded-full" 
               style={{ backgroundColor: champion.color, boxShadow: `0 0 10px ${champion.color}` }}
               animate={{ scale: [1, 1.5, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
             />
             <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">v2.4.0</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-gold-500 transition-colors">
            {champion.displayName[language]}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
