import Slider from "react-slick";
import React, { Component } from "react";
import "./project.css";
// import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import PokemonCard from "./PokemonCard";
import DesignCard from "./DesignCard";
import AnimationCard from "./AnimationCard";
import ParellexCard from "./ParellexCard";
import ChristmasCard from "./ChristmasCard";

// Add Arrow code
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  dots: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

function SliderComp() {
  return (
    <Slider {...settings}>
      <div>
        <PokemonCard />
      </div>
      <div>
        <DesignCard />
      </div>
      <div>
        <AnimationCard />
      </div>
      <div>
        <ParellexCard />
      </div>
      <div>
        <ChristmasCard />
      </div>
    </Slider>
  );
}

export default SliderComp;
