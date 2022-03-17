import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, View, Pressable } from "react-native";

const TopBar = () => {
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
                <Image
                    style={styles.icon}
                    source={require("../../assets/cart.png")}
                />
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
