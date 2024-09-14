import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const FeedBackForm = () => {
    const [firstName, onChangeFirstName] = useState("");
    const [lastName, onChangeLastName] = useState("");
    const [message, onChangeMessage] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.headingSection}>
                How was your visit to Little Lemon?
            </Text>
            <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. We would love to hear your experience with us!
            </Text>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={onChangeFirstName}
                placeholder="First Name"
            />
            <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={onChangeLastName}
                placeholder="Last Name"
            />
            <TextInput
                style={styles.messageInput}
                value={message}
                onChangeText={onChangeMessage}
                placeholder="Comment"
                multiline={true} // Allows for multiple lines
                scrollEnabled={true} // Enables scrolling when text overflows
                textAlignVertical="top" // Ensures text starts at the top
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "#333333",
        backgroundColor: "white",
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: "white",
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "#EDEFEE",
        textAlign: "center",
        // backgroundColor: "#495E57",
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: "#EDEFEE",
        textAlign: "center",
        // backgroundColor: "#495E57",
    },
});

export default FeedBackForm;
