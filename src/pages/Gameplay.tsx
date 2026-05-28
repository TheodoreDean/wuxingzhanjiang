/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Target, Calculator, Layers, ShoppingCart, Trophy } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Gameplay() {
  const { t } = useLanguage();

  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
            {t("gameplay.title")}
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            {t("gameplay.desc")}
          </p>
        </motion.div>

        {/* Core Mechanics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Target size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{t("gameplay.goal.title")}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {t("gameplay.goal.desc")}
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-2">{t("gameplay.levels.level")}</th>
                        <th className="px-4 py-2">{t("gameplay.levels.target")}</th>
                        <th className="px-4 py-2">{t("gameplay.levels.level")}</th>
                        <th className="px-4 py-2">{t("gameplay.levels.target")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {[
                        [1, "10", 13, "10,000"],
                        [2, "30", 14, "20,000"],
                        [3, "100", 15, "50,000"],
                        [4, "300", 16, "80,000"],
                        [5, "500", 17, "100,000"],
                        [6, "800", 18, "200,000"],
                        [7, "1,000", 19, "300,000"],
                        [8, "1,500", 20, "500,000"],
                        [9, "2,000", 21, "800,000"],
                        [10, "3,000", 22, "1,000,000"],
                        [11, "5,000", 23, "5,000,000"],
                        [12, "8,000", 24, "10,000,000"]
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-4 py-2 font-bold text-slate-900">{row[0]}</td>
                          <td className="px-4 py-2">{row[1]}</td>
                          <td className="px-4 py-2 font-bold text-slate-900">{row[2]}</td>
                          <td className="px-4 py-2">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
                <Calculator size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{t("gameplay.formula.title")}</h3>
                <p className="text-slate-500 leading-relaxed font-mono bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {t("gameplay.formula.main")}
                </p>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  {t("gameplay.formula.desc")}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                <Layers size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{t("gameplay.types.title")}</h3>
                <p className="text-slate-500 mb-4">{t("gameplay.types.desc")}</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "清一色 / Flush", val: "+1 / x30" },
                    { name: "双色 / Two-tone", val: "+1 / x15" },
                    { name: "顺子 / Straight", val: "+1 / x20" },
                    { name: "四条 / Four of a kind", val: "+1 / x4" },
                    { name: "葫芦 / Full House", val: "+1 / x6" },
                    { name: "三条 / Three of a kind", val: "+1 / x3" },
                    { name: "两对 / Two Pair", val: "+1 / x5" },
                    { name: "对子 / Pair", val: "+1 / x2" }
                  ].map((type) => (
                    <div key={type.name} className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 border border-slate-100 flex justify-between items-center">
                      <span>{type.name}</span>
                      <span className="text-emerald-600 font-bold">{type.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-3xl font-bold mb-8 relative z-10">{t("gameplay.wuxing.title")}</h3>
            <div className="space-y-6 relative z-10">
              <p className="text-slate-300 leading-relaxed">
                {t("gameplay.wuxing.desc")}
              </p>
              <p className="text-sm text-slate-400 italic">
                {t("gameplay.wuxing.intro")}
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: "🏅", name: "金" },
                  { icon: "🪵", name: "木" },
                  { icon: "💦", name: "水" },
                  { icon: "🔥", name: "火" },
                  { icon: "🌏", name: "土" }
                ].map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl border border-white/20">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold opacity-60">{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-bold text-emerald-400">{t("gameplay.wuxing.table.title")}</h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t("gameplay.wuxing.rules.2")}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {[t("gameplay.wuxing.rule.gold1"), t("gameplay.wuxing.rule.woodfire"), t("gameplay.wuxing.rule.goldwater"), t("gameplay.wuxing.rule.waterfire"), t("gameplay.wuxing.rule.goldwood")].map((rule, i) => (
                        <div key={i} className="text-sm text-slate-300 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                          {rule}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t("gameplay.wuxing.rules.3")}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {[t("gameplay.wuxing.rule.1w2f"), t("gameplay.wuxing.rule.1g2w"), t("gameplay.wuxing.rule.3fw"), t("gameplay.wuxing.rule.3mt"), t("gameplay.wuxing.rule.wft"), t("gameplay.wuxing.rule.wf_penalty"), t("gameplay.wuxing.rule.gw_penalty")].map((rule, i) => (
                        <div key={i} className="text-sm text-slate-300 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                          {rule}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t("gameplay.wuxing.rules.4")}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {[t("gameplay.wuxing.rule.4wf"), t("gameplay.wuxing.rule.4gw"), t("gameplay.wuxing.rule.4fw"), t("gameplay.wuxing.rule.4m"), t("gameplay.wuxing.rule.4t")].map((rule, i) => (
                        <div key={i} className="text-sm text-slate-300 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                          {rule}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t("gameplay.wuxing.rules.5")}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {[t("gameplay.wuxing.rule.5wf"), t("gameplay.wuxing.rule.5gw"), t("gameplay.wuxing.rule.5f"), t("gameplay.wuxing.rule.5s"), t("gameplay.wuxing.rule.5w"), t("gameplay.wuxing.rule.5t"), t("gameplay.wuxing.rule.5_penalty")].map((rule, i) => (
                        <div key={i} className="text-sm text-slate-300 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                          {rule}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shop and Function Card */}
        <div className="bg-slate-50 rounded-[40px] p-12 md:p-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <ShoppingCart className="mx-auto text-emerald-600 mb-6" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("gameplay.shop.title")}</h2>
              <p className="text-slate-500">{t("gameplay.shop.desc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{t("gameplay.shop.permanent.title")}</h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {t("gameplay.shop.permanent.desc")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    t("gameplay.joker.copy"),
                    t("gameplay.joker.double"),
                    t("gameplay.joker.nine"),
                    t("gameplay.joker.robe"),
                    t("gameplay.joker.lucky7"),
                    t("gameplay.joker.fivegates")
                  ].map((joker) => (
                    <div key={joker} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold border border-indigo-100">
                      🃏 {joker}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{t("gameplay.shop.consumable.title")}</h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {t("gameplay.shop.consumable.desc")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    t("gameplay.joker.soul"),
                    t("gameplay.joker.bull"),
                    t("gameplay.joker.thunder"),
                    t("gameplay.joker.thief"),
                    t("gameplay.joker.isize")
                  ].map((joker) => (
                    <div key={joker} className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold border border-amber-100">
                      ✨ {joker}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-emerald-600" size={24} />
                <h4 className="text-lg font-bold text-emerald-900">{t("gameplay.achievements.title")}</h4>
              </div>
              <p className="text-emerald-800/70 leading-relaxed">
                {t("gameplay.achievements.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
