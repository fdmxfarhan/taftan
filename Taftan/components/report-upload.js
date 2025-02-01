// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import DropDownObj from './dropdown-obj';
import CheckBox from './checkbox';
import styles from '../styles/reqView';

const ReportUploadView = ({ }) => {

    return (
        <ScrollView style={styleslocal.contents}>
            <Text style={styleslocal.sectionTitle}>توضیحات:</Text>

            <Text style={styles.label}>توضیحات کارشناس: </Text>
            <TextInput
                style={[styles.description, {height: 100}]}
                multiline={true}
                placeholder="توضیحات کارشناس"
                keyboardType={'default'}
            // value={descriptionAction}
            // onChange={text => setdescriptionAction(text.nativeEvent.text)}
            />
            <Text style={styles.label}>توضیحات نماینده مشتری: </Text>
            <TextInput
                style={[styles.description, {height: 100}]}
                multiline={true}
                placeholder="توضیحات نماینده مشتری"
                keyboardType={'default'}
            // value={descriptionAction}
            // onChange={text => setdescriptionAction(text.nativeEvent.text)}
            />
            <Text style={styleslocal.sectionTitle}>آپلود مدارک:</Text>
            <View style={styles.buttonsView}>
                <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { }}>
                        <Ionicons style={styles.buttonIcon} name="attach" />
                        <Text style={styles.buttonText}>تصویر گزارش کار</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { }}>
                        <Ionicons style={styles.buttonIcon} name="attach" />
                        <Text style={styles.buttonText}>فایل ضمیمه</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ height: 150, }} />
        </ScrollView>
    );
};

const styleslocal = StyleSheet.create({
    contents: {
        width: '100%',
        backgroundColor: colors.white,
    },
    sectionTitle: {
        fontFamily: 'iransansbold',
        fontSize: 12,
        width: '85%',
        marginHorizontal: 'auto',
        marginTop: 10,
        color: colors.black,
    },
    checkboxView: {
        flexDirection: 'row-reverse',
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 10,
    },
    checkboxIcon: {
        marginLeft: 10,
        paddingTop: 3,
        fontSize: 18,
    },
    checkboxText: {
        fontFamily: 'iransans',
        fontSize: 13,
    },
    nextTabButton: {
        backgroundColor: colors.blue,
        width: '90%',
        marginBottom: 10,
        marginHorizontal: 'auto',
        borderRadius: 7,
        paddingVertical: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    nextTabButtonText: {
        color: colors.white,
        fontFamily: 'iransansbold',
        fontSize: 14,
        textAlign: 'center',
    },
    nextTabButtonIcon: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingRight: 10,
    },
    checkbox: {
        // width: '60%',
        marginTop: 5,
    },
    submitButton: {
        width: '85%',
        marginHorizontal: '7.5%',
        marginTop: 15,
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
    uploadButton: {

    },
    uploadButtonText: {

    },
    uploadButtonIcon: {

    },
});

export default ReportUploadView;