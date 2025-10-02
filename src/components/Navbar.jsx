import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Profile.jpg';
import { useTranslation } from 'react-i18next';
import { Globe, Sun, Moon } from 'lucide-react';
import useDarkMode from '../utils/useDarkMode';

export default function Navbar() {
  const{t,i18n} = useTranslation('common')
  const [lang, setLang] = useState(i18n.language.startsWith('es') ? 'es' : 'en');

  const [isDark, toggleDarkMode] = useDarkMode();

  const toggleLanguage = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
    setLang(newLang);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/projects', label: t('projects') },
    { path: '/about-me', label: t('aboutme') },
    { path: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 bg-gray-200 dark:bg-gray-950 shadow-md  text-gray-900 dark:text-gray-200">
      <div className="max-w-8xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between  h-16">
          <NavLink to="/" className="flex flex-1 items-center space-x-3">
            <img src={logo} alt="Logo" className=" w-14 h-14 border-1 rounded-full " />
            <span className="text-xl font-bold ">Joaquín Cerro Vaquerizo</span>
          </NavLink>

          <nav className="hidden md:flex space-x-6 items-center justify-center flex-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  ` font-medium ${
                    isActive
                      ? 'text-red-500 text-xl'
                      : '  hover:text-red-500'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          
          <div className="flex items-center gap-4 flex-1 justify-end">
            <button
              onClick={toggleDarkMode}
              className="  hover:text-red-500 me-4" 
              aria-label="Toggle dark mode"
            >
              {isDark ? (<Moon/>) : (<Sun/>)}
            </button>

            <button onClick={toggleLanguage}
          className="px-2 py-1 border-2 rounded   hover:text-red-500"
        >
          <Globe /> {lang.toUpperCase()}
        </button>

            <button
              onClick={toggleMenu}
              className="md:hidden  "
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive
                    ? 'text-red-500'
                    : '  hover:text-red-500'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
