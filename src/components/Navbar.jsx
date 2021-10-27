import { Grid, GridItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Grid autoFlow="column dense" justifyContent="space-around">
      <GridItem>Logo</GridItem>
      <Grid autoFlow="column" minWidth="450px">
        <GridItem>Home</GridItem>
        <GridItem>Category</GridItem>
        <GridItem>Latest</GridItem>
        <GridItem>Blog</GridItem>
        <GridItem>Pages</GridItem>
        <GridItem>Contact</GridItem>
      </Grid>
      <Button>
        <FontAwesomeIcon icon={faCoffee} />
      </Button>
      <Button>Sign In</Button>
    </Grid>
  );
};

export default Navbar;
