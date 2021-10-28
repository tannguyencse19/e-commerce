import { Box, IconButton } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Badge = ({ counterProp, iconProp, colorProp }) => {
  return (
    <IconButton
      // css={css`
      //   position: relative !important;
      // `}
      pos="relative !important"
      py={"2"}
      colorScheme={"gray"}
      aria-label={"Notifications"}
      size={"lg"}
      icon={
        <>
          {/* <FaBell color={'gray.750'} /> */}
          <FontAwesomeIcon icon={iconProp} color={colorProp} />
          <Box
            as="span"
            color="white"
            position="absolute"
            top="0px"
            right="0px"
            fontSize="0.8rem"
            bgColor="red"
            borderRadius="5"
            zIndex="9999"
            p="5px"
          >
            {counterProp}
          </Box>
        </>
      }
    />
  );
};

export default Badge;
