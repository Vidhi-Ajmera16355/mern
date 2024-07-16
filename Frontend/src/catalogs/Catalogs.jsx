import React from 'react'
import Navbar from "../components/Navbar"
import Catalog from "../components/Catalog"
import Footer from "../components/Footer" 
function Catalogs() { 
  return ( <>
      <Navbar/>
      <div className="min-h-screen">
      <Catalog/>
      </div>
      <Footer/> 
      </>
  )
}

export default Catalogs
