import React, { useEffect, useRef, useState } from 'react';
import {
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import colors from '../components/colors';

const Login = (props) => {
    var [loginView, setLoginView] = useState('admin');

    return(
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
            <View style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                <TextInput 
                    style={[styles.textInput]}
                    placeholder={'کد پرسنلی'}
                    placeholderTextColor={colors.white}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'number-pad'}
                    onChange={(text) => {
                        console.log('hello')
                    }}
                    />
                <TextInput 
                    style={[styles.textInput]}
                    placeholder={'کلمه عبور'}
                    secureTextEntry={true}
                    placeholderTextColor={colors.white}
                    // ref={passwordInput}
                    keyboardType={'number-pad'}
                    // onSubmitEditing={checkLogin}
                    // onChange={(text) => {
                    //     setPassword(text.nativeEvent.text)
                    // }}
                    />
            </View>
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={() => props.navigation.navigate('Home')}
                >
                <Text style={styles.loginText}>ورود</Text>
            </TouchableOpacity>
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
    textInput:{
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
    loginBtn:{
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
    loginText:{
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