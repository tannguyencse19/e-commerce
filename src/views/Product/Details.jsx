import React from "react";
import Carousel from "../../utils/Carousel";
import useFetch from "../../utils/useFetch";
import Rating from "../../utils/Rating";
import ProductSummary from "./Summary";
import { SwiperSlide } from "swiper/react";
import {
  Box,
  HStack,
  Text,
  VStack,
  useNumberInput,
  Button,
  ButtonGroup,
  Input,
  Image,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

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
  const [AllProducts, AllProductLoading, AllProductErr] = useFetch(
    `${process.env.REACT_APP_GET_PRODUCTS}`
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

  return (
    <VStack spacing="10" background="gray.100" py="10">
      <HStack justify="space-around" width="90%" background="white" py="10">
        <Box>
          {RelatedProductsLoading && <Skeleton width="400px" height="300px" />}
          {!RelatedProductsLoading && (
            <Carousel drag={true} numOfSlides={1} width="400px">
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
        <VStack align="flex-start" spacing="7">
          {ProductsLoading && (
            <Box>
              <Skeleton height="16" />
              <Skeleton height="8" width="40" mt="4" />
              <Skeleton height="8" width="16" mt="4" />
              <SkeletonText mt="10" noOfLines={6} spacing={4} />
              <Skeleton height="8" width="48" mt="4" />
              <Skeleton height="8" width="sm" mt="4" />
            </Box>
          )}
          {!ProductsLoading && (
            <>
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
            </>
          )}
        </VStack>
      </HStack>

      <VStack width="90%" background="white" align="flex-start">
        {!AllProductLoading && (
          <Text
            px="10"
            py="5"
            fontSize="3xl"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Related Products
          </Text>
        )}
        <HStack width="100%" justify={true ? "space-between" : "none"}>
          {AllProductLoading &&
            [1, 2, 3, 4].map((idx) => (
              <Box p="10" key={`skeleton-${idx}`}>
                <Skeleton height="48" width="48" />
                <Skeleton height="4" width="40" mt="4" />
                <Skeleton height="4" width="16" mt="4" />
                <SkeletonText mt="4" noOfLines={3} spacing={4} width="20" />
              </Box>
            ))}
          {!AllProductLoading && (
            <Carousel drag={false} numOfSlides={4} padding="0 30px">
              {AllProducts.map((item, idx) => (
                <SwiperSlide key={`related-product-${idx}`}>
                  <ProductSummary {...item} />
                </SwiperSlide>
              ))}
            </Carousel>
          )}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProductDetails;
