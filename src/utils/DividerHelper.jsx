import { Divider } from "@chakra-ui/react";

export default function DividerHelper({ isHorizontal = true }) {
  return (
    <Divider
      borderLeftWidth={isHorizontal ? 0 : "2px"}
      borderBottomWidth={isHorizontal ? "2px" : 0}
      orientation={isHorizontal ? "horizontal" : "vertical"}
    />
  );
}
