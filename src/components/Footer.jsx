import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom";
import {Phone, Mail, Github, Linkedin } from 'lucide-react';


export default function Footer(){
    const {t} = useTranslation("common")

    const navItems = [
        { path: '/', label: t('home') },
        { path: '/projects', label: t('projects') },
        { path: '/about-me', label: t('aboutme') },
        { path: '/contact', label: t('contact') },
    ];

    return(
        <footer className="bg-gray-200 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center p-5">
                <div className="flex flex-col">
                    <span className="underline underline-offset-4 mb-1">{ t('menu')}</span>{navItems.map((item) => (
                    <NavLink key={item.path} to={item.path} className={({ isActive }) =>` text-sm ${isActive? 'text-red-500': 'text-gray-700 dark:text-gray-300 hover:text-red-500'}`}>
                        {item.label}
                    </NavLink>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-lg underline underline-offset-4 mb-2">{t('socialnetworks')}:</span>
                    <a href="https://github.com/JCerroV" className="flex hover:text-red-500 gap-2"><Github className="w-5"/> <span>GitHub</span> </a>
                    <a href="https://www.linkedin.com/in/joaquín-cerro-vaquerizo-5902a6317" target="blank" className="flex hover:text-red-500 gap-2"><Linkedin className="w-5"/> <span>LinkedIn</span></a>

                </div>
                <div className="flex flex-col italic gap-2">
                    <h4 className="text-lg underline underline-offset-4 mb-2">{t('contact')}:</h4>
                    <span className="flex gap-2"><Mail className="w-5"/> jcerrova@gmail.com</span>
                    <span className="flex gap-2"><Phone className="w-5"/>+34 633 383 436</span>
                    
                </div>
            </div>
            <div className=" flex justify-center border-t"><span className=" text-sm py-4">© 2025 Joaquín CV. {t('copyright')}</span></div>
        </footer>
    )

}