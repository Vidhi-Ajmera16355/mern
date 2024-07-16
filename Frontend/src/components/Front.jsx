import React,{useEffect,useState} from 'react'
// import list from "../assets/list.json"
import Slider from "react-slick";
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"

function Front() {

  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book")
        const data = res.data.filter((data) => data.c === "f")
        setBook(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
    }, [])


    // const filterData = list.filter((data) => data.c === "f");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Some Collections</h1>
          <p>
            Achieve a sleek and contemporary look with our Modern Minimalism
            collection. Featuring clean, crisp colors and subtle shades,
            this range is perfect for those who love a minimalist aesthetic.
            These paints offer a sophisticated and modern feel, ideal for any
            stylish home.
          </p>
        </div>
        <br />
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Front
