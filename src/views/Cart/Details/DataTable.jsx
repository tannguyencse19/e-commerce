import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Image,
  Stack,
  Divider,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import useFetch from "../../../utils/useFetch";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function isObjectEmpty(obj) {
  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

const DataTable = () => {
  const [Cart, CartIsLoading, CartIsErr] = useFetch(
    "https://fakestoreapi.com/carts/5"
  );
  const [AllProducts, AllProductsIsLoading, AllProductsIsErr] = useFetch(
    process.env.REACT_APP_GET_PRODUCTS
  );
  const [CartProducts, setCartProducts] = React.useState([]);
  const [Subtotal, setSubtotal] = React.useState(0);

  React.useEffect(() => {
    if (!isObjectEmpty(Cart) && AllProducts.length > 0) {
      if (Cart.products.length > 0) {
        const result = AllProducts.filter((item) =>
          Cart.products.some((el) => item.id === el.productId)
        );
        result.forEach((item, idx) => {
          item.quantity = Cart.products[idx].quantity;
          item.total = item.quantity * item.price;
        });
        setCartProducts(result);
      }
    }
  }, [Cart, AllProducts]);

  const handleStepper = (val, idx) => {
    setCartProducts((prevState) => {
      prevState[idx].quantity = parseInt(val);
      prevState[idx].total = prevState[idx].quantity * prevState[idx].price;
      return [...prevState];
    });
  };

  React.useEffect(() => {
    if (CartProducts.length > 0) {
      setSubtotal(
        CartProducts.reduce(
          (prevItem, nextItem) => prevItem.total + nextItem.total
        )
      );
    }
  }, [CartProducts]);

  return (
    <Stack direction="row"  spacing="10">
      <Table variant="striped" flexBasis="70%" bg="white">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Total</Th>
          </Tr>
        </Thead>

        <Tbody>
          {CartProducts.length > 0 &&
            CartProducts.map((item, idx) => (
              <Tr key={`product-${idx}`}>
                <Td>
                  <Stack>
                    <Image src={item.image} boxSize="64px" />
                    <Text>{item.title}</Text>
                  </Stack>
                </Td>
                <Td>{item.price}</Td>
                <Td isNumeric>
                  <NumberInput
                    step={1}
                    defaultValue={item.quantity}
                    min={0}
                    maxW="20"
                    onChange={(val) => handleStepper(val, idx)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td isNumeric>{item.total}</Td>
              </Tr>
            ))}
        </Tbody>

        <Tfoot>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th>Subtotal</Th>
            <Th isNumeric>{Subtotal}</Th>
          </Tr>
        </Tfoot>
      </Table>

      <Box flexBasis="30%" bg="white">
        <Text>Shipping Address</Text>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <Text>Hồ Chí Minh, Quận Thủ Đức, Phường Linh Trung</Text>
        <Divider />
        <Text fontWeight="semibold">Payment Information</Text>
        <Text>Total: {Subtotal}</Text>
        <Text>Shipping Fee: 10.00$</Text>
        <Text>Sales: 5.00$</Text>
        <Input placeholder="Coupon (accept only one)" />
        <InputRightElement>
          <Button>Apply</Button>
        </InputRightElement>
      </Box>
    </Stack>
  );
};

export default DataTable;
