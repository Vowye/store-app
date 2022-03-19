import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Image, View, Pressable } from "react-native";
import CartContext from "../context/CartContext";

const TopBar = () => {
    const { cartCount } = useContext(CartContext);

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    navigation.navigate("Home" as never, {} as never);
                }}
            >
                <Image
                    style={styles.icon}
                    source={require("../../assets/arrow-back.png")}
                />
            </Pressable>
            <Pressable
                onPress={() => {
                    navigation.navigate("Cart" as never, {} as never);
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
        width: "100%",
        backgroundColor: "#d7d0c0",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#a6855c",
    },
    icon: {
        margin: 5,
    },
});

export default TopBar;
