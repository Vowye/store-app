import axios from "axios";
import Product from "../types/Product";

export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (err) {
        throw err;
    }
};
