import React, { useEffect, useRef, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    BackHandler,
    ToastAndroid
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import SearchView from '../components/search';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

const CameraScan = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [searchEN, setsearchEN] = useState(false);
    const [permission, setPermission] = useState(false);
    // const devices = useCameraDevices();
    // const device = devices.back;

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        setsearchEN(true); 
        // props.navigation.navigate('Icons');
    };

    // useEffect(() => {
    //     (async () => {
    //         const status = await Camera.requestCameraPermission();
    //         setPermission(status === 'authorized');
    //     })();
    // }, []);

    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="اسکن بارکد" leftIcon="search" rightIcon="menu" />
            <SearchView popupEN={searchEN} setPopupEN={setsearchEN} />
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation} />
            
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