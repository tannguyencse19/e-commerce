import {
  Grid,
  GridItem,
  Image,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorMode,
  Stack
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link as ReactLink, NavLink } from "react-router-dom";
import BadgeButton from "../utils/BadgeButton";
import * as React from "react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import DividerHelper from "../utils/DividerHelper";

const NavMenu = [
  { name: "Home", path: "/" },
  { name: "Category", path: "/category" },
  { name: "Latest", path: "/latest" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack>
      <Grid
        autoFlow="column dense"
        justifyContent="space-between"
        // pos="fixed"
        w="100%"
        py="5"
        px="10"
        alignItems="center"
      >
        <GridItem>
          <ReactLink to="/">
            <Image src="data:image/webp;base64,UklGRuYBAABXRUJQVlA4TNkBAAAvZYAFEJdAkG1T6+Hd7gwCgRSnMMQCksRb/d8VEASQpDDD/mqHcIL+KLICQgw+yJJkJw6kNz2IhxCL8f1vK4Hd63dE/ycgp3P82Inn7zRV1fXzVZL8U+n2hys4v1stal0Cs+LUbET5slrUpmyGmdkN3E0lWK0WrT19klRuewbAQwsm9z0HRpIXGkmXlFvLn1J52N4wntZ80hgtnqp8wqI3dZzPBs/bQWEk5Yj1CVucgeESsJwCvRdnvV+AMLTRAq5dLDCS1EvScFxPthnoTgB0VVUBUN2CH8ENIBVnJ8V6z5kkiwDAcPbedDoTDo/UdfjL8WBkAFiuwYvje7kwLG3lF+jvQALZVITT1R4G+aykGADEApJlPcqBBAjuzYi6O5cHOF+9BGR/guAOcpA2VzScjVN8BoB0mWMCYCfqZnAH+cnlOt58NnvvXQBMNwE0N4LmigDI1VU8EadBLaWUBnz4jWyBSZINwNoNV/q1gNuxzDWV/nqESpJNkDr9jY9//n9wCIhjHVNdArAcSQNg7lDzs9uRhWHFe5huq/D1JOtRSXiGEcSaPgPjoEqQ9ADZDmrCG5gHlvEpkK4kSx3YT9MNsFpgF+JHSL2Q1HbBb/C2CD4zJ8Hn5pTxFAA=" />
          </ReactLink>
        </GridItem>

        <Grid
          autoFlow="column"
          display={{ base: "none", md: "grid" }}
          justifyItems="end"
          gap="5"
          alignItems="center"
        >
          {NavMenu &&
            NavMenu.map((item, idx) => (
              <GridItem
                _hover={{ color: "pink.400", cursor: "pointer" }}
                transitionDuration="0.4s"
                fontSize="large"
                fontWeight="semibold"
                key={`nav-link-${idx}`}
              >
                <NavLink
                  exact
                  to={item.path}
                  activeStyle={{ color: "var(--chakra-colors-pink-400)" }}
                >
                  {item.name}
                </NavLink>
              </GridItem>
            ))}

          <IconButton
            onClick={toggleColorMode}
            variant="ghost"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />

          <GridItem>
            <NavLink to="/cart-detail">
              <BadgeButton
                counter={2}
                buttonIcon={<FontAwesomeIcon icon={faShoppingCart} />}
              />
            </NavLink>
          </GridItem>
          <GridItem>
            <Button borderRadius="40px" colorScheme="blue">
              Sign In
            </Button>
          </GridItem>
        </Grid>

        <GridItem display={{ md: "none" }}>
          <IconButton
            ref={btnRef}
            onClick={onOpen}
            icon={<HamburgerIcon boxSize="24px" />}
            aria-label="hamburger"
            variant="outline"
            // colorScheme="messenger"
          />
        </GridItem>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Hi, Tan!</DrawerHeader>

            <DrawerBody p="0" mt="5">
              {NavMenu &&
                NavMenu.map((item, idx) => (
                  <NavLink
                    exact
                    to={item.path}
                    style={{ display: "block", padding: "20px 20px" }}
                    activeStyle={{
                      backgroundColor: "#7483e8",
                      color: "white",
                    }}
                    onClick={onClose}
                    key={`nav-link-${idx}`}
                  >
                    {item.name}
                  </NavLink>
                ))}
            </DrawerBody>

            <DrawerFooter>
              <ReactLink to="/cart-detail">
                <IconButton
                  variant="outline"
                  isRound
                  icon={<FontAwesomeIcon icon={faShoppingCart} />}
                  size="lg"
                />
              </ReactLink>
              {/* <BadgeButton counterProp={2} iconProp={faShoppingCart} /> */}
              <Button borderRadius="40px" colorScheme="blue">
                Sign In
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Grid>

      <DividerHelper />
    </Stack>
  );
};

export default Navbar;
