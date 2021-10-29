import {
  Grid,
  GridItem,
  Image,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link as ReactLink } from "react-router-dom";
// import Badge from '../utils/Badge';

const Navbar = () => {
  return (
    <Grid
      autoFlow="column dense"
      justifyContent="space-between"
      alignItems="center"
      // pos="fixed"
      w="100%"
      py="5"
      px="10"
      backgroundColor="#fff"
    >
      <GridItem>
        <ReactLink to="/">
        <Image src="data:image/webp;base64,UklGRuYBAABXRUJQVlA4TNkBAAAvZYAFEJdAkG1T6+Hd7gwCgRSnMMQCksRb/d8VEASQpDDD/mqHcIL+KLICQgw+yJJkJw6kNz2IhxCL8f1vK4Hd63dE/ycgp3P82Inn7zRV1fXzVZL8U+n2hys4v1stal0Cs+LUbET5slrUpmyGmdkN3E0lWK0WrT19klRuewbAQwsm9z0HRpIXGkmXlFvLn1J52N4wntZ80hgtnqp8wqI3dZzPBs/bQWEk5Yj1CVucgeESsJwCvRdnvV+AMLTRAq5dLDCS1EvScFxPthnoTgB0VVUBUN2CH8ENIBVnJ8V6z5kkiwDAcPbedDoTDo/UdfjL8WBkAFiuwYvje7kwLG3lF+jvQALZVITT1R4G+aykGADEApJlPcqBBAjuzYi6O5cHOF+9BGR/guAOcpA2VzScjVN8BoB0mWMCYCfqZnAH+cnlOt58NnvvXQBMNwE0N4LmigDI1VU8EadBLaWUBnz4jWyBSZINwNoNV/q1gNuxzDWV/nqESpJNkDr9jY9//n9wCIhjHVNdArAcSQNg7lDzs9uRhWHFe5huq/D1JOtRSXiGEcSaPgPjoEqQ9ADZDmrCG5gHlvEpkK4kSx3YT9MNsFpgF+JHSL2Q1HbBb/C2CD4zJ8Hn5pTxFAA=" />
        </ReactLink>
      </GridItem>
      <Grid autoFlow="column" minW="450px" justifyItems="end">
        <GridItem _hover={{ color: "pink.400", cursor: "pointer" }}>
          <ReactLink to="/">Home</ReactLink>
        </GridItem>
        <GridItem _hover={{ color: "pink.400", cursor: "pointer" }}>
          <ReactLink to="/category">Category</ReactLink>
        </GridItem>
        <GridItem>Latest</GridItem>
        <GridItem>Blog</GridItem>
        <GridItem>Pages</GridItem>
        <GridItem>Contact</GridItem>
      </Grid>
      <Grid autoFlow="column" gap={5} alignItems="center">
        <IconButton
          variant="outline"
          isRound
          icon={<FontAwesomeIcon icon={faShoppingCart} />}
          size="lg"
        />
        {/* <Badge counterProp={2} iconProp={faShoppingCart} /> */}
        <Button borderRadius="40px" colorScheme="blue">
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
