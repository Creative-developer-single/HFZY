import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Button } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const style = StyleSheet.create({
  choose: {
    display: 'flex',
    flexDirection: 'column',
    width: 75,
    height: 280,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  anti_choose: {
    width: 75,
    height: 35,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 0
  },
  image_Down: {
    height: 35,
    resizeMode: 'strench',
  },
  more_2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    zIndex: 99,
    marginTop: -553,
    marginLeft: 0,
    height: '5%',

  },
  more: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 99,
    marginTop: 0,
    marginLeft: 0,
    alignItems: "flex-end",
  }
})

function More_function_2() {
  const navigator = useNavigation();
  function EnterCollectNone() {
    navigator.navigate("进入收藏夹无");
  }
  function EnterTang() {
    navigator.navigate("唐姑娘");
  }
  return (
    <View style={style.more}>
      <View style={style.choose} >
        <TouchableOpacity onPress={EnterCollectNone} activeOpacity={0.7}>
          <View style={{ width: 60, height: 60, backgroundColor: '#fde4c3', borderColor: 'black', borderWidth: 1, borderRadius: 50, }}>
            <Image source={require("../../../Img/today_clothes_2.png")} style={{ height: 35, width: 45, justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}></Image>
            <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: -3 }}>收藏</Text>
          </View>
        </TouchableOpacity>
        <View style={{ width: 60, height: 60, backgroundColor: '#cadef3', borderColor: 'black', borderWidth: 1, borderRadius: 50, }}>
          <Image source={require("../../../Img/VR_search.png")} style={{ height: 35, width: 45, justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}></Image>
          <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: -3 }}>搜索</Text>
        </View>
        <TouchableOpacity onPress={EnterTang} activeOpacity={0.7}>
          <View style={{ width: 60, height: 60, backgroundColor: '#9c9486', borderColor: 'black', borderWidth: 1, borderRadius: 50, }}>
            <Image source={require("../../../Img/Tang_girl.png")} style={{ height: 35, width: 45, justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}></Image>
            <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: -3 }}>唐姑娘</Text>
          </View>
        </TouchableOpacity>
        <Image source={require("../../../Img/VR_UP.png")} style={{ height: 40, width: 40 }}></Image>
      </View>
    </View>
  )
}

function More_function_1() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);  // 切换可见性
  };
  return (
    <View style={style.more_2}>
      {isVisible && <More_function_2></More_function_2>}
      <TouchableOpacity onPress={toggleVisibility} >
        <Image source={require("../../../Img/VR_Down.png")} style={style.anti_choose}></Image>
      </TouchableOpacity>
    </View>
  )
}




function VRLibrary() {



  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={{ height: '100%', width: '100%', overflow: "hidden", zIndex: 1 }}>
        <WebView source={{ uri: 'https://myservice.f3.ttkt.cc/Test1/main.html' }} scalesPageToFit={true}></WebView>
      </View>
      <More_function_1></More_function_1>
    </View>
  )
}

export default VRLibrary