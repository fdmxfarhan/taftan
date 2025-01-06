// components/NavBar.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';

const ReportChose = ({ popupEN, setPopupEN, navigation, requestItem, requestDetail }) => {
    return (
        <View>
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.actionLabel}>آیا مایل به افزودن گزارش کار هستید؟</Text>
                <View style={styles.submitButtonsView}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { setPopupEN(false); navigation.navigate('Report', { item: requestItem, requestDetail }); }}>
                        <Text style={styles.submitButtonText}>بله</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancleButton} onPress={() => setPopupEN(false)}>
                        <Text style={styles.cancleButtonText}>خیر</Text>
                    </TouchableOpacity>
                </View>
            </Popup>
        </View>
    );
};

const styles = StyleSheet.create({
    actionLabel: {
        color: colors.text,
        fontSize: 17,
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        fontFamily: 'iransansbold',
    },
    dropdown: {
        fontFamily: 'iransans',
        color: colors.text,
        borderColor: colors.gray,
        borderWidth: 1,
    },
    dropdownContainer: {
        fontFamily: 'iransans',
        color: colors.text,
        borderColor: colors.gray,
        borderWidth: 1,
    },
    dateInputButton: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    dateInputButtonText: {
        textAlign: 'right',
        color: colors.text,
        fontFamily: 'iransans',
        fontSize: 14,
    },
    timeInputView: {
        flexDirection: 'row-reverse',
        width: '100%',
    },
    timeInputViewItem: {
        width: '50%',
    },
    timeInputButton: {
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        paddingVertical: 4,
    },
    timeInputButtonText: {
        fontFamily: 'iransans',
        fontSize: 18,
        textAlign: 'center',
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
    submitButtonsView: {
        width: '100%',
        flexDirection: 'row-reverse',
        marginTop: 25,
    },
    submitButton: {
        width: '46%',
        marginHorizontal: '2%',
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
    cancleButton: {
        width: '46%',
        marginHorizontal: '2%',
        paddingVertical: 5,
        backgroundColor: colors.red3,
        borderRadius: 5,
    },
    cancleButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        textAlign: 'center',
        color: colors.white,
    },
});

export default ReportChose;