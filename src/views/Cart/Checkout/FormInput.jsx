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
  rule,
}) => {
  return (
    <FormControl isInvalid={errorProp[registerName]}>
      <FormLabel>
        {label}
        <Input
          placeholder="e.g: John"
          type={type}
          {...registerProp(registerName, { ...rule })}
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
  rule: {
    required: "This is required",
  },
};

export default FormInput;
