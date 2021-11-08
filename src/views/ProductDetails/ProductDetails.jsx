import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import Carousel from "../../utils/CarouselChoc";
import useFetch from "../../utils/useFetch";

const slides = [
  {
    img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const ProductDetails = ({
  match: {
    params: { id },
  },
}) => {
  const [Products, isLoading, isError] = useFetch(
    `${process.env.REACT_APP_GET_PRODUCTS}/${id}`
  );
  const [ProductsInSameCategory, load, err] = useFetch(
    `${process.env.REACT_APP_GET_PRODUCT_IN_CATEGORY}/${Products.category}`
  );

  const Slides = React.useMemo(() => {
    const Images = [];
    ProductsInSameCategory.forEach(({ image }) => Images.push({ img: image }));
    return Images;
  }, [ProductsInSameCategory]);

  return (
    <Box>
      <Carousel slides={Slides} w="300px" h="400px" />
    </Box>
  );
};

export default ProductDetails;
