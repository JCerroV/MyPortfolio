import { useTranslation } from "react-i18next"
import profile from "../assets/Profile.jpg"

export default function About() {
  const {t} = useTranslation('aboutme')

  const tech = [{title: t('languages'), items: ["Java","C#","Python","SQL","JavaScript","TypeScript","HTML5","CSS"]},
                {title:"Frontend.", items: ["Angular","React","TailWind CSS","Bootstrap"]},
                {title:"Backend.", items: ["Spring Boot"]},
                {title:t('database'), items: ["MySQL","MariaDB","MongoDB"]}]
  return (
    <section className="flex text-gray-900 dark:text-gray-200 flex-wrap">
      <div className="flex-1 border-e-4 ">
        <div className="flex flex-col sm:flex-row m-5 gap-5 items-start    ">
          <img src={profile} alt="image_profile" className="w-32 h-auto shrink-0 rounded-lg"/>
          <p className="text-lg min-w-md font-medium text-gray-900 bg-gray-200/70 p-4  rounded-3xl">{t('presentation')}</p>
        </div>
        <div>

        </div>
      </div>
      <div className="flex-1">
        <div className="m-5">
          <h2 className="text-gray-900 text-2xl font-bold underline ">{t('tecnologies')}</h2>
          <div>{tech.map((tec, i) =>(
            <div className="my-3" key={i}>
              <h3 className="text-gray-900 my-2 text-xl font-semibold">{tec.title}</h3>
              <div className="flex flex-wrap gap-3">
                {tec.items.map((item,j) => (
                  <div key={j} className="bg-gray-300/90 dark:bg-gray-700/90 p-3 rounded-md">{item}</div>
                ))}
              </div>
            </div>
          
            
          ))}</div>
        </div>
      </div>
    </section>
  )
}