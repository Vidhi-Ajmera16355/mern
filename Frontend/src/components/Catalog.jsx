import React, {useEffect , useState} from 'react'
import Cards from "./Cards"
// import list from "../assets/list"
import {Link} from "react-router-dom"
import axios from "axios"
function Catalog() {

  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
    }, [])

  return (
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
           <p className="mt-12">
           At AJMERA PAINTS, we're thrilled 
           to help you transform your spaces
           with the perfect splash of color.
           Whether you're redecorating your home,
           refreshing your office, or embarking on
           a creative project, our extensive range
           of high-quality paints has got you covered.
           We're excited to be part of your creative journey.
           Browse our catalog, discover your favorite shades,
           and start turning your vision into reality with  
           <span className="text-pink-500">
           { " "}Ajmera Paints </span>
           </p>

           <Link to = "/">
           <button className = " mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
            Back
           </button>
           </Link>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          book.map((item)=>(
            <Cards key = {item.id} item={item} />
          ))
        }
      </div>


    </div>
  )
}

export default Catalog
