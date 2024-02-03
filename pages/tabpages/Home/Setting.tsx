import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Modal, Alert, TouchableHighlight } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FFEFD7'
  },
  Image_1: {
    height: 300,
    width: 150,
    zIndex: 1,
    opacity: 0.8,
    marginLeft: -260
  },
  Image_2: {
    height: 200,
    width: 150,
    zIndex: 1,
    opacity: 0.8,
    marginLeft: -10,
    marginTop: 60,
  },
  Image_3: {
    height: 200,
    width: 150,
    zIndex: 1,
    opacity: 0.8,
    marginLeft: 120,
    marginTop: 60,
  },
  Image_4: {
    width: 250,
    height: 200,
    zIndex: 1,
    marginTop: -270,
    opacity: 0.8,
    marginRight: 30,
  },
  Settingbutton: {
    display: 'flex',
    flexDirection: 'column',
    height: 130,
    width: 300,
    zIndex: 2,
    backgroundColor: '#f7f1eb80',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: -450,
  },
  text: {
    fontSize: 25,
    color: '#214F66',
    fontWeight: 'bold',
    marginLeft: 18
  },
  Exitbutton: {
    height: 65,
    width: 300,
    zIndex: 2,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#f7f1eb80',
    borderRadius: 10,
    marginTop: 30,
  },
  window: {
    height: 250,
    width: 200,
    backgroundColor: '#fae1c3',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 250,
    marginBottom: 250,
    marginLeft: 100
  }


})

function Settingbutton() {
  const navigator = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  function Enterpolicy() {
    navigator.navigate("隐私政策");
  }
  return (
    <View style={style.Settingbutton}>
      <View style={{ display: 'flex', flexDirection: 'row', flex: 1, borderBottomWidth: 1, paddingTop: 10, marginBottom: 10 }}>
        <TouchableOpacity onPress={Enterpolicy} activeOpacity={0.7}>
          <Text style={style.text}>隐私政策 </Text>
        </TouchableOpacity>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 25,
          paddingLeft: 120,
          color: '#214F66',
          opacity: 0.8
        }}> {'>'} </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={style.window}>
            <Text style={{
              fontWeight: 'bold', fontSize: 25, color: 'black',
              marginTop: -20, marginBottom: 20, borderBottomWidth: 1, paddingBottom: 5
            }}
            >确定注销账号?</Text>
            <View style={{ display: "flex", flexDirection: 'row' }}>
              <TouchableHighlight
                style={{}}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
                activeOpacity={0.7}
              >
                <Text style={{
                  fontWeight: 'bold', fontSize: 20, color: 'black',
                  marginLeft: -60,
                }} > 取消</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                activeOpacity={0.7}
              >
                <Text style={{
                  fontWeight: 'bold', fontSize: 20, color: '#214F66',
                  marginRight: -50
                }}> 确定</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight

          onPress={() => {
            setModalVisible(true);
          }}
          activeOpacity={0.7}
          underlayColor="transparent"
        >
          <Text style={style.text}>注销账号</Text>
        </TouchableHighlight>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 25,
          paddingLeft: 120,
          color: '#214F66',
          opacity: 0.8
        }}> {'>'} </Text>
      </View>
    </View>
  )
}

function Exit() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={style.Exitbutton}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.window}>
          <Text style={{
            fontWeight: 'bold', fontSize: 25, color: 'black',
            marginTop: -20, marginBottom: 20, borderBottomWidth: 1, paddingBottom: 5
          }}
          >确定退出?</Text>
          <View style={{ display: "flex", flexDirection: 'row' }}>
            <TouchableHighlight
              style={{}}
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
              activeOpacity={0.7}
            >
              <Text style={{
                fontWeight: 'bold', fontSize: 20, color: 'black',
                marginLeft: -60,
              }} > 取消</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              activeOpacity={0.7}
            >
              <Text style={{
                fontWeight: 'bold', fontSize: 20, color: '#214F66',
                marginRight: -50
              }}> 确定</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight

        onPress={() => {
          setModalVisible(true);
        }}
        activeOpacity={0.7}
        underlayColor="transparent"
      >
        <Text style={{
          fontSize: 25,
          color: '#214F66',
          textAlign: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
          退出登录
        </Text>
      </TouchableHighlight>
    </View>
  )
}

function Setting() {
  return (
    <View style={style.container}>
      <Image source={require("../../../Img/u83.png")} style={style.Image_1}></Image>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image source={require("../../../Img/u134.png")} style={style.Image_2}></Image>
        <Image source={require("../../../Img/u133.png")} style={style.Image_3}></Image>
      </View>
      <Image source={require("../../../Img/setting.png")} style={style.Image_4}></Image>
      <Settingbutton></Settingbutton>
      <Exit></Exit>
    </View>
  )

}

export default Setting