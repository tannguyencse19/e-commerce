import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const iconButtonStyle = {
  // https://stackoverflow.com/questions/11495200/how-do-negative-margins-in-css-work-and-why-is-margin-top-5-margin-bottom5
  pos: "absolute",
  top: "50%",
  height: "48px",
  marginTop: "-24px",
  variant: "ghost",
  _hover: {
    bg: "gray.900",
  },
};
const arrowStyles = {
  color: "white",
  boxSize: "48px",
  userSelect: "none",
};

const CarouselChoc = ({ Slides, slideLength, w, h, overflow, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slideLength - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slideLength - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`, // TRICK!
  };

  return (
    <Flex
      w={w}
      h={h}
      overflow={overflow}
      pos="relative"
      //   bg={useColorModeValue("gray.200", "gray.600")}
    >
      <Flex h="400px" w="full" {...carouselStyle}>
        {Slides &&
          Slides.length > 0 &&
          Slides.map((slide, counter) => (
            // flex: none nghia la width, height an theo component, ko an theo flex
            <Box key={`slide-${counter}`} boxSize="full" flex="none">
              {/* <Text
                    color="white"
                    fontSize="xs"
                    p="8px 12px"
                    pos="absolute"
                    top="0"
                  >
                    {counter + 1} / {slides.length}
                  </Text> */}
              <Image src={slide.img} boxSize="full" backgroundSize="cover" />
            </Box>
          ))}
      </Flex>
      <IconButton
        icon={<ChevronLeftIcon {...arrowStyles} />}
        {...iconButtonStyle}
        left="0"
        onClick={prevSlide}
      />
      <IconButton
        icon={<ChevronRightIcon {...arrowStyles} />}
        {...iconButtonStyle}
        right="0"
        onClick={nextSlide}
      />
    </Flex>
  );
};
export default CarouselChoc;
