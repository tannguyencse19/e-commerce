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

const slides = [
  {
    img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];
const slidesCount = slides.length;
const arrowStyles = {
  color: "white",
  boxSize: "48px",
  userSelect: "none",
};
const iconButtonStyle = {
  // https://stackoverflow.com/questions/11495200/how-do-negative-margins-in-css-work-and-why-is-margin-top-5-margin-bottom5
  pos: "absolute",
  top: "50%",
  height: "2px",
  marginTop: "-1px",
  variant: "ghost",
  _hover: {
    bg: "gray.900",
  },
  ariaLabel: "chevron",
};

const Carousel_Choc = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`, // TRICK!
  };

  return (
    <Flex
      w="full"
      //   bg={useColorModeValue("gray.200", "gray.600")}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        //   overflow="hidden"
        pos="relative"
      >
        <Flex h="400px" w="full" {...carouselStyle} autoflow="1">
          {slides.map((slide, counter) => (
            // flex: none nghia la width, height an theo component, ko an theo flex
            <Box key={`slide-${counter}`} boxSize="full" flex="none">
              {/* <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {counter + 1} / {slidesCount}
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
    </Flex>
  );
};
export default Carousel_Choc;
