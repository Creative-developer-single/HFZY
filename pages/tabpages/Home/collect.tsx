import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: Dimensions.get('window').width,
    backgroundColor: '#FFEFD7'
  },
  text_1: {
    fontFamily: '华文仿宋',
    fontSize: 20,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: 'white',
    paddingTop: 8,
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#FFEADG',
  },
  text_2: {
    fontFamily: '华文仿宋',
    fontSize: 20,
    paddingTop: 8,
    flex: 1,
    textAlign: 'center',
  },
  Image_2: {
    height: 300,
    width: 180,
    opacity: 0.7,
    transform: [{ rotate: '180deg' }],
    marginTop: 220,
    marginLeft: -150,
  },

})

function Collect_1() {
  return (
    <View style={style.container}>
      <View style={{
        display: "flex", flexDirection: "row", justifyContent: 'center',
        height: 50, width: '100%', backgroundColor: '#FFEFD7',
        borderBottomWidth: 2, borderColor: 'white'
      }}>
        <Text style={style.text_1}>衣</Text>
        <Text style={style.text_2}>裤</Text>
        <Text style={style.text_2}>裙</Text>
        <Text style={style.text_2}>鞋</Text>
        <Text style={style.text_2}>配饰</Text>
        <Text style={style.text_2}>其它</Text>
      </View>
      <View>
        <Image source={require("../../../Img/clothes.png")} style={{
          height: 300,
          width: 180,
          opacity: 0.8,
          transform: [{ rotate: '180deg' }],
          marginTop: 220,
          marginLeft: -150
        }}></Image>
      </View>
    </View>
  )
}

function Collect_2() {
  return (
    <View style={style.container}>
      <View style={{
        display: "flex", flexDirection: "row", justifyContent: 'center',
        height: 50, width: '100%', backgroundColor: '#FFEFD7',
        borderBottomWidth: 2, borderColor: 'white'
      }}>
        <Text style={style.text_2}>衣</Text>
        <Text style={style.text_1}>裤</Text>
        <Text style={style.text_2}>裙</Text>
        <Text style={style.text_2}>鞋</Text>
        <Text style={style.text_2}>配饰</Text>
        <Text style={style.text_2}>其它</Text>
      </View>
      <View>
        <Image source={require("../../../Img/Mine_shipin.png")} style={[
          style.Image_2,
          {
            transform: [{ rotate: '0deg' }],
          },
        ]}></Image>
      </View>
    </View>
  )
}

function Collect() {
  return (
    <ScrollView
      horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
      <Collect_1></Collect_1>
      <Collect_2></Collect_2>
    </ScrollView>
  )
}

export default Collect