import { useContext } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import CartContext from "../context/CartContext";
import Product from "../types/Product";

const ProductFrame = ({ item }: { item: Product }) => {
    const { products, setProducts } = useContext(CartContext);

    const checkIfProductIsOnCart = (product: Product) => {
        const isProductOnCart = products.filter(
            (listItem) => product.id === listItem.id
        );
        return isProductOnCart.length;
    };

    return (
        <>
            <View style={styles.productContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.productImage}
                ></Image>
                <Text style={styles.itemTitle}>{item.title}</Text>
                {checkIfProductIsOnCart(item) ? (
                    <Button
                        color="red"
                        title="Remove From Cart"
                        onPress={() => {
                            setProducts(
                                products.filter((product) => {
                                    return item.id !== product.id;
                                })
                            );
                        }}
                    />
                ) : (
                    <Button
                        title="Add to cart"
                        onPress={() => {
                            console.log(checkIfProductIsOnCart(item));
                            setProducts([...products, item]);
                        }}
                    />
                )}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
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

export default ProductFrame;
