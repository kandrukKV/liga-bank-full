import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Autoplay} from "swiper";
import {SLIDES} from "../../const";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import "./slider.scss";

SwiperCore.use([Pagination, Autoplay]);

const Slider = () => {
  const sliderParams = {
    pagination: true,
    loop: true,
    autoplay: {
      delay: 4000,
    }
  };
  return (
    <Swiper {...sliderParams}>
      {
        SLIDES.map((slide) => {
          return (
            <SwiperSlide key={slide.subtitle}>
              <div className={`slider__slide slider__slide--${slide.background}`}>
                <div className="theme-container slider__inner">
                  <h2 className={`slider__title${slide.isWhite ? ` slider__title--white` : ``}`}>Лига Банк</h2>
                  <p className={`slider__subtitle${slide.isWhite ? ` slider__subtitle--white` : ``}`}>{slide.subtitle}</p>
                  <a className={`slider__button${slide.isWhite ? ` slider__button--white` : ``}`} href={`${slide.link}`}>{slide.linkName}</a>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default Slider;
