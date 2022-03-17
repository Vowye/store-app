import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import Products from "../types/Products";

const ContextWrapper = () => {
    const [products, setProducts] = useState<Products[]>([] as Products[]);
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        setCartCount(products.length);
    }, [products]);

    return (
        <CartContext.Provider
            value={{ products, setProducts, cartCount, setCartCount }}
        ></CartContext.Provider>
    );
};
export default ContextWrapper;
