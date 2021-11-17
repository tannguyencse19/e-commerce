import { Stack, Box } from "@chakra-ui/react";
import Bill from "./Bill";
import Form from "./Form";

const CartCheckout = () => {
  return (
    <Stack direction="row" py="5" px="10" bg="gray.100" spacing="5">
      <Box flexBasis="70%" p="10" bg="white">
        <Form />
      </Box>
      <Box flexBasis="30%" p="10" bg="white">
        <Bill />
      </Box>
    </Stack>
  );
};

export default CartCheckout;
