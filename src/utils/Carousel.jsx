// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//https://stackoverflow.com/questions/69202975/module-not-found-cant-resolve-swiper-react
//https://swiperjs.com/migration-guide
// Import Swiper styles
import 'swiper/swiper.min.css';

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default Carousel;