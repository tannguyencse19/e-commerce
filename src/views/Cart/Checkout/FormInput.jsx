import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";

const FormInput = ({
  registerProp,
  errorProp,
  registerName,
  htmlFor,
  label,
  type,
}) => {
  return (
    <FormControl isInvalid={errorProp[registerName]}>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <Input
        id={htmlFor}
        placeholder="e.g: John"
        type={type}
        {...registerProp(registerName, {
          required: "This is required",
          minLength: {
            value: 4,
            message: "Minimum length should be 4",
          },
        })}
      />
      <FormErrorMessage>
        {errorProp[registerName] && errorProp[registerName].message}
      </FormErrorMessage>
    </FormControl>
  );
};

FormInput.defaultProps = {
  registerProp: null,
  errorProp: null,
  registerName: "undefined",
  htmlFor: "undefined",
  label: "undefined",
  type: "text",
};

export default FormInput;
