import React, { useEffect, useRef, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, useColorScheme, View, TextInput, ToastAndroid, } from 'react-native';
import colors from '../components/colors';
import { login } from '../services/auth';
import LoadingView from '../components/loading';
import CryptoJS from 'crypto-js';
import storage from '../config/storage';
import { GetUserConstraintTitleList } from '../services/constraint-get-user-constraint-title-list';

const Login = (props) => {
    var [loginView, setLoginView] = useState('admin');
    var [username, setUsername] = useState('');
    var [password, setPassword] = useState('');
    var [isLoading, setIsLoading] = useState(false);
    var [userAuthData, setuserAuthData] = useState(null);
    const passwordInput = useRef(null);

    const sendRequests = async () => {
        
    }


    const handleLogin = async () => {
        setIsLoading(true);
        const md5Hash = CryptoJS.MD5(password).toString();
        const result = await login(username, md5Hash);
        if (result.success) {
            console.log(result.data.to)
            var result2 = await GetUserConstraintTitleList(result.data.Token);
            if(result2.success){
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
                props.navigation.navigate('Home');
            }
            else ToastAndroid.show('اطلاعات کاربر یافت نشد', ToastAndroid.SHORT);
            // await storage.save({
            //     key: 'auth',
            //     data: {
            //         token: result.data.Token,
            //         username,
            //         password,
            //         hash: md5Hash,
            //         RefreshToken: result.data.RefreshToken,
            //     },
            // });
        }
        else {
            if(result.error.status == 400)
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