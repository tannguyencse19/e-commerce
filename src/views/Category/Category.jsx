import { Container, Grid, GridItem } from "@chakra-ui/layout";
import Filter from "./Filter";
import Result from "./Result";

const Category = () => {
  return (
    <Container maxW="container.xl">
      <Grid autoFlow={{base: "row", md: "column"}} gap="10">
        <GridItem><Filter /></GridItem>
        <GridItem><Result /></GridItem>
      </Grid>
    </Container>
  );
};

export default Category;
