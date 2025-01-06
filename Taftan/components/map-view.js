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

const MapView = ({ longitude, latitude }) => {
    var openMap = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
        Linking.openURL(url).catch((err) => {
            console.log(err);
        })
    }
    return (
        <View style={styles.mapView}>
            <WebView
                nestedScrollEnabled={true}
                source={{
                    html: `
                        <!DOCTYPE html>
                        <html lang="fa">
                        <head>
                            <meta charset="UTF-8"/>
                            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
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
                            const neshanMap = new L.Map("map", {
                                key: "${MAP_API_KEY}",
                                maptype: "neshan",
                                poi: true,
                                traffic: true,
                                center: [${parseFloat(latitude)}, ${parseFloat(longitude)}],
                                zoom: 14,
                            })
                            let marker = L.marker([${parseFloat(latitude)}, ${parseFloat(longitude)}]).addTo(neshanMap);
                        </script>
                        </body>
                        </html>
                    ` }}
                // onMessage={handleWebViewMessage}
                style={styles.webviewmap}
            />
            <TouchableOpacity style={styles.navigateButton} onPress={openMap}>
                <Ionicons style={styles.navigateButtonIcon} name={'navigate'} />
                <Text style={styles.navigateButtonText}>مسیریابی</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mapView: {
        width: '100%',
        height: 300,
        marginBottom: 20,
        position: 'relative',
    },
    webviewmap: {
        width: width,
        height: height * 0.5,
    },
    navigateButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: colors.darkcyan,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        paddingVertical: 5,
        width: 150,
    },
    navigateButtonIcon: {
        color: colors.white,
        fontSize: 12,
        paddingLeft: 5,
    },
    navigateButtonText: {
        color: colors.white,
        fontFamily: 'iransans',
        fontSize: 14,
    },
});

export default MapView;