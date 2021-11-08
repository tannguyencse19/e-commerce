import { Container } from "@chakra-ui/layout";
import Hero from "./Hero";
import LatestProduct from "./LatestProduct";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <>
      <Hero />
        <ShopByCategory />
        <LatestProduct />
    </>
  );
};

export default Home;
