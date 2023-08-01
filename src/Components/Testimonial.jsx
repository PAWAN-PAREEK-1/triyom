import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
   <div className="testimonial">
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'auto'}
    coverflowEffect={
      {
        rotateLeft:0,
        stretchWidth:0,
        depth:100,
        modifiers: 2.5,

      }

    }
    pagination={{el:".swiper-pagination",clickable:true}}
    navigation={{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
      clickable:true,
    }}
    className="Swiper-container"
    modules={[EffectCoverflow,Pagination,Navigation]}
    >
      <SwiperSlide>
        <img src="../assets/img/rev1.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/img/rev1.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/img/rev1.svg" alt="" />
      </SwiperSlide>


      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>

        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>

        </div>
        <div className="swiper-pagination"></div>
      </div>

    </Swiper>
   </div>
  );
};