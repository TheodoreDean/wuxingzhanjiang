/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { SUPPORT_EMAIL, LAST_UPDATED_DATE, DEVELOPER_NAME } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t("privacy.title")}
          </h1>
          <p className="text-slate-500 mb-12">{t("privacy.lastUpdated")}: {LAST_UPDATED_DATE}</p>

          <div className="prose prose-slate max-w-none space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t("privacy.s1.title")}</h2>
              <p className="text-slate-600 leading-relaxed">
                {t("privacy.s1.desc")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t("privacy.s2.title")}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t("privacy.s2.desc")}
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-600">
                <li>{t("privacy.s2.item1")}</li>
                <li>{t("privacy.s2.item2")}</li>
                <li>{t("privacy.s2.item3")}</li>
                <li>{t("privacy.s2.item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t("privacy.s3.title")}</h2>
              <p className="text-slate-600 leading-relaxed">
                {t("privacy.s3.desc")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t("privacy.s4.title")}</h2>
              <p className="text-slate-600 leading-relaxed">
                {t("privacy.s4.desc")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t("privacy.s5.title")}</h2>
              <p className="text-slate-600 leading-relaxed">
                {t("privacy.s5.desc")}
              </p>
              <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-block">
                <p className="font-bold text-slate-900">{DEVELOPER_NAME}</p>
                <p className="text-emerald-600 font-medium">{SUPPORT_EMAIL}</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
