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

const NewActionPopup = ({ requestItem, actionPopupEN, setActionPopupEN }) => {
    const [actionTypeList, setActionTypeList] = useState([
        { label: 'مراجعه', value: '1' },
        { label: 'اقدام از طریق مانیتورینگ', value: '2' },
        { label: 'راهنمایی تلفنی', value: '3' },
    ]);
    const [actionTypeOpen, setactionTypeOpen] = useState(false);
    const [actionTypeValue, setactionTypeValue] = useState('1');
    const [selectedDay, setselectedDay] = useState('1');
    const [selectedMonth, setselectedMonth] = useState('1');
    const [selectedYear, setselectedYear] = useState('1303');
    const [datePickerVisible, setdatePickerVisible] = useState(false);
    const [startTimePickerVisible, setstartTimePickerVisible] = useState(false);
    const [endTimePickerVisible, setendTimePickerVisible] = useState(false);
    const [selectStartMin, setselectStartMin] = useState('00');
    const [selectStartHour, setselectStartHour] = useState('00');
    const [selectEndMin, setselectEndMin] = useState('00');
    const [selectEndHour, setselectEndHour] = useState('00');
    const [actionResult, setactionResult] = useState(true);
    const [actionDescription, setactionDescription] = useState('');

    const saveActionRequest = () => {
        const sendRequest = async () => {
            var result = await saveRequestActionReport({
                id: 0,
                Date: `${selectedYear}/${selectedMonth}/${selectedDay}`,
                startTime: `${selectStartHour}:${selectStartMin}`,
                endTime: `${selectEndHour}:${selectEndMin}`,
                actionTypeId: actionTypeValue,
                actinResult: actionResult,
                unsuccessfullActionReasonId: 0,
                unsuccessfullActionSide: true,
                description: actionDescription,
                requestId: requestItem.requestId.toString(),
                reportId: 0,
                fileName: ""
            });
            if (result.success) {
                ToastAndroid.show('اقدام جدید ثبت شد.', ToastAndroid.LONG);
                setActionPopupEN(false);
            }
            else {
                ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.LONG);
            }
        }
        sendRequest();
    }

    return (
        <View>
            <Popup modalVisible={actionPopupEN} setModalVisible={setActionPopupEN}>
                <Text style={styles.actionLabel}>نوع اقدام: </Text>
                <DropDownPicker
                    open={actionTypeOpen}
                    value={actionTypeValue}
                    items={actionTypeList}
                    setOpen={setactionTypeOpen}
                    setValue={setactionTypeValue}
                    setItems={setActionTypeList}
                    placeholder="انتخاب نوع اقدام"
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                />
                <Text style={styles.actionLabel}>تاریخ: </Text>
                <TouchableOpacity style={styles.dateInputButton} onPress={() => setdatePickerVisible(true)}>
                    <Text style={styles.dateInputButtonText}>{selectedYear}/{selectedMonth}/{selectedDay}</Text>
                </TouchableOpacity>
                <View style={styles.timeInputView}>
                    <View style={styles.timeInputViewItem}>
                        <Text style={styles.actionLabel}>ساعت شروع: </Text>
                        <TouchableOpacity style={styles.timeInputButton} onPress={() => setstartTimePickerVisible(true)}>
                            <Text style={styles.timeInputButtonText}>{selectStartHour}:{selectStartMin}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.timeInputViewItem}>
                        <Text style={styles.actionLabel}>ساعت پایان: </Text>
                        <TouchableOpacity style={styles.timeInputButton} onPress={() => setendTimePickerVisible(true)}>
                            <Text style={styles.timeInputButtonText}>{selectEndHour}:{selectEndMin}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.actionLabel}>نتیجه اقدام: </Text>
                <TwoChoice active={actionResult} setActive={setactionResult} texts={['موفق', 'ناموفق']} />
                <Text style={styles.actionLabel}>توضیحات: </Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="توضیحات"
                    multiline={true}
                    numberOfLines={5}
                    value={actionDescription}
                    keyboardType={'default'}
                    onChange={(text) => {setactionDescription(text)}}
                />
                <View style={styles.submitButtonsView}>
                    <TouchableOpacity style={styles.submitButton} onPress={saveActionRequest}>
                        <Text style={styles.submitButtonText}>تایید</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancleButton} onPress={() => setActionPopupEN(false)}>
                        <Text style={styles.cancleButtonText}>انصراف</Text>
                    </TouchableOpacity>
                </View>
            </Popup>
            <PersianDatePicker visible={datePickerVisible} setDay={setselectedDay} setMonth={setselectedMonth} setYear={setselectedYear} onsubmit={() => setdatePickerVisible(false)} />
            <TimePicker visible={startTimePickerVisible} setMins={setselectStartMin} setHours={setselectStartHour} onsubmit={() => setstartTimePickerVisible(false)} />
            <TimePicker visible={endTimePickerVisible} setMins={setselectEndMin} setHours={setselectEndHour} onsubmit={() => setendTimePickerVisible(false)} />
        </View>
    );
};

const styles = StyleSheet.create({
    actionLabel: {
        color: colors.text,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        margin: 'auto',
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
        backgroundColor: colors.darkGreen,
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
        backgroundColor: colors.red,
        borderRadius: 5,
    },
    cancleButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        textAlign: 'center',
        color: colors.white,
    },
});

export default NewActionPopup;