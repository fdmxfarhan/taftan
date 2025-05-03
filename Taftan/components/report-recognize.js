// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownObj from './dropdown-obj';
import styles from '../styles/reqView';
import { GetRecognitionExpertByDeviceTypeId } from '../services/get-recognition-expert';

const ReportRecognition = ({ damageReasonsList, damageReason, setdamageReason, recognitionExpertList, setrecognitionExpertList, recognitionExpert, setrecognitionExpert, description, setdescription, reportDetail, newRecognitionList, setNewRecognitionList }) => {
    useEffect(() => {

    }, [newRecognitionList]);
    var updateRecognitionExpertList = async (resaon) => {
        result = await GetRecognitionExpertByDeviceTypeId(reportDetail.requestReportInfo.deviceTypeKey, resaon.Id);
        if (result.success) {
            setrecognitionExpertList(result.data);
        } else ToastAndroid.show('عدم اتصال به سرویس', ToastAndroid.SHORT);
    }
    return (
        <ScrollView style={styleslocal.contents}>
            {/* <Text style={styleslocal.sectionTitle}>تشخیص کارشناس:</Text> */}
            <Text style={styleslocal.sectionTitle}>نوع خرابی: </Text>
            <DropDownObj list={damageReasonsList}
                getLabel={(item) => item.Title}
                getValue={(item) => item.Title}
                setValue={(item) => { setdamageReason(item); updateRecognitionExpertList(item); }}
                value={damageReason.Title}
                buttonStyle={styleslocal.dropdown}
                buttonTextStyle={styleslocal.dropdownText}
                onSubmit={(val) => { }}
            />
            <Text style={styleslocal.sectionTitle}>تشخیص سطح دوم: </Text>
            <DropDownObj list={recognitionExpertList}
                getLabel={(item) => item.title}
                getValue={(item) => item.title}
                setValue={(item) => { setrecognitionExpert(item) }}
                value={recognitionExpert.title}
                buttonStyle={styleslocal.dropdown}
                buttonTextStyle={styleslocal.dropdownText}
                onSubmit={(val) => { }}
            />
            <Text style={styleslocal.sectionTitle}>توضیحات: </Text>
            <TextInput style={styleslocal.textInput}
                placeholder="توضیحات"
                keyboardType={'default'}
                value={description}
                onChange={text => setdescription(text.nativeEvent.text)}
            />
            <TouchableOpacity style={styleslocal.submitButton} onPress={() => {
                if (damageReason.Title == 'نوع خرابی' || recognitionExpert.title == 'تشخیص سطح دوم') {
                    ToastAndroid.show('لطفا موارد خواسته شده را تکمیل کنید.', ToastAndroid.SHORT);
                } else {
                    setNewRecognitionList(prevList => [
                        ...prevList,
                        {
                            description: description,
                            serviceName: damageReason.Title,
                            serviceGroupTitle: reportDetail.requestReportInfo.serviceGroupName,
                            title: recognitionExpert.title,
                        }
                    ]);
                }
            }}>
                <Text style={styleslocal.submitButtonText}>تایید و اضافه</Text>
            </TouchableOpacity>
            <View style={styleslocal.content}>
                {newRecognitionList.map((item, index) => (
                    <View key={index} >
                        <View style={styleslocal.actionHistoryItem}>
                            <View style={styleslocal.actionHistoryRight}>
                                <Text style={styleslocal.actionHistoryTitle}>{item.serviceName} ({item.serviceGroupTitle})</Text>
                                <Text style={styleslocal.actionHistoryTitle2}>{item.title}</Text>
                                <Text style={styleslocal.actionResult}>{item.description}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styleslocal.deleteItemButton} onPress={() => {
                            setNewRecognitionList(prevList => prevList.filter((_, i) => i !== index));
                        }}>
                            <Ionicons name={'trash'} style={styleslocal.deleteItemIcon} />
                        </TouchableOpacity>
                    </View>
                ))}
                {reportDetail.damageReportInfo.reportRecognitionList.map((item, index) => (
                    <View key={index} >
                        <View style={styleslocal.actionHistoryItem}>
                            <View style={styleslocal.actionHistoryRight}>
                                <Text style={styleslocal.actionHistoryTitle}>{item.serviceName} ({item.serviceGroupTitle})</Text>
                                <Text style={styleslocal.actionHistoryTitle2}>{item.title}</Text>
                                <Text style={styleslocal.actionResult}>{item.description}</Text>
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
        left: 10,
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
        flexDirection: 'column',
        gap: 8,
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
        textAlign: 'right',
    },
    contents: {
        backgroundColor: colors.white,
        paddingTop: 15,
    }
});

export default ReportRecognition;