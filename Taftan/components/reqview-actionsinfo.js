import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';

const ReqActionInfo = ({ toggleactionsInfo, actionsInfo, item, requestDetail, actionsHistory, setactionsHistory, navigation }) => {
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={toggleactionsInfo}>
                <Text style={styles.title}>اقدامات</Text>
                <Ionicons style={styles.chevron} name={actionsInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {actionsInfo && (<View style={styles.content}>
                {actionsHistory.map((item, index) => (
                    <View key={index} >
                        <TouchableOpacity style={styles.actionHistoryItem} onPress={() => {
                            const updatedActions = actionsHistory.map((action, i) =>
                                i === index ? { ...action, showAll: !action.showAll } : action
                            );
                            // Update the state with the new array
                            setactionsHistory(updatedActions);
                        }}>
                            <View style={styles.actionHistoryRight}>
                                <Text style={styles.actionHistoryTitle}>{item.actinResult}</Text>
                                <Text style={styles.actionHistoryTitle2}>{item.description}</Text>
                            </View>
                            <View style={styles.actionHistoryLeft}>
                                <Text style={styles.actionResult}>{item.actionTypeTitle}</Text>
                                <Text style={styles.actionDateText}>{item.actionDate}</Text>
                            </View>
                        </TouchableOpacity>
                        {item.showAll && (
                            <View style={styles.actionMoreInfo}>
                                <View style={styles.actionMoreInfoItem}>
                                    <Text style={styles.actionMoreInfoTitle}>تاریخ اقدام:</Text>
                                    <Text style={styles.actionMoreInfoText}>{item.endDateTime.toString().substr(0, 4)}/{item.endDateTime.toString().substr(4, 2)}/{item.endDateTime.toString().substr(6, 2)}</Text>
                                </View>
                                <View style={styles.actionMoreInfoItem}>
                                    <Text style={styles.actionMoreInfoTitle}>از ساعت:</Text>
                                    <Text style={styles.actionMoreInfoText}>{item.startDateTime.toString().substr(8, 2)}:{item.startDateTime.toString().substr(10, 2)}</Text>
                                </View>
                                <View style={styles.actionMoreInfoItem}>
                                    <Text style={styles.actionMoreInfoTitle}>تا ساعت:</Text>
                                    <Text style={styles.actionMoreInfoText}>{item.endDateTime.toString().substr(8, 2)}:{item.endDateTime.toString().substr(10, 2)}</Text>
                                </View>
                                <View style={styles.actionMoreInfoItem}>
                                    <Text style={styles.actionMoreInfoTitle}>نوع اقدام:</Text>
                                    <Text style={styles.actionMoreInfoText}>{item.actionTypeTitle}</Text>
                                </View>
                                <View style={styles.actionMoreInfoItem}>
                                    <Text style={styles.actionMoreInfoTitle}>نتیجه اقدام:</Text>
                                    <Text style={styles.actionMoreInfoText}>{item.actinResult}</Text>
                                </View>
                                <View style={styles.actionMoreInfoItem}>
                                    <Text style={styles.actionMoreInfoTitle}>علت اقدام ناموفق:</Text>
                                    <Text style={styles.actionMoreInfoText}>{item.unsuccessfullActionReasonTitle}</Text>
                                </View>
                                <View style={styles.actionMoreInfoItem}>
                                    <Text style={styles.actionMoreInfoTitle}>مشتری:</Text>
                                    <Text style={styles.actionMoreInfoText}>{item.unsuccessfullActionSide == true ? '✔️' : ''}</Text>
                                </View>
                                <View style={styles.actionMoreInfoItem}>
                                    <Text style={styles.actionMoreInfoTitle}>توضیحات:</Text>
                                    <Text style={styles.actionMoreInfoText}>{item.description}</Text>
                                </View>
                                {/* <View style={styles.actionMoreInfoItem}>
                                    <Text style={styles.actionMoreInfoTitle}>گزارش کار:</Text>
                                    <Text style={styles.actionMoreInfoText}>{item.workflow}</Text>
                                </View> */}
                                <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                                    <TouchableOpacity style={styles.submitButton} onPress={() => {navigation.navigate('Report', {item, requestDetail})}}>
                                        <Ionicons style={styles.buttonIcon} name="file-tray" />
                                        <Text style={styles.buttonText}>مشاهده گزارش کار</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
                                        <Ionicons style={styles.buttonIcon} name="cloud-download" />
                                        <Text style={styles.buttonText}>دانلود فایل گزارش</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        )}
                    </View>
                ))}
            </View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.white,
        paddingVertical: 15,
    },
    titleView: {
        color: colors.dark,
        paddingHorizontal: '10%',
        marginTop: 20,
        position: 'relative',
        borderBottomColor: colors.lightblue,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    title: {
        fontFamily: 'iransansbold',
        fontSize: 16,
        color: colors.dark,
    },
    chevron: {
        position: 'absolute',
        top: 0,
        left: 30,
        fontSize: 18,
    },
    label: {
        color: colors.text,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransansbold',
    },
    textInput: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.white,
        borderRadius: 8,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
        color: colors.text,
    },
    textArea: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '85%',
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
    buttonsView: {
        flexDirection: 'row-reverse',
        width: '90%',
        margin: 'auto',
    },
    submitButton: {
        backgroundColor: colors.blue,
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
        fontSize: 13,
    },
    buttonScrollView: {
        direction: 'rtl',
        textAlign: 'right',
    },
    stateItemView: {
        width: '90%',
        margin: 'auto',
        marginBottom: 10,
        backgroundColor: colors.skyblue,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    stateItemTitle: {
        fontFamily: 'iransans',
        fontSize: 16,
        fontWeight: 'bold',
        position: 'relative',
        color: colors.black
    },
    stateDateView: {
        flexDirection: 'row-reverse',
        position: 'absolute',
        left: 10,
        top: 10,
    },
    dateIcon: {
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 10,
        color: colors.gray,
    },
    stateDateText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.gray,
    },
    clockIcon: {
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 10,
        color: colors.gray,
    },
    stateClockText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.gray,
    },
    stateDescText: {
        fontFamily: 'iransans',
        fontSize: 14,
        color: colors.lightDark,
        paddingTop: 3,
    },
    actionHistoryItem: {
        backgroundColor: colors.skyblue,
        width: '90%',
        marginHorizontal: 'auto',
        borderRadius: 6,
        marginBottom: 10,
        flexDirection: 'row-reverse',
    },
    actionHistoryRight: {
        flex: 1,
        paddingHorizontal: 20,
    },
    actionHistoryTitle: {
        fontFamily: 'iransans',
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black,
        paddingTop: 10,
        textAlign: 'right',
    },
    actionHistoryTitle2: {
        fontFamily: 'iransans',
        fontSize: 14,
        paddingTop: 3,
        textAlign: 'right',
    },
    actionHistoryLeft: {
        flex: 1,
        paddingHorizontal: 20,
    },
    actionDateText: {
        fontSize: 12,
    },
    actionResult: {
        textAlign: 'left',
        fontFamily: 'iransans',
        fontSize: 14,
        paddingTop: 10,
    },
    actionMoreInfo: {
        width: '80%',
        marginHorizontal: 'auto',
        paddingBottom: 20,
    },
    actionMoreInfoItem: {
        flexDirection: 'row-reverse',
        marginBottom: 7,
    },
    actionMoreInfoTitle: {
        flex: 1,
        fontFamily: 'iransansbold',
        fontSize: 15,
    },
    actionMoreInfoText: {
        flex: 1,
        textAlign: 'right',
        fontFamily: 'iransans',
        fontSize: 15,
    },
});

export default ReqActionInfo;