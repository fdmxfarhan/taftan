import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';
import PersianDatePicker from './persian-date-picker';
import TimePicker from './time-picker';
import TwoChoice from './twochoice';
import { getUserList } from '../services/req-load-user-list';
import UserDropDown from './dropdown-user';

const AssignPopup = ({ popupEN, setPopupEN, reqInfo, userList }) => {
    var [mainExpert, setmainExpert] = useState('');
    useEffect(() => {
        const sendRequest = async () => {
            
        }
        sendRequest();
    }, []);
    return (
        <View>
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.assignLabel}>کارشناس اصلی: </Text>
                <UserDropDown
                    list={userList}
                    setValue={setmainExpert}
                    value={mainExpert}
                    placeHolder={'انتخاب کارشناس'}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownContainer} />
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>ثبت کارشناس</Text>
                </TouchableOpacity>
                <View style={styles.grayline} />
                <Text style={styles.assignLabel}>کارشناس کمکی/فرعی: </Text>
                <UserDropDown
                    list={userList}
                    setValue={setmainExpert}
                    value={mainExpert}
                    placeHolder={'نام کارشناس'}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownContainer} />
                <UserDropDown
                    list={userList}
                    setValue={setmainExpert}
                    value={mainExpert}
                    placeHolder={'نوع کارشناس'}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownContainer} />
                <TouchableOpacity style={styles.submitButton} >
                    <Text style={styles.submitButtonText}>ثبت کارشناس</Text>
                </TouchableOpacity>
                <View style={styles.grayline} />
                <TouchableOpacity style={styles.cancleButton} onPress={() => setPopupEN(false)}>
                    <Text style={styles.cancleButtonText}>انصراف</Text>
                </TouchableOpacity>
            </Popup>
            {/* <PersianDatePicker visible={datePickerVisible} setDay={setselectedDay} setMonth={setselectedMonth} setYear={setselectedYear} onsubmit={() => setdatePickerVisible(false)} />
            <TimePicker visible={startTimePickerVisible} setMins={setselectStartMin} setHours={setselectStartHour} onsubmit={() => setstartTimePickerVisible(false)} />
            <TimePicker visible={endTimePickerVisible} setMins={setselectEndMin} setHours={setselectEndHour} onsubmit={() => setendTimePickerVisible(false)} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    assignLabel: {
        color: colors.text,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        margin: 'auto',
        fontFamily: 'iransansbold',
    },
    dropdown: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
    },
    dropdownContainer: {
        fontFamily: 'iransans',
        color: colors.text,
        width: '100%',
        paddingVertical: 7,
        paddingHorizontal: 10,
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
        marginTop: 20,
    },
    cancleButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        textAlign: 'center',
        color: colors.white,
    },
    grayline:{
        width: '100%',
        height: 1,
        backgroundColor: colors.gray,
        marginTop: 20,
    },
});

export default AssignPopup;