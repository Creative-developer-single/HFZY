import axios from 'axios';
const ServerRootUrl = "https://myservice.f3.ttkt.cc/";
var fun_set = {};

export async function User_Login(dataset) {
    const response = await axios.post(ServerRootUrl + 'User/Login', {
        User_Name: dataset.UserName,
        User_Pass: dataset.UserPass,
        newStatus: dataset.newStatus,
        openid: ''
    }, {
        headers: {
            'Content-Type': 'application/json', // 设置请求头
            // 可以添加其他请求头信息
        }
    });
    console.log(response.data);
    if (response.data == 'Login Success')
        return 'Success';
    if (response.data == 'Wrong Password')
        return 'Failed';
    //axios.post(ServerRootUrl+'User/Login')
}

