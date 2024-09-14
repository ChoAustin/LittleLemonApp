import React from "react";
import { View, Text, StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: "#EE9972",
    },
    headerText: {
        padding: 45,
        fontSize: 45,
        color: "black",
        textAlign: "center",
        marginBottom: -50,
    },
});

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>Little Lemon</Text>
        </View>
    );
}
