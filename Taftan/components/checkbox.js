import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, ToastAndroid, View } from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons

const CheckBox = ({ onChange, value, text, checkboxstyle, enabled }) => {
    if (!enabled) return (
        <View style={[styles.checkboxView, checkboxstyle]} onPress={onChange}>
            <Ionicons style={[styles.checkboxIcon, { color: colors.gray }]} name={value ? 'checkbox' : 'checkbox-outline'} />
            <Text style={styles.checkboxText}>{text}</Text>
        </View>

    );
    else return (
        <TouchableOpacity style={[styles.checkboxView, checkboxstyle]} onPress={onChange}>
            <Ionicons style={[styles.checkboxIcon, { color: value ? colors.darkGreen : colors.gray }]} name={value ? 'checkbox' : 'checkbox-outline'} />
            <Text style={[styles.checkboxText, value && { color: colors.black }]}>{text}</Text>
        </TouchableOpacity>
    );
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