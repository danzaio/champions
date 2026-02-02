"use client";

import { Champion } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Zap, Keyboard, Settings, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ChampionDetailsProps {
  champion: Champion | null;
  isOpen: boolean;
  onClose: () => void;
}

const TabContentWrapper = ({ children, value }: { children: React.ReactNode; value: string }) => (
  <TabsContent value={value} className="mt-0">
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  </TabsContent>
);

const ChampionSplash = ({ champion }: { champion: Champion }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [errorCount, setErrorCount] = useState(0);

  const id = champion.id.toLowerCase();
  const base = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${id}/skins/base/images/`;

  const sources = [
    `${base}${id}_splash_uncentered_0.jpg`,
    `${base}${id}_splash_centered_0.jpg`,
    `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${id}/skins/base/${id}loadscreen.jpg`,
  ];

  useEffect(() => {
    if (id === 'mel') {
      setSrc(`${base}melsplash_uncentered_0.mel.jpg`);
    } else {
      setSrc(sources[0]);
    }
  }, [id]);

  const handleError = () => {
    if (errorCount < sources.length - 1) {
      setErrorCount(prev => prev + 1);
      setSrc(sources[errorCount + 1]);
    }
  };

  if (!src) return null;

  return (
    <div
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
      style={{
        backgroundImage: `url('${src}')`,
        backgroundColor: `${champion.color}20`
      }}
    />
  );
};

export const ChampionDetails = ({ champion, isOpen, onClose }: ChampionDetailsProps) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("abilities");

  if (!champion) return null;

  const abilityKeys = ["Q", "W", "E", "R"] as const;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-zinc-950 border-white/10 p-0 overflow-hidden gap-0">
        <div className="relative h-80 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"
          />
          <ChampionSplash champion={champion} />
          <div className="absolute bottom-8 left-8 z-20">
            <div className="flex items-center gap-3 mb-2">
               <Badge className="bg-gold-500 text-black font-bold uppercase tracking-widest text-[10px]">
                 {t(`champions.roles.${champion.role.toUpperCase()}`)}
               </Badge>
               {champion.tag && (
                 <Badge variant="outline" className="border-gold-500/50 text-gold-500 font-bold uppercase tracking-widest text-[10px]">
                   {champion.tag}
                 </Badge>
               )}
            </div>
            <DialogTitle className="text-5xl font-bold tracking-tighter text-white">
              {champion.displayName[language]}
            </DialogTitle>
          </div>
        </div>

        <div className="p-8">
          <Tabs defaultValue="abilities" className="w-full" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full mb-8">
              <TabsTrigger value="abilities" className="rounded-full data-[state=active]:bg-gold-500 data-[state=active]:text-black transition-all duration-300">
                <Zap size={14} className="mr-2" /> {t("champion.tabs.abilities")}
              </TabsTrigger>
              <TabsTrigger value="mechanics" className="rounded-full data-[state=active]:bg-gold-500 data-[state=active]:text-black transition-all duration-300">
                <Settings size={14} className="mr-2" /> {t("champion.tabs.mechanics")}
              </TabsTrigger>
              <TabsTrigger value="keybinds" className="rounded-full data-[state=active]:bg-gold-500 data-[state=active]:text-black transition-all duration-300">
                <Keyboard size={14} className="mr-2" /> {t("champion.tabs.keybinds")}
              </TabsTrigger>
            </TabsList>

            <ScrollArea className="h-[400px] pr-4">
              <AnimatePresence mode="wait">
                {activeTab === "abilities" && (
                  <TabContentWrapper value="abilities">
                     <div className="space-y-8">
                        {abilityKeys.map((key) => {
                          const ability = champion.abilities[key];
                          return (
                            <div key={key} className="space-y-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center font-bold text-gold-500 text-xl">
                                  {key}
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold">{ability.name[language]}</h4>
                                  <p className="text-xs text-white/30 uppercase tracking-widest font-bold">{t("champion.activeModule")}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {ability.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                                    <div className="flex-1">
                                       <p className="text-sm text-white/70">{feature[language]}</p>
                                       {feature.keybind && (
                                         <span className="inline-block mt-2 px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold text-gold-500">
                                           {t("champion.key")} {feature.keybind}
                                         </span>
                                       )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <Separator className="bg-white/5" />
                            </div>
                          );
                        })}
                      </div>
                  </TabContentWrapper>
                )}

                {activeTab === "mechanics" && (
                  <TabContentWrapper value="mechanics">
                    <div className="space-y-6">
                      {champion.specialMechanics.map((mech, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                          <div className="flex items-center gap-3 mb-3">
                            <Star size={18} className="text-gold-500" />
                            <h4 className="text-xl font-bold text-gold-500">{mech.name[language]}</h4>
                          </div>
                          <p className="text-white/50 leading-relaxed">
                            {mech.description[language]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabContentWrapper>
                )}

                {activeTab === "keybinds" && (
                  <TabContentWrapper value="keybinds">
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-white/10 overflow-hidden">
                         <table className="w-full text-left">
                            <thead className="bg-white/5">
                               <tr>
                                  <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-white/30">{t("champion.keybinds.action")}</th>
                                  <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-white/30">{t("champion.keybinds.key")}</th>
                               </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                               {Object.entries(champion.keybinds).map(([key, bind]) => (
                                 <tr key={key} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white/80">{bind.label[language]}</td>
                                    <td className="px-6 py-4">
                                       <kbd className="px-3 py-1 rounded bg-zinc-900 border border-white/10 font-mono text-gold-500 text-sm">
                                          {bind.key}
                                       </kbd>
                                    </td>
                                 </tr>
                               ))}
                            </tbody>
                         </table>
                      </div>
                    </div>
                  </TabContentWrapper>
                )}
              </AnimatePresence>
            </ScrollArea>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
