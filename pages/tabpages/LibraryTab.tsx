import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Button } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import CollectBox1 from "./Library/collectBox";
import CollectBox2 from "./Library/CollectBoxHave";
import Hf3DClothesCollectMain from "./Library/clothescollect"
import Hf3DClothesCollectShow from "./Library/Hf3DClothesCollectShow";
import VRLibrary from "./Library/VRLib";
import Tang_girl from "./Library/Tang_girl";

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FFEFD7'
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: '#921919',
    borderWidth: 1,
    borderColor: '#921919',
    borderRadius: 50,
    marginTop: 90,
    zIndex: 2
  },
  image: {
    height: 222,
    width: 222,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginTop: -144,
    opacity: 0.8
  },
  Daohang: {
    height: 40,
    width: 70,
    borderWidth: 1,
    marginTop: -320,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#921919',
    zIndex: 2
  },
})

const Stack = createNativeStackNavigator();




function Library() {
  const navigator = useNavigation();
  function EnterLibrary() {
    navigator.navigate("进入博物馆");
  }
  return (
    <View style={style.container}>
      <View style={{
        height: 250, width: 250, borderWidth: 1, backgroundColor: 'white',
        marginTop: 40, zIndex: 1
      }}>
        <Text style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>地图</Text>
      </View>
      <View style={style.button}>
        <TouchableOpacity onPress={EnterLibrary} activeOpacity={0.7}>
          <Text style={{
            color: 'white',
            textAlign: 'center',
            marginTop: 17,
            fontSize: 20,
            zIndex: 2,
          }}>
            进入
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={require("../../Img/进入展馆.png")} style={style.image}></Image>
    </View>
  )
}




function HfTabMuseum() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="展馆" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="博物馆" component={Library}></Stack.Screen>
        <Stack.Screen name="进入博物馆" component={VRLibrary}></Stack.Screen>
        <Stack.Screen name="进入收藏夹无" component={CollectBox1}></Stack.Screen>
        <Stack.Screen name="收藏夹" component={CollectBox2}></Stack.Screen>
        <Stack.Screen name="3D收藏" component={Hf3DClothesCollectMain}></Stack.Screen>
        <Stack.Screen name="hf收藏3D衣服" component={Hf3DClothesCollectShow}></Stack.Screen>
        <Stack.Screen name="唐姑娘" component={Tang_girl}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HfTabMuseum