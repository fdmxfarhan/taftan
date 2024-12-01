import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';

const ReqExpertsInfo = ({ togglesupervisorInfo, supervisorInfo, item, requestDetail }) => {
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    const [supervisors, setSupervisors] = useState([
        { id: '1', name: 'فاطمه حمزه', type: 'اصلی' },
        { id: '2', name: 'فاطمه حمزه', type: 'اصلی' },
        { id: '3', name: 'فاطمه حمزه', type: 'اصلی' },
        { id: '4', name: 'فاطمه حمزه', type: 'اصلی' },
    ])
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={togglesupervisorInfo}>
                <Text style={styles.title}>کارشناس</Text>
                <Ionicons style={styles.chevron} name={supervisorInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {supervisorInfo && (<View style={styles.content}>
                {supervisors.map((item, index) => (
                    <View key={index} style={styles.supervisorItem}>
                        <Text style={styles.supervisorName}>{item.name}</Text>
                        <Text style={styles.supervisorType}>{item.type}</Text>
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
    supervisorItem: {
        flexDirection: 'row-reverse',
        width: '90%',
        marginHorizontal: 'auto',
        marginBottom: 8,
    },
    supervisorName: {
        flex: 1,
        textAlign: 'center',
        borderColor: colors.lightgray,
        borderWidth: 1,
        fontFamily: 'iransansbold',
        fontSize: 15,
        paddingVertical: 5,
        borderLeftWidth: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
    },
    supervisorType: {
        flex: 1,
        textAlign: 'center',
        borderColor: colors.lightgray,
        borderWidth: 1,
        fontFamily: 'iransans',
        fontSize: 15,
        paddingVertical: 5,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
});

export default ReqExpertsInfo;