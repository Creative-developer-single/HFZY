import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Modal } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#E7DED3'
  },
  image_1: {
    height: 280,
    width: 80,
    zIndex: 1,
    opacity: 0.8,
    marginRight: -320,
  },
  image_2: {
    height: 200,
    width: 80,
    zIndex: 1,
    opacity: 0.8,
    marginLeft: -315,
    marginTop: 60
  },
  text: {
    fontSize: 20,
    color: '#214F66',
    marginTop: -500,
    zIndex: 2
  },

})



function policy() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);  // 切换可见性
  };

  return (
    <View style={style.container}>
      <Image source={require("../../../Img/u122.png")} style={style.image_1}></Image>
      <Image source={require("../../../Img/u123.png")} style={style.image_2}></Image>
      <Text style={style.text}> 隐私政策</Text>
    </View>
  )

}

export default policy;