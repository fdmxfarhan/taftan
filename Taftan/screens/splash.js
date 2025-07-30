import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Animated,
  Platform,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { getAuthData } from '../services/auth';
import { requestPermissions } from '../src/utils/permissions';
import colors from '../components/colors';

const Splash = ({ navigation }) => {
  const logoScale = useRef(new Animated.Value(0.5)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateLogo = () => {
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 1500,
          delay: 500,
          useNativeDriver: true,
        }),
      ]).start();
    };

    const initialize = async () => {
      await requestPermissions();
      animateLogo();
      setupForegroundMessageListener();
      checkLogin();
    };

    initialize();
  }, []);

  const checkLogin = async () => {
    const authData = await getAuthData();
    setTimeout(() => {
      navigation.replace(authData ? 'Home' : 'Login');
    }, 2000);
  };

  const setupForegroundMessageListener = () => {
    return messaging().onMessage(async (remoteMessage) => {
      console.log('Foreground message received!', remoteMessage);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.darkBackground} barStyle="light-content" />
      <Animated.Image
        source={require('../assets/logo.png')}
        style={[
          styles.logo,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      />
      <Animated.Text style={[styles.title, { opacity: textOpacity }]}>
        سامانه تفتان
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: colors.lightBackground,
    fontFamily: Platform.select({
      ios: 'IRANSans',
      android: 'iransans',
    }),
  },
});

export default Splash;
