// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';

const AreaDetailPopup = ({ modalEnable, setmodalEnable, areaDetail }) => {
    return (
        <View>
            <Popup modalVisible={modalEnable} setModalVisible={setmodalEnable}>
                <ScrollView style={styles.scroll}>
                    {areaDetail != null && (<View>
                        <Text style={styles.label}>استان: </Text>
                        <TextInput style={styles.textInput} placeholder="استان" value={areaDetail.provinceName} keyboardType={'default'} />

                        <Text style={styles.label}>شهر: </Text>
                        <TextInput style={styles.textInput} placeholder="شهر" value={areaDetail.cityName} keyboardType={'default'} />

                        <Text style={styles.label}>بخش: </Text>
                        <TextInput style={styles.textInput} placeholder="بخش" value={areaDetail.zoneName} keyboardType={'default'} />

                        <Text style={styles.label}>شماره تلفن: </Text>
                        <TextInput style={styles.textInput} placeholder="شماره تلفن" value={areaDetail.phoneNumber} keyboardType={'default'} />

                        <Text style={styles.label}>طول جغرافیایی: </Text>
                        <TextInput style={styles.textInput} placeholder="طول جغرافیایی" value={areaDetail.strLatitude} keyboardType={'default'} />

                        <Text style={styles.label}>عرض جغرافیایی: </Text>
                        <TextInput style={styles.textInput} placeholder="عرض جغرافیایی" value={areaDetail.strLongitude} keyboardType={'default'} />

                        <Text style={styles.label}>آدرس: </Text>
                        <TextInput style={styles.textInput} placeholder="آدرس" value={areaDetail.address} keyboardType={'default'} />
                    </View>)}
                </ScrollView>
                <TouchableOpacity style={styles.closeButton} onPress={() => setmodalEnable(false)}>
                    <Ionicons style={styles.closeIcon} name={"close"} size={30} color={colors.white} />
                    <Text style={styles.closeButtonText}>بستن</Text>
                </TouchableOpacity>
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
});

export default AreaDetailPopup;