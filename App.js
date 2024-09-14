import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import LoginScreen from "./components/LoginScreen";
import FeedBackForm from "./components/FeedBackForm";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
    },
    footerContainer: { backgroundColor: "#333333" },
});

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <LittleLemonHeader />
                <Drawer.Navigator
                    screenOptions={{
                        drawerPosition: "left",
                    }}
                    initialRouteName="Login"
                >
                    <Drawer.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerTitleAlign: "center",
                        }}
                    />
                    <Drawer.Screen
                        name="Home"
                        component={WelcomeScreen}
                        options={{
                            headerTitleAlign: "center",
                        }}
                    />
                    <Drawer.Screen
                        name="Menu"
                        component={MenuItems}
                        options={{
                            headerTitleAlign: "center",
                        }}
                    />
                    <Drawer.Screen
                        name="FeedBack"
                        component={FeedBackForm}
                        options={{
                            headerTitleAlign: "center",
                        }}
                    />
                </Drawer.Navigator>
            </View>
            <View style={styles.footerContainer}>
                <LittleLemonFooter />
            </View>
        </NavigationContainer>
    );
}
