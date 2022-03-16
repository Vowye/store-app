import { StyleSheet, Image, View } from "react-native"

const TopBar = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require("../assets/cart.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#d7d0c0",
        alignItems: "flex-end",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#a6855c",
    },
    icon: {
        margin: 5,
    },
})

export default TopBar
