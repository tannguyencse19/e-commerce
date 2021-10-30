// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Image } from "@chakra-ui/react";

//https://stackoverflow.com/questions/69202975/module-not-found-cant-resolve-swiper-react
//https://swiperjs.com/migration-guide
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Carousel.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const menu = ["All", "New", "Feature", "Offer"];
const Products = [
  {
    title: "Short Jeans Caro",
    price: "$60.00",
    discount: "$39.99",
    star: 5,
    img: "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct1.png.pagespeed.ic.1xDh2tYQRf.webp",
  },
  {
    title: "Green Unisex Sweater",
    price: "$70.00",
    discount: "$44.99",
    star: 4,
    img: "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct2.png.pagespeed.ic.eUEI6NamxP.webp",
  },
  {
    title: "Yellow Cotton Silky",
    price: "$60.00",
    discount: "$34.99",
    star: 5,
    img: "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct3.png.pagespeed.ic.7lSBCQxjjP.webp",
  },
  {
    title: "Men's Long Armwet",
    price: "$85.00",
    discount: "$39.99",
    star: 4,
    img: "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct4.png.pagespeed.ic.E_ANc_dSPj.webp",
  },
  {
    title: "Bombay Jeans Camo",
    price: "$60.00",
    discount: "$29.99",
    star: 5,
    img: "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct5.png.pagespeed.ic.izexkyESWy.webp",
  },
  {
    title: "Bright Jeans Cloak",
    price: "$60.00",
    discount: "$44.99",
    star: 5,
    img: "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct6.png.pagespeed.ic.kDamUyhwF-.webp",
  },
];

// https://swiperjs.com/demos
// https://codepen.io/ncer/pen/xpqemZ
// https://codesandbox.io/s/k2kup?file=/src/styles.css
const pagination = {
  clickable: true,
  renderBullet: function (idx, className) {
    return '<span class="' + className + '">' + menu[idx] + "</span>";
  },
};

const Carousel = () => {
  return (
    <Swiper
      pagination={pagination}
      spaceBetween={50}
      // grid={{fill: "column", rows: 2}}
      slidesPerView={3} // or 'auto'
      slidesPerColumn={2}
      slidesPerGroup={3}
      slidesPerColumnFill="row"
      grabCursor={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      style={{ paddingTop: 100 }}
      // simulateTouch={false}
    >
      {Products &&
        Products.map((item) => (
          <SwiperSlide>
            <Image src={item.img} />
          </SwiperSlide>
        ))}
      {Products &&
        Products.map((item) => (
          <SwiperSlide>
            <Image src={item.img} />
          </SwiperSlide>
        ))}
      {Products &&
        Products.map((item) => (
          <SwiperSlide>
            <Image src={item.img} />
          </SwiperSlide>
        ))}
      {Products &&
        Products.map((item) => (
          <SwiperSlide>
            <Image src={item.img} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;