import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, LayoutAnimation } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDown from './dropdown';

const ReqGridController = ({ setData, skipValue, setskipValue, filtersEN, setFiltersEN, toggleFiltersEN }) => {
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
                <TouchableOpacity style={styles.button} onPress={() => setData(skipValue - 1, numOfRowsValue)}>
                    <Ionicons name={'play-forward'} style={styles.chevron} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => setData(skipValue + 0, numOfRowsValue)}><Text style={[styles.number, styles.active]}>{skipValue + 0}</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => setData(skipValue + 1, numOfRowsValue)}><Text style={[styles.number]}>{skipValue + 1}</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => setData(skipValue + 2, numOfRowsValue)}><Text style={[styles.number]}>{skipValue + 2}</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => setData(skipValue + 3, numOfRowsValue)}><Text style={[styles.number]}>{skipValue + 3}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.number}>...</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setData(skipValue + 1, numOfRowsValue)}>
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
                <TouchableOpacity style={styles.filterButton} onPress={toggleFiltersEN}>
                    <Ionicons style={styles.filterButtonIcon} name={'funnel'} />
                </TouchableOpacity>
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
        paddingRight: 10,
        justifyContent: 'center',
    },
    chevron: {
        fontSize: 14,
        color: colors.text,
    },
    button: {
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 0,
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
    filterButton: {
        // backgroundColor: colors.blue,
        borderRadius: 7,
        marginRight: 6,
    },
    filterButtonIcon: {
        // color: colors.white,
        color: colors.text,
        fontSize: 16,
        paddingVertical: 7,
        paddingHorizontal: 10,
    },
    filterView: {
        backgroundColor: colors.lightBackground,
        paddingVertical: 10,
    },
    filterRow: {
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    label: {
        padding: 0,
        fontFamily: 'iransans',
        fontSize: 12,
        margin: 0,
        flex: 3,
        marginHorizontal: 5,
        textAlign: 'center',
        color: colors.text,
    },
    textInput4: {
        padding: 0,
        fontFamily: 'iransans',
        fontSize: 12,
        paddingVertical: 1,
        borderRadius: 7,
        margin: 0,
        flex: 4,
        marginHorizontal: 5,
        textAlign: 'right',
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        color: colors.text,
    },
    filterBtn: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        width: '40%',
        marginHorizontal: '5%',
        borderRadius: 7,
        marginTop: 10,
    },
    filterBtnIcon: {
        color: colors.white,
        fontSize: 13,
        paddingTop: 8,
        paddingLeft: 10,
    },
    filterBtnText: {
        fontFamily: 'iransans',
        fontSize: 13,
        color: colors.white,
        paddingVertical: 5,
    },
});

export default ReqGridController;