import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import HfCheck3DMain from "./Check3DClothes/Check3DClothes";
import Hf3DClothesShow from "./Check3DClothes/3DClothesShow";
import ClothesMore from "./Check3DClothes/Clothes_More";
import { getTabBarHeight } from "@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar";

const Stack = createNativeStackNavigator();

const MainTabStyle = StyleSheet.create({
    MainView: {
        display: "flex",
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFEFD7'
    },
    SwiperStyle: {
        height: 120
    },
    SwiperImg: {
        width: '100%',
        height: 120
    },
    SwiperItemStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    SwiperTestText: {
        fontSize: 30
    },
    SearchTabStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 1
    },
    SearchTabInputStyle: {
        width: '75%',
        height: 40,
        marginTop: 5,
        marginLeft: 30,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 10
    },
    SearchButtonStyle: {
        marginTop: 3,
        marginLeft: 10,
        paddingTop: 7,
        paddingBottom: 11,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        backgroundColor: '#9F885D'
    },
    SearchButtonTextStyle: {
        color: 'white',
        fontSize: 15
    },
    ClothesShowStyle: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 40,
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        height: 250,
        backgroundColor: 'white',
        shadowRadius: 5
    },
    icon: {
        height: 35,
        width: 35,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    icon_clothe: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
        margin: 10,
    },
    clo: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: -26
    }
})
/*
<Image source={require('../../Img/MainTopPic1.jpg')} style={MainTabStyle.SwiperImg}></Image>
            <Image source={require('../../Img/ClothesTop1.png')} style={MainTabStyle.SwiperImg}></Image>
            <Image source={require('../../Img/ClothesTop2.png')} style={MainTabStyle.SwiperImg}></Image>
            <Image source={require('../../Img/ClothesTop3.png')} style={MainTabStyle.SwiperImg}></Image>*/

function MySwiper() {
    return (
        <View style={{ display: 'flex', height: 120, width: '80%', alignItems: 'center', justifyContent: 'center', marginLeft: 40 }}>
            <Swiper showsButtons={false} style={MainTabStyle.SwiperStyle} autoplay={false}
                autoplayTimeout={3}>
                <View style={MainTabStyle.SwiperItemStyle}>
                    <Image source={require('../../Img/MainTopPic1.jpg')} style={MainTabStyle.SwiperImg}></Image>
                </View>
                <View style={MainTabStyle.SwiperItemStyle}>
                    <Image source={require('../../Img/ClothesTop1.png')} style={MainTabStyle.SwiperImg}></Image>
                </View>
                <View style={MainTabStyle.SwiperItemStyle}>
                    <Image source={require('../../Img/ClothesTop2.png')} style={MainTabStyle.SwiperImg}></Image>
                </View>
                <View style={MainTabStyle.SwiperItemStyle}>
                    <Image source={require('../../Img/ClothesTop3.png')} style={MainTabStyle.SwiperImg}></Image>
                </View>
            </Swiper>
        </View>
    )
}

function MySearchTab() {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 15 }}>
            <View style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', zIndex: 1 }}>首页</Text>
            </View>
            <View style={MainTabStyle.SearchTabStyle}>
                <TextInput style={MainTabStyle.SearchTabInputStyle}></TextInput>
                <Image source={require("../../Img/temp/搜索_o.png")} style={{ zIndex: 999, height: 40, width: 40, marginLeft: -50, alignSelf: 'center', }}></Image>
            </View>
        </View>
    )
}

function HfClothesShow() {
    const navigator = useNavigation();
    function Enter3DClothes() {
        navigator.navigate('查看3D服装');
    }
    return (
        <TouchableOpacity style={MainTabStyle.ClothesShowStyle} activeOpacity={1} onPress={Enter3DClothes}>
            <Image source={require('../../Img/temp/main_cothe.png')} style={{ width: '90%', height: '100%', resizeMode: 'contain' }}></Image>
        </TouchableOpacity>
    )
}

function Six() {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', height: 50, width: '80%', marginLeft: 40, marginTop: -8, justifyContent: 'space-evenly' }}>
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <View>
                    <Image source={require("../../Img/temp/main_cothe.png")} style={MainTabStyle.icon_clothe}></Image>
                </View>
                <Text style={MainTabStyle.clo}>衣</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <View>
                    <Image source={require("../../Img/temp/主页图标-裤.png")} style={MainTabStyle.icon_clothe}></Image>
                </View>
                <Text style={MainTabStyle.clo}>裤</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <View>
                    <Image source={require("../../Img/temp/主页图标-裙.png")} style={MainTabStyle.icon_clothe}></Image>
                </View>
                <Text style={MainTabStyle.clo}>裙</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <View>
                    <Image source={require("../../Img/temp/主页图标-鞋.png")} style={MainTabStyle.icon_clothe}></Image>
                </View>
                <Text style={MainTabStyle.clo}>鞋</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <View>
                    <Image source={require("../../Img/temp/主页图标-配饰.png")} style={MainTabStyle.icon_clothe}></Image>
                </View>
                <Text style={MainTabStyle.clo}>配饰</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <View>
                    <Image source={require("../../Img/temp/主页图标-其他.png")} style={MainTabStyle.icon_clothe}></Image>
                </View>
                <Text style={MainTabStyle.clo}>其它</Text>
            </View>
        </View>
    )
}

export function MainTabIcon() {
    return (
        <Image source={require('../../Img/MainIcon.png')} style={{
            height: 30,
            width: 30
        }}></Image>
    );
}

function HfTabSubMain() {
    return (
        <View style={MainTabStyle.MainView}>
            <ScrollView style={MainTabStyle.MainView}
                horizontal={false} pagingEnabled={false} showsHorizontalScrollIndicator={true}>
                <MySearchTab></MySearchTab>
                <MySwiper></MySwiper>
                <Six></Six>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginLeft: 35,
                    marginTop: 65,
                    paddingBottom: 6,
                    borderColor: 'black',
                    borderStyle: 'solid',
                    width: 130
                }}>每日推荐</Text>
                <HfClothesShow></HfClothesShow>
                <View style={{ height: 20, width: '100%', alignItems: 'flex-start', marginTop: 20, }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginLeft: 35,
                        paddingBottom: 6,
                        borderColor: 'black',
                        borderStyle: 'solid',
                        width: 130,
                        height: 30,
                    }}>更多推荐</Text>
                </View>
                <ClothesMore></ClothesMore>
            </ScrollView>
        </View>
    )
};



function HfTabMain() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="主页" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="主页" component={HfTabSubMain}></Stack.Screen>
                <Stack.Screen name="查看3D服装" component={HfCheck3DMain}></Stack.Screen>
                <Stack.Screen name="3D服装展示" component={Hf3DClothesShow}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HfTabMain