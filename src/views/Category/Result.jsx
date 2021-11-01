import { Image, Fade, Button } from "@chakra-ui/react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/layout";
import Rating from "../../utils/Rating";
import Products from "../../json/LatestProduct.json";

const Result = () => {
  return (
    <>
      {Products &&
        Products.map((category, tabIdx) => (
          // tabIdx boi vi moi trang map mot array product
          <Fade
            direction="right"
            in
            unmountOnExit
            style={{
              position: "inherit",
              transition: "all 0.2s ease-out",
            }}
          >
            <Grid
              templateColumns={{ base: "", md: "repeat(3, auto)" }}
              gap="10"
            >
              {category &&
                category.map((item) => (
                  <Grid
                    key={item.img}
                    autoFlow="row"
                    gap={3}
                    _hover={{
                      transform: "scale(1.04)",
                      cursor: "pointer",
                    }}
                    transitionDuration="0.3s"
                  >
                    <Image src={item.img} />
                    <Text
                      fontFamily='"Roboto",serif'
                      fontSize="md"

                    >
                      {item.title}
                    </Text>
                    <Rating
                      size={16}
                      scale={5}
                      fillColor="gold"
                      strokeColor="gold"
                      ratingProp={item.star}
                    />
                    <Grid autoFlow="column" gap={2} justifyContent="start">
                      <Text fontSize="xl" fontWeight="bold" color="red">
                        {item.discount}
                      </Text>
                      <Text color="gray.400" fontSize="small" lineHeight="35px">
                        <strike>{item.price}</strike>
                      </Text>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </Fade>
          // <Grid justifyContent={{ base: "center", md: "end" }}>
          //   <Button colorScheme="messenger">
          //     <RouterLink to={Category[tabIdx].path}>Shop Now</RouterLink>
          //   </Button>
          // </Grid>
        ))}
    </>
  );
};

export default Result;
