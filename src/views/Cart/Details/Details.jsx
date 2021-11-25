import DataTable from "./DataTable";
import { Stack, Box, useColorModeValue } from "@chakra-ui/react";
import ProductRelated from "../../Product/Related";
import {
  darkModeContainerColor,
  lightModeContainerColor,
} from "../../../utils/Helper";
import DividerHelper from "../../../utils/DividerHelper";

const CartDetails = () => {
  return (
    <Stack px="10" py="5" spacing="10" >
      <Box
        width="100%"
        background={useColorModeValue(
          lightModeContainerColor,
          darkModeContainerColor
        )}
      >
        <DataTable />
      </Box>

      <DividerHelper />

      <Box
        width="100%"
        background={useColorModeValue(
          lightModeContainerColor,
          darkModeContainerColor
        )}
      >
        <ProductRelated />
      </Box>
    </Stack>
  );
};

export default CartDetails;
