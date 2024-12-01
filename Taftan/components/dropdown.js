import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';
import PersianDatePicker from './persian-date-picker';
import TimePicker from './time-picker';
import TwoChoice from './twochoice';
import { saveRequestActionReport } from '../services/save-request-action-report';

const DropDown = ({ list, setValue, value, placeHolder, buttonStyle, buttonTextStyle, onSubmit }) => {
    const [numOfRowsOpen, setnumOfRowsOpen] = useState(false);

    const renderListItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            setnumOfRowsOpen(false);
            setValue(item.value);
            onSubmit(item.value);
            }}>
            <Text style={styles.itemText}>{item.label}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[buttonStyle, styles.placeHolderButton]} onPress={() => setnumOfRowsOpen(!numOfRowsOpen)}>
                <Text style={buttonTextStyle}>
                    {value}
                    <Ionicons name={'chevron-down'} style={styles.chevron} />
                </Text>
            </TouchableOpacity>
            {numOfRowsOpen && <View style={styles.listContainer}>
                <FlatList data={list} keyExtractor={item => item.value} renderItem={renderListItem}/>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    placeHolderButton: {
        flexDirection: 'row-reverse',
        position: 'relative',
    },
    listContainer: {
        position: 'absolute',
        bottom: -135,
        backgroundColor: colors.white,
        width: 50,
        right: 0,
        paddingHorizontal: 5,
        zIndex: 20,
    },
    itemText: {
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 13,
        paddingVertical: 5,
    },
    chevron: {
        paddingHorizontal: 5,
    },
});

export default DropDown;