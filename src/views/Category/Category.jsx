import { Container, Grid, GridItem } from "@chakra-ui/layout";
import Filter from "./Filter";
import Result from "./Result";
import React from "react";
import { Spinner } from "@chakra-ui/spinner";
import useFetch from "../../utils/useFetch";

const URIHomePage = "https://fakestoreapi.com";

const Category = () => {
  const [FilterResult, setFilterResult] = React.useState([]);
  const [Category, setCategory] = React.useState("");
  const [URI, setURI] = React.useState(process.env.REACT_APP_GET_PRODUCTS);
  const [Products, isLoading, isError] = useFetch(URI);

  function onSearch({ target: { value } }) {
    if (!value) setFilterResult(Products);
    else
      setFilterResult(
        Products.filter(
          ({ title }) => title.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
      );
  }

  React.useEffect(() => {
    if (Category) setURI(`${process.env.REACT_APP_GET_PRODUCT_IN_CATEGORY}/${Category}`);
  }, [Category]);

  React.useEffect(() => {
    // fetch xogn moi setFilterResult
    setFilterResult(Products);
  }, [Products]);

  return (
    <Container maxW="container.xl" mt="10">
      <Grid
        autoFlow={{ base: "row", md: "column" }}
        gap="10"
        templateColumns={{ md: "25% auto" }}
      >
        <GridItem>
          <Filter
            onSelectCategory={(e) => setCategory(e.target.value)}
            onSearch={onSearch}
          />
        </GridItem>
        <GridItem>
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
          {!isLoading && <Result Products={FilterResult} />}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Category;
