import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';
import LastReqPopup from './rec-popup-lastrec';
import DeviceNameInfoPopup from './rec-popup-device-name-info';
import styles from '../styles/reqView';

const ReqDeviceInfo = ({ toggleDeviceInfo, deviceInfo, reqInfo, requestDetail, lastRequestList, deviceDetail, navigation }) => {
    var [lastConfModalEnable, setlastConfModalEnable] = useState(false);
    var [lastReqModalEnable, setlastReqModalEnable] = useState(false);
    var [DeviceNameInfoModalEnable, setDeviceNameInfoModalEnable] = useState(false);

    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    return (
        <View style={styles.container}>
            <LastConfPopup lastConfModalEnable={lastConfModalEnable} setlastConfModalEnable={setlastConfModalEnable} reqInfo={reqInfo} requestDetail={requestDetail} />
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
                        value={deviceDetail.deviceName}
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
                    value={deviceDetail.deviceSerial}
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
                    value={deviceDetail.modelTitle}
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
                    value={deviceDetail.deviceTerminal}
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

export default ReqDeviceInfo;