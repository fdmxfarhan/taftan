// components/NavBar.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import NewActionPopup from './rec-popup-newaction';
import AssignPopup from './rec-popup-assign';
import ReturnPopup from './rec-popup-return';

const RequestActions = ({ item, requestDetail, userList, refrenceCauseList }) => {
    var [actionPopupEN, setActionPopupEN] = useState(false);
    var [assignPopupEN, setAssignPopupEN] = useState(false);
    var [returnPopupEN, setReturnPopupEN] = useState(false);
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    return (
        <View style={styles.buttonsView}>
            <NewActionPopup popupEN={actionPopupEN} setPopupEN={setActionPopupEN} requestItem={item} />
            <AssignPopup popupEN={assignPopupEN} setPopupEN={setAssignPopupEN} reqInfo={requestDetail} userList={userList} />
            <ReturnPopup popupEN={returnPopupEN} setPopupEN={setReturnPopupEN} refrenceCauseList={refrenceCauseList} />

            <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                <TouchableOpacity style={[styles.submitButton, {backgroundColor: colors.darkcyan}]} onPress={() => setAssignPopupEN(true)}>
                    <Ionicons style={styles.buttonIcon} name="chatbubbles" />
                    <Text style={styles.buttonText}>ارجاع کار/تخصیص کارشناس</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.submitButton, {backgroundColor: colors.blue}]} onPress={() => setActionPopupEN(true)}>
                    <Ionicons style={styles.buttonIcon} name="newspaper" />
                    <Text style={styles.buttonText}>ثبت اقدام</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.submitButton, {backgroundColor: colors.blue}]} onPress={notWorking}>
                    <Ionicons style={styles.buttonIcon} name="stats-chart" />
                    <Text style={styles.buttonText}>وضعیت سرویس</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.submitButton, {backgroundColor: colors.emerald}]} onPress={notWorking}>
                    <Ionicons style={styles.buttonIcon} name="person-remove" />
                    <Text style={styles.buttonText}>بستن کار توسط کارشناس</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.submitButton, {backgroundColor: colors.orangepeel}]} onPress={() => setReturnPopupEN(true)}>
                    <Ionicons style={styles.buttonIcon} name="shuffle" />
                    <Text style={styles.buttonText}>بازگشت کار</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsView: {
        flexDirection: 'row-reverse',
        width: '90%',
        margin: 'auto',
    },
    submitButton: {
        // backgroundColor: colors.blue,
        paddingHorizontal: 20,
        paddingVertical: 13,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        textAlign: 'center',
        flexDirection: 'row-reverse',
        direction: 'rtl',
    },
    buttonIcon: {
        color: colors.white,
        textAlign: 'center',
        paddingLeft: 10,
        fontSize: 16,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
    },
    buttonScrollView: {
        direction: 'rtl',
        textAlign: 'right',
    },
});

export default RequestActions;