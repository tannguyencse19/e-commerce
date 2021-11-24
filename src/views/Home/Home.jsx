import { Stack } from "@chakra-ui/react";
import Hero from "./Hero";
import LatestProduct from "./LatestProduct";
import ShopByCategory from "./ShopByCategory";
import Divider from "../../utils/DividerHelper";

const Home = () => {
  return (
    <Stack direction="column" spacing="48" >
      <Hero />
      <Divider />
      <ShopByCategory />
      <Divider />
      <LatestProduct />
      <Divider />
    </Stack>
  );
};

export default Home;
