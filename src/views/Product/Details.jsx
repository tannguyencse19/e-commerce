import React from "react";
import Carousel from "../../utils/Carousel";
import useFetch from "../../utils/useFetch";
import Rating from "../../utils/Rating";
import { SwiperSlide } from "swiper/react";
import {
  Box,
  HStack,
  VStack,
  Stack,
  Text,
  useNumberInput,
  Button,
  ButtonGroup,
  Input,
  Image,
  Skeleton,
  SkeletonText,
  useColorModeValue,
  LightMode,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import ProductRelated from "./Related";
import DividerHelper from "../../utils/DividerHelper";
import {
  darkModeBackgroundColor,
  darkModeContainerColor,
  lightModeContainerColor,
} from "../../utils/Helper";

const ProductDetails = ({
  match: {
    params: { id },
  },
}) => {
  const [Products, ProductsLoading, ProductsErr] = useFetch(
    `${process.env.REACT_APP_GET_PRODUCTS}/${id}`
  );
  const [RelatedProducts, RelatedProductsLoading, RelatedProductsErr] =
    useFetch(
      `${process.env.REACT_APP_GET_PRODUCT_IN_CATEGORY}/${Products.category}`
    );

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

  const largerThanMd = useBreakpointValue({ base: false, md: true });

  return (
    <VStack py="10">
      <Stack
        direction={{ base: "column", xl: "row" }}
        justify="space-around"
        width="100%"
        p="10"
      >
        <Box
          background={useColorModeValue(
            lightModeContainerColor,
            darkModeContainerColor
          )}
        >
          {RelatedProductsLoading && (
            <Skeleton width={{ base: "auto", md: "400px" }} height="300px" />
          )}
          {!RelatedProductsLoading && (
            <Carousel
              drag
              numOfSlides={1}
              width={largerThanMd ? "400px" : "auto"}
            >
              {RelatedProducts.map(({ image }, idx) => (
                <SwiperSlide key={`image-${idx}`}>
                  <Image
                    src={image}
                    display="block"
                    marginLeft="auto"
                    marginRight="auto"
                    width="400px"
                    height="300px"
                    objectFit="contain"
                  />
                </SwiperSlide>
              ))}
            </Carousel>
          )}
        </Box>
        <VStack
          align="flex-start"
          spacing="7"
          background={useColorModeValue(
            lightModeContainerColor,
            darkModeContainerColor
          )}
          p="10"
        >
          {ProductsLoading && (
            <Box width={{ base: "100%", md: "600px" }}>
              <Skeleton height="16" />
              <Skeleton height="8" width="40" mt="4" />
              <Skeleton height="8" width="16" mt="4" />
              <SkeletonText mt="10" noOfLines={6} spacing={4} />
              <Skeleton height="8" width="48" mt="4" />
              <Skeleton height="8" width={{ base: "auto", md: "sm" }} mt="4" />
            </Box>
          )}
          {!ProductsLoading && (
            <>
              <Text
                fontSize="4xl"
                fontWeight="bold"
                fontFamily='"Playfair Display",serif'
                width={{ xl: "xl" }}
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
              <Text width={{ xl: "xl" }} overflowWrap="break-word">
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
              <LightMode>
                <ButtonGroup width={{ md: "md" }}>
                  <Button isFullWidth colorScheme="orange">
                    Buy Now
                  </Button>
                  <Button isFullWidth colorScheme="messenger">
                    Add To Cart
                  </Button>
                </ButtonGroup>
              </LightMode>
            </>
          )}
        </VStack>
      </Stack>

      <DividerHelper />

      <Box width="100%" mt="0">
        <ProductRelated />
      </Box>
    </VStack>
  );
};

export default ProductDetails;
