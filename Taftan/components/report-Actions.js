// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownObj from './dropdown-obj';
import styles from '../styles/reqView';

const ReportActions = ({ JobTitleList, setjobTitle, jobTitle, descriptionAction, setdescriptionAction, reportDetail, newactionList, setnewactionList }) => {
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
    return (
        <ScrollView style={styleslocal.contents}>
            {/* <Text style={styleslocal.sectionTitle}>اقدامات انجام شده:</Text> */}
            <Text style={styleslocal.sectionTitle}>کار: </Text>
            <DropDownObj
                list={JobTitleList}
                getLabel={(item) => item.title}
                getValue={(item) => item.title}
                setValue={(item) => { setjobTitle(item) }}
                value={jobTitle.title}
                buttonStyle={styleslocal.dropdown}
                buttonTextStyle={styleslocal.dropdownText}
                onSubmit={(val) => { }}
            />
            <Text style={styleslocal.label}>توضیحات: </Text>
            <TextInput
                style={styleslocal.textInput}
                placeholder="توضیحات"
                keyboardType={'default'}
                value={descriptionAction}
                onChange={text => setdescriptionAction(text.nativeEvent.text)}
            />
            <TouchableOpacity style={styleslocal.submitButton} onPress={() => {
                setnewactionList(prevList => [...prevList, { title: jobTitle.title, description: descriptionAction }]);
            }}>
                <Text style={styleslocal.submitButtonText}>تایید و اضافه</Text>
            </TouchableOpacity>
            <View style={styleslocal.content}>
                {newactionList.map((item, index) => (
                    <View key={index} >
                        <View style={styleslocal.actionHistoryItem}>
                            <View style={styleslocal.actionHistoryRight}>
                                <Text style={styleslocal.actionHistoryTitle}>{item.title}</Text>
                                <Text style={styleslocal.actionResult}>{item.description}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styleslocal.deleteItemButton} onPress={() => {
                            setnewactionList(prevList => prevList.filter((_, i) => i !== index));
                        }}>
                            <Ionicons name={'trash'} style={styleslocal.deleteItemIcon} />
                        </TouchableOpacity> 
                    </View>
                ))} 
                {reportDetail && serviceObject(reportDetail).reportJobTitleList.map((item, index) => (
                    <View key={index} >
                        <View style={styleslocal.actionHistoryItem}>
                            <View style={styleslocal.actionHistoryRight}>
                                <Text style={styleslocal.actionHistoryTitle}>{item.title} ({item.jobCode})</Text>
                                <Text style={styleslocal.actionHistoryTitle2}>{item.description}</Text>
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
        fontSize: 14,
        width: '85%',
        marginHorizontal: 'auto',
        marginTop: 15,
        marginBottom: 5,
        color: colors.black,
    },
    label: {
        color: colors.text,
        fontSize: 12,
        marginTop: 8,
        marginBottom: 6,
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
        borderRadius: 10,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 8,
        paddingHorizontal: 15,
        color: colors.text,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    textArea: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.white,
        borderRadius: 10,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 8,
        paddingHorizontal: 15,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    dropdown: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 10,
        width: '85%',
        marginHorizontal: '7.5%',
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    dropdownText: {
        paddingVertical: 8,
        paddingHorizontal: 8,
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
        marginTop: 20,
        paddingVertical: 10,
        backgroundColor: colors.emerald,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    submitButtonText: {
        fontFamily: 'iransansbold',
        fontSize: 15,
        textAlign: 'center',
        color: colors.white,
    },
    deleteItemButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: colors.white,
        padding: 6,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    deleteItemIcon: {
        fontSize: 20,
        color: colors.red,
    },
    actionHistoryItem: {
        backgroundColor: colors.antiflashWhite,
        marginBottom: 12,
        borderRadius: 10,
        padding: 12,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    actionHistoryRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    actionHistoryTitle: {
        fontFamily: 'iransansbold',
        fontSize: 14,
        color: colors.black,
        marginBottom: 4,
    },
    actionHistoryTitle2: {
        fontFamily: 'iransans',
        fontSize: 13,
        color: colors.text,
        lineHeight: 20,
    },
    actionResult: {
        fontFamily: 'iransans',
        fontSize: 13,
        color: colors.text,
        lineHeight: 20,
    },
    contents: {
        backgroundColor: colors.white,
        paddingTop: 15,
    }
});

export default ReportActions;