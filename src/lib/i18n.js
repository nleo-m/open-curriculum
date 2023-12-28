import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languages from "../locales/languages";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    ...languages,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
