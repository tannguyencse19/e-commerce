import React from "react";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
  
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Box, Button } from "@chakra-ui/react";

const STRIPE_API_TEST_KEY =
  "pk_test_51JwOnqCfzSDSrzbXmzkPjCFFaRbzqwsegiWaEj3QuiXavo4u2nsBQUqRcypKtRJ0DUlvL93MP5hQI6xCdw7fLOwK00OGQELNfB";

const Stripe = () => {
  return (
    <Elements stripe={loadStripe(STRIPE_API_TEST_KEY)}>
      <Component />
    </Elements>
  );
};

const Component = () => {
  const elements = useElements();
  const stripe = useStripe();
  const [isProcess, setIsProcess] = React.useState(false);
  const [isSucceed, setIsSucceed] = React.useState(false);

  const handleSubmit = async (e) => {
    setIsProcess(true);
    setIsSucceed(false);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
      console.log(paymentMethod);

      const { id } = paymentMethod;
      const response = await fetch("http://localhost:4000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 1000,
          id,
        }),
      }).then((res) => res.json());

      console.log(response);
      if(response.success) {
        setIsProcess(false);
        setIsSucceed(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box mx="72" my="20" p="10" boxShadow="md">
      <CardElement />
      <p>4242 4242 4242 4242 4/24 2424</p>
      <Button colorScheme="facebook" onClick={handleSubmit} isLoading={isProcess} >
        Pay
      </Button>
      {isSucceed && <h1>Your transaction has been proceed</h1>}
    </Box>
  );
};

export default Stripe;
