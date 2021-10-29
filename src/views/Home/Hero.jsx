import {
  Image,
  Grid,
  GridItem,
  Text,
  Slide,
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
      <GridItem>
        <Slide
          direction="left"
          style={{ position: "inherit" }}
          in
          unmountOnExit
        >
          <Image src="https://preview.colorlib.com/theme/estore/assets/img/hero/xhero_man.png.pagespeed.ic.cN86RxAvqq.webp" />
        </Slide>
      </GridItem>
      <GridItem>
        <Slide
          direction="right"
          style={{ position: "inherit" }}
          in
          unmountOnExit
        >
          <Text
            fontSize="5xl"
            fontFamily='"Yellowtail", cursive'
            color="#2577fd"
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
        </Slide>
      </GridItem>
    </Grid>
  );
};

export default Hero;
