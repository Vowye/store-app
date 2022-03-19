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
import CartContext from "../context/CartContext";
import Products from "../types/Products";

const Home = () => {
    const { products, setProducts } = useContext(CartContext);
    const [showCaseProducts, setShowCaseProducts] = useState<Products[]>([]);

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
                    return (
                        <View style={styles.productContainer}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.productImage}
                            ></Image>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Button
                                title="Add to cart"
                                onPress={() => {
                                    setProducts([...products, item]);
                                }}
                            />
                        </View>
                    );
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
    productContainer: {
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 20,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#a6855c",
        marginHorizontal: 10,
        width: "45%",
        padding: 10,
        backgroundColor: "white",
    },
    productImage: { width: 100, height: 100 },
    itemTitle: {
        paddingVertical: 6,
    },
});

export default Home;
