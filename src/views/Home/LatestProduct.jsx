import {
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Fade,
  Button,
} from "@chakra-ui/react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/layout";
import Rating from "../../utils/Rating";
import Products from "../../json/LatestProduct.json";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const Category = [
  { name: "Trending", path: "/category?trend" },
  { name: "New", path: "/latest" },
  { name: "Featured", path: "/category?featured" },
  { name: "Sale", path: "/category?sale" },
];

const LatestProduct = () => {
  //https://stackoverflow.com/questions/58252454/react-hooks-using-usestate-vs-just-variables

  return (
    <Container maxW="container.xl" px={{base: "5", md: "10"}} py={16}>
      <Tabs isLazy>
        <Grid
          autoFlow={{ base: "row", lg: "column" }}
          alignItems="center"
          borderBottom="1px solid"
          borderBottomColor="gray.200"
          pb="5"
          px={{ lg: "5" }}
          gap="5"
        >
          <GridItem>
            <Text
              fontFamily='"Playfair Display",serif'
              fontSize={{ base: "4xl", lg: "5xl" }}
              fontWeight="700"
            >
              Latest Products
            </Text>
          </GridItem>
          <GridItem>
            <TabList borderBottom="none" justifyContent={{ lg: "end" }}>
              {Category &&
                Category.map(({ name }) => (
                  <Tab
                    fontSize="large"
                    _selected={{
                      color: "red.300",
                      borderColor: "currentColor",
                    }}
                    key={`tab-${name}`}
                  >
                    {name}
                  </Tab>
                ))}
            </TabList>
          </GridItem>
        </Grid>
        <TabPanels>
          {Products &&
            Products.map((category, tabIdx) => (
              // tabIdx boi vi moi trang map mot array product
              <TabPanel key={`tab-${tabIdx}`}>
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
                    my="20"
                  >
                    {category &&
                      category.map((item) => (
                        <Grid
                          key={item.img}
                          justifyItems="center"
                          autoFlow="row"
                          gap={3}
                          _hover={{
                            transform: "scale(1.05)",
                            cursor: "pointer",
                          }}
                          transitionDuration="0.3s"
                        >
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
                            <Text color="gray.400">
                              <strike>{item.price}</strike>
                            </Text>
                            <Text
                              fontSize="xl"
                              fontWeight="bold"
                              color="red"
                              lineHeight="0"
                            >
                              {item.discount}
                            </Text>
                          </Grid>
                        </Grid>
                      ))}
                  </Grid>
                </Fade>
                <Grid justifyContent={{ base: "center", md: "end" }}>
                  <Button colorScheme="messenger">
                    <RouterLink to={Category[tabIdx].path}>
                      Shop Now
                    </RouterLink>
                  </Button>
                </Grid>
              </TabPanel>
            ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default LatestProduct;
