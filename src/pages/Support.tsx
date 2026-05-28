/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Mail, HelpCircle, Gamepad2, Shield } from "lucide-react";
import { SUPPORT_EMAIL, DEVELOPER_NAME } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function Support() {
  const { lang, t } = useLanguage();

  const faqs = lang === "zh" ? [
    {
      question: "无法连接 Game Center 怎么办？",
      answer: "请检查您的网络连接，并确保您已在 iOS 设置中登录了有效的 Apple ID。如果问题仍然存在，请尝试重启 App 或设备。"
    },
    {
      question: "我的游戏进度丢失了怎么办？",
      answer: "五行战将 的游戏进度存储在您的设备本地。如果您卸载了 App 且未开启 iCloud 备份，进度可能无法找回。建议您定期备份设备数据。"
    },
    {
      question: "如何切换语言？",
      answer: "App 支持中英文切换。您可以在游戏主页的“设置”菜单中找到语言选项进行调整。"
    },
    {
      question: "虚拟金币可以退款吗？",
      answer: "游戏内的虚拟金币仅供游戏内使用，不具有现实货币价值，且不支持退款。请谨慎进行游戏内消费。"
    }
  ] : [
    {
      question: "Cannot connect to Game Center?",
      answer: "Please check your network connection and ensure you are logged in with a valid Apple ID in iOS Settings. If the issue persists, try restarting the App or your device."
    },
    {
      question: "My game progress is lost?",
      answer: "Wuxing Zhanjiang progress is stored locally. If you uninstall the App without iCloud backup, progress may be unrecoverable. We recommend regular device backups."
    },
    {
      question: "How to switch languages?",
      answer: "The App supports Chinese and English. You can find language options in the 'Settings' menu on the home screen."
    },
    {
      question: "Can virtual gold be refunded?",
      answer: "Virtual gold is for in-game use only, has no real-world value, and is non-refundable. Please spend wisely."
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {t("support.title")}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t("support.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t("support.contact.title")}</h3>
              <p className="text-slate-500 mb-4 text-sm">
                {t("support.contact.desc")}
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-emerald-600 font-bold hover:underline break-all"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <Gamepad2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t("support.dev.title")}</h3>
              <p className="text-slate-500 text-sm">
                {t("support.dev.name")}: {DEVELOPER_NAME}
              </p>
              <p className="text-slate-500 text-sm mt-1">
                {t("support.dev.product")}: 五行战将
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="text-emerald-600" size={28} />
              <h2 className="text-2xl font-bold text-slate-900">{t("support.faq.title")}</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-emerald-600 font-mono">Q.</span>
                    {faq.question}
                  </h4>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-emerald-400" size={24} />
                <h4 className="text-lg font-bold">{t("support.legal.title")}</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("support.legal.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
