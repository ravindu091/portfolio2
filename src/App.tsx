
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'

function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
     </Routes>
    </BrowserRouter>
  )
}
export default App
