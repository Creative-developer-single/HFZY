import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { WebView } from 'react-native-webview';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//MainTab模块导入
import HfTabMain from "./tabpages/MainTab";
import { MainTabIcon } from "./tabpages/MainTab";

//HomeTab模块导入
import HfTabHome from "./tabpages/HomeTab";
import { HomeTabIcon } from "./tabpages/HomeTab";

import HfTabMuseum from "./tabpages/LibraryTab";

const Tab = createBottomTabNavigator();

function MuseumTabIcon() {
    return (
        <Image source={require('../Img/MuseumIcon.png')} style={{ height: 30, width: 30 }}></Image>
    )
}


function HfMainView() {
    return (
        /* <View style={{height:'100%',width:'100%', overflow:"hidden"}}>
         <WebView source={{uri:'https://myservice.f3.ttkt.cc/Test1/Functions/clothes1/Model_show.html'}} scalesPageToFit={true}></WebView>
         </View>*/
        <Tab.Navigator>
            <Tab.Screen name="主页" component={HfTabMain} options={{ tabBarIcon: MainTabIcon }}></Tab.Screen>
            <Tab.Screen name="展馆" component={HfTabMuseum} options={{ tabBarIcon: MuseumTabIcon }}></Tab.Screen>
            <Tab.Screen name="我的" component={HfTabHome} options={{ tabBarIcon: HomeTabIcon }}></Tab.Screen>
        </Tab.Navigator>
    );

}

export default HfMainView;