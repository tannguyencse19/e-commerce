import { Container, Grid, GridItem } from "@chakra-ui/layout";
import Filter from "./Filter";
import Result from "./Result";
import React from "react";
import { Spinner } from "@chakra-ui/spinner";

const Category = () => {
  const [Products, setProducts] = React.useState([]);
  const [Category, setCategory] = React.useState("electronics");
  const flagMounted = React.useRef(false); // La useState nhung ko trigger re-render
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  function fetchAllProduct() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        throw err;
      });
  }

  const onSelectCategory = React.useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  const handleFetchFilterCategory = React.useCallback(() => {
    fetch(`https://fakestoreapi2.com/products/category/${Category}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        throw err;
      });
  }, [Category]);

  React.useEffect(() => {
    // First render
    if (!flagMounted.current) {
      fetchAllProduct();

      flagMounted.current = true;
    } else {
      setIsLoading(true);
      handleFetchFilterCategory();
    }
  }, [handleFetchFilterCategory]);

  return (
    <Container maxW="container.xl">
      <Grid
        autoFlow={{ base: "row", md: "column" }}
        gap="10"
        templateColumns={{ md: "25% auto" }}
      >
        <GridItem>
          <Filter onSelectCategory={onSelectCategory} />
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
          {!isLoading && <Result Products={Products} />}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Category;
