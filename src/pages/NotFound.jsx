import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
  const {t}=useTranslation('common')
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-3xl my-12">{t("notfound")}</p>
      <Link to="/" className="text-red-500 underline mt-4 inline-block text-2xl">{t("back")}</Link>
    </div>
  );
}