import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons

const CheckBox = ({ onChange, value, text, checkboxstyle }) => {
    return (
        <TouchableOpacity style={[styles.checkboxView, checkboxstyle]} onPress={onChange}>
            <Ionicons style={[styles.checkboxIcon, { color: value ? colors.blue : colors.gray }]} name={value ? 'checkbox' : 'checkbox-outline'} />
            <Text style={styles.checkboxText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkboxView: {
        flexDirection: 'row-reverse',
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
});

export default CheckBox;