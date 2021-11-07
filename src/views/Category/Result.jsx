import Views from "./Views";
import React from "react";
import Pagination from "../../utils/MyPagination";
import { VStack } from "@chakra-ui/react";

const Result = ({ Products }) => {
  const [sliceProducts, setSliceProducts] = React.useState([]);

  return (
    <VStack spacing={10}>
      <Views Products={sliceProducts} />
      <Pagination items={Products} setCurrentItems={setSliceProducts} />
    </VStack>
  );
};

export default Result;
