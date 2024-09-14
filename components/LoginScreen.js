import React, { useState } from "react";
import {
    ScrollView,
    Pressable,
    Text,
    TextInput,
    StyleSheet,
    Alert,
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: "#333333",
    },
    footerContainer: {
        backgroundColor: "#333333",
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: "#EDEFEE",
        textAlign: "center",
    },
    regularText: {
        fontSize: 24,
        padding: 10,
        marginVertical: 30,
        color: "white",
        textAlign: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "black",
        backgroundColor: "white",
    },
    button: {
        fontSize: 22,
        padding: 10,
        width: 175,
        marginVertical: 15,
        margin: 120,
        backgroundColor: "#EE9972",
        borderColor: "#EE9972",
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        color: "black",
        textAlign: "center",
        fontSize: 25,
    },
});

export default function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    const handleLogin = () => {
        if (email.trim() === "") {
            Alert.alert("Validation Error", "Please enter your email address.");
        } else {
            navigation.navigate("Home");
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <>
                <Text style={styles.regularText}>Login to continue </Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="email"
                    keyboardType={"email-address"}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder="password"
                    keyboardType={"default"}
                    maxLength={10}
                />
                <Pressable onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </Pressable>
            </>
        </ScrollView>
    );
}
