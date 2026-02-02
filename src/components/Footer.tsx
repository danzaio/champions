"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Cpu, Github, MessageCircle, Send, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center font-bold text-black text-xl">
                D
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                DanZ<span className="text-gold-500">AIO</span>
              </span>
            </Link>
            <p className="text-white/30 max-w-sm font-light leading-relaxed mb-8">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
               <a href="https://dsc.gg/danzaio" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-gold-500 hover:text-black transition-all">
                  <MessageCircle size={20} />
               </a>
               <a href="https://t.me/danzaio" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-gold-500 hover:text-black transition-all">
                  <Send size={20} />
               </a>
               <a href="https://youtube.com/@danzaio" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-gold-500 hover:text-black transition-all">
                  <Youtube size={20} />
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t("footer.platform")}</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/40 hover:text-gold-500 transition-colors text-sm font-medium">{t("footer.links.home")}</Link></li>
              <li><Link href="#champions" className="text-white/40 hover:text-gold-500 transition-colors text-sm font-medium">{t("footer.links.champions")}</Link></li>
              <li><Link href="#changelog" className="text-white/40 hover:text-gold-500 transition-colors text-sm font-medium">{t("footer.links.changelog")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t("footer.support")}</h4>
            <ul className="space-y-4">
              <li><a href="https://dsc.gg/danzaio" target="_blank" className="text-white/40 hover:text-gold-500 transition-colors text-sm font-medium">{t("footer.links.discord")}</a></li>
              <li><a href="https://t.me/danzaio" target="_blank" className="text-white/40 hover:text-gold-500 transition-colors text-sm font-medium">{t("footer.links.telegram")}</a></li>
              <li><a href="#" className="text-white/40 hover:text-gold-500 transition-colors text-sm font-medium">{t("footer.links.docs")}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/5">
          <p className="text-white/20 text-xs font-medium">
            {t("footer.disclaimer")}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{t("footer.status")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
