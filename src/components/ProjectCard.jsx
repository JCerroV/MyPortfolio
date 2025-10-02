import { useTranslation } from "react-i18next";

export default function ProjectCard({ title, description, tech, github, demo, image, index }) {
  const isEven = index % 2 === 0;
  const {t} = useTranslation('projects')
  return (
    <div className={`col-span-18 flex flex-wrap my-5  ${isEven ? 'col-start-1' : 'col-start-3 flex-row-reverse'} mx-4 `}>
      <div className=" p-9  bg-red-600/85 shadow-md ">
        <img src={image} alt={title} className="w-70 h-70 border rounded-xl" />
      </div>
      <div className="p-7 flex-1 flex flex-col bg-white/95 dark:bg-gray-950/95 shadow-md">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-200 underline"> {title} </h3>
        <p className="bg-gray-300 px-4 py-3 rounded-2xl text-gray-800  mt-5  min-w-sm">{t(description)}</p>

        <div className={`mt-4 flex gap-2 flex-wrap ${isEven ? 'justify-start' : 'justify-end'}`}>
          {tech.map((tech, i) => (
            <span key={i} className="px-2 py-1 text-sm bg-gray-300 dark:bg-gray-500 rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className={`mt-4 flex flex-wrap gap-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-400 transition duration-300 shadow-md px-3 py-2 rounded-lg"
          >
            GitHub
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-green-400 bg-green-600 transition duration-300  px-3 py-2 rounded-lg"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}