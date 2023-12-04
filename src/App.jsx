   
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
   

  return (
    <>
       <div className='container mx-auto'>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
       </div>
       
    </>
  )
}

export default App
