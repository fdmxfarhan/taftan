// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownPicker from 'react-native-dropdown-picker';
import SimpleScrollPicker from './Picker';

const PersianDatePicker = ({ visible, setDay, setMonth, setYear, onsubmit }) => {
    var [dayInputList, setdayInputList] = useState([]);
    var [monthInputList, setmonthInputList] = useState([]);
    var [yearInputList, setyearInputList] = useState([]);
    useEffect(() => {
        dayInputList = [];
        for (var i = 0; i < 31; i++) dayInputList.push(`${i + 1}`);
        dayInputList.push('');
        setdayInputList(dayInputList);
        monthInputList = [];
        for (var i = 0; i < 12; i++) monthInputList.push(`${i + 1}`);
        monthInputList.push('');
        setmonthInputList(monthInputList);
        yearInputList = [];
        for (var i = 0; i < 10; i++) yearInputList.push(`${i + 1403}`);
        yearInputList.push('');
        setyearInputList(yearInputList);
    }, [])

    if (visible) {
        return (
            <Modal transparent visible={visible} animationType="slide">
                <View style={styles.container}>
                    <View style={styles.datePickerView}>
                        <View style={styles.datePickerItem}>
                            <SimpleScrollPicker items={dayInputList} defaultValue="1" onValueChange={setDay} />
                        </View>
                        <View style={styles.datePickerItem}>
                            <SimpleScrollPicker items={monthInputList} defaultValue="1" onValueChange={setMonth} />
                        </View>
                        <View style={styles.datePickerItem}>
                            <SimpleScrollPicker items={yearInputList} defaultValue="1403" onValueChange={setYear} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonView} onPress={onsubmit}>
                        <Text style={styles.buttonText}> ثبت تاریخ </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    } else return null;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        paddingBottom: 20,
        paddingTop: 20,
    },
    datePickerView: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        width: '93%',
        marginHorizontal: 'auto',
    },
    datePickerItem: {
        width: '30%',
        display: 'flex',
        marginHorizontal: '1.6666%',
        marginVertical: 20,
    },
    buttonView: {
        backgroundColor: colors.blue,
        width: '90%',
        marginHorizontal: 'auto',
        marginVertical: 10,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontFamily: 'iransansbold',
        fontSize: 12,
        textAlign: 'center',
        color: colors.white,
    },
    dropdown: {
        borderWidth: 0,
        borderColor: colors.lightgray,
        borderRadius: 5,
    },
    dropdownContainer: {
        borderWidth: 0,
        borderColor: colors.lightgray,
        maxHeight: 100,
    },
});

export default PersianDatePicker;