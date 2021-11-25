import { Container, Grid, GridItem } from "@chakra-ui/layout";
import Filter from "./Filter";
import Result from "./Result";
import React from "react";
import { Spinner } from "@chakra-ui/spinner";
import useFetch from "../../utils/useFetch";
import DividerHelper from "../../utils/DividerHelper";

const Category = () => {
  const [Category, setCategory] = React.useState("");
  const [URI, setURI] = React.useState(process.env.REACT_APP_GET_PRODUCTS);
  const [Products, isLoading, isError] = useFetch(URI);
  const [SearchValue, setSearchValue] = React.useState("");

  // Chua chay
  const filterResult = React.useMemo(() => {
    if (!SearchValue) return Products;

    return Products.filter(
      ({ title }) => title.toLowerCase().indexOf(SearchValue.toLowerCase()) > -1
    );
  }, [SearchValue, Products]);

  React.useEffect(() => {
    if (Category)
      setURI(`${process.env.REACT_APP_GET_PRODUCT_IN_CATEGORY}/${Category}`);
  }, [Category]);

  return (
    <Container maxW="container.xl" >
      <Grid
        autoFlow={{ base: "row", md: "column" }}
        gap="10"
        templateColumns={{ md: "25% auto" }}
      >
        <GridItem mt="10">
          <Filter
            onSelectCategory={(e) => setCategory(e.target.value)}
            onSearch={(e) => setSearchValue(e.target.value)}
          />
        </GridItem>

        <DividerHelper isHorizontal={false} />

        <GridItem mt="10">
          {isError && <h1>Uh oh... There is something wrong</h1>}
          {isLoading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
          {!isLoading && <Result Products={filterResult} />}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Category;
