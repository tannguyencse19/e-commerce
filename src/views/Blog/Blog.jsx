import { Image, Box, Text } from "@chakra-ui/react";
import BlogSummary from "./Summary";

const Blog = () => {
  return (
    <>
      <Box
        backgroundImage="https://preview.colorlib.com/theme/estore/assets/img/hero/category.jpg.webp"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        width="100%"
        height="300px"
        pos="relative"
      >
        <Text
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%);"
          fontFamily='"Playfair Display",serif'
          fontSize="5xl"
          fontWeight="semibold"
        >
          Blog
        </Text>
      </Box>
      <BlogSummary />
    </>
  );
};

export default Blog;
