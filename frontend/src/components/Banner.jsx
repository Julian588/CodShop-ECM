import Img2 from "/public/bannerp2.webp";
import Img3 from "/public/bannerp3.webp";
import Img1 from "/public/bannerp1.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

function Banner() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="swiper-container banner"
      >
        <span className="swiper-button-prev slider-arrow">
          <i className="fa-solid fa-arrow-left"></i>
        </span>
        <SwiperSlide>
          <img src={Img1} className="img-banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} className="img-banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} className="img-banner" />
        </SwiperSlide>

        <span className="swiper-button-next slider-arrow">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </Swiper>
    </>
  );
}

export default Banner;
