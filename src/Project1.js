import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Project1 = ()=>
{
    return(
      <View style={
        MyStyle.ViewStyle
      }>
        <Text style={MyStyle.TextStyle}>Hello World</Text>
      </View>
    )
  }
  export default Project1;
  const MyStyle = StyleSheet.create({
    ViewStyle: {
      width:100,
      height:100,
      backgroundColor: 'aqua',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextStyle:
    {
      color: 'black'
    }
  }
  )