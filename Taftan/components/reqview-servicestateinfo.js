import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';

const ReqServiceStateInfo = ({ toggleserviceStateInfo, serviceStateInfo, item, requestDetail }) => {
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    const [stateHistory, setstateHistory] = useState([
        // { id: '1', state: 'مشاهده مدیر', date: '1403/7/28', time: '12:43', description: 'این درخواست توسط مدیر مشاهده شد.' },
    ])
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={toggleserviceStateInfo}>
                <Text style={styles.title}>وضعیت سرویس</Text>
                <Ionicons style={styles.chevron} name={serviceStateInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {serviceStateInfo && (<View style={styles.content}>
                {stateHistory.map((item, index) => (
                    <View key={index} style={styles.stateItemView}>
                        <Text style={styles.stateItemTitle}>{item.state}</Text>
                        <View style={styles.stateDateView}>
                            <Ionicons style={styles.dateIcon} name="calendar-outline" size={30} color={colors.text} />
                            <Text style={styles.stateDateText}>{item.date}</Text>
                            <Ionicons style={styles.clockIcon} name="time-outline" size={30} color={colors.text} />
                            <Text style={styles.stateClockText}>{item.time}</Text>
                        </View>
                        <Text style={styles.stateDescText}>{item.description}</Text>
                    </View>
                ))}
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
    stateItemView: {
        width: '90%',
        margin: 'auto',
        marginBottom: 10,
        backgroundColor: colors.skyblue,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    stateItemTitle: {
        fontFamily: 'iransans',
        fontSize: 16,
        fontWeight: 'bold',
        position: 'relative',
        color: colors.black
    },
    stateDateView: {
        flexDirection: 'row-reverse',
        position: 'absolute',
        left: 10,
        top: 10,
    },
    dateIcon: {
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 10,
        color: colors.gray,
    },
    stateDateText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.gray,
    },
    clockIcon: {
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 10,
        color: colors.gray,
    },
    stateClockText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.gray,
    },
    stateDescText: {
        fontFamily: 'iransans',
        fontSize: 14,
        color: colors.lightDark,
        paddingTop: 3,
    },
});

export default ReqServiceStateInfo;