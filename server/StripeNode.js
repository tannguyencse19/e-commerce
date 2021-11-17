const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")("sk_test_51JwOnqCfzSDSrzbXOT28zhY3MuC8opHPsdMyh71FUKjzOooculuGwGvgtJtYHiMd4AeJx380bYLwgerrFPNzSREi00mQ1Tg5zg")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
    let { amount, id } = req.body

    try {
        await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Spatula company",
            payment_method: id,
            confirm: true
        })
        res.json({
            message: "Payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Sever is listening on port 4000")
})