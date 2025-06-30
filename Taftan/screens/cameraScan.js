import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, BackHandler, ToastAndroid, PermissionsAndroid } from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import SearchView from '../components/search';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import { getDeviceListFilter } from '../services/device-get-list-filter';
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
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
const CameraScan = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [searchEN, setsearchEN] = useState(false);
    const [permission, setPermission] = useState(false);
    const device = useCameraDevice('back');
    const { hasPermission } = useCameraPermission();
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
                submitFilters(codes[0].value.toString());
            }
        }
    })
    useEffect(() => {
        requestCameraPermission();
        // (async () => {
        //     const status = await Camera.requestCameraPermission();
        //     setPermission(status === 'authorized');
        // })();
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
            if(devicesList.length > 0){
                console.log(devicesList[0].deviceSerial)
                props.navigation.navigate('DeviceDetailView', { item: devicesList[0] });
            }else ToastAndroid.show('دستگاه با این سریال یافت نشد.', ToastAndroid.SHORT)
        }
        else {
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.SHORT);
        }
    }
    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="اسکن بارکد" leftIcon="search" rightIcon="menu" />
            <SearchView popupEN={searchEN} setPopupEN={setsearchEN} navigation={props.navigation}/>
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation} />
            {hasPermission && device && (<Camera
                style={{ flex: 1, width: '100%', marginTop: 0, zIndex: 1, }}
                device={device}
                isActive={true}
                codeScanner={codeScanner}
            />)}

            <View style={styles.boxinfo}>
                <Text style={styles.boxText}>لطفا بارکد را در کادر زیر قرار دهید</Text>
                <View style={styles.boxBorder} />
                <Ionicons style={styles.boxIcon} name={'barcode-outline'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: colors.lightBackground,
        position: 'relative',
    },
    boxinfo: {
        position: 'absolute',
        zIndex: 100,
        top: 300,
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

export default CameraScan;