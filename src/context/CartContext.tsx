import React from "react";
import Product from "../types/Product";

const CartContext = React.createContext({
    products: [] as Product[],
    setProducts: (product: Product[]) => {},
    cartCount: 0,
    setCartCount: (index: number) => {},
});

export default CartContext;
