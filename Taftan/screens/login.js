import React, { useEffect, useRef, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, useColorScheme, View, TextInput, ToastAndroid, } from 'react-native';
import colors from '../components/colors';
import { login } from '../services/auth';
import LoadingView from '../components/loading';
import CryptoJS from 'crypto-js';
import storage from '../config/storage';
import { GetUserConstraintTitleList } from '../services/constraint-get-user-constraint-title-list';
import { savePreferences, readPreferences } from '../config/userPreferences';
import { LoadAllowedRequestAction } from '../services/req-allowed-actions';
import axios from 'axios';

const Login = (props) => {
    var [loginView, setLoginView] = useState('admin');
    var [username, setUsername] = useState('');
    var [password, setPassword] = useState('');
    var [isLoading, setIsLoading] = useState(false);
    var [userAuthData, setuserAuthData] = useState(null);
    const passwordInput = useRef(null);
    const [data, setData] = useState(null); // null to distinguish from empty array
    useEffect(() => {
        // Load saved credentials when component mounts
        // LoadAllowedRequestAction(394131, props.navigation).then(res => {
        //     // console.log(res);
        // });




        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', 'http://taftantest.adonistech.ir:8000/Services/Taftan/api/RequestController/LoadAllowedRequestAction?requestId=1340621');
        // xhr.setRequestHeader('Accessid', '65');
        // xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI3MDk4OCIsIlVzZXJLZXkiOiJlYjUxYzE3NS02YmUyLTQ3NzQtOGY4OS03ZWNlOTY1YWI4MmUiLCJVc2VyTmFtZSI6IjIxNzEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhLmtoYW5kYW5AYWRvbmlzdGVjaC5pciIsIkZ1bGxfTmFtZSI6Iti52YTbjCDYrtmG2K_Yp9mGIiwiTG9naW5WYWxpZCI6IjFlOTEwYmU2LTU1ZGMtNGY4Yy05MWMxLTFjZjcyMTllMWVhMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDkxMTQ5ODk3MzIiLCJTdWJTeXN0ZW1MaXN0IjoiW3tcIklkXCI6MTE2NyxcIlVzZXJJZFwiOjcwOTg4LFwiU3ViU3lzdGVtSWRcIjo0fV0iLCJuYmYiOjE3NTE5NjY2ODMsImV4cCI6MTc1MTk2NzI4MywiaXNzIjoiQWRvbmlzIiwiYXVkIjoiQWRvbmlzQ28ifQ.UriT9ddaZbiDsj1Pq_lNNnB6zHWk3uwtx4rZ6ahxKio');
        // xhr.setRequestHeader('ConstraintId', '65');
        // xhr.setRequestHeader('Accept-Language', 'en-US,en;q=0.9,fa;q=0.8,pt;q=0.7');
        // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        // xhr.setRequestHeader('Connection', 'keep-alive');
        // xhr.setRequestHeader('Referer', 'http://taftantest.adonistech.ir:8000/Taftan/');
        // xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36');
        // xhr.onload = function() {
        //     if (xhr.status === 200) {
        //         console.log('Response:', JSON.parse(xhr.responseText));
        //     }
        // };
        // xhr.send();



        // axios.get('http://taftantest.adonistech.ir:8000/Services/Taftan/api/RequestController/LoadAllowedRequestAction?requestId=1340621', {
        //     headers: {
        //         'Accessid': '65',
        //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI3MDk4OCIsIlVzZXJLZXkiOiJlYjUxYzE3NS02YmUyLTQ3NzQtOGY4OS03ZWNlOTY1YWI4MmUiLCJVc2VyTmFtZSI6IjIxNzEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhLmtoYW5kYW5AYWRvbmlzdGVjaC5pciIsIkZ1bGxfTmFtZSI6Iti52YTbjCDYrtmG2K_Yp9mGIiwiTG9naW5WYWxpZCI6IjFlOTEwYmU2LTU1ZGMtNGY4Yy05MWMxLTFjZjcyMTllMWVhMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDkxMTQ5ODk3MzIiLCJTdWJTeXN0ZW1MaXN0IjoiW3tcIklkXCI6MTE2NyxcIlVzZXJJZFwiOjcwOTg4LFwiU3ViU3lzdGVtSWRcIjo0fV0iLCJuYmYiOjE3NTE5NjY2ODMsImV4cCI6MTc1MTk2NzI4MywiaXNzIjoiQWRvbmlzIiwiYXVkIjoiQWRvbmlzQ28ifQ.UriT9ddaZbiDsj1Pq_lNNnB6zHWk3uwtx4rZ6ahxKio',
        //         'ConstraintId': '65',
        //         'Accept': 'application/json',
        //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        //     }
        // })
        // .then(response => {
        //     console.log('Axios Response:', response.data);
        // })
        // .catch(error => {
        //     console.log('Axios Error:', error);
        // });


        fetch('http://taftantest.adonistech.ir:8000/Services/Taftan/api/RequestController/LoadAllowedRequestAction?requestId=1340621', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI3MDk4OCIsIlVzZXJLZXkiOiJlYjUxYzE3NS02YmUyLTQ3NzQtOGY4OS03ZWNlOTY1YWI4MmUiLCJVc2VyTmFtZSI6IjIxNzEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhLmtoYW5kYW5AYWRvbmlzdGVjaC5pciIsIkZ1bGxfTmFtZSI6Iti52YTbjCDYrtmG2K_Yp9mGIiwiTG9naW5WYWxpZCI6IjFlOTEwYmU2LTU1ZGMtNGY4Yy05MWMxLTFjZjcyMTllMWVhMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDkxMTQ5ODk3MzIiLCJTdWJTeXN0ZW1MaXN0IjoiW3tcIklkXCI6MTE2NyxcIlVzZXJJZFwiOjcwOTg4LFwiU3ViU3lzdGVtSWRcIjo0fV0iLCJuYmYiOjE3NTE5NjY2ODMsImV4cCI6MTc1MTk2NzI4MywiaXNzIjoiQWRvbmlzIiwiYXVkIjoiQWRvbmlzQ28ifQ.UriT9ddaZbiDsj1Pq_lNNnB6zHWk3uwtx4rZ6ahxKio',
                'ConstraintId': '65',
                'Accessid': '65',
            }
        })


        // fetch('http://taftantest.adonistech.ir:8000/Services/Taftan/api/RequestController/LoadAllowedRequestAction?requestId=1340621', {
        //     method: 'GET',
        //     headers: {
        //         "Accessid": 65,
        //         "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI3MDk4OCIsIlVzZXJLZXkiOiJlYjUxYzE3NS02YmUyLTQ3NzQtOGY4OS03ZWNlOTY1YWI4MmUiLCJVc2VyTmFtZSI6IjIxNzEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhLmtoYW5kYW5AYWRvbmlzdGVjaC5pciIsIkZ1bGxfTmFtZSI6Iti52YTbjCDYrtmG2K_Yp9mGIiwiTG9naW5WYWxpZCI6ImFiYjljNWUwLWVjMTYtNGU0YS1hMDMzLTg2NjFkMWNiZmQ1ZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDkxMTQ5ODk3MzIiLCJTdWJTeXN0ZW1MaXN0IjoiW3tcIklkXCI6MTE2NyxcIlVzZXJJZFwiOjcwOTg4LFwiU3ViU3lzdGVtSWRcIjo0fV0iLCJuYmYiOjE3NTE5NjQ5MDEsImV4cCI6MTc1MTk2NTUwMSwiaXNzIjoiQWRvbmlzIiwiYXVkIjoiQWRvbmlzQ28ifQ.Nv7nyTH1xNtA7dqojqYyIdUMhHhWRQS0ReEeYSyyg-4',
        //         "ConstraintId": 65,
        //         'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8,pt;q=0.7',
        //         'Access-Control-Allow-Origin': '*',
        //         'Connection': 'keep-alive',
        //         'Referer': 'http://taftantest.adonistech.ir:8000/Taftan/',
        //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        //         // 'Cookie': 'SubSystemId=4; jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI3MDk4OCIsIlVzZXJLZXkiOiJlYjUxYzE3NS02YmUyLTQ3NzQtOGY4OS03ZWNlOTY1YWI4MmUiLCJVc2VyTmFtZSI6IjIxNzEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhLmtoYW5kYW5AYWRvbmlzdGVjaC5pciIsIkZ1bGxfTmFtZSI6Iti52YTbjCDYrtmG2K_Yp9mGIiwiTG9naW5WYWxpZCI6ImFiYjljNWUwLWVjMTYtNGU0YS1hMDMzLTg2NjFkMWNiZmQ1ZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDkxMTQ5ODk3MzIiLCJTdWJTeXN0ZW1MaXN0IjoiW3tcIklkXCI6MTE2NyxcIlVzZXJJZFwiOjcwOTg4LFwiU3ViU3lzdGVtSWRcIjo0fV0iLCJuYmYiOjE3NTE5NjQ5MDEsImV4cCI6MTc1MTk2NTUwMSwiaXNzIjoiQWRvbmlzIiwiYXVkIjoiQWRvbmlzQ28ifQ.Nv7nyTH1xNtA7dqojqYyIdUMhHhWRQS0ReEeYSyyg-4'
        //         // 'Accept': 'application/json',
        //         // 'Content-Type': 'application/json',
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Response:', data);
        //     })
        //     .catch(error => {
        //         console.error('Fetch error:', error);
        //     });










        loadSavedCredentials();
    }, []);

    const loadSavedCredentials = async () => {
        const savedPrefs = await readPreferences();
        if (savedPrefs && savedPrefs.username && savedPrefs.password) {
            setUsername(savedPrefs.username);
            setPassword(savedPrefs.password);
        }
    };

    const sendRequests = async () => {

    }

    const handleLogin = async () => {
        setIsLoading(true);
        const md5Hash = CryptoJS.MD5(password).toString();
        const result = await login(username, md5Hash);
        if (result.success) {
            var result2 = await GetUserConstraintTitleList(result.data.Token);
            if (result2.success) {
                constraintid = result2.data[0].Id;
                await storage.save({
                    key: 'auth',
                    data: {
                        token: result.data.Token,
                        username,
                        password,
                        hash: md5Hash,
                        RefreshToken: result.data.RefreshToken,
                        Constraintid: constraintid,
                    },
                });

                // Save credentials to user preferences
                await savePreferences({
                    username,
                    password
                });

                props.navigation.navigate('Home');
            }
            else ToastAndroid.show('اطلاعات کاربر یافت نشد', ToastAndroid.SHORT);
        }
        else {
            if (result.error.status == 400)
                ToastAndroid.show('نام کاربری / کلمه عبور صحیح نمی باشد', ToastAndroid.SHORT);
            else
                ToastAndroid.show('عدم اتصال به سرویس', ToastAndroid.SHORT);
        }
        setIsLoading(false);
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>به سامانه تفتان خوش آمدید</Text>

            {/* <View style={styles.viewSelector}>
                <TouchableOpacity style={[styles.viewSelectorButton, {backgroundColor: loginView == 'admin'? colors.blue : 'transparent'}]} onPress={() => setLoginView('admin')}>
                    <Text style={styles.viewSelectorText}>کارشناس</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.viewSelectorButton, {backgroundColor: loginView == 'user'? colors.blue : 'transparent'}]} onPress={() => setLoginView('user')}>
                    <Text style={styles.viewSelectorText}>مدیر</Text>
                </TouchableOpacity>
            </View> */}

            <View style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'کد پرسنلی'}
                    placeholderTextColor={colors.white}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    onChange={(text) => { setUsername(text.nativeEvent.text) }}
                    onSubmitEditing={() => passwordInput.current.focus()}
                />
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'کلمه عبور'}
                    secureTextEntry={true}
                    placeholderTextColor={colors.white}
                    ref={passwordInput}
                    keyboardType={'default'}
                    onSubmitEditing={() => { setIsLoading(true); handleLogin(); }}
                    onChange={(text) => { setPassword(text.nativeEvent.text) }}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => { setIsLoading(true); handleLogin(); }}>
                <Text style={styles.loginText}>ورود</Text>
            </TouchableOpacity>
            <LoadingView isLoading={isLoading} text={'در حال بررسی...'} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackground,
        alignContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 150,
    },
    title: {
        fontFamily: 'iransans',
        fontSize: 22,
        color: colors.lightBackground,
        marginTop: 40,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    textInput: {
        backgroundColor: 'transparent',
        borderBottomColor: colors.white,
        borderBottomWidth: 2,
        width: '80%',
        fontFamily: 'iransans',
        textAlign: 'center',
        borderWidth: 0,
        paddingVertical: 8,
        fontSize: 16,
        marginTop: 20,
        color: colors.white,
        borderRadius: 3,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    loginBtn: {
        backgroundColor: colors.blue,
        width: '80%',
        borderBottomWidth: 2,
        borderWidth: 0,
        borderBottomWidth: 0,
        paddingVertical: 8,
        marginTop: 50,
        borderRadius: 3,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    loginText: {
        textAlign: 'center',
        fontFamily: 'iransans',
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewSelector: {
        flexDirection: 'row-reverse',
        width: '80%',
        marginTop: 20,
    },
    viewSelectorButton: {
        flex: 1,
        borderBottomColor: colors.blue,
        borderBottomWidth: 1,
    },
    viewSelectorText: {
        textAlign: 'center',
        color: colors.white,
        paddingVertical: 10,

    },
});

export default Login;