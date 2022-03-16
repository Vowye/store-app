import { SafeAreaView, StyleSheet, StatusBar } from "react-native"
import TopBar from "./src/components/TopBar"

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="black" />
            <SafeAreaView style={styles.container}>
                <TopBar />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})
