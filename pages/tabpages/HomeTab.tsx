import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Setting from "./Home/Setting";
import policy from "./Home/policy";
import collect from "./Home/collect";

const Stack = createNativeStackNavigator();

const HomeTabStyle = StyleSheet.create({
  HomeView: {
    display: "flex",
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#FFEFD7'
  },
  Visitor: {
    height: 100,
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    marginTop: -40,
    alignItems: 'center'
  },
  Collect: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 150,
    width: 330,
    marginTop: 20,
    marginLeft: 40,
    marginBottom: 400,
  },

})
export function HomeTabIcon() {
  return (
    <Image source={require('../../Img/me.png')} style={{
      height: 30,
      width: 30
    }}></Image>
  );
}

function Visitor() {
  return (
    <View style={HomeTabStyle.Visitor}>
      <View style={{ width: 70, height: 70, left: 30, top: 0, borderColor: 'black', borderWidth: 1.5, backgroundColor: 'white', borderRadius: 45 }}>
        <Text style={{ display: 'flex', textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>头像</Text>
      </View>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        marginLeft: 60,
        color: '#214F66',
      }}>昵称：</Text>
    </View>
  )
}


function Collect() {
  const navigator = useNavigation();

  function EnterSetting() {
    navigator.navigate("账户设置");
  }
  function Entercollect() {
    navigator.navigate("我的收藏");
  }
  return (
    <View style={HomeTabStyle.Collect}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: '#FACD91',
        borderStyle: 'solid',
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        height: 60
      }}>
        <Image source={require('../../Img/setting_3.png')} style={{
          height: 30,
          width: 40,
          marginTop: 15,
          marginLeft: 15,
          marginRight: 20,
          opacity: 0.8
        }}></Image>
        <TouchableOpacity onPress={Entercollect} activeOpacity={0.7}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 12,
            marginBottom: 0,
            color: '#214F66',
          }}>我的收藏 </Text>
        </TouchableOpacity>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 25,
          marginTop: 10,
          marginBottom: 0,
          marginLeft: 100,
          color: '#214F66',
          opacity: 0.8
        }}> {'>'} </Text>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
        borderColor: '#FACD91',
        borderStyle: 'solid',
        height: 60,
        marginBottom: 30
      }}>
        <Image source={require('../../Img/setting_2.png')} style={{
          height: 38,
          width: 40,
          marginTop: 8,
          marginLeft: 15,
          marginRight: 20,
          opacity: 0.8
        }}></Image>
        <TouchableOpacity onPress={EnterSetting} activeOpacity={0.7}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 12,
            marginBottom: 0,
            color: '#214F66',
          }}>账户设置 </Text>
        </TouchableOpacity>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 25,
          marginTop: 10,
          marginBottom: 0,
          marginLeft: 100,
          color: '#214F66',
          opacity: 0.8
        }}> {'>'} </Text>
      </View>
    </View>
  )
}

function HfTabSubHome() {
  return (
    <View style={HomeTabStyle.HomeView}>
      <ImageBackground source={require('../../Img/mine.png')} resizeMode="contain" style={{
        flex: 1,
        justifyContent: 'center',
        height: 400,
        marginTop: 200
      }}>
        <Visitor></Visitor>
        <Collect></Collect>

      </ImageBackground>
    </View >
  )
};



function HfTabHome() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="我的" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="我的" component={HfTabSubHome}></Stack.Screen>
        <Stack.Screen name="账户设置" component={Setting}></Stack.Screen>
        <Stack.Screen name="我的收藏" component={collect} options={{ title: '我的收藏' }}></Stack.Screen>
        <Stack.Screen name="隐私政策" component={policy} options={{ title: '隐私政策' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HfTabHome;