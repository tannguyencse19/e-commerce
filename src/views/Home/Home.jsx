import { Stack } from "@chakra-ui/react";
import Hero from "./Hero";
import LatestProduct from "./LatestProduct";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <Stack direction="column" spacing="40" >
      <Hero />
      <ShopByCategory />
      <LatestProduct />
    </Stack>
  );
};

export default Home;
