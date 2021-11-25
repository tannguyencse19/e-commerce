import { Stack, Box, useColorModeValue } from "@chakra-ui/react";
import Bill from "./Bill";
import Form from "./Form";
import { useForm, FormProvider } from "react-hook-form";
import {
  darkModeContainerColor,
  lightModeContainerColor,
  sleepAwait,
} from "../../../utils/Helper";

const CartCheckout = () => {
  const methods = useForm();

  const onSubmit = async (data) => {
    // fetch("http://localhost:4000/create-checkout-session", {
    //   method: "POST",
    //   // headers: { "Content-Type": "application/json" },
    //   // body: JSON.stringify(data),
    // });
    await sleepAwait(2000);
    console.log(data);
    // window.location = "http://localhost:4000/create-checkout-session"; // xai tam thoi
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack direction="row" py="5" px="10" spacing="5">
          <Box
            flexBasis="70%"
            p="10"
            background={useColorModeValue(
              lightModeContainerColor,
              darkModeContainerColor
            )}
          >
            <Form />
          </Box>
          <Box
            flexBasis="30%"
            p="10"
            background={useColorModeValue(
              lightModeContainerColor,
              darkModeContainerColor
            )}
          >
            <Bill />
          </Box>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default CartCheckout;
