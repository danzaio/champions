"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.champions"), href: "#champions" },
    { name: t("nav.changelog"), href: "#changelog" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group relative">
          <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center font-black text-black text-2xl shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-transform group-hover:scale-110 group-hover:rotate-3">
            D
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            DanZ<span className="text-gold-500">AIO</span>
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Language */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setLanguage(language === "en" ? "cn" : "en")}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/50 hover:text-gold-500 transition-all border border-white/10 px-4 py-2 rounded-full hover:border-gold-500/30"
          >
            {language === "en" ? (
              <>
                <span className="text-gold-500 font-sans">中文</span>
                <span>🇨🇳</span>
              </>
            ) : (
              <>
                <span className="text-gold-500 font-sans">ENGLISH</span>
                <span>🇺🇸</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 top-[60px] bg-black/95 backdrop-blur-2xl z-[90] p-6"
          >
            <div className="flex flex-col gap-6 items-center pt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black tracking-tighter text-white hover:text-gold-500"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setLanguage(language === "en" ? "cn" : "en");
                  setIsMobileMenuOpen(false);
                }}
                className="mt-10 flex items-center gap-3 text-xl font-black uppercase tracking-widest text-gold-500"
              >
                {language === "en" ? (
                  <>
                    <span className="font-sans">中文 🇨🇳</span>
                  </>
                ) : (
                  <>
                    <span className="font-sans">ENGLISH 🇺🇸</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
