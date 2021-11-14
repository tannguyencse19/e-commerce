import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";

const FormInput = ({ register, registerName, errors, htmlFor, label }) => {
  console.log(errors);
  return (
    <FormControl isInvalid={errors[registerName]}>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <Input
        id={htmlFor}
        placeholder="e.g: John"
        type="tel"
        {...register(registerName, {
          required: "This is required",
          minLength: {
            value: 4,
            message: "Minimum length should be 4",
          },
        })}
      />
      <FormErrorMessage>
        {errors[registerName] && errors[registerName].message}
      </FormErrorMessage>
    </FormControl>
  );
};

FormInput.defaultProps = {
  register: null,
  errors: null,
  registerName: "undefined",
  htmlFor: "undefined",
  label: "undefined",
};

export default React.memo(FormInput);
