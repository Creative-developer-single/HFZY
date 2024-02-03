import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Modal } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    height: 230,
    marginTop: 15,
  },
  row_1: {
    width: '40%'
  },
  text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5
  },
  image_1: {
    resizeMode: 'strench',
    width: 108,
    height: 28,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image_2: {
    resizeMode: 'strench',
    width: 120,
    height: 22,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image_4: {
    resizeMode: 'strench',
    width: 95,
    height: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
})

function ClothesMore() {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <View style={{ width: '30%', backgroundColor: 'white', flex: 1, marginLeft: 18, marginRight: 18, zIndex: 1, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}>
          {/* <View style={{ height: 155, backgroundColor: 'white', marginTop: 20, marginLeft: 10, marginRight: 10, zIndex: 2 }}>
          </View> */}
          {/* <Text style={style.text}>鞋履</Text>
          <Image source={require("../../../Img/More_1.png")} style={style.image_1}></Image> */}
        </View>
        <View style={{ width: '40%', backgroundColor: 'white', flex: 1, marginLeft: 18, marginRight: 18, zIndex: 1, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}>
          {/* <View style={{ height: 155, backgroundColor: 'white', marginTop: 20, marginLeft: 10, marginRight: 10, zIndex: 2 }}>
          </View> */}
          {/* <Text style={style.text}>衣服</Text>
          <Image source={require("../../../Img/More_2.png")} style={style.image_2}></Image> */}
        </View>
      </View>
      {/* <View style={style.row}>
        <View style={{ width: '40%', backgroundColor: '#6E6B4E', flex: 1, marginLeft: 18, marginRight: 18, zIndex: 1 }}>
          <View style={{ height: 155, backgroundColor: 'white', marginTop: 20, marginLeft: 10, marginRight: 10, zIndex: 2 }}>
          </View>
          <Text style={style.text}>头冠头饰</Text>
          <Image source={require("../../../Img/More_3.png")} style={style.image_1}></Image>
        </View>
        <View style={{ width: '40%', backgroundColor: '#AB885F', flex: 1, marginLeft: 18, marginRight: 18, zIndex: 1 }}>
          <View style={{ height: 155, backgroundColor: 'white', marginTop: 20, marginLeft: 10, marginRight: 10, zIndex: 2 }}>
          </View>
          <Text style={style.text}>配饰</Text>
          <Image source={require("../../../Img/More_4.png")} style={style.image_4}></Image>
        </View>
      </View> */}
    </View>
  )

}

export default ClothesMore;