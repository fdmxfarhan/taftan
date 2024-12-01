// components/NavBar.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';
import PersianDatePicker from './persian-date-picker';
import TimePicker from './time-picker';
import TwoChoice from './twochoice';
import { saveRequestActionReport } from '../services/save-request-action-report';

const LastConfPopup = ({ lastConfModalEnable, setlastConfModalEnable, configuration }) => {
    
    return (
        <View>
            <Popup modalVisible={lastConfModalEnable} setModalVisible={setlastConfModalEnable}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>مدل ماژول</Text>
                    <Text style={styles.titleText}>سریال</Text>
                    <Text style={styles.titleText}>کد انبار</Text>
                    <Text style={styles.titleText}>ماژول</Text>
                </View>
                <ScrollView style={styles.scroll}>
                    {configuration.map((item, index) => (
                        <View key={index} style={styles.itemView}>
                            <Text style={styles.itemText}>{item.moduleModel}</Text>
                            <Text style={styles.itemText}>{item.serial}</Text>
                            <Text style={styles.itemText}>{item.warehouseCode}</Text>
                            <Text style={styles.itemText}>{item.module}</Text>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.closeButton} onPress={() => setlastConfModalEnable(false)}>
                    <Ionicons style={styles.closeIcon} name={"close"} size={30} color={colors.white} />
                    <Text style={styles.closeButtonText}>بستن</Text>
                </TouchableOpacity>
            </Popup>
        </View>
    );
};

const styles = StyleSheet.create({
    scroll: {

    },
    titleView: {
        flexDirection: 'row-reverse',
    },
    titleText: {
        width: '25%',
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 12,
        backgroundColor: colors.gray,
        color: colors.white,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: colors.gray,
    },
    itemView: {
        flexDirection: 'row-reverse',
    },
    itemText: {
        width: '25%',
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 11,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: colors.lightgray,
    },
    closeButton: {
        backgroundColor: colors.blue,
        flexDirection: 'row-reverse',
        marginTop: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    closeIcon: {
        fontFamily: 'iransans',
        fontSize: 15,
        paddingTop: 8,
        paddingHorizontal: 2,
    },
    closeButtonText: {
        color: colors.white,
        fontFamily: 'iransans',
        fontSize: 14,
        paddingVertical: 4,
        paddingHorizontal: 20,
    }
});

export default LastConfPopup;