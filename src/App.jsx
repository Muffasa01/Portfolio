 '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing_page from './pages/Landing_page.jsx'
import Skills_page from './pages/Skills_page.jsx'
import Contact_page from './pages/Contact_page.jsx'
import About_page from './pages/About_page.jsx'
import Projects_page from './pages/Projects_page.jsx'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing_page />}/>
      <Route path='/about' element={<About_page />}/>
      <Route path='/contact' element={<Contact_page />}/>
      <Route path='/projects' element={<Projects_page />}/>
      <Route path='/skills' element={<Skills_page />}/>
    </Routes>
    </BrowserRouter>
    </>
      
  )
}

export default App
