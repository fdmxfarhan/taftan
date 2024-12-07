import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';

const StatusPopup = ({ popupEN, setPopupEN, reqInfo, workCausesListTitle }) => {
    var [workCauseList, setworkCauseList] = useState([]);
    var [workCauseOpen, setworkCauseOpen] = useState(false);
    var [workCauseValue, setworkCauseValue] = useState('1');
    var [Description, setDescription] = useState('');
    useEffect(() => {
        workCauseList = [];
        for(var i=0; i < workCausesListTitle.length; i++) workCauseList.push({label: workCausesListTitle[i].description, value: workCausesListTitle[i].id});
        setworkCauseList(workCauseList);
    }, []);
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    return (
        <View>
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.label}>عنوان وضعیت سرویس: </Text>
                <DropDownPicker
                    open={workCauseOpen}
                    value={workCauseValue}
                    items={workCauseList}
                    setOpen={setworkCauseOpen}
                    setValue={setworkCauseValue}
                    setItems={setworkCauseList}
                    placeholder="عنوان وضعیت سرویس"
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                />
                <Text style={styles.label}>وضعیت سرویس: </Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="وضعیت سرویس"
                    multiline={true}
                    numberOfLines={5}
                    value={Description}
                    keyboardType={'default'}
                    onChange={(text) => {setDescription(text.nativeEvent.text)}}
                />
                <View style={styles.submitButtonsView}>
                    <TouchableOpacity style={styles.submitButton} onPress={notWorking}>
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

export default StatusPopup;