import { Container } from "@chakra-ui/layout";
import Hero from "./Hero";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <>
      <Hero />
      <Container maxW="container.xl">
        <ShopByCategory />
      </Container>
    </>
  );
};

export default Home;
