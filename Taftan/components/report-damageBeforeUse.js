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
import { GetModuleInUserStore } from '../services/device-config-GetModuleInUserStore';
import { ToastAndroid } from 'react-native';
import { GetModuleSerialListByUserKeyModuleKey } from '../services/device-config-GetModuleSerialListByUserKeyModuleKey';

const ReportDamageBeforeUseView = ({ 
    setIsValid, 
    navigation, 
    moduleGroupKey, 
    officeKey, 
    selectedModule, 
    setSelectedModule, 
    selectedConsumedModuleSerial, 
    setselectedConsumedModuleSerial, 
    damageBeforeUse, 
    setdamageBeforeUse,
    moduleInUserStoreList,
    setModuleInUserStoreList,
    moduleSerialList,
    setModuleSerialList 
}) => {
    const updateModuleSerialList = async (moduleItem) => {
        var result = await GetModuleSerialListByUserKeyModuleKey(moduleItem.UserKey, moduleItem.ModuleKey, officeKey);
        if (result.success) {
            setModuleSerialList(result.data);
        }
        else {
            ToastAndroid.show('لیست سریال‌ها دریافت نشد.', ToastAndroid.SHORT);
        }
    }
    useEffect(() => {
        setIsValid(true);
    }, []);

    const updateModuleInUserStore = async () => {
        var result = await GetModuleInUserStore(moduleGroupKey, officeKey, navigation);
        if (result.success) {
            setModuleInUserStoreList(result.data);
        }
        else {
            ToastAndroid.show('لیست ماژول‌ها دریافت نشد.', ToastAndroid.SHORT);
        }
    }

    return (
        <ScrollView style={styleslocal.contents}>
            <Text style={styleslocal.sectionTitle}>اطلاعات قطعات:</Text>
            <CheckBox text={'خرابی قبل از بهره برداری'} value={damageBeforeUse} onChange={() => { setdamageBeforeUse(!damageBeforeUse); updateModuleInUserStore(); }} checkboxstyle={styleslocal.checkboxView} enabled={true} />
            {damageBeforeUse && (<View>
                <View style={[styles.dualInputView]}>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>ماژول: </Text>
                        <DropDownObj
                            list={moduleInUserStoreList}
                            getLabel={(item) => item.ModuleTitle}
                            getValue={(item) => item.ModuleTitle}
                            setValue={(item) => { setSelectedModule(item); updateModuleSerialList(item); }}
                            value={selectedModule?.ModuleTitle || ''}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={styles.dropdownText}
                            searchEN={true}
                        />
                    </View>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>سریال ماژول جدید: </Text>
                        <DropDownObj
                            list={moduleSerialList}
                            getLabel={(item) => item.Serial}
                            getValue={(item) => item.Serial}
                            setValue={(item) => { setselectedConsumedModuleSerial(item); }}
                            value={selectedConsumedModuleSerial?.Serial || ''}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={styles.dropdownText}
                            onSubmit={(val) => { }}
                        />
                    </View>
                </View>
                <View style={[styles.dualInputView]}>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>شرح خرابی: </Text>
                        <DropDownObj
                            list={[]}
                            getLabel={(item) => item}
                            getValue={(item) => item}
                            setValue={(item) => { }}
                            value={'asdf'}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={styles.dropdownText}
                            onSubmit={(val) => { }}
                        />
                    </View>
                </View>
                <Text style={styles.label}>توضیحات: </Text>
                <TextInput
                    style={styles.description}
                    placeholder="توضیحات"
                    keyboardType={'default'}
                // value={descriptionAction}
                // onChange={text => setdescriptionAction(text.nativeEvent.text)}
                />
                <TouchableOpacity style={styleslocal.submitButton} >
                    <Text style={styleslocal.submitButtonText}>تایید و اضافه</Text>
                </TouchableOpacity>
            </View>)}
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
});

export default ReportDamageBeforeUseView;