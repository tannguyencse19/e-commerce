import React from "react";
import useFetch from "../../utils/useFetch";

const ProductDetails = ({match: {params: {id}}}) => {
    const [Products, isLoading, isError] = useFetch(`${process.env.REACT_APP_GET_PRODUCTS}/${id}`)
    const [ProductsInSameCategory] = useFetch(`${process.env.REACT_APP_GET_PRODUCT_IN_CATEGORY}/${Products.category}`)
    console.log(ProductsInSameCategory);
    return (
        <h1>hello</h1>
    )
}

export default ProductDetails;