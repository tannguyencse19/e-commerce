import { useForm } from "react-hook-form";
import React from "react";
import {
  FormLabel,
  Textarea,
  Text,
  Button,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import FormInput from "./FormInput";
import { useHistory } from "react-router-dom"

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [OtherAddress, setOtherAddress] = React.useState(false);
  const history = useHistory();

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

    history.push('/card-payment')
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
            label="First name"
          />
          <FormInput {...inputProp} registerName="lastName" label="Last name" />
        </Stack>

        <Stack direction="row">
          <FormInput
            {...inputProp}
            registerName="phone"
            type="tel"
            label="Phone number"
          />

          <FormInput
            {...inputProp}
            registerName="email"
            type="email"
            label="Phone number"
          />
        </Stack>

        <FormInput {...inputProp} registerName="address" label="Address" />

        <FormInput
          {...inputProp}
          registerName="zip"
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
            label="Other Address"
          />
        )}

        <FormLabel>
          Order notes
          <Textarea
            placeholder="e.g: Call me when you arrive"
            {...register("notes")}
          />
        </FormLabel>

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
