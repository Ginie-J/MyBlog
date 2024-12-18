import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import {TypeAnimation} from 'react-type-animation';
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [slides, setSlides] = useState([]);

  useEffect(()=>{
    //json 가져오기
    axios.get("./json/banner.json")
    .then((res)=>{
       const data = res.data.texts;
       console.table(data);
       setSlides(data);
    })
    .catch((error)=>console.error('Error loading JSON : ' , error));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 8000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {
        slides.map((slide, index)=>(
          <div key={index} className={`banner banner${index+1}`}>
            <TypeAnimation
              sequence={[
                ...slide.flatMap((item)=>[item.content, item.delay])
              ]}
              wrapper="span"
              speed={50}
              className='typeanimation'
              repeat={Infinity}
              />
          </div>
        ))
      }
      <div className='banner banner1'> 
        <h3>1</h3>
      </div>
      <div className='banner banner2'>
        <h3>2</h3>
      </div>
      <div className='banner banner3'>
        <h3>3</h3>
      </div>
      <div className='banner banner4'>
        <h3>4</h3>
      </div>
      <div className='banner banner5'>
        <h3>5</h3>
      </div>
    </Slider>
  );
}

export default Banner