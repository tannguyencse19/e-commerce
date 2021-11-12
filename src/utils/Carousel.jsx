// Import Swiper React components
import { Swiper } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useMediaQuery } from "@chakra-ui/react"

//https://stackoverflow.com/questions/69202975/module-not-found-cant-resolve-swiper-react
//https://swiperjs.com/migration-guide
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

// https://swiperjs.com/demos
// https://codepen.io/ncer/pen/xpqemZ
// https://codesandbox.io/s/k2kup?file=/src/styles.css
// const pagination = {
//   clickable: true,
//   renderBullet: function (idx, className) {
//     return '<span class="' + className + '">' + menu[idx] + "</span>";
//   },
// };

const Carousel = ({ drag, numOfSlides, width, height, padding, children }) => {
  const [largerThanLg] = useMediaQuery("(min-width: 62em)")

  return (
    <>
      <Swiper
        // pagination={pagination}
        navigation={largerThanLg}
        pagination={!largerThanLg}
        spaceBetween={50}
        slidesPerView={numOfSlides} // or 'auto'
        grabCursor={drag}
        // onSlideChange={() => console.log('slide change')}
        simulateTouch={drag}
        style={{
          width: width,
          height: height,
          padding: padding,
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

Carousel.defaultProps = {
  drag: false,
  numOfSlides: 1,
  width: "100%",
  height: "auto",
  padding: 0,
  // navigation: false,
};

export default Carousel;
