import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';
import styles from '../styles/reqView';

const ReqSLAInfo = ({ toggleslaInfo, slaInfo, item, requestDetail }) => {
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    var getDayHourMinutes = (time) =>{
        return(
            parseInt(time.substr(0, 2)).toString() + ' روز و ' +
            parseInt(time.substr(3, 2)).toString() + ' ساعت و ' +
            parseInt(time.substr(6, 2)).toString() + ' دقیقه '
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={toggleslaInfo}>
                <Text style={styles.title}>مهلت درخواست</Text>
                <Ionicons style={styles.chevron} name={slaInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {slaInfo && (<View style={styles.content}>
                <Text style={styles.label}>شماره قرارداد: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'شماره قرارداد'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.requestInfo.contractNum}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>زمان سپری شده: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'زمان سپری شده'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={getDayHourMinutes(requestDetail.requestInfo.requestActingTime)}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>مهلت زمان انجام درخواست: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'مهلت زمان انجام درخواست'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={getDayHourMinutes(requestDetail.requestInfo.requestDeadLineTime)}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
            </View>)}
        </View>
    );
};


export default ReqSLAInfo;