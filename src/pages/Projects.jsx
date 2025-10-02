import { useTranslation } from "react-i18next";
import {projects} from "../data/projects.js"
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const {t} = useTranslation('projects')
  return (
    <section >
      <h2 className="text-center font-bold text-5xl my-4 mb-8">{t('title')}</h2>
      <div className="grid grid-cols-20 w-full max-w-7xl mx-auto gap-6 ">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} index={i}/>
        ))}
      </div>
      </section>
  
)}