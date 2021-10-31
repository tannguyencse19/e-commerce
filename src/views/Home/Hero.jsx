import {
  Image,
  Grid,
  GridItem,
  Text,
  Slide,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Grid
      backgroundImage="https://preview.colorlib.com/theme/estore/assets/img/hero/h1_hero.jpg.webp"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      alt="Hero background"
      autoFlow="column"
      px="20"
      alignItems="center"
      justifyContent="center"
    >
      <GridItem display={{base: "none", lg:"inline"}}>
        <Slide
          direction="left"
          style={{ position: "inherit", transition: "all 0.4s ease-out" }}
          in
          unmountOnExit
        >
          <Image src="https://preview.colorlib.com/theme/estore/assets/img/hero/xhero_man.png.pagespeed.ic.cN86RxAvqq.webp" />
        </Slide>
      </GridItem>
      <GridItem py="10">
        <Slide
          direction="right"
          style={{ position: "inherit", transition: "all 0.4s ease-out" }}
          in
          unmountOnExit
        >
          <Text
            fontSize="5xl"
            fontFamily='"Yellowtail", cursive'
            color="red"
          >
            60% Discount
          </Text>
          <Text
            fontSize="7xl"
            lineHeight="shorter"
            letterSpacing="tight"
            fontWeight="extrabold"
            fontFamily='"Playfair Display",serif'
          >
            Winter
            <br />
            Collection
          </Text>
          <Text
            fontSize="3xl"
            letterSpacing="tighter"
            fontFamily='"Playfair Display",serif'
            fontStyle="italic"
            color="gray.600"
          >
            Best Cloth Collection By 2020!
          </Text>
          <ButtonGroup size="lg" spacing="3" mt="5">
            <Button colorScheme="messenger">Shop Now</Button>
            <Button colorScheme="pink">Latest Products</Button>
          </ButtonGroup>
        </Slide>
      </GridItem>
    </Grid>
  );
};

export default Hero;
