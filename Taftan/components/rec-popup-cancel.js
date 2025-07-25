import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';
import { DoneExpertRequest } from '../services/done-expert-request';
import { getAuthData } from '../services/auth';
import DropDownObj from './dropdown-obj';
import { GetCancelReasonList } from '../services/req-GetCancelReasonList';
import { CancelExpertRequest } from '../services/req-cancel';

const CancelCasePopup = ({ popupEN, setPopupEN, requestDetail, reloadPage, navigation }) => {
    var [cancelReasonDescList, setcancelReasonDescList] = useState([]);
    var [cancelReasonDesc, setcancelReasonDesc] = useState('انتخاب کنید');
    var [cancelReasonId, setcancelReasonId] = useState(null);
    var [description, setdescription] = useState('')
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    const doneRequest = async () => {
        // const authData = await getAuthData();
        // var result = await DoneExpertRequest(requestDetail.requestInfo.requestId);
        // if (result.success) {
        //     ToastAndroid.show(result.data, ToastAndroid.SHORT);
        //     setPopupEN(false);
        //     reloadPage();
        // }
        // else ToastAndroid.show(result.error, ToastAndroid.SHORT);
    }
    useEffect(() => {
        if(requestDetail){
            GetCancelReasonList(requestDetail.requestInfo.requestId).then(data => {
                setcancelReasonDescList(data.data);
            }).catch(err => {console.log(err)});
        }
    }, [popupEN, requestDetail])
    return (
        <View>
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.centerlabel}>کنسل کار توسط کارشناس</Text>
                <Text style={styles.label}>توضیحات: </Text>
                <DropDownObj
                    list={cancelReasonDescList}
                    getLabel={(item) => item.description}
                    getValue={(item) => item.id}
                    setValue={(item) => { setcancelReasonDesc(item.description); setcancelReasonId(item.id); }}
                    value={cancelReasonDesc}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }}
                />
                <Text style={styles.label}>توضیحات: </Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="توضیحات"
                    multiline={true}
                    numberOfLines={5}
                    value={description}
                    keyboardType={'default'}
                    onChange={(text) => { setdescription(text.nativeEvent.text) }}
                />
                <View style={styles.submitButtonsView}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => {
                        if(cancelReasonId == null || description == ''){
                            ToastAndroid.show('لطفا موارد خواسته شده را تکمیل کنید.', ToastAndroid.SHORT);
                            return;
                        }
                        console.log(requestDetail)
                        CancelExpertRequest({
                            "id": requestDetail.requestInfo.requestId,
                            "cancelReasonId": cancelReasonId,
                            "cancelReasonDesc": cancelReasonDesc
                        }, navigation).then(data => {
                            ToastAndroid.show(data.data, ToastAndroid.SHORT);
                            console.log(data);
                            setPopupEN(false);
                            reloadPage();
                        }).catch(err => console.log(err))
                    }}>
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
    centerlabel: {
        color: colors.text,
        fontSize: 15,
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        margin: 'auto',
        fontFamily: 'iransansbold',
        textAlign: 'center',
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
});

export default CancelCasePopup;