"use client";

import { useState, useEffect } from "react";
import { CHAMPIONS, Champion } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { ChampionCard } from "./ChampionCard";
import { ChampionDetails } from "./ChampionDetails";
import { ChampionCardSkeleton } from "./Skeletons";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ChampionGrid = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedChampion, setSelectedChampion] = useState<Champion | null>(null);
  const [isFiltering, setIsFiltering] = useState(true);

  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => setIsFiltering(false), 500);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedRole]);

  const filteredChampions = CHAMPIONS.filter((champion) => {
    const matchesSearch = 
      champion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      champion.displayName[language].toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = selectedRole ? champion.role === selectedRole : true;
    
    return matchesSearch && matchesRole;
  });

  const roles = ["adc", "support", "mid", "jungle", "top"];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-white/[0.02] border border-white/5 p-4 rounded-3xl backdrop-blur-sm">
        <div className="relative w-full md:max-w-xl group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold-500 transition-colors" size={20} />
          <Input
            placeholder={t("champions.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-16 h-14 bg-white/5 border-white/10 rounded-2xl focus:border-gold-500/50 focus:ring-gold-500/10 transition-all text-lg placeholder:text-white/10"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
          <Button
            variant={selectedRole === null ? "default" : "ghost"}
            onClick={() => setSelectedRole(null)}
            className={cn(
              "rounded-xl px-6 h-12 transition-all",
              selectedRole === null ? "bg-gold-500 text-black font-bold" : "text-white/40 hover:text-white hover:bg-white/5"
            )}
          >
            {t("champions.filters.all")}
          </Button>
          {roles.map((role) => (
            <Button
              key={role}
              variant={selectedRole === role ? "default" : "ghost"}
              onClick={() => setSelectedRole(role)}
              className={cn(
                "rounded-xl px-6 h-12 transition-all",
                selectedRole === role ? "bg-gold-500 text-black font-bold" : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              {t(`champions.roles.${role.toUpperCase()}`)}
            </Button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {isFiltering ? (
            Array.from({ length: 12 }).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChampionCardSkeleton />
              </motion.div>
            ))
          ) : (
            filteredChampions.map((champion, index) => (
              <motion.div
                key={champion.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ChampionCard
                  champion={champion}
                  onClick={() => setSelectedChampion(champion)}
                />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>

      <ChampionDetails
        champion={selectedChampion}
        isOpen={!!selectedChampion}
        onClose={() => setSelectedChampion(null)}
      />

      {!isFiltering && filteredChampions.length === 0 && (
        <div className="text-center py-20">
          <div className="text-white/20 mb-4 flex justify-center">
            <Search size={64} />
          </div>
          <h3 className="text-2xl font-bold text-white/40">{t("champions.noResults")}</h3>
        </div>
      )}
    </div>
  );
};
