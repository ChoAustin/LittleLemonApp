import React from "react";
import { Text, View, StyleSheet, Image, useColorScheme } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        marginVertical: 20,
        paddingVertical: 10,
        color: "white",
        textAlign: "center",
        fontSize: 40,
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: "contain",
    },
    headerText: {
        fontSize: 21,
        padding: 20,
        marginVertical: 8,
        textAlign: "center",
    },
});

export default function WelcomeScreen() {
    const colorScheme = useColorScheme();
    const textColor = colorScheme === "dark" ? "black" : "white";
    const backgroundColor = colorScheme === "dark" ? "#fff" : "#333333";

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require("../img/logo.png")}
                />
                <Text style={[styles.title, { color: textColor }]}>
                    Little Lemon
                </Text>
            </View>
            <Text style={[styles.headerText, { color: textColor }]}>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. We would love to hear your experience with us!
            </Text>
        </View>
    );
}
