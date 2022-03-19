import { useContext, useState } from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Image,
    FlatList,
    Button,
} from "react-native";
import { getAllProducts } from "../api/api";
import ProductFrame from "../components/ProductFrame";
import Product from "../types/Product";

const Home = () => {
    const [showCaseProducts, setShowCaseProducts] = useState<Product[]>([]);

    const fetchedProducts = getAllProducts();
    const fetchProducts = async () => {
        setShowCaseProducts(await fetchedProducts);
    };
    fetchProducts();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={showCaseProducts}
                numColumns={2}
                style={styles.table}
                renderItem={({ item }) => {
                    return <ProductFrame item={item} />;
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
    },
    table: {
        paddingTop: 10,
    },
});

export default Home;
