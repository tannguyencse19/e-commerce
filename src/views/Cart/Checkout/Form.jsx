import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Text,
  Button,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import FormInput from "./FormInput";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [OtherAddress, setOtherAddress] = React.useState(false);

  //   console.log(errors);

  async function onSubmit(values) {
    try {
      const promiseResponse = await new Promise((res, rej) => {
        setTimeout(() => {
          res("sucess");
          //   rej("sample error");
        }, 1000);
      });
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  }

  const inputProp = {
    registerProp: register,
    errorProp: errors,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="5">
        <Stack direction="row">
          <FormInput
            {...inputProp}
            registerName="firstName"
            htmlFor="first-name"
            label="First name"
          />
          <FormInput
            {...inputProp}
            registerName="lastName"
            htmlFor="last-name"
            label="Last name"
          />
        </Stack>

        <Stack direction="row">
          <FormInput
            {...inputProp}
            registerName="phone"
            htmlFor="phone"
            type="tel"
            label="Phone number"
          />

          <FormInput
            {...inputProp}
            registerName="email"
            htmlFor="email"
            type="email"
            label="Phone number"
          />
        </Stack>

        <FormInput
          {...inputProp}
          registerName="address"
          htmlFor="address"
          label="Address"
        />

        <FormInput
          {...inputProp}
          registerName="zip"
          htmlFor="zip"
          type="number"
          label="Zipcode"
        />

        <Text>Shipping Details</Text>
        <Checkbox
          isChecked={OtherAddress}
          onChange={({ target: { checked } }) => setOtherAddress(checked)}
        >
          Ship to a different address?
        </Checkbox>
        {OtherAddress && (
          <FormInput
            {...inputProp}
            registerName="otherAddress"
            htmlFor="other-address"
            label="Other Address"
          />
        )}

        <FormLabel htmlFor="notes">Order notes</FormLabel>
        <Textarea
          id="notes"
          placeholder="e.g: Call me when you arrive"
          {...register("notes")}
        />

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
