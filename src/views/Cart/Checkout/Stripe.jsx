import React from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Box, Button } from "@chakra-ui/react";

const STRIPE_API_TEST_KEY =
  "pk_test_51JwOnqCfzSDSrzbXmzkPjCFFaRbzqwsegiWaEj3QuiXavo4u2nsBQUqRcypKtRJ0DUlvL93MP5hQI6xCdw7fLOwK00OGQELNfB";

const Stripe = () => {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, []);

  const appearance = {
    theme: "night",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <form
        action="http://localhost:4000/create-checkout-session"
        method="post"
      >
        <Button type="submit" colorScheme="teal">
          Checkout
        </Button>
      </form>
      {clientSecret && (
        <Elements options={options} stripe={loadStripe(STRIPE_API_TEST_KEY)}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

const CheckoutForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const [isProcess, setIsProcess] = React.useState(false);
  const [isSucceed, setIsSucceed] = React.useState(false);

  const handleSubmit = async (e) => {
    setIsProcess(true);
    setIsSucceed(false);

    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box mx="72" my="20" p="10" boxShadow="md">
      <PaymentElement />
      <p>4242 4242 4242 4242 4/24 2424</p>
      <Button
        colorScheme="facebook"
        onClick={handleSubmit}
        isLoading={isProcess}
      >
        Pay
      </Button>
      {isSucceed && <h1>Your transaction has been proceed</h1>}
    </Box>
  );
};

export default Stripe;
