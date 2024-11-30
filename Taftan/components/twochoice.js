// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownPicker from 'react-native-dropdown-picker';
import SimpleScrollPicker from './Picker';

const TwoChoice = ({ active, setActive, texts }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.buttonRight, {backgroundColor: active ? colors.blue : colors.white}]} onPress={() => setActive(!active)}>
                <Text style={[styles.text, {color: active ? colors.white : colors.text}]}>{texts[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonLeft, {backgroundColor: !active ? colors.blue : colors.white}]} onPress={() => setActive(!active)}>
                <Text style={[styles.text, {color: !active ? colors.white : colors.text}]}>{texts[1]}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row-reverse',
    },
    buttonRight: {
        width: '50%',
        borderWidth: 1,
        borderColor: colors.blue,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    buttonLeft: {
        width: '50%',
        borderWidth: 1,
        borderColor: colors.blue,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    text: {
        textAlign: 'center',
        paddingVertical: 4,
        fontFamily: 'iransans',
        fontSize: 14,
    },
});

export default TwoChoice;