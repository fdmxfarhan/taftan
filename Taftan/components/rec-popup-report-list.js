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

const ReportListPopup = ({ popupEN, setPopupEN, reportList, requestDetail, navigation }) => {
    useEffect(() => {
        const sendRequest = async () => {

        }
        sendRequest();
    }, []);
    return (
        <View>
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.textTitle}>لیست گزارش کارها</Text>
                <ScrollView style={styles.scroll}>
                    {reportList.map((item, index) => (
                        <TouchableOpacity key={item.id} style={styles.itemContainer} onPress={() => {
                            setPopupEN(false);
                            navigation.navigate('Report', { requestDetail, reportInfo: item })
                        }}>
                            <Text style={styles.deviceName}>{ item.actionTypeTitle} ({ item.actinResult})</Text>
                            <Text style={styles.damageTitle}>از {item.startDateTime.toString().substr(8, 2)}:{item.startDateTime.toString().substr(10, 2)} تا {item.endDateTime.toString().substr(8, 2)}:{item.endDateTime.toString().substr(10, 2)}</Text>
                            <Text style={styles.damageTitle}></Text>
                            <Text style={styles.date}>{item.reportId}</Text>
                            <View style={styles.stateView}>
                                <Text style={styles.state}>{item.endDateTime.toString().substr(0, 4)}/{item.endDateTime.toString().substr(4, 2)}/{item.endDateTime.toString().substr(6, 2)}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.closeButton} onPress={() => setPopupEN(false)}>
                    <Ionicons style={styles.closeIcon} name={"close"} size={30} color={colors.white} />
                    <Text style={styles.closeButtonText}>بستن</Text>
                </TouchableOpacity>
            </Popup>
        </View>
    );
};

const styles = StyleSheet.create({
    scroll: {
        width: '100%',
    },
    itemContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 0,
        backgroundColor: colors.lightergray,
        borderColor: colors.lightgray,
        borderWidth: 1,
        direction: 'rtl',
    },
    deviceName: {
        fontSize: 14,
        marginBottom: 2,
        fontFamily: 'iransansbold',
        direction: 'rtl',
        color: colors.darkBackground,
        textAlign: 'right',
    },
    damageTitle: {
        fontSize: 12,
        fontFamily: 'iransansbold',
        color: colors.gray,
        textAlign: 'right',
    },
    textTitle: {
        fontSize: 12,
        fontFamily: 'iransansbold',
        color: colors.darkblue,
        textAlign: 'right',
        marginTop: 5,
    },
    date: {
        position: 'absolute',
        bottom: 5,
        left: 15,
        fontFamily: 'iransans',
        fontSize: 12,
    },
    stateView: {
        position: 'absolute',
        top: 5,
        left: 15,
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        backgroundColor: colors.red3,
        flexDirection: 'row-reverse',
        marginTop: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    closeIcon: {
        fontFamily: 'iransans',
        fontSize: 15,
        paddingTop: 8,
        paddingHorizontal: 2,
    },
    closeButtonText: {
        color: colors.white,
        fontFamily: 'iransans',
        fontSize: 14,
        paddingVertical: 4,
        paddingHorizontal: 20,
    }
});

export default ReportListPopup;