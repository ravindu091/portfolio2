import { title } from "process"
import BlogCard from "./BlogCard"


function BlogPosts() {

    const blogs = {title: 'Blog 1', img: 'https://placehold.co/300x200', date: '2021-10-10', description: 'Lorem ipsum dolor sit amet'}
    

  return (
    <div className="flex flex-wrap justify-evenly gap-4 mt-3 px-6 ">
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
        <BlogCard data={blogs} />
    </div>

    
  )
}

export default BlogPosts