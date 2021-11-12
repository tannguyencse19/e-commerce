import { Box, IconButton, Text, Circle } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BadgeButton = ({ counter, buttonIcon, badgeSize, badgeBgColor, badgeTextColor }) => {
  return (
    <Box pos="relative">
      <IconButton
        variant="outline"
        isRound
        icon={buttonIcon}
        size="lg"
      />
      <Circle
        size={badgeSize}
        bg={badgeBgColor}
        color={badgeTextColor}
        fontWeight="semibold"
        pos="absolute"
        top="-15%"
        right="-15%"
      >
        {counter}
      </Circle>
    </Box>
  );
};

BadgeButton.defaultProps = {
  counter: 2,
  buttonIcon: null,
  badgeSize: 6,
  badgeBgColor: "orange",
  badgeTextColor: "white"
}

export default BadgeButton;
