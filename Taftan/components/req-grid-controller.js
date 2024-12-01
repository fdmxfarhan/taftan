import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownPicker from 'react-native-dropdown-picker';
import DropDown from './dropdown';

const ReqGridController = ({ setData, skipValue, setskipValue }) => {
    const [numOfRowsValue, setnumOfRowsValue] = useState(10);
    const [numOfRowsList, setnumOfRowsList] = useState([
        { label: '5', value: 5 },
        { label: '10', value: 10 },
        { label: '50', value: 50 },
        { label: '100', value: 100 },
    ]);
    return (
        <View style={styles.container}>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.button} onPress={() => setData(0, numOfRowsValue)}>
                    <Ionicons name={'play-skip-forward'} style={styles.chevron} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setData(skipValue-1, numOfRowsValue)}>
                    <Ionicons name={'play-forward'} style={styles.chevron} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => setData(skipValue+0, numOfRowsValue)}><Text style={[styles.number, styles.active]}>{skipValue + 0}</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => setData(skipValue+1, numOfRowsValue)}><Text style={[styles.number]}>{skipValue + 1}</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => setData(skipValue+2, numOfRowsValue)}><Text style={[styles.number]}>{skipValue + 2}</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => setData(skipValue+3, numOfRowsValue)}><Text style={[styles.number]}>{skipValue + 3}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.number}>...</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setData(skipValue+1, numOfRowsValue)}>
                    <Ionicons name={'play-back'} style={styles.chevron} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name={'play-skip-back'} style={styles.chevron} />
                </TouchableOpacity>
                <DropDown 
                    list={numOfRowsList} 
                    setValue={setnumOfRowsValue} 
                    value={numOfRowsValue} 
                    placeHolder={'تعداد'}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => setData(skipValue, val)} />
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'صفحه'}
                    placeholderTextColor={colors.text}
                    keyboardType={'number-pad'}
                    value={skipValue.toString()}
                    onChange={(text) => { setskipValue(text.nativeEvent.text) }}
                    onSubmitEditing={() => setData(skipValue, numOfRowsValue)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
    },
    buttonsView: {
        flexDirection: 'row-reverse',
    },
    chevron: {
        fontSize: 15,
        color: colors.text,
    },
    button: {
        paddingHorizontal: 9,
        paddingVertical: 5,
    },
    number: {
        fontFamily: 'iransans',
        fontSize: 15,
    },
    textInput: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 7,
        paddingVertical: 0,
        paddingHorizontal: 5,
        width: 50,
        fontSize: 13,
        textAlign: 'center',
    },
    dropdown: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 7,
        width: 50,
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    dropdownText: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        textAlign: 'center',
        width: '100%',
        fontSize: 14,
    },
    dropdownContainer: {
        padding: 0,
    },
    active: {
        color: colors.blue,
        fontFamily: 'iransasnbold'
    },
});

export default ReqGridController;