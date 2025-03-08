export default function PicCard(){
        return(
            <div className="flex gap-3 m-4 px-3  py-4 shadow-md bg-[#ffffff] dark:bg-[#006da4] rounded-xl w-lg">
                <div className=" bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]   w-30 h-30 rounded-full">

                </div>
                <div className="flex flex-col justify-between py-5">
                    <h1 className="font-[roboto] text-4xl">Ravindu Dilupa</h1>
                    <p className="font-[roboto] text-slate-800 "> Web designer</p>
                </div>
            </div>
        )
}