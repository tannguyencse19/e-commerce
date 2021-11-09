import { Box, Container, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Carousel from "../../utils/CarouselChoc";
import useFetch from "../../utils/useFetch";
import Rating from "../../utils/Rating";
import { useNumberInput } from "@chakra-ui/number-input";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";

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
    <HStack p="10" justify="space-between">
      <Box flexBasis="30%">
        <Carousel slides={Slides} w="350px" h="400px" />
      </Box>
      {!isLoading && (
        <VStack flexBasis="50%" align="flex-start">
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
          <Text>{Products.price}</Text>
          <Text>{Products.description}</Text>
          <HStack>
            <Button {...dec}>-</Button>
            <Input {...input} />
            <Button {...inc}>+</Button>
          </HStack>
        </VStack>
      )}
    </HStack>
  );
};

export default ProductDetails;
