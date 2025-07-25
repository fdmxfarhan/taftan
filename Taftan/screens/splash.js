import React, { useEffect, useState } from 'react';
import {
    Image,
    PermissionsAndroid,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import colors from '../components/colors';
import { request, PERMISSIONS } from 'react-native-permissions';
import { getAuthData } from '../services/auth';
import messaging from '@react-native-firebase/messaging';
import { GetUserConstraintTitleList } from '../services/constraint-get-user-constraint-title-list';
import storage from '../config/storage';

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
                // console.log('You can use the location');
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }
};
async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        // console.log('Authorization status:', authStatus);
    }
}
messaging().onMessage(async (remoteMessage) => {
    console.log('Foreground message received!', remoteMessage);
    // Display a custom notification or alert here.
});
const Splash = (props) => {
    var [location, setLocation] = useState(null);
    var [userAuthData, setuserAuthData] = useState(null);

    const getToken = async () => {
        const token = await messaging().getToken();
        console.log(token);
    }
    const sendRequests = async () => {
        var result = await GetUserConstraintTitleList(userAuthData.token);
        if(result.success){
            constraintid = result.data[0].Id;
            await storage.save({
                key: 'auth',
                data: {
                    token: userAuthData.token,
                    username: userAuthData.username,
                    password: userAuthData.password,
                    hash: userAuthData.hash,
                    RefreshToken: userAuthData.RefreshToken,
                    Constraintid: constraintid,
                },
            });
        }
    }

    const checkLogin = async () => {
        const authData = await getAuthData();
        if (authData) {
            // userAuthData = authData;
            setuserAuthData(authData);
            // sendRequests();
            props.navigation.navigate('Home');
        }
        else {
            console.log('4:Login User: ', authData);
            props.navigation.navigate('Login');
        }
    }
    useEffect(() => {
        requestReadStoragePermission();
        requestWriteStoragePermission();
        requestLocationPermission();
        requestUserPermission();
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        // getToken();

        // ca7kxuyUQ0KxAYs8mxYser:APA91bG_zmUxcjDqhpRig7_0xF-wamr607GqYuAxu9i_75KnAwu8OBlDPxWa413lvqoojmNMTvIob2Juwoi2n8bzPAbJKfcY24bRzaS252rpea-ItJP2ns8
        checkLogin();

    },[])
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.darkBackground} />
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