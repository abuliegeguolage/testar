import { createI18n } from "vue-i18n";
import tw from "./tw";
import en from "./en";

const messages = { tw, en }

const i18n = createI18n({
    globalInjection: true,
    locale: localStorage.getItem('language') || 'tw',
    legacy: false,
    messages,
});

export default i18n;

export const languages = Object.keys(messages)