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

const ReportDamageBeforeUseView = ({ }) => {
    var [garantieConflict, setgarantieConflict] = useState(false);
    var [softwareProcess, setsoftwareProcess] = useState(false);
    var [serviceAndRepair, setserviceAndRepair] = useState(false);
    var [moduleExchange, setmoduleExchange] = useState(false);
    var [usedComponents, setusedComponents] = useState(false);
    var [componentAction, setcomponentAction] = useState('تعویض');
    var [DOAorGarantieConflict, setDOAorGarantieConflict] = useState('هیچکدام');
    var [noRepairNeeded, setnoRepairNeeded] = useState(false);
    var [damageBeforeUse, setdamageBeforeUse] = useState(false);

    return (
        <ScrollView style={styleslocal.contents}>
            <Text style={styleslocal.sectionTitle}>اطلاعات قطعات:</Text>
            <CheckBox text={'خرابی قبل از بهره برداری'} value={damageBeforeUse} onChange={() => { setdamageBeforeUse(!damageBeforeUse) }} checkboxstyle={styleslocal.checkboxView} enabled={true} />
            {damageBeforeUse && (<View>
                <View style={[styles.dualInputView]}>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>ماژول: </Text>
                        <DropDownObj
                            list={[]}
                            getLabel={(item) => item.title}
                            getValue={(item) => item.title}
                            setValue={(item) => { }}
                            value={'asdf'}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={styles.dropdownText}
                            onSubmit={(val) => { }}
                        />
                    </View>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>مدل ماژول: </Text>
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
                <View style={[styles.dualInputView]}>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>سریال: </Text>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder={'سریال'}
                            placeholderTextColor={colors.text}
                            // onSubmitEditing={()=>passwordInput.current.focus()}
                            multiline={true}
                            returnKeyType={'next'}
                            keyboardType={'default'}
                        // value={requestDetail.projectInfo.deviceCount}
                        // editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                        />
                    </View>
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