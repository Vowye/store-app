import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import Product from "../types/Product";

interface ContextWrapperProps {
    children: React.ReactNode;
}

const ContextWrapper = (props: ContextWrapperProps) => {
    const [products, setProducts] = useState<Product[]>([] as Product[]);
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        setCartCount(products.length);
    }, [products]);

    const addNewProductToCart = (product: Product) => {
        setProducts([...products, product]);
    };

    const removeProductFromCart = (product: Product) => {
        setProducts(
            products.filter(() => {
                return product.id !== product.id;
            })
        );
    };

    return (
        <CartContext.Provider
            value={{
                products,
                addNewProductToCart,
                removeProductFromCart,
                cartCount,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
export default ContextWrapper;
