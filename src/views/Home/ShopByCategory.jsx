import { Container, Text, Grid, GridItem, Box, Button } from "@chakra-ui/react";

const Category = [
  {
    img: "https://preview.colorlib.com/theme/estore/assets/img/categori/xcat1.jpg.pagespeed.ic.fHyE_8RHVV.webp",
    caption: "Unisex",
    fontFamily: "'Dancing Script', cursive",
    subcaption: "New Collection",
  },
  {
    img: "https://preview.colorlib.com/theme/estore/assets/img/categori/xcat2.jpg.pagespeed.ic.Y9XV67bWs0.webp",
    caption: "Winter",
    fontFamily: "'Comfortaa', cursive;",
    subcaption: "Discount!",
  },
  {
    img: "https://preview.colorlib.com/theme/estore/assets/img/categori/xcat3.jpg.pagespeed.ic.2LQT-LNfhJ.webp",
    caption: "Vintage",
    fontFamily: "'Roboto Mono', monospace",
    subcaption: "New Collection",
  },
];

const ShopByCategory = () => {
  return (
    <Container maxW="container.xl" px={10} py={16}>
      <Text
        fontFamily='"Playfair Display",serif'
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        mb="10"
      >
        Shop by Category
      </Text>
      <Grid autoFlow="column" gap={5} justifyContent="center">
        {Category &&
          Category.map((item) => (
            <GridItem
              backgroundImage={item.img}
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              w="300px"
              h="200px"
              autoFlow="column"
              position="relative"
              key={item.img}
            >
              <Box position="absolute" top="15%" right="5%">
                <Text
                  fontFamily={item.fontFamily}
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  {item.caption}
                </Text>
                <Button colorScheme="yellow" borderRadius="2xl" size="sm">
                  Best New Deals
                </Button>
                <Text
                  fontFamily='"Yellowtail", cursive'
                  color="#2577fd"
                  fontWeight="bold"
                  fontSize="xl"
                  textShadow="0 -3px 0 #fff"
                >
                  {item.subcaption}
                </Text>
              </Box>
            </GridItem>
          ))}
      </Grid>
    </Container>
  );
};

export default ShopByCategory;
