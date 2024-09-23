"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import { TestimonialsData } from "@/utils/db";
import { settings } from "@/utils/utils";

const SimpleSlider = () => {
  return (
    <Slider {...settings}>
      {TestimonialsData.map((slider) => (
        <SliderCard key={slider.id} {...slider} />
      ))}
    </Slider>
  );
};

export default SimpleSlider;
