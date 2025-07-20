import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid,
    Image,
    KeyboardAvoidingView,
    Platform,
  } from 'react-native';import colors from '../components/colors';
import { login } from '../services/auth';
import LoadingView from '../components/loading';
import CryptoJS from 'crypto-js';
import storage from '../config/storage';
import { GetUserConstraintTitleList } from '../services/constraint-get-user-constraint-title-list';
import { savePreferences, readPreferences } from '../config/userPreferences';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const passwordInput = useRef(null);

    useEffect(() => {
        loadSavedCredentials();
    }, []);

    const loadSavedCredentials = async () => {
        const savedPrefs = await readPreferences();
        if (savedPrefs && savedPrefs.username && savedPrefs.password) {
            setUsername(savedPrefs.username);
            setPassword(savedPrefs.password);
            validateForm(savedPrefs.username, savedPrefs.password);
        }
    };

    const validateForm = (newUsername, newPassword) => {
        if (newUsername.trim() !== '' && newPassword.trim() !== '') {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleLogin = async () => {
        let hasError = false;
        if (!username) {
            setUsernameError('اجباری است');
            hasError = true;
        } else {
            setUsernameError('');
        }

        if (!password) {
            setPasswordError('اجباری است');
            hasError = true;
        } else {
            setPasswordError('');
        }

        if (hasError) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        const md5Hash = CryptoJS.MD5(password).toString();

        const result = await login(username, md5Hash);
        if (result.success) {
            console.log('result.data.Token',result.data.Token)
            var result2 = await GetUserConstraintTitleList(result.data.Token);
            console.log('GetUserConstraintTitleList' , result2)
            if (result2.success) {
                const constraintid = result2.data[0].Id;
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

                await savePreferences({ username, password });
                props.navigation.navigate('Home');
            } else {
                ToastAndroid.show('اطلاعات کاربر یافت نشد', ToastAndroid.SHORT);
            }
        } else {
            if (result.error && result.error.status == 400)
                ToastAndroid.show('نام کاربری / کلمه عبور صحیح نمی باشد', ToastAndroid.SHORT);
            else
                ToastAndroid.show('عدم اتصال به سرویس', ToastAndroid.SHORT);
        }
        setIsLoading(false);
    };

    return (
        <KeyboardAvoidingView
          style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
          </View>
    
          <Text style={styles.title}>به سامانه تفتان خوش آمدید</Text>
    
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={'کد پرسنلی'}
                placeholderTextColor={colors.lightgray}
                value={username}
                keyboardType={'default'}
                returnKeyType={'next'}
                onChange={(text) => {
                  const value = text.nativeEvent.text;
                  setUsername(value);
                  setUsernameError('');
                  validateForm(value, password);
                }}
                onSubmitEditing={() => passwordInput.current.focus()}
              />
            </View>
            {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
    
            <View style={styles.inputContainer}>
              <TextInput
                ref={passwordInput}
                style={styles.input}
                placeholder={'کلمه عبور'}
                placeholderTextColor={colors.lightgray}
                secureTextEntry
                value={password}
                onChange={(text) => {
                  const value = text.nativeEvent.text;
                  setPassword(value);
                  setPasswordError('');
                  validateForm(username, value);
                }}
                onSubmitEditing={handleLogin}
              />
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
    
            <TouchableOpacity
              style={[
                styles.loginButton,
                { backgroundColor: isFormValid ? colors.button : colors.gray }
              ]}
              activeOpacity={0.8}
              onPress={handleLogin}
              disabled={!isFormValid}
            >
              <Text style={styles.loginButtonText}>ورود</Text>
            </TouchableOpacity>
          </View>
    
          <LoadingView isLoading={isLoading} text={'در حال بررسی...'} />
        </KeyboardAvoidingView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.darkBackground,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
      },
      logoContainer: {
        width: 130,
        height: 130,
        borderRadius: 60,
        padding: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // پس‌زمینه نیمه شفاف برای شیشه‌ای
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',    // حاشیه روشن‌تر
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
      },
      title: {
        fontFamily: 'iransans',
        fontSize: 22,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
      },
      formContainer: {
        width: '100%',
        alignItems: 'center',
      },
      inputContainer: {
        width: '100%',
        borderRadius: 12,
        marginBottom: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // پس‌زمینه نیمه شفاف برای شیشه‌ای
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',    // حاشیه روشن‌تر
      },
      input: {
        fontFamily: 'iransans',
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        color: colors.white,
        width: '100%',
      },
      errorText: {
        color: colors.red,
        fontSize: 12,
        marginBottom: 8,
        textAlign: 'right',
        width: '100%',
        fontFamily: 'iransans',
      },
      loginButton: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
      },
      loginButtonText: {
        color: colors.white,
        fontFamily: 'iransans',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });
    

export default Login;
