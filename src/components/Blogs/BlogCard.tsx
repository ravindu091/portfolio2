

function BlogCard({data}:{data:any}) {
  return (
    <div className=" px-2 py-3 rounded-md shadow-md font-[roboto] ">
        <img src={data.img} alt="" className=" rounded-md" />
        <h1 className="text-lg font-semibold my-1">{data.title}</h1>
        <p className="text-sm text-slate-500 ">{data.date}</p>
        <p>{data.description}</p>
    </div>
  )
}

export default BlogCard;