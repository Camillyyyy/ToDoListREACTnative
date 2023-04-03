import { useState } from "react";
import { Button, FlatList, SafeAreaView, TextInput, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'


const DATA = [];

export default function Service() {
    const navigation = useNavigation();

    const Item = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>{item.date}</Text>
            <Button title="Remove" color={"red"} onPress={() => {
                var index = DATA.indexOf(item)
                DATA.splice(index, 1)
                setList([DATA])
            }} />
        </View>
    )

    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [list, setList] = useState([]);

    return (
        <View style={styles.container}>
            <View style={styles.container2}>



                <Text style={styles.oia}>Gerenciador de Tarefas</Text>

                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="TAREFA"
                        onChangeText={(text) => setTask(text)}
                        value={task}
                    />
                </View>





                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="DATA - XX/XX/XXXX"
                        onChangeText={(text) => setDate(text)}
                        value={date}
                    />
                </View>

                <View style={styles.form}>
                    <Button title="ADICIONAR" onPress={() => {
                        DATA.push({ id: DATA.length, title: task, date: date });
                        setList([DATA])
                    }} />
                </View>

                <View style={styles.divider}>

                </View>


                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item item={item} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>

                <View style={styles.divider}>

                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.sair} >
                    Sair
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1ca39e",
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        backgroundColor: "#026f6e",
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
    sair: {
        color: '#000000',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#348e91',
        borderColor: "#0a0c0d",
        borderWidth: 1,
        borderRadius: 5,
        width: 90,
    },
    form: {
        width: 300,
        margin: 2,
    },
    input: {
        color: 'black',
        fontSize: 20,
        height: 50,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#69d2cd',
        padding: 10,
    },
    active_danger: {
        fontSize: "1.4em",
        backgroundColor: "red",
        padding: 6,
        borderRadius: 5,
    },
    form_danger: {
        width: 300,
        borderRadius: 5,
        textAlign: "center",
    },
    active_danger: {
        fontSize: "1.4em",
        backgroundColor: "red",
        padding: 6,
        borderRadius: 5,
    },
    divider: {
        margin: 20,
        width: "100%",
        borderWidth: 1,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        width: 600,
        margin: 2,
    },
    title: {
        fontSize: 22,
        color: 'black',
        margin: 4,
        flex: 0.5,
    },
    oia: {
        color: 'white',
        fontSize: 50,
        margin: 30,
        borderColor: 'black',
    },
})