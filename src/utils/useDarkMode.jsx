import { useEffect } from "react";
import { useState } from "react";

export default function useDarkMode () {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme ==='dark' || (!savedTheme & prefersDark)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } 
        else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        const html = document.documentElement;
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark': 'light');
        setDarkMode(isDark);
    }
    return [darkMode, toggleDarkMode];

}