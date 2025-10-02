import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import iLinkedIn from '../assets/ilinkedin.svg';

export default function Contact() {
  const {t}=useTranslation("contact")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q1u09iy","template_6lhqh2z",form.current,"XidoYoprGafub7mOp")
      .then((result) => {
          console.log(result.text);
          alert("✅ Mensaje enviado correctamente!");
        },
        (error) => {
          console.log(error.text);
          alert("❌ Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <section className="w-lg mx-auto px-9 py-6  bg-gray-200/90 dark:bg-gray-900/90 rounded-xl shadow-md text-gray-900 dark:text-gray-200 ">
      <h2 className="text-4xl underline font-bold mb-4 ">{t('title')}</h2>
      <p className="text-sm font-semibold text-center ">{t('secondTitle')}</p>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-3">
        <div className="space-y-4">
          <div className=" flex flex-col">
              <label  className="my-2 font-medium " >{t('name')}:</label>
              <input type="text" placeholder={t('name')} required name="name" className="bg-gray-200 w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="flex flex-col">
              <label className="my-2 font-medium ">{t('email')}:</label>
              <input type="email" placeholder={t('email')} required name="email" className="bg-gray-200 w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="flex flex-col">
              <label className="my-2 font-medium ">{t('description')}:</label>
              <textarea name="message" required placeholder={t('description')} rows={7} className="resize-none bg-gray-200 w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"></textarea>
          </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="  bg-blue-500 text-white rounded-full px-6 py-4 my-4">{t('send')}</button>
          </div>
          <hr />
          <div className="flex justify-center items-center">
            <span className="dark:text-gray-300">{t('socialNetworks')}</span>
            <a href="https://www.linkedin.com/in/joaquín-cerro-vaquerizo-5902a6317" target="blank"><img src={iLinkedIn} alt="linkedin_icon" className="w-11 h-11" /></a>
          </div>
      </form>
    </section>
  );
}

