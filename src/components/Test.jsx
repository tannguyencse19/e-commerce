import { Grid, GridItem, Box } from "@chakra-ui/react";


const Test = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
    </Grid>
  );
};

export default Test;