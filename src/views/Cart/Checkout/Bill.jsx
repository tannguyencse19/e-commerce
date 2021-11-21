import {
  Text,
  Stack,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

const BillInfo = {
  products: [
    {
      title: "Fresh Blackberry",
      quantity: 2,
      total: 720,
    },
    {
      title: "Tomatoes",
      quantity: 2,
      total: 440,
    },
    {
      title: "Italy Brocoli",
      quantity: 5,
      total: 500,
    },
  ],
  subtotal: 1660,
  shipping_fee: 50,
  total: 1710,
};

const CheckoutBill = () => {
  return (
    <Stack>
      <Text>Your Order</Text>
      <Divider />
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Total</Th>
          </Tr>
        </Thead>

        <Tbody>
          {BillInfo.products.length > 0 &&
            BillInfo.products.map((item, idx) => (
              <Tr key={`item-${idx}`}>
                <Td>{item.title}</Td>
                <Td isNumeric>{item.quantity}</Td>
                <Td isNumeric>{item.total}.00$</Td>
              </Tr>
            ))}
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>Subtotal</Th>
            <Th></Th>
            <Th>{BillInfo.subtotal}</Th>
          </Tr>
          <Tr>
            <Th>Shipping Fee</Th>
            <Th></Th>
            <Th>{BillInfo.shipping_fee}</Th>
          </Tr>
          <Tr>
            <Th>Total</Th>
            <Th></Th>
            <Th>{BillInfo.total}</Th>
          </Tr>
        </Tfoot>
      </Table>

      <Button type="submit" colorScheme="orange">
        Checkout
      </Button>
    </Stack>
  );
};

export default CheckoutBill;
