import { Divider } from "@chakra-ui/react";

export default function DividerHelper({ isHorizontal = true }) {
  return (
    <Divider
      borderBottomWidth="2px"
      orientation={isHorizontal ? "horizontal" : "vertical"}
    />
  );
}
