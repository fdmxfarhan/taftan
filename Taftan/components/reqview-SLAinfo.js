import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';

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
});

export default ReqSLAInfo;