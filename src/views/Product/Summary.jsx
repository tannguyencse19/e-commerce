import { Image } from "@chakra-ui/image";
import { Text, VStack } from "@chakra-ui/layout";
import Rating from "../../utils/Rating";

const ProductSummary = ({image, title, rating, price, isHover}) => {
  return (
    <VStack
      spacing={3}
      _hover={isHover ? {
        transform: "scale(1.04)",
        cursor: "pointer",
      } : null}
      transitionDuration="0.3s"
      align={{ base: "center", md: "flex-start" }}
    >
      <Image src={image} boxSize="200px" fit="contain" mx="auto" />
      <Text fontFamily='"Roboto",serif' fontSize="md" maxW="xs">
        {title}
      </Text>
      <Rating
        size={16}
        scale={5}
        fillColor="gold"
        strokeColor="gold"
        ratingProp={rating.rate}
      />
      <VStack spacing={2} justifyContent="start">
        <Text fontSize="xl" fontWeight="bold" color="red">
          {price}
        </Text>
        {/* <Text color="gray.400" fontSize="small" lineHeight="35px">
            <strike>{item.price}</strike>
          </Text> */}
      </VStack>
    </VStack>
  );
};

// ProductSummary.defaultProps = {
//   isHover: false
// }

export default ProductSummary;
