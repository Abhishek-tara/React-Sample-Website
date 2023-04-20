import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Services = () => {
  return (
    <div className='services'>
      <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      interval={1000}
      showThumbs={false}>
        <div>
            <img src={img3} alt="" />
            <p>Full Stack</p>
        </div>
        <div>
            <img src={img4} alt="" />
            <p>Best service Provider in class</p>
        </div>

      </Carousel>
    </div>
  )
}

export default Services
