// src/plugins/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    themeToggle: "Toggle Theme",
    languageToggle: "Change Language",
  },
  fr: {
    themeToggle: "Changer de thème",
    languageToggle: "Changer de langue",
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
