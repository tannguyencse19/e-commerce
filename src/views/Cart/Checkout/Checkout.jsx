import { Stack, Box } from "@chakra-ui/react";
import Bill from "./Bill";
import Form from "./Form";
import { useForm, FormProvider } from "react-hook-form";

const CartCheckout = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // fetch("http://localhost:4000/create-checkout-session", {
    //   method: "POST",
    //   // headers: { "Content-Type": "application/json" },
    //   // body: JSON.stringify(data),
    // });
    window.location = "http://localhost:4000/create-checkout-session"; // xai tam thoi
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack direction="row" py="5" px="10" bg="gray.100" spacing="5">
          <Box flexBasis="70%" p="10" bg="white">
            <Form />
          </Box>
          <Box flexBasis="30%" p="10" bg="white">
            <Bill />
          </Box>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default CartCheckout;
