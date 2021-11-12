import { Table, Thead, Tbody, Tr, Th, Td, Image } from "@chakra-ui/react";
import useFetch from "../../../utils/useFetch";
import React from "react";

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

  React.useEffect(() => {
    if (!isObjectEmpty(Cart) && AllProducts.length > 0) {
      const result = AllProducts.filter((item) =>
        Cart.products.some((el) => item.id === el.productId)
      );
      setCartProducts(result);
    }
  }, [Cart, AllProducts]);

  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Thead>

      <Tbody>
        {CartProducts.length > 0 &&
          CartProducts.map((item, idx) => (
            <Tr>
              <Td>
                <Image src={item.image} />
              </Td>
              <Td>{item.title}</Td>
              <Td>{item.price}</Td>
              <Td>{Cart.products[idx].quantity}</Td>
              <Td>Total</Td>
            </Tr>
          ))}
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default DataTable;
