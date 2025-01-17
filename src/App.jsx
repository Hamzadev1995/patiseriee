// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import Contact from './page/Contact'
import Apropos from './page/Apropos'
import Apropos2 from './page/Apropos2'
import Gallerie from './page/Gallerie'

function App() {
  return (
    <div className='w-full'>
          <Navbar/>
          <main className='w-full'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Apropos' element={<Apropos/>}/>
              <Route path='/Apropos2' element={<Apropos2/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/Gallerie' element={<Gallerie/>}/>
            </Routes>
          </main>
          <Footer/> 
        </div>
  )
}

export default App
