import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartButton from "./src/components/CartButton";
import Home from "./src/pages/Home";
import Cart from "./src/pages/Cart";
import ContextWrapper from "./src/context/ContextWrapper";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <ContextWrapper>
                <StatusBar backgroundColor="black" />
                <SafeAreaView style={styles.container}>
                    <NavigationContainer>
                        <Stack.Navigator
                            initialRouteName="Home"
                            screenOptions={{
                                headerRight: () => <CartButton />,
                            }}
                        >
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Cart" component={Cart} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </ContextWrapper>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
