import AboutCard from "../components/Home/AboutCard";
import PicCard from "../components/Home/PicCard";
import SkillCard from "../components/Home/SkillCard";
import NavBar from "../components/NavBar";


export default function Home(){
    return(
        <div className="bg-[#fbfeff] dark:bg-[#032030] h-screen">
           <NavBar/>
           <div className="flex flex-wrap justify-center gap-2 pt-3">
            <div>
                <PicCard />
                <SkillCard/>
            </div>
            <div>
                <AboutCard />
            </div>
           </div>
        </div>
    )
}