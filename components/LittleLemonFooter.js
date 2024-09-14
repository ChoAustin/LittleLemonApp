import React from "react";
import { View, Text, StyleSheet } from "react-native";

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor: "#EE9972",
        marginBottom: 20,
        padding: 1,
    },
    footerText: {
        fontSize: 17,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
    },
});

export default function LittleLemonFooter() {
    return (
        <View style={footerStyles.container}>
            <Text style={footerStyles.footerText}>
                All rights reserved by Little Lemon, 2024
            </Text>
        </View>
    );
}
