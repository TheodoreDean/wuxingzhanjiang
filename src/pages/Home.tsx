/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, ShoppingBag, Zap, ShieldCheck, Gamepad2 } from "lucide-react";
import { APP_NAME, APP_STORE_URL } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t("hero.tag")}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              {t("hero.desc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" id="download">
              <a
                href={APP_STORE_URL}
                className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-medium opacity-70">{t("hero.downloadOn")}</span>
                  <span className="text-xl font-semibold">App Store</span>
                </div>
              </a>
              <Link
                to="/gameplay"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                {t("hero.learnMore")} <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* App Screenshots Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 max-w-6xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
              {[
                { src: `${import.meta.env.BASE_URL}screenshot_1.png`, alt: "Gameplay Level 6" },
                { src: `${import.meta.env.BASE_URL}screenshot_2.png`, alt: "Card Playing Battle" },
                { src: `${import.meta.env.BASE_URL}screenshot_3.png`, alt: "In-game Shop" },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="relative group"
                >
                  <div className="aspect-[9/19.5] bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-8 border-slate-900 group-hover:border-slate-800 transition-colors">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const placeholder = document.createElement('div');
                          placeholder.className = 'w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-500 font-medium p-6 text-center';
                          placeholder.innerHTML = `<div class="mb-4 opacity-20"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></div><p>${img.alt}</p>`;
                          parent.appendChild(placeholder);
                        }
                      }}
                    />
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none opacity-50"></div>
                  </div>
                  {/* Shadow glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500/0 to-emerald-500/20 rounded-[3.1rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </motion.div>
              ))}
            </div>
            {/* Decorative backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-20 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] bg-indigo-100/30 rounded-full blur-[120px]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("features.title")}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {t("features.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="text-emerald-600" size={32} />,
                title: t("feature1.title"),
                desc: t("feature1.desc"),
              },
              {
                icon: <Zap className="text-amber-500" size={32} />,
                title: t("feature2.title"),
                desc: t("feature2.desc"),
              },
              {
                icon: <ShoppingBag className="text-indigo-600" size={32} />,
                title: t("feature3.title"),
                desc: t("feature3.desc"),
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold mb-4 uppercase tracking-wider">
                {t("highlight.tag")}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t("highlight.title")}
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                {t("highlight.desc")}
              </p>
              <ul className="space-y-4">
                {[
                  t("highlight.item1"),
                  t("highlight.item2"),
                  t("highlight.item3"),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={14} className="text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-square bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 flex items-center justify-center text-slate-300">
                <div className="text-center">
                  <Zap size={80} className="mx-auto mb-4 opacity-10" />
                  <p className="font-medium">[ Wuxing System Showcase ]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t("cta.title")}</h2>
          <p className="text-emerald-50 text-xl mb-12 max-w-2xl mx-auto">
            {t("cta.desc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={APP_STORE_URL}
              className="w-full sm:w-auto bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              {t("cta.button")}
            </a>
            <Link
              to="/support"
              className="text-white font-semibold hover:underline underline-offset-8"
            >
              {t("cta.link")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
