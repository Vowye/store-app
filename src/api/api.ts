import axios from "axios";
import Products from "../types/Products";

export const getAllProducts = async (): Promise<Products[]> => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (err) {
        throw err;
    }
};
