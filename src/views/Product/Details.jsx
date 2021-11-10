import { Box, Container, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Carousel from "../../utils/CarouselChoc";
import Swiper from "../../utils/Carousel";
import useFetch from "../../utils/useFetch";
import Rating from "../../utils/Rating";
import { useNumberInput } from "@chakra-ui/number-input";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";
import { Link as RouterLink } from "react-router-dom";
import ProductSummary from "./Summary";

const ProductDetails = ({
  match: {
    params: { id },
  },
}) => {
  const [Products, isLoading, isError] = useFetch(
    `${process.env.REACT_APP_GET_PRODUCTS}/${id}`
  );
  console.log(Products);
  const [ProductsInSameCategory, load, err] = useFetch(
    `${process.env.REACT_APP_GET_PRODUCT_IN_CATEGORY}/${Products.category}`
  );

  const Slides = React.useMemo(() => {
    const Images = [];
    ProductsInSameCategory.forEach(({ image }) => Images.push({ img: image }));
    return Images;
  }, [ProductsInSameCategory]);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      // max: 6,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <VStack spacing="10" background="gray.100" py="10">
      <HStack justify="space-around" width="90%" background="white" py="10">
        <Box>
          {/* <Carousel
            Slides={Slides}
            slideLength={Slides.length}
            w="320px"
            h="400px"
            overflow="hidden"
          ></Carousel> */}
          <Swiper
            Items={ProductsInSameCategory}
            drag={false}
            numOfSlides={1}
            height="400px"
          >
            {Products && <Image src={Products.image}></Image>}
          </Swiper>
        </Box>
        {!isLoading && (
          <VStack align="flex-start">
            <Text
              fontSize="4xl"
              fontWeight="bold"
              fontFamily='"Playfair Display",serif'
              width="xl"
              overflowWrap="break-word"
            >
              {Products.title}
            </Text>
            <Rating
              size={20}
              scale={5}
              fillColor="gold"
              strokeColor="gold"
              ratingProp={Products.rating.rate}
            />
            <Text fontSize="2xl" fontFamily='"Playfair Display",serif'>
              {Products.price}$
            </Text>
            <Text width="xl" overflowWrap="break-word">
              {Products.description}
            </Text>
            <HStack>
              <Button {...dec} colorScheme="gray">
                -
              </Button>
              <Input {...input} w="16" />
              <Button {...inc} colorScheme="gray">
                +
              </Button>
            </HStack>
            <ButtonGroup width={{ md: "md" }}>
              <Button isFullWidth colorScheme="orange">
                Buy Now
              </Button>
              <Button isFullWidth colorScheme="messenger">
                Add To Cart
              </Button>
            </ButtonGroup>
          </VStack>
        )}
      </HStack>
      <HStack width="90%" background="white">
        <Swiper
          Items={ProductsInSameCategory}
          drag={false}
          numOfSlides={3}
          height="400px"
        >
          {!isLoading && <ProductSummary {...Products}></ProductSummary>}
        </Swiper>
      </HStack>
    </VStack>
  );
};

export default ProductDetails;
