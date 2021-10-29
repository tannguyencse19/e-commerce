import { Image } from "@chakra-ui/react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/layout";
import Rating from "../../utils/Rating";

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

const LatestProduct = () => {
  return (
    <Container maxW="container.xl" px={10} py={16}>
      <Grid autoFlow="column" my={10} alignItems="center">
        <GridItem>
          <Text
            fontFamily='"Playfair Display",serif'
            fontSize="4xl"
            fontWeight="700"
          >
            Latest Products
          </Text>
        </GridItem>
        <Grid autoFlow="column">
          <GridItem>All</GridItem>
          <GridItem>New</GridItem>
          <GridItem>Featured</GridItem>
          <GridItem>Offer</GridItem>
        </Grid>
      </Grid>
      <Grid templateColumns="repeat(3, auto)" gap={10}>
        {Products &&
          Products.map((item) => (
            <Grid key={item.img} justifyItems="center" autoFlow="row" gap={3}>
              <Image src={item.img} />
              <Rating
                size={20}
                scale={5}
                fillColor="gold"
                strokeColor="gold"
                ratingProp={item.star}
              />
              <Text
                fontFamily='"Playfair Display",serif'
                fontSize="lg"
                fontWeight="bold"
              >
                {item.title}
              </Text>
              <Grid autoFlow="column" gap={2} alignItems="center">
                <Text color="gray.400"><strike>{item.price}</strike></Text>
                <Text fontSize="xl" fontWeight="bold" color="red" lineHeight="0">{item.discount}</Text>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default LatestProduct;
