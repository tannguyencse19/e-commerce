import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";

const FormInput = ({
  registerName,
  label,
  type,
  rule,
  control
}) => {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { error },
  } = useController({
    name: registerName,
    control: control,
    rules: rule,
    defaultValue: "",
  });

  return (
    <FormControl isInvalid={error}>
      <FormLabel>
        {label}
        <Input
          placeholder="e.g: John"
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          ref={ref}
        />
      </FormLabel>

      <FormErrorMessage>
        {error && error.message}
      </FormErrorMessage>
    </FormControl>
  );
};

FormInput.defaultProps = {
  registerName: undefined,
  label: undefined,
  type: "text",
  rule: {
    required: "This is required",
  },
  control: null,
};

export default FormInput;
