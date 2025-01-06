// components/NavBar.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';
import PersianDatePicker from './persian-date-picker';
import TimePicker from './time-picker';
import TwoChoice from './twochoice';
import { saveRequestActionReport } from '../services/report-save-request-action';
import { twoDigit } from '../config/consts';
import ReportChose from './rec-popup-report-chose';
import { GetUnsuccessfullActionReasonList } from '../services/get-full-action-reasons-list';
import DropDownObj from './dropdown-obj';
import CheckBox from './checkbox';

const NewActionPopup = ({ requestItem, popupEN, setPopupEN, actionTypeList, setactionTypeList, updateActionList, setreqActionList, navigation, requestDetail }) => {
    const [actionTypeOpen, setactionTypeOpen] = useState(false);
    const [actionTypeValue, setactionTypeValue] = useState('انتخاب کنید');
    const [actionTypeValueId, setactionTypeValueId] = useState('1');
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
    const [reportChoseEN, setreportChoseEN] = useState(false);
    const [unsuccessfullCustomer, setunsuccessfullCustomer] = useState(false);
    const [reasonsList, setreasonsList] = useState([]);
    const [unsuccessfullActionReasonId, setunsuccessfullActionReasonId] = useState('');
    const [unsuccessfullActionReason, setunsuccessfullActionReason] = useState('انتخاب کنید');

    var updateUnsuccessfullReasonsList = async () => {
        var result = await GetUnsuccessfullActionReasonList();
        setreasonsList(result.data);
    }

    const saveActionRequest = async () => {
        var startMin = parseInt(selectStartHour * 60 + selectStartMin);
        var endMin = parseInt(selectEndHour * 60 + selectEndMin);
        if (endMin <= startMin) {
            ToastAndroid.show('ساعت پایان نباید کوچکتر از ساعت شروع باشد.', ToastAndroid.SHORT);
            return;
        }
        var optionsSample = {
            "id": 0,
            "Date": "1403/10/01",
            "startTime": "10:00",
            "endTime": "10:37",
            "actionTypeId": 1,
            "actinResult": true,
            "unsuccessfullActionReasonId": 0,
            "unsuccessfullActionSide": true,
            "description": "dsafasdf",
            "requestId": 364041,
            "reportId": 0,
            "fileName": ""
        }
        var options = {
            "id": 0,
            "Date": `${selectedYear}/${twoDigit(selectedMonth)}/${twoDigit(selectedDay)}`,
            "startTime": `${selectStartHour}:${selectStartMin}`,
            "endTime": `${selectEndHour}:${selectEndMin}`,
            "actionTypeId": parseInt(actionTypeValueId),
            "actinResult": actionResult,
            "unsuccessfullActionReasonId": 0,
            "unsuccessfullActionSide": true,
            "description": actionDescription,
            "requestId": requestItem.requestId,
            "reportId": 0,
            "fileName": ""
        }
        var result = await saveRequestActionReport(options);
        if (result.success) {
            ToastAndroid.show('اقدام جدید ثبت شد.', ToastAndroid.LONG);
            updateActionList(setreqActionList);
            setPopupEN(false);
            if (parseInt(actionTypeValueId) == 1) { // مراجعه
                if (actionResult) { // موفق
                    navigation.navigate('Report', { item: requestItem, requestDetail });
                } else { // ناموفق
                    setreportChoseEN(true);
                }
            } else { // هر چی به جز مراجعه
                // هیچ کاری نکنه
            }
        }
        else {
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.LONG);
        }
    }

    return (
        <View>
            <ReportChose popupEN={reportChoseEN} setPopupEN={setreportChoseEN} navigation={navigation} requestItem={requestItem} requestDetail={requestDetail} />
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.actionLabel}>نوع اقدام: </Text>
                <DropDownObj
                    list={actionTypeList}
                    getLabel={(item) => item.label}
                    getValue={(item) => item.label}
                    setValue={(item) => { setactionTypeValue(item.label); setactionTypeValueId(item.value) }}
                    value={actionTypeValue}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={() => { }}
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
                <TwoChoice active={actionResult} setActive={(result) => { setactionResult(result); updateUnsuccessfullReasonsList(); }} texts={['موفق', 'ناموفق']} />

                {!actionResult &&
                    <View style={styles.unsuccessfullActionView}>
                        <Text style={styles.actionLabel}>علت اقدام ناموفق: </Text>
                        <DropDownObj
                            list={reasonsList}
                            getLabel={(item) => item.title}
                            getValue={(item) => item.title}
                            setValue={(item) => { setunsuccessfullActionReason(item.title); setunsuccessfullActionReasonId(item.id) }}
                            value={unsuccessfullActionReason}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={styles.dropdownText}
                            onSubmit={() => { }}
                        />
                        <View style={styles.twoSideAction}>
                            <CheckBox
                                text={'مشتری'}
                                value={unsuccessfullCustomer}
                                onChange={() => setunsuccessfullCustomer(!unsuccessfullCustomer)}
                                checkboxstyle={styles.checkbox}
                            />
                            <TouchableOpacity style={styles.uploadPicker}>
                                <Ionicons style={styles.uploadPickerIcon} name={'attach'} />
                                <Text style={styles.uploadPickerText}>فایل ضمیمه</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                <Text style={styles.actionLabel}>توضیحات: </Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="توضیحات"
                    multiline={true}
                    numberOfLines={5}
                    value={actionDescription}
                    keyboardType={'default'}
                    onChange={(text) => { setactionDescription(text.nativeEvent.text) }}
                />
                <View style={styles.submitButtonsView}>
                    <TouchableOpacity style={styles.submitButton} onPress={saveActionRequest}>
                        <Text style={styles.submitButtonText}>تایید</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancleButton} onPress={() => setPopupEN(false)}>
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
    dateInputButton: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        paddingVertical: 4,
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
        paddingVertical: 2,
    },
    timeInputButtonText: {
        fontFamily: 'iransans',
        fontSize: 17,
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
    unsuccessfullActionView: {
        width: '100%',
    },
    dropdown: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 7,
        width: '100%',
        marginHorizontal: 0,
        alignContent: 'center',
        alignItems: 'center',
    },
    dropdownText: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'iransans',
        fontSize: 14,
    },
    dropdownContainer: {
        padding: 0,
    },
    twoSideAction: {
        flexDirection: 'row-reverse',
        marginTop: 10,
    },
    checkbox: {
        width: '60%',
        marginTop: 5,
    },
    uploadPicker: {
        width: '40%',
        flexDirection: 'row-reverse',
        backgroundColor: colors.blue,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 7,
        paddingVertical: 8,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    uploadPickerIcon: {
        fontSize: 17,
        color: colors.white,
    },
    uploadPickerText: {
        color: colors.white,
    },
});

export default NewActionPopup;