import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


export default function ModeChange() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    },[theme])

    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark':'light');
    }
  return (
    <button onClick={toggleTheme} className='text-black  cursor-pointer hover:bg-[#ffffff] rounded-full p-2 transition delay-150 duration-200'> {theme === 'light' ? <Moon className="text-slate-500" />: <Sun/>}</button>
  )
}
