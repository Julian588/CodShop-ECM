import "./SliderJuegos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Card from "@common/Card/Card";

function SliderJuegos({ sectionTitle, productos, id }) {
  let swiperRef = null;

  const onMouseEnter = () => {
    if (swiperRef) {
      swiperRef.autoplay.stop();
    }
  };
  const onMouseLeave = () => {
    if (swiperRef) {
      swiperRef.autoplay.start();
    }
  };

  return (
    <section
      className="swiper-ofertas"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h2 className="section-title">{sectionTitle}</h2>
      <Swiper
        className="swiper-container swiper-offers-container"
        onSwiper={(swiper) => {
          swiperRef = swiper;
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1.2}
        centeredSlides={false}
        autoplay={{
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: `.swiper-pagination${id}`,
        }}
        navigation={{
          nextEl: `.swiper-button-next${id}`,
          prevEl: `.swiper-button-prev${id}`,
          clickable: true,
        }}
        breakpoints={{
          640: {
            spaceBetween: 10,
            slidesPerView: 1.2,
          },
          760: {
            slidesPerView: 2.2,
            spaceBetween: 50,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: false,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {productos.map((producto) => (
          <SwiperSlide key={producto.id}>
            <Card producto={producto}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="navigation-container">
        <span className={`slider-arrow swiper-button-prev${id}`}>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
        <span className={`swiper-pagination${id} swiper-bullets`}></span>
        <span className={`slider-arrow swiper-button-next${id}`}>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </section>
  );
}

export default SliderJuegos;
