// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, PermissionsAndroid, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import { getDeviceListFilter } from '../services/device-get-list-filter';

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'دسترسی به دوربین',
                message: 'لطفا دسترسی به دوربین را فعال کنید.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
    } catch (err) {
        console.warn(err);
    }
};
const ScanPopup = ({ modalEnable, setmodalEnable, onCodeScanned }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [searchEN, setsearchEN] = useState(false);
    const [permission, setPermission] = useState(false);
    const device = useCameraDevice('back')
    const { hasPermission, requestPermission } = useCameraPermission()
    const [isActive, setIsActive] = useState(true);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        setsearchEN(true);
        // props.navigation.navigate('Icons');
    };
    const codeScanner = useCodeScanner({
        codeTypes: ['code-128', 'code-39', 'code-93'],
        onCodeScanned: (codes) => {
            if (codes.length > 0) {
                console.log(`scaned: ${codes[0].value}`);
                onCodeScanned(codes[0].value.toString());
            }
        }
    })
    useEffect(() => {
        (async () => {
            const status = await requestPermission();
            setPermission(status === 'authorized');
        })();
    }, []);
    const submitFilters = async (deviceSerial) => {
        var options = {
            skip: 0,
            take: 10,
            sort: [{ field: "id", dir: "desc" }],
            filter: {
                logic: "and",
                filters: [{ field: 'deviceSerial', operator: 'eq', value: deviceSerial }],
            }
        };
        var result = await getDeviceListFilter(options);
        if (result.success) {
            var devicesList = result.data.Data;
            if (devicesList.length > 0) {
                onCodeScanned(devicesList[0].deviceSerial);
                console.log(devicesList[0].deviceSerial);
                // props.navigation.navigate('DeviceDetailView', { item: devicesList[0] });
            } else ToastAndroid.show('دستگاه با این سریال یافت نشد.', ToastAndroid.SHORT)
        }
        else {
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.SHORT);
        }
    }
    return (
        <View>
            <Popup modalVisible={modalEnable} setModalVisible={setmodalEnable}>
                <View style={styles.container}>
                    {hasPermission && device && (
                        <Camera
                            style={[StyleSheet.absoluteFill]}
                            device={device}
                            isActive={isActive}
                            codeScanner={codeScanner}
                            enableZoomGesture={true}
                        />
                    )}

                    <View style={styles.boxinfo}>
                        <Text style={styles.boxText}>لطفا بارکد را در کادر زیر قرار دهید</Text>
                        <View style={styles.boxBorder} />
                        <Ionicons style={styles.boxIcon} name={'barcode-outline'} />
                    </View>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={() => setmodalEnable(false)}>
                    <Ionicons style={styles.closeIcon} name={"close"} size={30} color={colors.white} />
                    <Text style={styles.closeButtonText}>بستن</Text>
                </TouchableOpacity>
            </Popup>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 500,
        padding: 0,
        backgroundColor: colors.lightBackground,
        position: 'relative',
    },
    scroll: {
        width: '100%',
    },
    itemContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 0,
        backgroundColor: colors.lightergray,
        borderColor: colors.lightgray,
        borderWidth: 1,
        direction: 'rtl',
    },
    deviceName: {
        fontSize: 14,
        marginBottom: 2,
        fontFamily: 'iransansbold',
        direction: 'rtl',
        color: colors.darkBackground,
        textAlign: 'right',
    },
    damageTitle: {
        fontSize: 12,
        fontFamily: 'iransansbold',
        color: colors.gray,
    },
    textTitle: {
        fontSize: 12,
        fontFamily: 'iransansbold',
        color: colors.darkblue,
        textAlign: 'right',
        marginTop: 5,
    },
    date: {
        position: 'absolute',
        bottom: 5,
        left: 15,
        fontFamily: 'iransans',
        fontSize: 12,
    },
    stateView: {
        position: 'absolute',
        top: 5,
        left: 15,
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        backgroundColor: colors.red3,
        flexDirection: 'row-reverse',
        marginTop: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    closeIcon: {
        fontFamily: 'iransans',
        fontSize: 15,
        paddingTop: 8,
        paddingHorizontal: 2,
    },
    closeButtonText: {
        color: colors.white,
        fontFamily: 'iransans',
        fontSize: 14,
        paddingVertical: 4,
        paddingHorizontal: 20,
    },
    boxinfo: {
        position: 'absolute',
        zIndex: 100,
        top: 150,
        width: '80%',
        right: '10%',

    },
    boxBorder: {
        backgroundColor: 'transparent',
        borderColor: colors.white,
        borderWidth: 1,
        height: 150,
        borderRadius: 5,
    },
    boxText: {
        fontFamily: 'iransans',
        fontSize: 14,
        color: colors.white,
        textAlign: 'center',
        paddingBottom: 5,
    },
    boxIcon: {
        color: colors.white,
        fontSize: 40,
        marginHorizontal: 'auto',
        marginTop: 10
    },
});

export default ScanPopup;