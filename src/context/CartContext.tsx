import React from "react";
import Products from "../types/Products";

const CartContext = React.createContext({
    products: [] as Products[],
    setProducts: (product: Products[]) => {},
    cartCount: 0,
    setCartCount: (index: number) => {},
});

export default CartContext;
