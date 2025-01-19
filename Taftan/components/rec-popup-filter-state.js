// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import AdvancedScrollPicker from './Picker-advanced';

const StateFilterPopup = ({ modalEnable, setmodalEnable, setWorkflowFilter }) => {
    var [workflowFilterList, setWorkflowFilterList] = useState([
        { label: 'ارجاع به دفتر', title: 'SendToOffice', checked: false },
        { label: 'مشاهده مدیر', title: 'OfficeView', checked: false },
        { label: 'در حال اقدام', title: 'Acting', checked: false },
        { label: 'بستن کارشناس', title: 'DoneExpert', checked: false },
        { label: 'بستن راهبر ', title: 'DoneLeader', checked: false },
        { label: 'بستن دفتر', title: 'DoneOffice', checked: false },
        { label: 'انتخاب دفتر', title: 'ChooseOffice', checked: false },
        { label: 'کنسل توسط کارشناس', title: 'CancelExpert', checked: false },
        { label: 'تایید کنسل توسط مدیر', title: 'CancelOffice', checked: false },
        { label: 'تایید کنسل توسط راهبر', title: 'CancelLeader', checked: false },
    ]);
    const toggleCheckbox = (index) => {
        const updatedList = workflowFilterList.map((item, idx) =>
            idx === index ? { ...item, checked: !item.checked } : item
        );
        setWorkflowFilterList(updatedList);
    };
    return (
        <View>
            <Popup modalVisible={modalEnable} setModalVisible={setmodalEnable}>
                {workflowFilterList.map((item, index) => (
                    <TouchableOpacity key={item.title} style={styles.checkBoxView} onPress={() => toggleCheckbox(index)}>
                        <Ionicons name={'checkbox'} style={[styles.checkboxIcon, { color: item.checked ? colors.darkGreen : colors.gray }]} />
                        <Text style={[styles.checkboxText, { color: item.checked ? colors.darkGreen : colors.text }]}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.submitButton} onPress={() => {
                    enabledworkflows = [];
                    for (let i = 0; i < workflowFilterList.length; i++) {
                        if(workflowFilterList[i].checked) enabledworkflows.push(workflowFilterList[i]);
                    }
                    setWorkflowFilter(enabledworkflows);
                    setmodalEnable(false);
                }}>
                    <Ionicons style={styles.submitIcon} name={"checkmark"} size={30} color={colors.white} />
                    <Text style={styles.submitButtonText}>تایید</Text>
                </TouchableOpacity>
            </Popup>
        </View>
    );
};

const styles = StyleSheet.create({
    scroll: {
        width: '100%',
    },
    submitButton: {
        backgroundColor: colors.blue,
        flexDirection: 'row-reverse',
        marginTop: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
        width: '90%',
        justifyContent: 'center'
    },
    submitIcon: {
        fontFamily: 'iransans',
        fontSize: 15,
        paddingTop: 8,
        paddingHorizontal: 2,
    },
    submitButtonText: {
        color: colors.white,
        fontFamily: 'iransans',
        fontSize: 14,
        paddingVertical: 4,
        paddingHorizontal: 20,
    },
    label: {
        color: colors.text,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        margin: 'auto',
        fontFamily: 'iransansbold',
    },
    textArea: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '100%',
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
    textInput: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '100%',
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
    checkBoxView: {
        flexDirection: 'row-reverse',
        paddingVertical: 10,
        width: '90%',
        marginHorizontal: 'auto',
    },
    checkboxIcon: {
        fontSize: 20,
        paddingLeft: 10,
    },
    checkboxText: {
        fontSize: 15,
        fontFamily: 'iransans',
        textAlign: 'center',
    },
});

export default StateFilterPopup;