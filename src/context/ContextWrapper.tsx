import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import Products from "../types/Products";

interface ContextWrapperProps {
    children: React.ReactNode;
}

const ContextWrapper = (props: ContextWrapperProps) => {
    const [products, setProducts] = useState<Products[]>([] as Products[]);
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        setCartCount(products.length);
    }, [products]);

    return (
        <CartContext.Provider
            value={{ products, setProducts, cartCount, setCartCount }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
export default ContextWrapper;
