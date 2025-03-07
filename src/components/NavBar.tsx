
import './style.css'
import NavButtton from "./NavButton";
import { Bell,  } from 'lucide-react';
import ModeChange from './ModeChange';

export default function NavBar(){
   
    return(
        <div className=" font-[roboto] w-full p-3 ">
            <div className="shadow-sm dark:bg-[#004d74] rounded-4xl flex justify-between items-center px-6 py-2 h-full ">
                <div>Logo</div>
                <div className="flex gap-2 justify-between items-center">
                  <NavButtton title="Home" path='/' />  
                  <NavButtton title="Skills" path='/skills'/>  
                  <NavButtton title="Experience" path='/experience'/>  
                  <NavButtton title="Projects" path='/projects'/>  
                  <NavButtton title="Blogs" path='/blogs'/>  
                    
                </div>
                <div className='flex gap-2 items-center'>
                    
                    <ModeChange/>
                    <Bell className='text-slate-500'/>
                </div>
            </div>
        </div>
    )
}