
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "welcome.page.meta.title": "Start Readdminds",
            "welcome.page.meta.desc": "Readminds is a service that manages the reading list. This guide describes typical uses of Readminds.",
            "welcome.page.meta.og-title": "Readminds",
        }
    }, 
    ko: {
        translation: {
            "welcome.page.meta.title": "Readdmind 시작하기",
            "welcome.page.meta.desc": "Readmind는 읽기 목록을 관리해주는 서비스 입니다. 해당 가이드에서는 Readmind의 대표 사용법에 대해 설명합니다.",
            "welcome.page.meta.og-title": "Readmind",
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources, 
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
          }
    });


export default i18n;