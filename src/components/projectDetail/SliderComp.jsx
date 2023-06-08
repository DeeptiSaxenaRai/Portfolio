import Slider from "react-slick";
import React, { Component } from "react";

import PokemonCard from "./PokemonCard";
import DesignCard from "./DesignCard";
import AnimationCard from "./AnimationCard";
import ParellexCard from "./ParellexCard";
import ChristmasCard from "./ChristmasCard";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
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
      breakpoint: 765,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 550,
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
