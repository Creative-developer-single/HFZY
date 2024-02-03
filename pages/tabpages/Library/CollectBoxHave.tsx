import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#FFEFD7'
  },
  image_1: {
    height: 200,
    width: 150,
    zIndex: 2
  }
})

function CollectBox2() {
  const navigator = useNavigation();

  function EnterCollectsheet() {
    navigator.navigate('3D收藏');
  }
  return (
    <View style={style.container}>
      <View style={{
        height: 210,
        width: 150,
        backgroundColor: 'white',
        marginTop: 80,
        marginLeft: 20,
        zIndex: 1
      }}>
        <TouchableOpacity onPress={EnterCollectsheet} activeOpacity={0.7}>
          <Image source={require('../../../Img/Clothes_show.png')} style={style.image_1}></Image>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default CollectBox2