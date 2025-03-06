
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Skills from './pages/Skills'

function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/skills' element={<Skills/>}/>
     </Routes>
    </BrowserRouter>
  )
}
export default App
