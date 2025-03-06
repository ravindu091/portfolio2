export default function PicCard(){
        return(
            <div className="flex gap-3 m-4 p-3 border border-slate-100 shadow rounded-xl w-lg">
                <div className="bg-slate-400 w-30 h-30 rounded-full">

                </div>
                <div className="flex flex-col justify-between py-5">
                    <h1 className="font-[roboto] text-4xl">Ravindu Dilupa</h1>
                    <p className="font-[roboto] text-slate-800 ">I'm a web designer</p>
                </div>
            </div>
        )
}