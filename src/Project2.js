import React from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const Project2 =() => {
    return (
        <View style={MyStyle.container}>
            <Button title="Button 1" onPress={() => alert("hello!")} />
            <TouchableOpacity style={MyStyle.button} onPress={() => alert("hello 2!")}>
                <Text style={MyStyle.text}>Button 2</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Project2;
    const MyStyle = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center"
        },
        button:{
            backgroundColor: "blue",
            marginTop:10,
            alignItems:"center",
            padding:10
        },
        text:{
            color: "white",
            fontSize: 18
        }
    }
    )