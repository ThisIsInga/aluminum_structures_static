import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Swiper.module.css';  

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default ({ images = [] }) => {  // Дефолтный пустой массив, если пропс не передан
  return (
    <div className={style.swiperContainer}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          // Адаптивность: на мобильных меньше слайдов
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={style.slide}>
            <img
              src={image.src}
              alt={image.alt}
              className={style.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
