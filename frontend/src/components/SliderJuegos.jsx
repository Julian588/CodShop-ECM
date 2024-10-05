import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Card from "./Card";

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
        onSwiper={(swiper) => {
          swiperRef = swiper;
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: `.swiper-button-next${id}`,
          prevEl: `.swiper-button-prev${id}`,
          clickable: true,
        }}
        className="swiper-container swiper-offers-container"
      >
        {productos.map((producto) => {
          return (
            <SwiperSlide key={producto.id}>
              <Card producto={producto}></Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <span
        className={`swiper-button-prev slider-arrow swiper-button-prev${id}`}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </span>
      <span
        className={`swiper-button-next slider-arrow swiper-button-next${id}`}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </span>
    </section>
  );
}

export default SliderJuegos;
