//External Lib Import
import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

//Internal Lib Import
import translationSpanish from "./Spanish/translation.json";
import store from "../redux/store/store";

//Translations
const resources = {
  Spanish: {
    translation: translationSpanish,
  },
  German: {
    translation: translationSpanish,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: store?.getState()?.Setting?.Language?.name,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
