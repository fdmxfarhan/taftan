import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';
import PersianDatePicker from './persian-date-picker';
import TimePicker from './time-picker';
import TwoChoice from './twochoice';
import { getUserList } from '../services/req-load-user-list';
import UserDropDown from './dropdown-user';
import DropDownObj from './dropdown-obj';
import { getAuthData } from '../services/auth';
import { AssignToExpert } from '../services/assign-to-expert';

const AssignPopup = ({ popupEN, setPopupEN, requestDetail, reloadPage, userList, reqExpertList }) => {
    var [mainExpert, setmainExpert] = useState({ Fname: 'انتخاب', Lname: 'کنید', UserKey: -1 });
    var [secondExpert, setsecondExpert] = useState({ Fname: 'نام', Lname: 'کارشناس', UserKey: -1 });
    var [secondType, setsecondType] = useState('نوع کارشناس');

    useEffect(() => {

    }, [])
    const assignMainExpert = async () => {
        const authData = await getAuthData();
        options = {
            "userId": mainExpert.UserKey,
            "id": requestDetail.requestInfo.requestId,
        };
        console.log(options)
        var result = await AssignToExpert(options);
        if (result.success) {
            ToastAndroid.show(result.data, ToastAndroid.SHORT);
            reloadPage();
        }
        else ToastAndroid.show(result.error, ToastAndroid.SHORT);
    }
    return (
        <View>
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.assignLabel}>لیست کارشناس ها: </Text>
                {reqExpertList.map((item, index) => (
                    <View key={item.Id} style={styles.supervisorItem}>
                        <Text style={styles.supervisorName}>{item.currentUserName}</Text>
                        <Text style={styles.supervisorType}>{item.expertType_String}</Text>
                    </View>
                ))}
                <View style={styles.grayline} />
                <Text style={styles.assignLabel}>کارشناس اصلی: </Text>
                <DropDownObj
                    list={userList}
                    getLabel={(item) => item.Fname + ' ' + item.Lname}
                    getValue={(item) => item.UserKey}
                    setValue={(item) => { setmainExpert(item) }}
                    value={mainExpert.Fname + ' ' + mainExpert.Lname}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }}
                />
                <TouchableOpacity style={styles.submitButton} onPress={() => assignMainExpert()}>
                    <Text style={styles.submitButtonText}>ثبت کارشناس</Text>
                </TouchableOpacity>
                <View style={styles.grayline} />
                <Text style={styles.assignLabel}>کارشناس کمکی/فرعی: </Text>
                <View style={styles.dualInputView}>
                    <View style={styles.dualInputPart}>
                        <DropDownObj
                            list={userList}
                            getLabel={(item) => item.Fname + ' ' + item.Lname}
                            getValue={(item) => item.UserKey}
                            setValue={(item) => { setsecondExpert(item) }}
                            value={secondExpert.Fname + ' ' + secondExpert.Lname}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={styles.dropdownText}
                            onSubmit={(val) => { }}
                        />
                    </View>
                    <View style={styles.dualInputPart}>
                        <DropDownObj
                            list={['کمکی', 'فرعی']}
                            getLabel={(item) => item}
                            getValue={(item) => item}
                            setValue={(item) => { setsecondType(item) }}
                            value={secondType}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={styles.dropdownText}
                            onSubmit={(val) => { }}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.submitButton} >
                    <Text style={styles.submitButtonText}>ثبت کارشناس</Text>
                </TouchableOpacity>
                <View style={styles.grayline} />
                <TouchableOpacity style={styles.cancleButton} onPress={() => { setPopupEN(false); }}>
                    <Text style={styles.cancleButtonText}>انصراف</Text>
                </TouchableOpacity>
            </Popup>
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
        backgroundColor: colors.antiflashWhite,
        borderWidth: 1,
        borderColor: colors.timberwolf,
        borderRadius: 7,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    dropdownText: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'iransans',
        fontSize: 14,
    },
    dateInputButton: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    submitButtonsView: {
        width: '100%',
        flexDirection: 'row-reverse',
        marginTop: 25,
    },
    submitButton: {
        width: '100%',
        marginHorizontal: '2%',
        paddingVertical: 5,
        backgroundColor: colors.emerald,
        borderRadius: 5,
        marginTop: 5,
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
    grayline: {
        width: '100%',
        height: 1,
        backgroundColor: colors.gray,
        marginTop: 20,
    },
    dualInputView: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 0,
    },
    dualInputPart: {
        flex: 1,
        margin: 1,
    },
    supervisorItem: {
        flexDirection: 'row-reverse',
        width: '100%',
        marginHorizontal: 'auto',
        marginBottom: 8,
        backgroundColor: colors.antiflashWhite,
    },
    supervisorName: {
        flex: 1,
        textAlign: 'center',
        borderColor: colors.timberwolf,
        borderWidth: 1,
        fontFamily: 'iransansbold',
        fontSize: 15,
        paddingVertical: 5,
        borderLeftWidth: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    },
    supervisorType: {
        flex: 1,
        textAlign: 'center',
        borderColor: colors.lightgray,
        borderWidth: 1,
        fontFamily: 'iransans',
        fontSize: 15,
        paddingVertical: 5,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
});

export default AssignPopup;