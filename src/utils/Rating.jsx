import React, { useState } from "react";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Rating = React.forwardRef(
  ({ size, icon, scale, fillColor, strokeColor, ratingProp }, ref) => {
    // const [rating, setRating] = useState(0);
    const buttons = [];

    // const onClick = (idx) => {
    //   if (!isNaN(idx)) {
    //     // allow user to click first icon and set rating to zero if rating is already 1
    //     if (rating === 1 && idx === 1) {
    //       setRating(0);
    //     } else {
    //       setRating(idx);
    //     }
    //   }
    // };

    const RatingButton = ({ idx, fill }) => {
      return (
        <Box
          as="button"
          aria-label={`Rate ${idx}`}
          height={`${size}px`}
          width={`${size}px`}
          // onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <StarIcon
            boxSize={`${size}px`}
            color={fillColor}
            stroke={strokeColor}
            fillOpacity={fill ? "100%" : "0"}
          />
        </Box>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= ratingProp} />);
    }

    return (
      <Stack isInline justify="center">
        <input name="rating" type="hidden" value={ratingProp} ref={ref} />
        {buttons}
      </Stack>
    );
  }
);

export default Rating;
