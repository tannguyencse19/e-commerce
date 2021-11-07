import { SearchIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Input,
  Select,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const inputStyle = {
  borderRadius: "20px",
  variant: "filled",
};

// const Category = [
//   { value: "shirt", title: "Shirt" },
//   { value: "pants", title: "Pants" },
//   { value: "accessories", title: "Accessories" },
//   { value: "glass", title: "Glass" },
// ];

const CategoryValue = ["shirt", "pants", "accessories", "glass"];

const Collection = [
  { value: "halloween", title: "2021 Halloween Edition" },
  { value: "trending", title: "Top Trending" },
  { value: "newest", title: "Newest" },
];

const Filter = ({ onSelectCategory, onSelectCollection, onSearch }) => {
  const [Category, setCategory] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        const result = json.map((category, idx) => {
          return {
            // value: CategoryValue[idx],
            value: category,
            title: category,
          };
        });
        setCategory(result);
      });
  }, []);

  return (
    <Grid gap="5">
      <GridItem>
        <InputGroup>
          <Input placeholder="black hoodie 2021 edition" {...inputStyle} onChange={onSearch} />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
      </GridItem>
      <GridItem>
        <Select placeholder="Category" {...inputStyle} onChange={onSelectCategory}>
          {Category &&
            Category.map((option) => (
              <option value={option.value} key={option.value}>
                {option.title}
              </option>
            ))}
        </Select>
      </GridItem>
      <GridItem>
        <Select placeholder="Collection" {...inputStyle}>
          {Collection &&
            Collection.map((option) => (
              <option value={option.value} key={option.value}>
                {option.title}
              </option>
            ))}
        </Select>
      </GridItem>
    </Grid>
  );
};

export default Filter;
