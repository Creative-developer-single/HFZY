import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#FFEFD7'
    },
    interactBand: {
        display: 'flex',
        flexDirection: 'column'
    },
    informationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    informationItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20
    },
    informationItemFont: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})

function HfInformation() {
    return (
        <View style={style.informationContainer}>
            <View style={style.informationItem}>
                <Text style={style.informationItemFont}>服饰时期: </Text>
                <Text style={{ flex: 1 }}></Text>
            </View>
            <View style={style.informationItem}>
                <Text style={style.informationItemFont}>特点: </Text>
                <Text style={{ flex: 1 }}></Text>
            </View>
            <View style={style.informationItem}>
                <Text style={style.informationItemFont}>详细介绍: </Text>
                <Text style={{ flex: 1 }}></Text>
            </View>
        </View>
    )
}

function HfInteract() {
    const navigator = useNavigation();

    // function hfCollectLook3D() {
    //     navigator.navigate('3D服装收藏展示');
    // }
    function hfCollectLook3D() {
        navigator.navigate('hf收藏3D衣服')
    }

    return (
        <View style={style.interactBand}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50, width: '100%' }}>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image source={require('../../../Img/today_clothes_1.png')} resizeMode='contain' style={{ width: 50, height: 50 }}></Image>
                </View>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image source={require('../../../Img/today_clothes_2.png')} resizeMode='contain' style={{ width: 50, height: 50 }}></Image>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50, width: '100%' }}>
                <View style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={hfCollectLook3D}
                        style={{
                            backgroundColor: 'rgb(146, 25, 25)',
                            borderStyle: 'solid',
                            borderWidth: 2,
                            borderColor: '#CCCCCC',
                            borderRadius: 12,
                            width: 100
                        }}>
                        <Text style={{ margin: 10, color: 'white', textAlign: 'center' }} >查看3D服装</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderColor: '#CCCCCC',
                        borderRadius: 12,
                        width: 100
                    }}>
                        <Text style={{ margin: 10, color: 'rgb(146, 25, 25)', textAlign: 'center' }}>取消收藏</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

function Hf3DClothesCollectMain() {
    return (
        <View style={style.pageContainer}>
            <Image source={require('../../../Img/Clothes_show.png')} style={{ width: 192, height: 268, marginTop: 20 }}></Image>
            <HfInteract></HfInteract>
            <HfInformation></HfInformation>
        </View>
    )
}

export default Hf3DClothesCollectMain;