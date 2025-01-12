import React, { useEffect, useRef, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    BackHandler,
    ToastAndroid,
    PermissionsAndroid
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import SearchView from '../components/search';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Cool Photo App Camera Permission',
                message:
                    'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.',
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
    const device = useCameraDevice('back')
    const { hasPermission } = useCameraPermission()


    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        setsearchEN(true);
        // props.navigation.navigate('Icons');
    };
    // const codeScanner = useCodeScanner({
    //     codeTypes: ['barcode', 'ean-13'],
    //     onCodeScanned: (codes) => {
    //         console.log(`Scanned ${codes.length} codes!`)
    //     }
    // })

    useEffect(() => {
        requestCameraPermission();
        console.log(hasPermission);
        // (async () => {
        //     const status = await Camera.requestCameraPermission();
        //     setPermission(status === 'authorized');
        // })();
    }, []);

    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="اسکن بارکد" leftIcon="search" rightIcon="menu" />
            <SearchView popupEN={searchEN} setPopupEN={setsearchEN} />
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation} />
            <Camera
                style={{flex: 1, width: '100%'}}
                device={device}
                isActive={true}
                // codeScanner={codeScanner}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: colors.lightBackground,
    },
});

export default CameraScan;