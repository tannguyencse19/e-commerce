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
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="5">
        <FormInput {...inputProp} registerName="abc" htmlFor="abc" label="abc"  />
        <Stack direction="row">
          <FormControl isInvalid={errors.firstName}>
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input
              id="first-name"
              placeholder="e.g: John"
              {...register("firstName", {
                required: "This is required",
                minLength: { value: 3, message: "Minimum length should be 3" },
              })}
            />
            <FormErrorMessage>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.lastName}>
            <FormLabel htmlFor="last-name">Last name</FormLabel>
            <Input
              id="last-name"
              placeholder="e.g: Doe"
              {...register("lastName", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>

        <Stack direction="row">
          <FormControl isInvalid={errors.phone}>
            <FormLabel htmlFor="phone">Phone number</FormLabel>
            <Input
              id="phone"
              placeholder="e.g: John"
              type="tel"
              {...register("phone", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="e.g: Doe"
              type="email"
              {...register("email", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>

        <FormControl isInvalid={errors.address}>
          <FormLabel htmlFor="address">
            Address (Town/City - District - Country)
          </FormLabel>
          <Input
            id="address"
            placeholder="e.g: 123 St. Mary, Torino, Italy"
            {...register("address", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.address && errors.address.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.zip}>
          <FormLabel htmlFor="zip">Zipcode</FormLabel>
          <Input
            id="zip"
            placeholder="e.g: 123 St. Mary, Torino, Italy"
            type="number"
            {...register("zip", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.zip && errors.zip.message}
          </FormErrorMessage>
        </FormControl>

        <Text>Shipping Details</Text>
        <Checkbox
          isChecked={OtherAddress}
          onChange={({ target: { checked } }) => setOtherAddress(checked)}
        >
          Ship to a different address?
        </Checkbox>
        {OtherAddress && (
          <FormControl isInvalid={errors.otherAddress}>
            <FormLabel htmlFor="other-address">
              Address (Town/City - District - Country)
            </FormLabel>
            <Input
              id="other-address"
              placeholder="e.g: 123 St. Mary, Torino, Italy"
              {...register("otherAddress", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
            <FormErrorMessage>
              {errors.otherAddress && errors.otherAddress.message}
            </FormErrorMessage>
          </FormControl>
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
