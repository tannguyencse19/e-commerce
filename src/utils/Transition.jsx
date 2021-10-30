import { Button, SlideFade, Box, useDisclosure } from "@chakra-ui/react";

const Transition = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <SlideFade in={isOpen} offsetY="20px" style={{transitionDuration: "0.2s", transitionDelay:"0.2s"}}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolore
          nostrum, eos minima, eligendi distinctio placeat dolores iste
          quibusdam ducimus reiciendis nisi? Recusandae perferendis aperiam
          distinctio sequi, sit eius. Ab, odit inventore veritatis esse, totam
          iusto voluptate voluptatibus saepe aliquam commodi temporibus nesciunt
          magnam sunt minima! Iure explicabo tempora dolore voluptas sint
          debitis tempore eos esse culpa. Quisquam, eaque omnis id debitis
          adipisci in aliquam harum pariatur laudantium nulla dignissimos ab
          mollitia excepturi quo consequatur, atque vero cum fugiat ullam
          aspernatur. Quisquam deleniti alias cum. Ea numquam fugit iure,
          dolorum rem quam illo! Dolore harum et ea officiis corrupti suscipit.
        </Box>
      </SlideFade>
    </>
  );
};

export default Transition;
