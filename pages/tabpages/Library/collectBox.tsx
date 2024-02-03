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
  text_1: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 80,
    color: '#654520',
  },
  text_2: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 0,
    color: '#333333'
  },
  image: {
    height: 200,
    width: 80,
    marginLeft: 250
  },
  ground: {
    height: 57,
    width: 137,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginLeft: 147,
    zIndex: 1
  },
  know: {
    height: 50,
    width: 130,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#93632B',
    marginLeft: 150,
    marginTop: -53.5,
    zIndex: 2
  },
  Daohang_2: {
    height: 40,
    width: 70,
    borderWidth: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 2
  },
})

function Daohang_2() {
  const navigator = useNavigation();
  function ToCollect() {
    navigator.navigate("收藏夹");
  }
  return (
    <View style={style.Daohang_2}>
      <TouchableOpacity onPress={ToCollect} activeOpacity={0.7}>
        <Text>收藏夹</Text>
      </TouchableOpacity>
    </View>
  )
}

function CollectBox1() {
  const navigator = useNavigation();
  function ToCollect() {
    navigator.navigate("收藏夹");
  }
  return (
    <View style={style.container}>
      <Text style={style.text_1}>
        暂无收藏
      </Text>
      <Image source={require('../../../Img/girl.png')} style={style.image}></Image>
      <Text style={style.text_2}>
        {`
        你还没有收藏的服饰哦
        快去收藏吧
        `}
      </Text>
      <View style={style.ground}></View>
      <View style={style.know}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 8, color: '#FFFFFF' }}>知道啦</Text>
      </View>
      <Daohang_2></Daohang_2>
    </View>
  )
}

export default CollectBox1