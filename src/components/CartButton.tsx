import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Image, View, Pressable } from "react-native";
import CartContext from "../context/CartContext";
import { RootStackParamList } from "../types/Routes";

const CartButton = () => {
    const { cartCount } = useContext(CartContext);

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    navigation.navigate("Cart");
                }}
            >
                {cartCount > 0 ? (
                    <Image
                        style={styles.icon}
                        source={require("../../assets/cart-loaded.png")}
                    />
                ) : (
                    <Image
                        style={styles.icon}
                        source={require("../../assets/cart.png")}
                    />
                )}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
    },
    icon: {
        margin: 5,
    },
});

export default CartButton;
