import React, { useEffect, useState } from 'react';
import {
    Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import colors from '../components/colors';
import { request, PERMISSIONS } from 'react-native-permissions';
import { getAuthData } from '../services/auth';

const requestReadStoragePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // console.log("You can use the camera");
        } else {
            console.log("Read_Storage permission denied");
        }
    } catch (err) {
      console.warn(err);
    }
};

const requestWriteStoragePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // console.log("You can use the camera");
        } else {
            console.log("Write_Storage permission denied");
        }
    } catch (err) {
      console.warn(err);
    }
};

const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'App needs access to your location',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the location');
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }
};

const Splash = (props) => {    
    const [location, setLocation] = useState(null);
    useEffect(() => {
        requestReadStoragePermission();
        requestWriteStoragePermission();
        requestLocationPermission();
        const checkLogin = async () => {
            const authData = await getAuthData();
            if (authData && authData.token){
                console.log('Login User: ', authData);
                props.navigation.navigate('Home');
            }
            else {
                props.navigation.navigate('Login');
            }
        }
        checkLogin();
    })
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.darkBackground}/>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>سامانه تفتان</Text>
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
        width: 150,
        height: 150,
        marginTop: 300,
    },
    title: {
        fontFamily: 'iransans',
        fontSize: 22,
        color: colors.lightBackground,
        marginTop: 20,
        fontWeight: 'bold',

    },
});

export default Splash;