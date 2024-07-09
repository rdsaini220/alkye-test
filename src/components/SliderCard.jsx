'use client';
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";

function SliderCard({ slides=[] }) {
    const settings = {
        className: "slider variable-width",
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
    };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
            slides.map((item) => {
                return (
                    <div key={item?.id} className="pb-8 md:pb-0 pe-6 md:pe-16">
                         <div className="w-full hidden md:block">
                            <Image src={item?.url} alt={item?.title} className="mx-auto" width={300} height={300}/>
                        </div>
                        <div className="w-full block md:hidden">
                            <Image src={item?.url} alt={item?.title} className={`w-[200px] lg:w-[200px] h-[300px] lg:h-[300px] mx-auto`} width={300} height={300}/>
                        </div>
                    </div>
                )
            })
        }
      </Slider>
    </div>
  );
}

export default SliderCard;
