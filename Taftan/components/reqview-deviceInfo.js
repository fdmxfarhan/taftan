import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';
import LastReqPopup from './rec-popup-lastrec';
import DeviceNameInfoPopup from './rec-popup-device-name-info';

const ReqDeviceInfo = ({ toggleDeviceInfo, deviceInfo, reqInfo, requestDetail, lastRequestList, deviceDetail, navigation }) => {
    var [lastConfModalEnable, setlastConfModalEnable] = useState(false);
    var [lastReqModalEnable, setlastReqModalEnable] = useState(false);
    var [DeviceNameInfoModalEnable, setDeviceNameInfoModalEnable] = useState(false);

    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    return (
        <View style={styles.container}>
            <LastConfPopup lastConfModalEnable={lastConfModalEnable} setlastConfModalEnable={setlastConfModalEnable} reqInfo={reqInfo} />
            <LastReqPopup lastRequestList={lastRequestList} modalEnable={lastReqModalEnable} setmodalEnable={setlastReqModalEnable} reqInfo={reqInfo} navigation={navigation} />
            <DeviceNameInfoPopup modalEnable={DeviceNameInfoModalEnable} setmodalEnable={setDeviceNameInfoModalEnable} deviceDetail={deviceDetail} />
            <TouchableOpacity style={styles.titleView} onPress={toggleDeviceInfo}>
                <Text style={styles.title}>دستگاه</Text>
                <Ionicons style={styles.chevron} name={deviceInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {deviceInfo && (<View style={styles.content}>
                <Text style={styles.label}>نام دستگاه: </Text>
                <View style={styles.inputWithActionView}>
                    <TextInput
                        multiline={true}
                        style={[styles.inputWithActionInput]}
                        placeholder={'نام دستگاه'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={requestDetail.damageInfo.deviceName}
                        editable={false}
                    // onChange={(text) => {
                    //     console.log('hello')
                    // }}
                    />
                    <TouchableOpacity style={styles.inputWithActionButton} onPress={() => setDeviceNameInfoModalEnable(true)} >
                        <Ionicons name={'information-circle'} style={styles.inputWithActionIcon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>سریال دستگاه: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'سریال دستگاه'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.damageInfo.deviceSerial}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>مدل دستگاه: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'مدل دستگاه'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.damageInfo.modelTitle}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>شماره ترمینال: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'شماره ترمینال'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.damageInfo.deviceTerminal}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <View style={styles.buttonsView}>
                    <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                        <TouchableOpacity style={styles.submitButton} onPress={() => setlastReqModalEnable(true)}>
                            <Ionicons style={styles.buttonIcon} name="desktop-outline" />
                            <Text style={styles.buttonText}>آخرین درخواست‌</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitButton} onPress={() => setlastConfModalEnable(true)}>
                            <Ionicons style={styles.buttonIcon} name="bookmark-outline" />
                            <Text style={styles.buttonText}>آخرین پیکر بندی</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.white,
        paddingVertical: 15,
    },
    titleView: {
        color: colors.dark,
        paddingHorizontal: '10%',
        marginTop: 20,
        position: 'relative',
        borderBottomColor: colors.lightblue,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    title: {
        fontFamily: 'iransansbold',
        fontSize: 16,
        color: colors.dark,
    },
    chevron: {
        position: 'absolute',
        top: 0,
        left: 30,
        fontSize: 18,
    },
    label: {
        color: colors.text,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransansbold',
    },
    textInput: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '85%',
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
    textArea: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '85%',
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
    buttonsView: {
        flexDirection: 'row-reverse',
        width: '90%',
        margin: 'auto',
    },
    submitButton: {
        backgroundColor: colors.blue,
        paddingHorizontal: 20,
        paddingVertical: 13,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        textAlign: 'center',
        flexDirection: 'row-reverse',
        direction: 'rtl',
    },
    buttonIcon: {
        color: colors.white,
        textAlign: 'center',
        paddingLeft: 10,
        fontSize: 16,
    },
    buttonText: {
        color: colors.white,
        fontSize: 13,
    },
    buttonScrollView: {
        direction: 'rtl',
        textAlign: 'right',
    },
    inputWithActionView: {
        flexDirection: 'row-reverse'
    },
    inputWithActionInput: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '73%',
        marginRight: '7.5%',
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
    inputWithActionButton: {
        width: '10%',
        marginRight: '2%',
        backgroundColor: colors.blue,
        borderRadius: 8,
    },
    inputWithActionIcon: {
        textAlign: 'center',
        marginVertical: 'auto',
        color: colors.white,
        fontSize: 20,
    },
});

export default ReqDeviceInfo;