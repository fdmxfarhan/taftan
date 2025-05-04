import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';
import { loadReportDetail } from '../services/report-get-detail';
import styles from '../styles/reqView';

const ReqActionInfo = ({ toggleactionsInfo, actionsInfo, requestDetail, actionsHistory, setactionsHistory, navigation }) => {
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    const navigateToReport = async (item) => {
        var result = await loadReportDetail(requestDetail.requestInfo.requestId, item.reportId, item.id, navigation);
        navigation.navigate('Report', {item, requestDetail, reportInfo: item});
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
                            const updatedActions = actionsHistory.map((action, i) => i === index ? { ...action, showAll: !action.showAll } : action);
                            setactionsHistory(updatedActions);
                        }}>
                            <View style={styles.actionHistoryRight}>
                                <Text style={styles.actionHistoryTitle}>{item.actionTypeTitle} ({item.actinResult})</Text>
                                <Text style={styles.actionHistoryTitle2}>{item.endDateTime.toString().substr(0, 4)}/{item.endDateTime.toString().substr(4, 2)}/{item.endDateTime.toString().substr(6, 2)}</Text>
                            </View>
                            <View style={styles.actionHistoryLeft}>
                                <Text style={styles.actionResult}>{item.unsuccessfullActionReasonTitle}</Text>
                                <Text style={styles.actionDateText}>از {item.startDateTime.toString().substr(8, 2)}:{item.startDateTime.toString().substr(10, 2)} تا {item.endDateTime.toString().substr(8, 2)}:{item.endDateTime.toString().substr(10, 2)}</Text>
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
                                    <TouchableOpacity style={styles.submitButton} onPress={() => navigateToReport(item)}>
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


export default ReqActionInfo;