// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';

const LastConfPopup = ({ lastConfModalEnable, setlastConfModalEnable, reqInfo }) => {
    const [configuration, setConfiguration] = useState([]);
    useEffect(() => {
        const sendRequest = async () => {
            var result = await loadDeviceConfigList(reqInfo.deviceId);
            if (result.success) {
                setConfiguration(result.data.Data);
            } else ToastAndroid.show('عدم اتصال به سرویس', ToastAndroid.SHORT);
        }
        sendRequest();
    }, [])
    return (
        <View>
            <Popup modalVisible={lastConfModalEnable} setModalVisible={setlastConfModalEnable}>
                {/* <View style={styles.titleView}>
                    <Text style={styles.titleText}>مدل ماژول</Text>
                    <Text style={styles.titleText}>سریال</Text>
                    <Text style={styles.titleText}>کد انبار</Text>
                    <Text style={styles.titleText}>ماژول</Text>
                </View> */}
                <ScrollView style={styles.scroll}>
                    {configuration.length > 0 ?
                        configuration.map((item, index) => (
                            <View key={item.id} style={styles.itemContainer}>
                                <Text style={styles.deviceName}>مدل ماژول: {item.deviceModuleModel}</Text>
                                <Text style={styles.damageTitle}>کد انبار: {item.code}</Text>
                                <Text style={styles.damageTitle}>ماژول: {item.deviceHWTitle}</Text>
                                <Text style={styles.date}>سریال: {item.serial}</Text>
                                {/* <View style={styles.stateView}>
                                    <Text style={styles.state}>{item.requestId}</Text>
                                </View> */}
                            </View>
                            // <View key={item.id} style={styles.itemView}>
                            //     <Text style={styles.itemText}>{item.deviceModuleModel}</Text>
                            //     <Text style={styles.itemText}>{item.serial}</Text>
                            //     <Text style={styles.itemText}>{item.code}</Text>
                            //     <Text style={styles.itemText}>{item.deviceHWTitle}</Text>
                            // </View>
                        ))
                        : (
                            <View>
                                <Text style={styles.noRecords}>موردی جهت نمایش وجود ندارد.</Text>
                            </View>
                        )}
                </ScrollView>
                <TouchableOpacity style={styles.closeButton} onPress={() => setlastConfModalEnable(false)}>
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
    titleView: {
        flexDirection: 'row-reverse',
    },
    titleText: {
        width: '25%',
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 12,
        backgroundColor: colors.gray,
        color: colors.white,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: colors.gray,
    },
    itemView: {
        flexDirection: 'row-reverse',
    },
    itemText: {
        width: '25%',
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 11,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: colors.lightgray,
    },
    closeButton: {
        backgroundColor: colors.blue,
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
    noRecords: {
        color: colors.text,
        fontFamily: 'iransans',
        fontSize: 14,
        paddingVertical: 10,
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
        textAlign: 'right',
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
});

export default LastConfPopup;