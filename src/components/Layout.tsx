/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gamepad2, Globe } from "lucide-react";
import React, { useState, useEffect } from "react";
import { APP_NAME, YEAR, DEVELOPER_NAME } from "../constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "../context/LanguageContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.gameplay"), path: "/gameplay" },
    { name: t("nav.support"), path: "/support" },
    { name: t("nav.privacy"), path: "/privacy" },
    { name: t("nav.terms"), path: "/terms" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <Gamepad2 size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">{APP_NAME}</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-emerald-600",
                    location.pathname === link.path ? "text-emerald-600" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Language Switcher */}
              <div className="flex items-center gap-2 border-l border-slate-200 pl-6 ml-2">
                <Globe size={16} className="text-slate-400" />
                <button
                  onClick={() => setLang("zh")}
                  className={cn(
                    "text-xs font-bold transition-colors",
                    lang === "zh" ? "text-emerald-600" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  中
                </button>
                <span className="text-slate-300 text-xs">/</span>
                <button
                  onClick={() => setLang("en")}
                  className={cn(
                    "text-xs font-bold transition-colors",
                    lang === "en" ? "text-emerald-600" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  EN
                </button>
              </div>

              <a
                href="#download"
                className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                {t("nav.download")}
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-200">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block px-3 py-3 rounded-lg text-base font-medium",
                    location.pathname === link.path
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-4 px-3 py-4 border-t border-slate-100 mt-2">
                <Globe size={18} className="text-slate-400" />
                <button
                  onClick={() => setLang("zh")}
                  className={cn(
                    "text-sm font-bold",
                    lang === "zh" ? "text-emerald-600" : "text-slate-400"
                  )}
                >
                  中文
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={cn(
                    "text-sm font-bold",
                    lang === "en" ? "text-emerald-600" : "text-slate-400"
                  )}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <Gamepad2 size={18} />
                </div>
                <span className="text-lg font-bold">{APP_NAME}</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                {t("footer.desc")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">{t("footer.links")}</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-500 hover:text-emerald-600 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">{t("footer.legal")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm">
                    {t("nav.privacy")}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm">
                    {t("nav.terms")}
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm">
                    {t("support.title")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs">
              © {YEAR} {DEVELOPER_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-slate-400 text-xs">{t("footer.age")}</span>
              <span className="text-slate-400 text-xs">{t("footer.noRealMoney")}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
