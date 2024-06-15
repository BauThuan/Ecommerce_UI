// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./EN/en.json";
import vnTranslations from "./VN/vn.json";

const currentLanguage = localStorage.getItem("language") || "vn";
console.log(">>> check", currentLanguage);
i18n.use(initReactI18next).init({
  resources: {
    vn: {
      translation: vnTranslations,
    },
    en: {
      translation: enTranslations,
    },
  },
  lng: currentLanguage,
  fallbackLng: currentLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
