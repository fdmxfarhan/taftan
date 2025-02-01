// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import DropDownObj from './dropdown-obj';
import styles from '../styles/reqView';

const ReportInfo = ({ }) => {
    var [testVal, setTestVal] = useState('-');
    var testList = [{ title: 'label1' }, { title: 'label2' }, { title: 'label3' }, { title: 'label4' }, { title: 'label5' }, { title: 'label6' }, { title: 'label7' }, { title: 'label8' }, { title: 'label9' }, { title: 'label10' },]


    return (
        <ScrollView style={styles.contents}>
            <View style={styles.dualInputView}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>شماره کار</Text>
                    <TextInput style={styles.textInput} placeholder="شماره کار" value={testVal} />
                    {/* <DropDownObj disabled={true} list={testList} getLabel={(item) => item.title} setValue={(item) => { }} value={testVal} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} /> */}
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>مشتری</Text>
                    <TextInput style={styles.textInput} placeholder="مشتری" value={testVal} />
                </View>
            </View>
            <View style={styles.dualInputView}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>سرویس</Text>
                    <TextInput style={styles.textInput} placeholder="سرویس" value={testVal} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>تاریخ ثبت درخواست</Text>
                    <TextInput style={styles.textInput} placeholder="تاریخ ثبت درخواست" value={testVal} />
                </View>
            </View>
            <View style={styles.dualInputView}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>دفتر عملیاتی</Text>
                    <View style={styles.inputWithActionView}>
                        <TextInput style={[styles.inputWithActionInput, {width: '64%'}]} placeholder="دفتر عملیاتی" value={testVal} />
                        <TouchableOpacity style={[styles.inputWithActionButton, {width: '20%'}]} onPress={() => { }}>
                            <Ionicons style={styles.inputWithActionIcon} name={'information-circle'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>گروه سرویس</Text>
                    <TextInput style={styles.textInput} placeholder="گروه سرویس" value={testVal} />
                </View>
            </View>
            <View style={styles.dualInputView}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>نام دستگاه</Text>
                    <TextInput style={styles.textInput} placeholder="نام دستگاه" value={testVal} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>سریال دستگاه</Text>
                    <TextInput style={styles.textInput} placeholder="سریال دستگاه" value={testVal} />
                </View>
            </View>
            <View style={styles.dualInputView}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>ترمینال دستگاه</Text>
                    <View style={styles.inputWithActionView}>
                        <TextInput style={[styles.inputWithActionInput, { width: '64%' }]} placeholder="ترمینال دستگاه" value={testVal} />
                        <TouchableOpacity style={[styles.inputWithActionButton, {width: '20%'}]} onPress={() => { }}>
                            <Ionicons style={styles.inputWithActionIcon} name={'information-circle'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>نام واحد سازمانی</Text>
                    <TextInput style={styles.textInput} placeholder="نام واحد سازمانی" value={testVal} />
                </View>
            </View>
            <View style={styles.dualInputView}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>کد واحد سازمانی</Text>
                    <View style={styles.inputWithActionView}>
                        <TextInput style={[styles.inputWithActionInput, { width: '64%' }]} placeholder="کد واحد سازمانی" value={testVal} />
                        <TouchableOpacity style={[styles.inputWithActionButton, {width: '20%'}]} onPress={() => { }}>
                            <Ionicons style={styles.inputWithActionIcon} name={'information-circle'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>مدل دستگاه</Text>
                    <TextInput style={styles.textInput} placeholder="مدل دستگاه" value={testVal} />
                </View>
            </View>
        </ScrollView>
    );
};

// const styles = StyleSheet.create({
//     contents: {
//         marginTop: 10,
//     },
//     dualInputView: {
//         flexDirection: 'row-reverse',
//         marginBottom: 10,
//     },
//     singleColView: {
//         width: '95%',
//         marginHorizontal: 'auto',
//         paddingBottom: 10,
//     },
//     dualInputPart: {
//         width: '46%',
//         marginRight: '3%',
//     },
//     label: {
//         fontFamily: 'iransans',
//         fontSize: 12,
//         color: colors.text,
//     },
//     content: {
//         flex: 1,
//         width: '100%',
//     },
//     dropdown: {
//         backgroundColor: colors.antiflashWhite,
//         borderWidth: 1,
//         borderColor: colors.timberwolf,
//         borderRadius: 7,
//         width: '100%',
//         marginHorizontal: 0,
//         alignContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 10,
//     },
//     dropdownText: {
//         paddingVertical: 5,
//         width: '100%',
//         fontFamily: 'iransans',
//         fontSize: 12,
//         color: colors.text,
//         textAlign: 'right',
//         direction: 'rtl',
//     },
//     textInput: {
//         borderColor: colors.antiflashWhite,
//         borderWidth: 1,
//         width: '100%',
//         margin: 'auto',
//         fontFamily: 'iransans',
//         fontSize: 13,
//         backgroundColor: colors.timberwolf,
//         borderRadius: 8,
//         textAlign: 'right',
//         direction: 'rtl',
//         paddingVertical: 2,
//         paddingHorizontal: 15,
//         color: colors.text,
//     },
//     textArea: {
//         borderColor: colors.lightgray,
//         borderWidth: 1,
//         width: '100%',
//         margin: 'auto',
//         fontFamily: 'iransans',
//         fontSize: 13,
//         backgroundColor: colors.white,
//         borderRadius: 8,
//         textAlign: 'right',
//         direction: 'rtl',
//         paddingVertical: 4,
//         paddingHorizontal: 15,
//     },
//     breakline: {
//         backgroundColor: colors.lightgray,
//         width: '100%',
//         marginHorizontal: 'auto',
//         height: 5,
//         // borderRadius: 4,
//         marginBottom: 20,
//         marginTop: 10,
//     },
//     detailedInputView: {
//         flexDirection: 'row-reverse',
//         width: '100%',
//     },
//     dateVal: {
//         fontFamily: 'iransans',
//         fontSize: 12,
//         width: '78%',
//         backgroundColor: colors.white,
//         borderColor: colors.lightgray,
//         borderWidth: 1,
//         minHeight: 35,
//         borderRadius: 8,
//         alignContent: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         paddingVertical: 6,
//     },
//     dateButton: {
//         backgroundColor: colors.blue,
//         paddingHorizontal: 9,
//         borderRadius: 7,
//         marginRight: 7,
//         alignContent: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginVertical: 1,
//     },
//     dateButtonIcon: {
//         color: colors.white,
//         fontSize: 18,
//     },
// });

export default ReportInfo;