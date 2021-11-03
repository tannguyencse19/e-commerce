import { Container, Grid, GridItem } from "@chakra-ui/layout";
import Filter from "./Filter";
import Result from "./Result";
import React from "react";
import { Spinner } from "@chakra-ui/spinner";

const URI = "https://fakestoreapi.com/products";

const Category = () => {
  const [Products, setProducts] = React.useState([]);
  const [FilterResult, setFilterResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [Category, setCategory] = React.useState("");

  function fetchProducts(link) {
    console.log(link);
    fetch(link)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilterResult(json);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        throw err;
      });
  }

  const handleFetchFilterCategory = React.useCallback(() => {
    console.log("handleFetchFilterCategory");
    setIsLoading(true);
    if (!Category) fetchProducts(URI);
    else fetchProducts(`${URI}/category/${Category}`);
  }, [Category]);

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
    handleFetchFilterCategory();
  }, [handleFetchFilterCategory]);

  return (
    <Container maxW="container.xl">
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
