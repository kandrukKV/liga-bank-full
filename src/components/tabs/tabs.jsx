import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Thumbs, Pagination, Navigation, EffectFade} from "swiper/core";
import Tab from '../tab/tab';
import {THUMBS, TABS} from "../../const";

import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';

import './tabs.scss';

SwiperCore.use([Thumbs, Pagination, Navigation, EffectFade]);

const Tabs = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbsParams = {
    slidesPerView: 4,
    onSwiper: setThumbsSwiper
  };

  const tabsParams = {
    thumbs: {swiper: thumbsSwiper},
    pagination: true,
    effect: `slide`,
    breakpoints: {
      1024: {
        pagination: false,
        effect: `fade`,
      },
    }
  };

  return (
    <div className="theme-container tabs">
      <Swiper className="tabs__thumbs" {...thumbsParams}>
        {
          THUMBS.map((item) => {
            return (
              <SwiperSlide key={item.name}>
                <div className="tabs__link">
                  <img className="tabs__icon" src={item.icon} alt={`icon`}/>
                  {item.name}
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
      <Swiper {...tabsParams}>
        {
          TABS.map((tab) => {
            return (
              <SwiperSlide key={tab.title}>
                <Tab
                  title={tab.title}
                  listItems={tab.listItems}
                  decorImg={tab.decorImg}
                  renderLink={tab.link}/>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
};

export default Tabs;
