import React, { useContext } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartContext from "../context/CartContext";

const Cart = () => {
    const { products, removeProductFromCart, cartCount } =
        useContext(CartContext);
    return (
        <>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {products.map((elmnt, idx) => (
                        <View style={styles.productContainer} key={idx}>
                            <Image
                                source={{ uri: elmnt.image }}
                                style={styles.productImage}
                            ></Image>
                            <Text style={styles.itemTitle}>{elmnt.title}</Text>
                            <Pressable
                                onPress={() => {
                                    removeProductFromCart(elmnt);
                                }}
                            >
                                <Image
                                    style={styles.closeIcon}
                                    source={require("../../assets/close.png")}
                                />
                            </Pressable>
                        </View>
                    ))}
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    productContainer: {
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#a6855c",
        width: "100%",
        padding: 10,
        backgroundColor: "white",
    },
    productImage: { width: 100, height: 100 },
    itemTitle: {
        paddingLeft: 12,
        maxWidth: "60%",
    },
    closeIcon: {
        marginRight: 10,
    },
});

export default Cart;
