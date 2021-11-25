import { Image, Grid, VStack, Text } from "@chakra-ui/react";
import Rating from "../../utils/Rating";
import { Link as RouterLink } from "react-router-dom";
import ProductSummary from "../Product/Summary";

const Views = ({ Products }) => {
  return (
    <Grid templateColumns={{ md: "repeat(3, 30%)" }} gap="10">
      {!Products && (
        <h1>Server is under maintainance. Please comeback in a mintue ^^</h1>
      )}
      {Products &&
        Products.map((item) => (
          <RouterLink to={`/products/${item.id}`} key={`item-${item.id}`}>
            <ProductSummary {...item} />
          </RouterLink>
        ))}
    </Grid>
  );
};

export default Views;
