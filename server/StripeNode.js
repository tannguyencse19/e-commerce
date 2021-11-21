const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")("sk_test_51JwOnqCfzSDSrzbXOT28zhY3MuC8opHPsdMyh71FUKjzOooculuGwGvgtJtYHiMd4AeJx380bYLwgerrFPNzSREi00mQ1Tg5zg")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/create-payment-intent", cors(), async (req, res) => {
  // let { amount, id } = req.body

  try {
    const { client_secret } = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "USD",
      // payment_method: id,
      // confirm: true,
      automatic_payment_methods: {
        enabled: true,
      },
    })
    res.json({
      message: "Payment successful",
      success: true,
      clientSecret: client_secret,
    })
  } catch (error) {
    console.log("Error", error)
    res.json({
      message: "Payment failed",
      success: false
    })
  }
})

app.post('/create-checkout-session', async (req, res) => {
  const { url } = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1Jx8hICfzSDSrzbXTlsxXx2u",
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/`,
    cancel_url: `http://localhost:3000/card-payment`,
  });

  res.redirect(303, url);
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Sever is listening on port 4000")
})