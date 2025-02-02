import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownObj from './dropdown-obj';
import { SaveRequestStatus } from '../services/state-save-request';
import { getAuthData } from '../services/auth';

const StatusPopup = ({ popupEN, setPopupEN, reqInfo, workCauseList, reloadPage }) => {
    var [workCauseValue, setworkCauseValue] = useState({label: 'انتخاب کنید', value: -1});
    var [Description, setDescription] = useState('');
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    const saveState = async () => {
        const authData = await getAuthData();
        options = {
            "id": 0,
            "userId": authData.token,
            "dealyReasonId": workCauseValue.value,
            "requestId": reqInfo.requestId,
            "description": Description,
            "moduleGroupId": 0,
            "modeuleModelId": 0
        }
        var result = await SaveRequestStatus(options);
        if (result.success) {
            ToastAndroid.show(result.data, ToastAndroid.SHORT);
            setPopupEN(false);
            reloadPage();
        }
        else ToastAndroid.show(result.error, ToastAndroid.SHORT);
    }
    return (
        <View>
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.label}>عنوان وضعیت سرویس: </Text>
                <DropDownObj
                    list={workCauseList}
                    getLabel={(item) => item.label}
                    getValue={(item) => item.value}
                    setValue={(item) => { setworkCauseValue(item) }}
                    value={workCauseValue.label}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }}
                />
                <Text style={styles.label}>وضعیت سرویس: </Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="وضعیت سرویس"
                    multiline={true}
                    numberOfLines={5}
                    value={Description}
                    keyboardType={'default'}
                    onChange={(text) => { setDescription(text.nativeEvent.text) }}
                />
                <View style={styles.submitButtonsView}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => saveState()}>
                        <Text style={styles.submitButtonText}>تایید</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancleButton} onPress={() => setPopupEN(false)}>
                        <Text style={styles.cancleButtonText}>انصراف</Text>
                    </TouchableOpacity>
                </View>
            </Popup>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        color: colors.text,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        margin: 'auto',
        fontFamily: 'iransansbold',
    },
    // dropdown: {
    //     borderColor: colors.gray,
    //     borderWidth: 1,
    //     width: '100%',
    //     borderRadius: 10,
    // },
    // dropdownContainer: {
    //     fontFamily: 'iransans',
    //     color: colors.text,
    //     width: '100%',
    //     paddingVertical: 7,
    //     paddingHorizontal: 10,
    // },
    dropdown: {
        backgroundColor: colors.antiflashWhite,
        borderWidth: 1,
        borderColor: colors.timberwolf,
        borderRadius: 7,
        width: '100%',
        marginHorizontal: '7.5%',
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
    textArea: {
        borderColor: colors.timberwolf,
        borderWidth: 1,
        width: '100%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.antiflashWhite,
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
    grayline: {
        width: '100%',
        height: 1,
        backgroundColor: colors.gray,
        marginTop: 20,
    },
});

export default StatusPopup;