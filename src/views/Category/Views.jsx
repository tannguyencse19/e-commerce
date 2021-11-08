import { Image } from "@chakra-ui/react";
import { Grid, VStack, Text } from "@chakra-ui/layout";
import Rating from "../../utils/Rating";
import { Link as RouterLink } from "react-router-dom";

const Views = ({ Products }) => {
  return (
    <Grid templateColumns={{ md: "repeat(3, 30%)" }} gap="10">
      {!Products && (
        <h1>Server is under maintainance. Please comeback in a mintue ^^</h1>
      )}
      {Products &&
        Products.map((item) => (
          <RouterLink to={`/products/${item.id}`} key={`item-${item.id}`}>
            <VStack
              spacing={3}
              _hover={{
                transform: "scale(1.04)",
                cursor: "pointer",
              }}
              transitionDuration="0.3s"
              align={{ base: "center", md: "flex-start" }}
            >
              <Image src={item.image} boxSize="200px" fit="contain" />
              <Text fontFamily='"Roboto",serif' fontSize="md" maxW="xs">
                {item.title}
              </Text>
              <Rating
                size={16}
                scale={5}
                fillColor="gold"
                strokeColor="gold"
                ratingProp={item.rating.rate}
              />
              <VStack spacing={2} justifyContent="start">
                <Text fontSize="xl" fontWeight="bold" color="red">
                  {item.price}
                </Text>
                {/* <Text color="gray.400" fontSize="small" lineHeight="35px">
                  <strike>{item.price}</strike>
                </Text> */}
              </VStack>
            </VStack>
          </RouterLink>
        ))}
    </Grid>
  );
};

export default Views;
