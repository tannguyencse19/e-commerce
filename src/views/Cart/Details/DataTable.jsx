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
import { Link as RouterLink } from "react-router-dom";

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
  const [Total, setTotal] = React.useState(0);
  const [Sales, setSales] = React.useState(0);
  const [Coupon, setCoupon] = React.useState({
    id: "123",
    name: "25% off",
    percent_off: 25,
    valid: true, // --> get xong roi kiem tra roi moi cho render hay trong luc render kiem tra
  });

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
      const sum = CartProducts.reduce(
        (prevItem, nextItem) => prevItem.total + nextItem.total
      );
      setSubtotal(sum);
      setTotal(sum);
    }
  }, [CartProducts]);

  const couponInput = React.useRef("");
  const handleApplyCoupon = () => {
    if (couponInput.current.value === Coupon.id) {
      setSales((Total * Coupon.percent_off) / 100);
      setCoupon((prevState) => {
        return { ...prevState, valid: false };
      });
    }
  };

  // Chua sale off tren toan bo gia tri san pham
  React.useEffect(() => {
    setTotal((prevState) => prevState - Sales);
  }, [Sales]);

  return (
    <Stack direction="row" spacing="5">
      <Table flexBasis="70%" bg="white">
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
                  <Stack direction="row" align="center" spacing="5">
                    <Image src={item.image} boxSize="108px" />
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
      </Table>

      <Box flexBasis="30%" bg="white" p="5">
        <Stack spacing="3">
          <Text fontWeight="semibold" size="lg">
            Payment Information
          </Text>
          <Divider />
          {!CartIsLoading && (
            <Table variant="unstyled" size="md">
              <Tbody>
                <Tr>
                  <Td>Subtotal</Td>
                  <Td isNumeric fontWeight="semibold">
                    {Subtotal}$
                  </Td>
                </Tr>
              </Tbody>
              <Tbody>
                <Tr>
                  <Td>Shipping Fee</Td>
                  <Td isNumeric fontWeight="semibold">
                    10.00$
                  </Td>
                </Tr>
              </Tbody>
              <Tbody>
                <Tr>
                  <Td>Sales</Td>
                  <Td isNumeric fontWeight="semibold">
                    {Sales.toFixed(2)}$
                  </Td>
                </Tr>
              </Tbody>
              <Tbody>
                <Tr>
                  <Td>Total</Td>
                  <Td
                    isNumeric
                    fontWeight="semibold"
                    color="orange"
                    fontSize="xl"
                  >
                    {(Total + 10).toFixed(2)}$
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          )}
          <InputGroup>
            <Input placeholder="Coupon (accept only one)" ref={couponInput} />
            <InputRightElement width="16">
              <Button colorScheme="teal" onClick={handleApplyCoupon}>
                Apply
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text>Coupon: 123</Text>
          <Button colorScheme="orange" textTransform="uppercase">
            <RouterLink to="/checkout">Checkout</RouterLink>
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default DataTable;
