import React from "react";
import Carousel from "../../utils/Carousel";
import useFetch from "../../utils/useFetch";
import ProductSummary from "./Summary";
import { SwiperSlide } from "swiper/react";
import {
  Box,
  Stack,
  Text,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

const ProductRelated = () => {
  const [AllProducts, AllProductLoading, AllProductErr] = useFetch(
    `${process.env.REACT_APP_GET_PRODUCTS}`
  );
  const largerThanLg = useBreakpointValue({ base: false, lg: true });
  return (
    <Stack width="90%" background="white" align="flex-start">
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
      <Stack
        // style for mobile version
        width="100%"
        direction={{ base: "column", xl: "row" }}
        spacing="20"
        justify="space-evenly"
      >
        {AllProductLoading &&
          [1, 2, 3, 4].map((idx) => (
            <Box p="10" key={`skeleton-${idx}`}>
              <Skeleton height="48" width="48" />
              <Skeleton height="4" width="40" mt="4" />
              <Skeleton height="4" width="16" mt="4" />
              <SkeletonText mt="4" noOfLines={3} spacing={4} width="20" />
            </Box>
          ))}
        {!AllProductLoading && largerThanLg && (
          <Carousel numOfSlides={4} padding="0 30px">
            {AllProducts.map((item, idx) => (
              <SwiperSlide key={`related-product-${idx}`}>
                <ProductSummary {...item} />
              </SwiperSlide>
            ))}
          </Carousel>
        )}
        {!largerThanLg &&
          AllProducts.map((item, idx) => (
            <ProductSummary {...item} key={`related-product-${idx}`} />
          ))}
      </Stack>
    </Stack>
  );
};

export default ProductRelated;
