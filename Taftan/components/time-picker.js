// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownPicker from 'react-native-dropdown-picker';
import SimpleScrollPicker from './Picker';

const TimePicker = ({ visible, setMins, setHours, onsubmit }) => {
    var [minutesInputList, setminutesInputList] = useState([]);
    var [hoursInputList, sethoursInputList] = useState([]);
    useEffect(() => {
        minutesInputList = [];
        for (var i = 0; i < 59; i++) {
            minutesInputList.push(i < 9 ? `0${i + 1}` : `${i + 1}`);
        }
        minutesInputList.push('');
        setminutesInputList(minutesInputList);
        hoursInputList = [];
        for (var i = 0; i < 24; i++) {
            hoursInputList.push(i < 9 ? `0${i + 1}` : `${i + 1}`);
        }
        hoursInputList.push('');
        sethoursInputList(hoursInputList);
    }, [])

    if (visible) {
        return (
            <Modal transparent visible={visible} animationType="slide">
                <View style={styles.container}>
                    <View style={styles.datePickerView}>
                        <View style={styles.datePickerItem}>
                            <SimpleScrollPicker items={minutesInputList} defaultValue="01" onValueChange={setMins} />
                        </View>
                        <View style={styles.datePickerItem}>
                            <SimpleScrollPicker items={hoursInputList} defaultValue="01" onValueChange={setHours} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonView} onPress={onsubmit}>
                        <Text style={styles.buttonText}> ثبت ساعت </Text>
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
        width: '40%',
        display: 'flex',
        marginHorizontal: '5%',
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

export default TimePicker;