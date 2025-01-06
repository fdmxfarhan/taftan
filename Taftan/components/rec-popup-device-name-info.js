// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import { WebView } from 'react-native-webview';
import { MAP_API_KEY } from '../config/consts';
const { width, height } = Dimensions.get('window');

const DeviceNameInfoPopup = ({ modalEnable, setmodalEnable, reqInfo, branchInfo, deviceDetail }) => {
    var openMap = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${deviceDetail.strLatitude},${deviceDetail.strLongitude}`;
        Linking.openURL(url).catch((err) => {
            console.log(err);
        })
    }
    return (
        <View>
            <Popup modalVisible={modalEnable} setModalVisible={setmodalEnable}>
                <View style={styles.mapView}>
                    <WebView
                        nestedScrollEnabled={true}
                        source={{
                            html: `
                                <!DOCTYPE html>
                                <html lang="fa">
                                <head>
                                    <meta charset="UTF-8"/>
                                    <meta name="viewport"
                                            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                                    <title>Neshan Leaflet Map</title>

                                    <link rel="stylesheet" href="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.css"/>
                                    <script src="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.js"></script>

                                    <style>
                                        body {
                                            height: 100vh;
                                            width: 100vw;
                                            margin: 0;
                                        }

                                        #map {
                                            height: 100%;
                                            width: 100%;
                                        }
                                    </style>
                                </head>
                                <body>
                                <div id="map"></div>
                                <script>

                                    // Create a Leaflet map
                                    const neshanMap = new L.Map("map", {
                                        key: "${MAP_API_KEY}",
                                        maptype: "neshan",
                                        poi: true,
                                        traffic: true,
                                        center: [${parseFloat(deviceDetail.strLatitude)}, ${parseFloat(deviceDetail.strLongitude)}],
                                        zoom: 14,
                                    })

                                    // add marker to map
                                    let marker = L.marker([${parseFloat(deviceDetail.strLatitude)}, ${parseFloat(deviceDetail.strLongitude)}]).addTo(neshanMap);

                                </script>
                                </body>
                                </html>
                            ` }}
                        // onMessage={handleWebViewMessage}
                        style={styles.webviewmap}
                    />
                </View>
                <TextInput style={styles.textInput} placeholder="آدرس" value={deviceDetail.installationAddress} keyboardType={'default'} onChange={(text) => { setDescription(text.nativeEvent.text) }} />
                <View style={styles.submitButtonsView}>
                    <TouchableOpacity style={styles.submitButton} onPress={openMap}>
                        <Text style={styles.submitButtonText}>مسیریابی</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancleButton} onPress={() => setmodalEnable(false)}>
                        <Text style={styles.cancleButtonText}>بستن</Text>
                    </TouchableOpacity>
                </View>
            </Popup>
        </View>
    );
};

const styles = StyleSheet.create({
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
    label: {
        color: colors.text,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        margin: 'auto',
        fontFamily: 'iransansbold',
    },
    textArea: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '100%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.white,
        borderRadius: 8,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
    },
    textInput: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '100%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.white,
        borderRadius: 8,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
        color: colors.text,
    },
    mapView: {
        width: '100%',
        height: 300,
        marginBottom: 20,
    },
    webviewmap: {
        width: width * 0.9,
        height: height * 0.5,
    },
    submitButtonsView: {
        width: '100%',
        flexDirection: 'row-reverse',
        marginTop: 25,
    },
    submitButton: {
        width: '46%',
        marginHorizontal: '2%',
        paddingVertical: 5,
        backgroundColor: colors.emerald,
        borderRadius: 5,
    },
    submitButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        textAlign: 'center',
        color: colors.white,
    },
    cancleButton: {
        width: '46%',
        marginHorizontal: '2%',
        paddingVertical: 5,
        backgroundColor: colors.red3,
        borderRadius: 5,
    },
    cancleButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        textAlign: 'center',
        color: colors.white,
    },
});

export default DeviceNameInfoPopup;