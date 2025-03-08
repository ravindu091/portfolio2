import AboutCard from "../components/Home/AboutCard";
import PicCard from "../components/Home/PicCard";
import NavBar from "../components/NavBar";


export default function Home(){
    return(
        <div className="dark:bg-[#032030] h-screen">
           <NavBar/>
           <div className="flex flex-wrap justify-center gap-2">
            <div>
                <PicCard />
            </div>
            <div>
                <AboutCard />
            </div>
           </div>
        </div>
    )
}