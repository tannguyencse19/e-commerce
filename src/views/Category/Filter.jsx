import { SearchIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Input,
  Select,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const inputStyle = {
  borderRadius: "20px",
  variant: "filled",
};

const Filter = () => {
  return (
    <Grid gap="5">
      <GridItem>
        <InputGroup>
          <Input placeholder="black hoodie 2021 edition" {...inputStyle} />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
      </GridItem>
      <GridItem>
        <Select placeholder="Category" {...inputStyle}>
          <option value="Shirt">Shirt</option>
          <option value="Pants">Pants</option>
          <option value="Accessories">Accessories</option>
          <option value="Glass">Glass</option>
        </Select>
      </GridItem>
      <GridItem>
        <Select placeholder="Collection" {...inputStyle}>
          <option value="halloween">2021 Halloween Edition</option>
          <option value="trending">Top Trending</option>
          <option value="newest">Newest</option>
          <option value="all">All</option>
        </Select>
      </GridItem>
    </Grid>
  );
};

export default Filter;
