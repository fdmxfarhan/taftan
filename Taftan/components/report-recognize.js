// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import DropDownObj from './dropdown-obj';

const ReportRecognition = ({damageReasonsList, damageReason, setdamageReason, recognitionExpertList, recognitionExpert, setrecognitionExpert, description, setdescription  }) => {

    return (
        <ScrollView style={styles.contents}>
            {/* <Text style={styles.sectionTitle}>تشخیص کارشناس:</Text> */}
            <Text style={styles.label}>نوع خرابی: </Text>
            <DropDownObj
                list={damageReasonsList}
                getLabel={(item) => item.Title}
                getValue={(item) => item.Title}
                setValue={(item) => { setdamageReason(item.id) }}
                value={damageReason}
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                onSubmit={(val) => { }}
            />
            <Text style={styles.label}>تشخیص سطح دوم: </Text>
            <DropDownObj
                list={recognitionExpertList}
                getLabel={(item) => item.title}
                getValue={(item) => item.title}
                setValue={(item) => { setrecognitionExpert(item.id) }}
                value={recognitionExpert}
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                onSubmit={(val) => { }}
            />
            <Text style={styles.label}>توضیحات: </Text>
            <TextInput
                style={styles.textArea}
                placeholder="توضیحات"
                keyboardType={'default'}
                value={description}
                onChange={text => setdescription(text.nativeEvent.text)}
            />
            <TouchableOpacity style={styles.submitButton} >
                <Text style={styles.submitButtonText}>تایید و اضافه</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.white,
        paddingVertical: 15,
    },
    sectionTitle: {
        fontFamily: 'iransansbold',
        fontSize: 12,
        width: '85%',
        marginHorizontal: 'auto',
        marginTop: 10,
        color: colors.black,
    },
    label: {
        color: colors.text,
        fontSize: 11,
        marginTop: 5,
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
        paddingVertical: 2,
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
    dropdown: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 7,
        width: '85%',
        marginHorizontal: '7.5%',
        alignContent: 'center',
        alignItems: 'center',
    },
    dropdownText: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'iransans',
        fontSize: 14,
    },
    dropdownContainer: {
        padding: 0,
    },
    submitButtonsView: {
        width: '100%',
        flexDirection: 'row-reverse',
        marginTop: 25,
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
});

export default ReportRecognition;