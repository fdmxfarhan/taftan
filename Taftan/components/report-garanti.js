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
import { GetWarrantyListByRequestId } from '../services/report-get-waranty-reasons';
import MultiSelectDropdown from './multi-select-dropdown';
const ReportGarantiView = ({ reportDetail, garantieConflict, setgarantieConflict, softwareProcess, setsoftwareProcess, serviceAndRepair, setserviceAndRepair, moduleExchange, setmoduleExchange }) => {
    var [usedComponents, setusedComponents] = useState(false);
    var [componentAction, setcomponentAction] = useState('تعویض');
    var [DOAorGarantieConflict, setDOAorGarantieConflict] = useState('هیچکدام');
    var [noRepairNeeded, setnoRepairNeeded] = useState(false);
    var [damageBeforeUse, setdamageBeforeUse] = useState(false);
    var [warrantyList, setwarrantyList] = useState([]);
    var [selectedWarranties, setSelectedWarranties] = useState([]);
    useEffect(() => {
        GetWarrantyListByRequestId(reportDetail.requestReportInfo.requestId).then(res => {
            setwarrantyList(res.data);
        });
    }, []);
    return (
        <ScrollView style={styleslocal.contents}>
            <Text style={styleslocal.sectionTitle}>اطلاعات نقض گارانتی:</Text>
            <CheckBox text={'سرویس شامل نقض گارانتی است'} value={garantieConflict} onChange={() => { setgarantieConflict(!garantieConflict) }} checkboxstyle={styleslocal.checkboxView} enabled={true} />
            {garantieConflict && (<View>
                <CheckBox text={'عملیات نرم افزاری'} value={softwareProcess} onChange={() => { setsoftwareProcess(!softwareProcess) }} checkboxstyle={styleslocal.checkboxView} enabled={garantieConflict} />
                <CheckBox text={'سرویس و تعمیر'} value={serviceAndRepair} onChange={() => { setserviceAndRepair(!serviceAndRepair) }} checkboxstyle={styleslocal.checkboxView} enabled={garantieConflict} />
                <CheckBox text={'تعویض ماژول'} value={moduleExchange} onChange={() => { setmoduleExchange(!moduleExchange) }} checkboxstyle={styleslocal.checkboxView} enabled={garantieConflict} />
                {(softwareProcess || serviceAndRepair || moduleExchange) && (<View>
                    <Text style={styles.label}>علت نقض گارانتی: </Text>
                    <MultiSelectDropdown
                        list={warrantyList}
                        selectedValues={selectedWarranties}
                        setSelectedValues={setSelectedWarranties}
                        placeHolder="انتخاب کنید"
                        buttonStyle={styles.dropdown}
                        buttonTextStyle={styles.dropdownText}
                        getLabel={(item) => item.description}
                        getValue={(item) => item.Id}
                        onSubmit={(val) => { }}
                    />
                    <Text style={styles.label}>توضیحات: </Text>
                    <TextInput
                        style={styles.description}
                        placeholder="توضیحات"
                        keyboardType={'default'}
                    // value={descriptionAction}
                    // onChange={text => setdescriptionAction(text.nativeEvent.text)}
                    />
                </View>)}
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

export default ReportGarantiView;