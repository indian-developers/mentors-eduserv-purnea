import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/gallery/Chingari-media-1.jpg"
import img2 from "../../assets/gallery/Chingari-media-2.jpg"
import img3 from "../../assets/gallery/Chingari-media-3.jpg"
function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <div className='py-4'>
      <div className="slider-container flex flex-col justify-center items-center">
        <h2 className='text-2xl font-bold mb-6'>Gallery</h2>
        <Slider {...settings} className='w-[90vw] md:w-[60vw]'>
          <div className="mx-6">
            <img src={img1} alt="Mentors Eduserv Purnea" className='w-80 h-72 rounded-md hover:cursor-pointer' />
          </div>
          <div className="mx-6">
            <img src={img2} alt="Mentors Eduserv Purnea" className='w-80 h-72 rounded-md hover:cursor-pointer' />
          </div>
          <div className="mx-6">
            <img src={img3} alt="Mentors Eduserv Purnea" className='w-80 h-72 rounded-md hover:cursor-pointer' />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Gallery
