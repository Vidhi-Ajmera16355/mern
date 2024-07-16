import React from 'react'
import Home from './home/Home' 
import { Route, Routes, Navigate } from 'react-router-dom';import Catalogs from "./catalogs/Catalogs" 
import Signup from './components/Signup'
import Contact from './components/Contact'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
function App() {
  const [authUser,setAuthUser] = useAuth()
   
  return (
    <>
    <div className = "dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/Catalog" element={authUser?<Catalogs />:<Navigate to = "/signup"/>} />
      <Route path = "/Signup" element={<Signup />} />
      <Route path = "/Contact" element={<Contact />} />
      
    </Routes> 
    <Toaster/>

    </div>
    </>
  )
}

export default App
