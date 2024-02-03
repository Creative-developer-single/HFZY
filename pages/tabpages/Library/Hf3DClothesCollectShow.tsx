import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { WebView } from 'react-native-webview';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Hf3DClothesCollectShow() {
    return (
        <View style={{ width: '100%', height: '100%', overflow: "hidden" }}>
            <WebView source={{ uri: 'https://myservice.f3.ttkt.cc/Test1/Functions/clothes1/Model_show.html' }}></WebView>
        </View>
    )
}

export default Hf3DClothesCollectShow;