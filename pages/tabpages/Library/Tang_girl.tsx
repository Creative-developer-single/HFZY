import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  container_1: {
    height: 180,
    width: '100%',
    backgroundColor: '#A6927A',
    display: 'flex',
    flexDirection: 'row',
  },
  container_2: {
    height: 350,
    width: '100%',
    backgroundColor: '#F7F1E9',
    zIndex: 2,
  },
  container_3: {
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    zIndex: 3,
    marginTop: -22,
  },
  text_introduce: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'white',
    textAlign: 'center',
    marginTop: 0,
    marginLeft: -10,
    zIndex: 1
  },
  image: {
    height: 230,
    width: 180,
    resizeMode: 'contain',
    marginLeft: 0,
    zIndex: 1
  },
  SearchTabStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  SearchTabInputStyle: {
    width: '80%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 10
  },
  SearchButtonStyle: {
    paddingTop: 7,
    paddingBottom: 11,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: '#654520'
  },
  SearchButtonTextStyle: {
    color: 'white',
    fontSize: 23
  },
})

function Tang_girl() {
  return (
    <View style={style.container}>
      <View style={style.container_1}>
        <View>
          <Text style={style.text_introduce}>
            {`
      你好啊！我是唐姑娘。
      想了解惠风展馆内展品
      信息，可以尽情向我提
      问哦！
      `}
          </Text>
        </View>
        <View>
          <Image source={require("../../../Img/girl.png")} style={style.image}></Image>
        </View>
      </View>
      <View style={style.container_2}>

      </View>
      <View style={style.container_3}>
        <View style={style.SearchTabStyle}>
          <TextInput style={style.SearchTabInputStyle}></TextInput>
          <TouchableOpacity style={style.SearchButtonStyle}>
            <Text style={style.SearchButtonTextStyle}>发送</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Tang_girl