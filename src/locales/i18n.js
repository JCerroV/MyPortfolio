import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esCommon from './es/common.json'
import esHome from './es/home.json'
import esProjects from './es/projects.json'
import esAboutMe from './es/about-me.json'
import esContact from './es/contact.json'

import enCommon from './en/common.json'
import enHome from './en/home.json'
import enProjects from './en/projects.json'
import enAboutMe from './en/about-me.json'
import enContact from './en/contact.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            common:enCommon,
            home:enHome,
            projects:enProjects,
            aboutme:enAboutMe,
            contact:enContact
        },
        es: {
            common:esCommon,
            home:esHome,
            projects:esProjects,
            aboutme:esAboutMe,
            contact:esContact
        },
    },
    lng: localStorage.getItem('i18nextLng') || (navigator.language.startsWith('es') ? 'es' : 'en'),
    fallback: 'en',
    interpolation: { escapeValue: false },

});
export default i18n;