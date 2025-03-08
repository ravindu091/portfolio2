
import './style.css'
import NavButtton from "./NavButton";
import ModeChange from './ModeChange';
import Notifications from './Notifications';

export default function NavBar(){
   
    return(
        <div className=" font-[roboto] w-full p-3 pt-5 sticky top-0 z-50">
            <div className="shadow-sm bg-[#ffffff] dark:bg-[#004d74] rounded-4xl flex justify-between items-center px-6 py-2 h-full ">
                <div>Logo</div>
                <div className="flex gap-2 justify-between items-center">
                  <NavButtton title="Home" path='/' />                    
                  <NavButtton title="Experience" path='/experience'/>  
                  <NavButtton title="Projects" path='/projects'/>  
                  <NavButtton title="Blogs" path='/blogs'/>
                  <NavButtton title="Contact" path='/contact'/>    
                    
                </div>
                <div className='flex gap-2 items-center'>
                    
                    <ModeChange/>
                   <Notifications />
                </div>
            </div>
        </div>
    )
}