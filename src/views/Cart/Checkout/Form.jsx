import { useFormContext } from "react-hook-form";
import React from "react";
import { FormLabel, Textarea, Text, Stack, Checkbox } from "@chakra-ui/react";
import FormInput from "./FormInput";

const ruleName = {
  required: "This is required",
  pattern: {
    value: /[A-Za-z]/,
    message: "violate regex",
  },
};

const ruleNumber = {
  required: "This is required",
  // max: {
  //   value: 3,
  //   message: 'error message'
  // },
  validate: {
    positive: (v) => parseInt(v) > 0 || "should be greater than 0",
    // checkUrl: async () => (await fetch()) || "error message",
  },
  pattern: {
    value: /[0-9+]/,
    message: "violate regex",
  },
};

const Form = () => {
  const { register, control } = useFormContext();
  const [OtherAddress, setOtherAddress] = React.useState(false);

  // Phai lam vay vi moi form la mot obj khac nhau
  const inputProp = {
    control: control,
  };

  return (
    <Stack spacing="5">
      <Stack direction="row">
        <FormInput
          {...inputProp}
          registerName="firstName"
          label="First name"
          rule={ruleName}
        />
        <FormInput
          {...inputProp}
          registerName="lastName"
          label="Last name"
          rule={ruleName}
        />
      </Stack>

      <Stack direction="row">
        <FormInput
          {...inputProp}
          registerName="phone"
          type="tel"
          label="Phone number"
          rule={ruleNumber}
        />

        <FormInput
          {...inputProp}
          registerName="email"
          type="email"
          label="Email"
        />
      </Stack>

      <FormInput {...inputProp} registerName="address" label="Address" />

      <FormInput
        {...inputProp}
        registerName="zip"
        type="number"
        label="Zipcode"
        rule={ruleNumber}
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
    </Stack>
  );
};

export default Form;
