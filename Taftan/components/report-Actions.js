// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownObj from './dropdown-obj';
import styles from '../styles/reqView';
import { ToastAndroid } from 'react-native';

const ReportActions = ({ JobTitleList, setjobTitle, jobTitle, descriptionAction, setdescriptionAction, reportDetail, newactionList, setnewactionList, setIsValid }) => {
    var serviceObject = (detail) => {
        if (detail.requestReportInfo.serviceGroupId == 1) return detail.damageReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 2) return detail.pmReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 3) return detail.installReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 6) return detail.siteReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 7) return detail.projectReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 8) return detail.damageReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 9) return detail.siteReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 10) return detail.siteReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 11) return detail.siteReportInfo;
    }
    useEffect(() => {
        // setIsValid(true);
    }, []);
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
            <TouchableOpacity style={styleslocal.submitButton} onPress={() => {
                if (jobTitle.title === 'نوع خرابی') {
                    ToastAndroid.show('لطفا موارد خواسته شده را تکمیل نمایید', ToastAndroid.SHORT);
                    return;
                }
                
                // Check for duplicate title
                const isDuplicate = newactionList.some(item => item.title === jobTitle.title);
                if (isDuplicate) {
                    ToastAndroid.show('این مورد قبلا اضافه شده', ToastAndroid.SHORT);
                    return;
                }

                setnewactionList(prevList => [...prevList, { 
                    title: jobTitle.title, 
                    description: descriptionAction, 
                    jobTitleId: jobTitle.id,
                    
                }]);
                setIsValid(true);
            }}>
                <Text style={styleslocal.submitButtonText}>تایید و اضافه</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                {newactionList.map((item, index) => (
                    <View key={index} >
                        <View style={[styles.actionHistoryItem, { backgroundColor: colors.antiflashWhite, marginBottom: 10 }]}>
                            <View style={styles.actionHistoryRight}>
                                <Text style={styles.actionHistoryTitle}>{item.title}</Text>
                                <Text style={[styles.actionResult, { textAlign: 'right' }]}>{item.description}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.deleteItemButton} onPress={() => {
                            setnewactionList(prevList => prevList.filter((_, i) => i !== index));
                        }}>
                            <Ionicons name={'trash'} style={styles.deleteItemIcon} />
                        </TouchableOpacity> 
                    </View>
                ))} 
                {reportDetail && serviceObject(reportDetail).reportJobTitleList.map((item, index) => (
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
    deleteItemButton: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    deleteItemIcon: {
        fontSize: 18,
        color: colors.red,
    },

});

export default ReportActions;