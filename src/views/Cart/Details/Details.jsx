import DataTable from "./DataTable"
import { Stack } from "@chakra-ui/react"
import ProductRelated from "../../Product/Related";

const CartDetails = () => {
    return (
        <Stack bg="gray.100" px="10" py="5" spacing="10">
            <DataTable />
            <ProductRelated />
        </Stack>
    )
}

export default CartDetails;