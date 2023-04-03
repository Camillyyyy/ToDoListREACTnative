import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function LoginScreen() {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>

            <View style={styles.container2}>

                <Text style={styles.title}>Bem-vindo! Faça o login no nosso sistema!</Text>


                <TextInput placeholder="User" style={styles.campo} />
                <TextInput secureTextEntry placeholder="Password" style={styles.campo2} />

                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                    Entrar
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#348e91",
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        backgroundColor: "#1c5052",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        paddingBottom: 50,
        paddingTop: 50,
        paddingRight: 10,
        paddingLeft: 10,
        shadowColor: "#c2ffff",
        shadowRadius: 10,
    },
    title: {
        color: '#f2f2f2',
        fontSize: 50,
        marginBottom: 60,
        borderColor: 'black',
    },
    button: {
        color: '#000000',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#348e91',
        borderColor: "#0a0c0d",
        borderWidth: 1,
        borderRadius: 5,
        width: 90,
        height: 30,
    },
    campo: {
        color: 'black',
        fontSize: 20,
        height: 50,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#69d2cd',
        padding: 10,
    },
    campo2: {
        color: 'black',
        fontSize: 20,
        height: 50,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#69d2cd',
        padding: 10,
    },
});
