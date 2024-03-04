import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderimage1 from "../../assets/image/client-logo-1.png";
import Sliderimage2 from "../../assets/image/client-logo-3.png";

function Carosuel() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
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
    <Slider {...settings}>
      <div>
        <img src={Sliderimage1} alt="" />
      </div>
      <div>
        <img src={Sliderimage2} alt="" />
      </div>
      <div>
        <img src={Sliderimage1} alt="" />
      </div>
      <div>
        <img src={Sliderimage2} alt="" />
      </div>
      <div>
        <img src={Sliderimage1} alt="" />
      </div>
      <div>
        <img src={Sliderimage2} alt="" />
      </div>
    </Slider>
  )
}

export default Carosuel