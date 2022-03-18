import axios from "axios";
import Products from "../types/Products";

export const getAllProducts = async (): Promise<Products[]> => {
    const response = await axios.get(
        "https://fakestoreapi.com/products?limit=10"
    );
    return response.data;
};
