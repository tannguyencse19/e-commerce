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
  label,
  type,
}) => {
  return (
    <FormControl isInvalid={errorProp[registerName]}>
      <FormLabel>
        {label}
        <Input
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
      </FormLabel>

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
  label: "undefined",
  type: "text",
};

export default FormInput;
