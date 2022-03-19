import React from "react";
import Product from "../types/Product";

const CartContext = React.createContext({
    products: [] as Product[],
    addNewProductToCart: (product: Product) => {},
    removeProductFromCart: (product: Product) => {},
    cartCount: 0,
});

export default CartContext;
