import { Stack, Box } from "@chakra-ui/react"
import Form from "./Form"

const CartCheckout = () => {
    return (
        <Stack direction="row">
            <Box flexBasis="70%">
                <Form />
            </Box>
            <Box flexBasis="30%">

            </Box>
        </Stack>
    )
}

export default CartCheckout;