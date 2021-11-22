import DataTable from "./DataTable";
import { Stack, Box } from "@chakra-ui/react";
import ProductRelated from "../../Product/Related";

const CartDetails = () => {
  return (
    <Stack bg="gray.100" px="10" py="5" spacing="10">
      <Box width="100%">
        <DataTable />
      </Box>
      <Box width="100%" bg="white">
        <ProductRelated />
      </Box>
    </Stack>
  );
};

export default CartDetails;
