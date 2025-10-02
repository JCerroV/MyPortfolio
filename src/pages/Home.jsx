import { useTranslation } from "react-i18next"
import photo from "../assets/Profile.jpg"
import {Github, Linkedin } from 'lucide-react';

export default function Home() {
  const {t } = useTranslation('home');
  return(
    <section className="flex flex-wrap py-12  ">
      <div className="py-10 px-12 w-full flex shrink-0  2xl:w-auto  justify-center">
        <img src={photo} alt="profile" className="rounded-full w-80 h-auto " />
      </div>
      <div className="w-full flex  content-between 2xl:w-auto  flex-col  mx-5 py-10 ">
      <div className= "bg-gray-200/75 dark:bg-gray-950/75 text-gray-900 dark:text-gray-200 rounded-2xl mb-4 p-5">
        <h1 className=" font-bold text-center text-6xl mb-5">{t('presentation')}</h1>
        <h2 className=" italic text-gray-500 dark:text-gray-400 text-3xl  inline-block border-y-3 items-center py-1">{t('job')}</h2>
        <p  className="text-xl font-semibold py-3 mt-5">{t('description')}</p>
        </div>
        <div className="  flex flex-wrap justify-between px-10 mt-auto bg-gray-200/75 dark:bg-gray-950/75 rounded-2xl dark:text-gray-950 text-gray-100 ">
          <div className="flex p-5  gap-4 items-center ">
            <a href="https://www.linkedin.com/in/joaquín-cerro-vaquerizo-5902a6317" className="bg-gray-950 dark:bg-gray-200 rounded-full  hover:text-red-600 transition duration-300"><Linkedin className="p-3 w-15 h-15 "/></a>
            <a href="https://github.com/JCerroV" className="bg-gray-950 dark:bg-gray-200 rounded-full  hover:text-red-600 transition duration-300"><Github className="p-3 w-15 h-15"/></a>
          </div>
          <div className="flex flex-wrap gap-4 flex-1 items-center justify-end max-w-md l"> 
            <a href="/contact" className="flex-1 text-center m-5 px-6 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-800 text-2xl transition duration-300 ">{t('contact')}</a>
            <a href="/projects" className="flex-1 text-center m-5 px-6 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-800 text-2xl transition duration-300">{t('projects')}</a>
        </div>
         </div>
      </div>
    </section>
  )
}