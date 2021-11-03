import React from "react";
import {
  chakra,
  Text,
  useColorModeValue,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
  HStack,
  Box,
  Flex,
  IconButton
} from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";


const PaginationChoc = () => {
  return (
    <Flex
      // bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <HStack>
        <PagButton>
          <Icon
            as={ChevronLeftIcon}
            // color={useColorModeValue("gray.700", "gray.200")}
            boxSize={4}
          />
        </PagButton>
        {[1,2,3,4,5].map(pageIdx => <PagButton>{pageIdx}</PagButton>)}
        <MButton right />
        <PagButton>50</PagButton>
        <PagButton>
          <Icon
            as={ChevronRightIcon}
            // color={useColorModeValue("gray.700", "gray.200")}
            boxSize={4}
          />
        </PagButton>
        <Menu>
          <MenuButton ml={1} as={Button} rightIcon={<ChevronDownIcon />}>
            10 / page
          </MenuButton>
          <MenuList>
            <MenuItem>20 / page</MenuItem>
            <MenuItem>30 / page</MenuItem>
            <MenuItem>40 / page</MenuItem>
            <MenuItem>50 / page</MenuItem>
          </MenuList>
        </Menu>
        <HStack>
          <Text wordBreak="unset">Go to:</Text>
          <Input w="50px" />
        </HStack>
      </HStack>
    </Flex>
  );
};

const PagButton = (props) => {
  const activeStyle = {
    // bg: useColorModeValue("brand.600", "brand.500"),
    // color: useColorModeValue("white", "gray.200"),
    bg: "yellow",
  };
  return (
    <chakra.button
      mx={1}
      px={4}
      py={2}
      rounded="md"
      // bg={useColorModeValue("white", "gray.800")}
      // color={useColorModeValue("gray.700", "gray.200")}
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      {...(props.active && activeStyle)}
      onClick={(e) => console.log(e)}
    >
      {props.children}
    </chakra.button>
  );
};

const MButton = (props) => {
  const DoubleArrow = props.left ? ArrowLeftIcon : ArrowRightIcon;
  const [hovered, setHovered] = React.useState(false);
  return (
    <chakra.a
      w={4}
      py={2}
      // color={useColorModeValue("gray.700", "gray.200")}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      cursor="pointer"
      textAlign="center"
    >
      {hovered ? (
        <Icon
          as={DoubleArrow}
          boxSize={3}
          cursor="pointer"
          // color={useColorModeValue("brand.800", "brand.700")}
          color="brand.800"
        />
      ) : (
        <IconButton
          icon={<FontAwesomeIcon icon={faEllipsisH} />}
          // color={useColorModeValue("gray.100", "gray.200")}
          color="black"
          boxSize={4}
          opacity={0.5}
          m="0"
          p="0"
        />
      )}
    </chakra.a>
  );
};

export default PaginationChoc;
