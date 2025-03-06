
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


export default function NavButtton({title , path}:{title:string,path:string}){
   let location = useLocation().pathname;
   //
   useEffect(()=>{
        console.log(location +'>>>'+path)
   },[])
    

    return(
        <Link to={path}>
            <div className={`${(location == (path) ? 'bg-[#4a84db] text-sky-100' : 'bg-sky-100')} px-5 py-2 rounded-3xl hover:text-sky-100 hover:bg-sky-400 hover:shadow-sm shadow-sky-400 cursor-pointer transition delay-100 duration-200`}>
             {title}
            </div>
        </Link>
    )
}