import { Image, Fade, Button } from "@chakra-ui/react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/layout";
import Rating from "../../utils/Rating";

const Result = ({Products}) => {
  return (
    <>
      <Grid templateColumns={{ base: "", md: "repeat(3, auto)" }} gap="10">
        {!Products && <h1>Server is under maintainance. Please comeback in a mintue ^^</h1>}
        {Products &&
          Products.map((item) => (
            <Grid
              key={item.id}
              autoFlow="row"
              gap={3}
              _hover={{
                transform: "scale(1.04)",
                cursor: "pointer",
              }}
              transitionDuration="0.3s"
            >
              <Image src={item.image} boxSize="200px" fit="contain" />
              <Text fontFamily='"Roboto",serif' fontSize="md">
                {item.title}
              </Text>
              <Rating
                size={16}
                scale={5}
                fillColor="gold"
                strokeColor="gold"
                ratingProp={item.rating.rate}
              />
              <Grid autoFlow="column" gap={2} justifyContent="start">
                <Text fontSize="xl" fontWeight="bold" color="red">
                  {item.price}
                </Text>
                {/* <Text color="gray.400" fontSize="small" lineHeight="35px">
                  <strike>{item.price}</strike>
                </Text> */}
              </Grid>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Result;
