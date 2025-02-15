// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownObj from './dropdown-obj';
import styles from '../styles/reqView';

const ReportActions = ({ JobTitleList, setjobTitle, jobTitle, descriptionAction, setdescriptionAction, reportDetail }) => {
    var reportJobTitleList = [
        {
            "id": 1576901,
            "title": "تعویض Optical Indicator",
            "jobTitleId": 79,
            "description": "656565",
            "jobCode": "179"
        },
        {
            "id": 1576901,
            "title": "تعویض Optical Indicator",
            "jobTitleId": 79,
            "description": "656565",
            "jobCode": "179"
        },
        {
            "id": 1576901,
            "title": "تعویض Optical Indicator",
            "jobTitleId": 79,
            "description": "656565",
            "jobCode": "179"
        },
        {
            "id": 1576901,
            "title": "تعویض Optical Indicator",
            "jobTitleId": 79,
            "description": "656565",
            "jobCode": "179"
        },
        {
            "id": 1576901,
            "title": "تعویض Optical Indicator",
            "jobTitleId": 79,
            "description": "656565",
            "jobCode": "179"
        },
    ];
    return (
        <ScrollView style={styleslocal.contents}>
            {/* <Text style={styleslocal.sectionTitle}>اقدامات انجام شده:</Text> */}
            <Text style={styles.label}>کار: </Text>
            <DropDownObj
                list={JobTitleList}
                getLabel={(item) => item.title}
                getValue={(item) => item.title}
                setValue={(item) => { setjobTitle(item) }}
                value={jobTitle.title}
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                onSubmit={(val) => { }}
            />
            <Text style={styles.label}>توضیحات: </Text>
            <TextInput
                style={styles.description}
                placeholder="توضیحات"
                keyboardType={'default'}
                value={descriptionAction}
                onChange={text => setdescriptionAction(text.nativeEvent.text)}
            />
            <TouchableOpacity style={styleslocal.submitButton} >
                <Text style={styleslocal.submitButtonText}>تایید و اضافه</Text>
            </TouchableOpacity>


            <View style={styles.content}>
                {reportDetail.damageReportInfo.reportJobTitleList.map((item, index) => (
                    <View key={index} >
                        <View style={[styles.actionHistoryItem, { backgroundColor: colors.antiflashWhite, marginBottom: 10 }]}>
                            <View style={styles.actionHistoryRight}>
                                <Text style={styles.actionHistoryTitle}>{item.title} ({item.jobCode})</Text>
                                <Text style={styles.actionHistoryTitle2}>{item.description}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
            <View style={{ height: 150, }} />
        </ScrollView>
    );
};

const styleslocal = StyleSheet.create({
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

export default ReportActions;