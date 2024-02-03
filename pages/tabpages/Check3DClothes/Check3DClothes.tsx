import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#FFEFD7'
    },
    interactBand: {
        display: 'flex',
        flexDirection: 'column'
    },
    informationContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 350,
        marginLeft: 0,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    informationItem: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20
    },
    informationItemFont: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
})

function HfInformation() {
    return (
        <View style={style.informationContainer}>
            <View style={style.informationItem}>
                <Text style={style.informationItemFont}>民族: </Text>
                <Text style={{ flex: 1, fontSize: 16, justifyContent: 'center' }}>汉族</Text>
            </View>
            <View style={style.informationItem}>
                <Text style={style.informationItemFont}>年代: </Text>
                <Text style={{ flex: 1, fontSize: 16, justifyContent: 'center' }}>民国</Text>
            </View>
            <View style={style.informationItem}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: -163 }}>藏品信息: </Text>
                <View style={{ width: '78%' }}>
                    <Text numberOfLines={10} style={{ fontSize: 16, fontFamily: '宋体', }}>
                        晚清黑色团龙纹芝麻纱饰堆绫缠枝兰花纹女褂,基本形制为高立领、对襟、平袖端、袖长及腕、袖口较窄。衣长93.7厘米,通袖长143.3厘米。领口饰黑素缎一字盘扣一组,门襟饰圆形盘扣一组,下垂剑带两条。黑色团龙纹芝麻纱面料,无里。领口、门襟、两裾及底摆由内至外饰堆绫缠枝兰花纹花边、黑素缎宽镶边,袖口饰卷花盘长纹绦边边。
                    </Text>
                </View>
            </View>
        </View>
    )
}

function HfInteract() {
    const navigator = useNavigation();

    function hfLook3D() {
        navigator.navigate('3D服装展示');
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
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderColor: '#CCCCCC',
                        borderRadius: 12
                    }}>
                        <Text style={{ margin: 10, color: 'rgb(146, 25, 25)', fontSize: 15, fontWeight: 'bold' }} onPress={hfLook3D}>查看3D服装</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'rgb(146, 25, 25)',
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderColor: '#CCCCCC',
                        borderRadius: 12
                    }}>
                        <Text style={{ margin: 10, color: 'white', fontSize: 15, fontWeight: 'bold' }}>收藏3D服装</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

function HfCheck3DMain() {
    return (
        <View style={style.pageContainer}>
            <ScrollView style={{ height: '100%', width: '100%', }}
                horizontal={false} pagingEnabled={false} showsHorizontalScrollIndicator={true}>
                <View style={{ height: 250, width: '60%', backgroundColor: 'white', borderColor: 'black', borderWidth: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 20, marginBottom: 0 }}>
                    <Image source={require('../../../Img/temp/女褂.jpg')} style={{ width: '98%', height: 250, resizeMode: 'contain', alignItems: 'center' }}></Image>
                </View>
                <View style={{ height: 90, width: '92%', justifyContent: 'center', alignSelf: 'center', marginTop: -10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', fontFamily: '宋体', }}>
                        {`
                    黑色团龙纹芝麻纱饰
                    堆绩缠枝兰花纹女褂
                    `}
                    </Text>
                </View>
                <HfInteract></HfInteract>
                <HfInformation></HfInformation>
            </ScrollView>
        </View>
    )
}

export default HfCheck3DMain;