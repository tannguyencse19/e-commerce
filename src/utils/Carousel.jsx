// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";

//https://stackoverflow.com/questions/69202975/module-not-found-cant-resolve-swiper-react
//https://swiperjs.com/migration-guide
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Carousel.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const menu = ["Slide 1", "Slide 2", "Slide 3"];

// https://codepen.io/ncer/pen/xpqemZ
// https://codesandbox.io/s/k2kup?file=/src/styles.css
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + menu[index] + "</span>";
  },
};

const Carousel = () => {
  return (
    <Swiper
      pagination={paginationca}
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      style={{height: "500px"}}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
