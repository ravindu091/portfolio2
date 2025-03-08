import BlogPosts from '@/components/Blogs/BlogPosts'
import NavBar from '../components/NavBar'

function Blogs() {
  return (
      <div className="dark:bg-[#032030] h-screen">
          <NavBar/>
          <div>
            <h1 className=' text-center text-2xl font-semibold'>Blogs</h1>  
            <BlogPosts />
          </div>  
      </div>
    )
}

export default Blogs