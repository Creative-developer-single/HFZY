import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, ToastAndroid } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HfMainView from './pages/Main';
import { User_Login } from "./UserLogin";

function HfStartTitle() {
    return (
        <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: '华文仿宋'
        }}>欢迎来到惠风在衣</Text>
    );
}

function HfLoginBand() {
    const [UserName, setUserName] = useState("");
    const [UserPass, setUserPass] = useState("");
    const navigation = useNavigation();

    function hfHandleUserInput(text) {
        setUserName(text);
    }

    function hfHandlePassInput(text) {
        setUserPass(text);
    }

    async function hfHandleLogin() {
        var dataset = {
            UserName: UserName,
            UserPass: UserPass,
            newStatus: false
        };
        var response = await User_Login(dataset);
        if (response == 'Success') {
            ToastAndroid.show('登陆成功!', 1500);
            navigation.navigate('Main');
        }
        else
            ToastAndroid.show('密码错误!', 1500);
        console.log(response);
    }

    function hfHandleRegist() {

    }
    return (
        <>
            <TextInput onChangeText={hfHandleUserInput} placeholder="请输入用户名" placeholderTextColor={"#CCCCCC"}
                style={{
                    borderStyle: 'solid',
                    borderWidth: 2,
                    borderColor: '#CCCCCC',
                    borderRadius: 5,
                    padding: 0,
                    width: '70%',
                    fontSize: 20,
                    marginTop: 60
                }}>

            </TextInput>
            <TextInput onChangeText={hfHandlePassInput} placeholder="请输入密码" placeholderTextColor={"#CCCCCC"}
                style={{
                    borderStyle: 'solid',
                    borderWidth: 2,
                    borderColor: '#CCCCCC',
                    borderRadius: 5,
                    padding: 0,
                    width: '70%',
                    fontSize: 20,
                    marginTop: 30
                }}>

            </TextInput>
            <TouchableOpacity onPress={hfHandleLogin} style={{
                backgroundColor: '#44cef6',
                marginTop: 40,
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 30,
                paddingRight: 30,
                borderColor: '#CCCCCC',
                borderRadius: 5
            }}>
                <Text style={{
                    fontSize: 20,
                    marginTop: -4
                }}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hfHandleRegist} style={{
                backgroundColor: '#44cef6',
                marginTop: 40,
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 30,
                paddingRight: 30,
                borderColor: '#CCCCCC',
                borderRadius: 5
            }}>
                <Text style={{
                    fontSize: 20,
                    marginTop: -4
                }}>注册</Text>
            </TouchableOpacity>
        </>
    )
}

const Stack = createNativeStackNavigator();



function HfStartView() {
    return (
        <View style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 60
        }}>
            <HfStartTitle></HfStartTitle>
            <HfLoginBand></HfLoginBand>
        </View>
    )
}

function Mycomponent() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Login" component={HfStartView}></Stack.Screen>
                <Stack.Screen name="Main" component={HfMainView} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Mycomponent;