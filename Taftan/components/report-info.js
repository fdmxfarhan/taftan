import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import DropDownObj from './dropdown-obj';
import styles from '../styles/reqView';
import AreaDetailPopup from './rec-popup-area-detail';
import { GetAreaDetail } from '../services/area-detail';
import { SecondReportTitleTitleList } from '../services/report-second-reasons';

const ReportInfoView = ({ reportDetail, isLoading, secondReportReason, setsecondReportReason, setIsValid }) => {
    var [testVal, setTestVal] = useState('-');
    var testList = [{ title: 'label1' }, { title: 'label2' }, { title: 'label3' }, { title: 'label4' }, { title: 'label5' }, { title: 'label6' }, { title: 'label7' }, { title: 'label8' }, { title: 'label9' }, { title: 'label10' },]
    var [areaDetailModalEN, setareaDetailModalEN] = useState(false);
    var [areaDetail, setareaDetail] = useState(null);
    var [secondReportReasons, setsecondReportReasons] = useState([]);
    var [isSecondReport, setIsSecondReport] = useState(false);
    var sendRequest = async () => {
        var result = await SecondReportTitleTitleList(reportDetail.requestReportInfo.serviceGroupId);
        if (result.success) {
            setsecondReportReasons(result.data);
            setIsSecondReport(true);
        }
    }
    useEffect(() => {
        if (reportDetail) {
            if (reportDetail.reportInfo.isSecondReport) sendRequest();
        }
        if(!isSecondReport)
        setIsValid(true);
    }, [reportDetail, isLoading])
    var serviceObject = (detail) => {
        if (detail.requestReportInfo.serviceGroupId == 1) return detail.damageReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 2) return detail.pmReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 3) return detail.installReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 6) return detail.siteReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 7) return detail.projectReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 8) return detail.damageReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 9) return detail.siteReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 10) return detail.siteReportInfo;
        if (detail.requestReportInfo.serviceGroupId == 11) return detail.siteReportInfo;
    }
    var openAreaPopup = async () => {
        result = await GetAreaDetail(reportDetail.requestReportInfo.areaId);
        if (result.success) {
            areaDetail = result.data;
            setareaDetail(areaDetail);
            setareaDetailModalEN(true);
        } else ToastAndroid.show('اطلاعات دفتر بارگیری نشد.', ToastAndroid.SHORT);
    }
    return (
        <View>
            <ScrollView style={styles.contents}>
                {isSecondReport && (<View>
                    <Text style={styles.label}>علت گزارش کار مجدد: </Text>
                    <DropDownObj list={secondReportReasons}
                        getLabel={(item) => item.title}
                        getValue={(item) => item.title}
                        setValue={(item) => { setsecondReportReason(item); setIsValid(true); }}
                        value={secondReportReason.title}
                        buttonStyle={[styles.dropdown, styles.requiredBorder, { borderRightColor: secondReportReason.title == 'انتخاب کنید' ? colors.red2 : colors.emerald }]}
                        buttonTextStyle={styles.dropdownText}
                        onSubmit={(val) => { }}
                    />
                    <View style={styles.breakline} />
                </View>)}
                {reportDetail != null && (<View>
                    <View style={[styles.dualInputView, { paddingHorizontal: 0 }]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>شماره کار</Text>
                            <TextInput style={styles.textInput} placeholder="شماره کار" value={reportDetail.requestReportInfo.requestId.toString()} />
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>مشتری</Text>
                            <TextInput style={styles.textInput} placeholder="مشتری" value={reportDetail.requestReportInfo.customerName} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, { paddingHorizontal: 0 }]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>سرویس</Text>
                            <TextInput style={styles.textInput} placeholder="سرویس" value={serviceObject(reportDetail).serviceName} />
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>تاریخ ثبت درخواست</Text>
                            <TextInput style={styles.textInput} placeholder="تاریخ ثبت درخواست" value={reportDetail.requestReportInfo.insertedDateTime} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, { paddingHorizontal: 0 }]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>دفتر عملیاتی</Text>
                            <View style={styles.inputWithActionView}>
                                <TextInput style={[styles.inputWithActionInput, { width: '66%' }]} placeholder="دفتر عملیاتی" value={reportDetail.requestReportInfo.areaName} />
                                <TouchableOpacity style={[styles.inputWithActionButton, { width: '17%' }]} onPress={() => { openAreaPopup() }}>
                                    <Ionicons style={styles.inputWithActionIcon} name={'information-circle'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>گروه سرویس</Text>
                            <TextInput style={styles.textInput} placeholder="گروه سرویس" value={reportDetail.requestReportInfo.serviceGroupName} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, { paddingHorizontal: 0 }]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>نام دستگاه</Text>
                            <TextInput style={styles.textInput} placeholder="نام دستگاه" value={reportDetail.requestReportInfo.deviceName} />
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>سریال دستگاه</Text>
                            <TextInput style={styles.textInput} placeholder="سریال دستگاه" value={reportDetail.requestReportInfo.deviceSerial} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, { paddingHorizontal: 0 }]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>ترمینال دستگاه</Text>
                            <View style={styles.inputWithActionView}>
                                <TextInput style={[styles.inputWithActionInput, { width: '66%' }]} placeholder="ترمینال دستگاه" value={reportDetail.requestReportInfo.deviceTerminal} />
                                <TouchableOpacity style={[styles.inputWithActionButton, { width: '17%' }]} onPress={() => { }}>
                                    <Ionicons style={styles.inputWithActionIcon} name={'information-circle'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>نام واحد سازمانی</Text>
                            <TextInput style={styles.textInput} placeholder="نام واحد سازمانی" value={reportDetail.requestReportInfo.branchName} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, { paddingHorizontal: 0 }]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>کد واحد سازمانی</Text>
                            <View style={styles.inputWithActionView}>
                                <TextInput style={[styles.inputWithActionInput, { width: '66%' }]} placeholder="کد واحد سازمانی" value={reportDetail.requestReportInfo.branchCode} />
                                <TouchableOpacity style={[styles.inputWithActionButton, { width: '17%' }]} onPress={() => { }}>
                                    <Ionicons style={styles.inputWithActionIcon} name={'information-circle'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>مدل دستگاه</Text>
                            <TextInput style={styles.textInput} placeholder="مدل دستگاه" value={reportDetail.requestReportInfo.deviceModelName} />
                        </View>
                    </View>
                    <View style={styles.breakline} />
                    <View>
                        <Text style={styles.label}>نام کارشناس</Text>
                        <TextInput style={styles.textInput} placeholder="نام کارشناس" value={reportDetail.requestReportInfo.userAssignList[0].currentUserName} />
                        <View style={localStyles.dateTimeView}>
                            <View style={localStyles.dateView}>
                                <Text style={styles.label}>تاریخ انجام</Text>
                                <TextInput style={[styles.textInput]} placeholder="تاریخ انجام" value={reportDetail.reportInfo.startDate} />
                            </View>
                            <View style={localStyles.timeView}>
                                <Text style={styles.label}>مراجعه</Text>
                                <TextInput style={[styles.textInput]} placeholder="مراجعه" value={reportDetail.reportInfo.startTime} />
                            </View>
                            <View style={localStyles.timeView}>
                                <Text style={styles.label}>اتمام</Text>
                                <TextInput style={[styles.textInput]} placeholder="اتمام" value={reportDetail.reportInfo.endTime} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.breakline} />
                    <Text style={styles.label}>لیست کارشناس ها:</Text>
                    {reportDetail.requestReportInfo.userAssignList.map((item, index) => (<View key={index}>
                        <View style={localStyles.userItem}>
                            <Text style={localStyles.userItemTitle}>{item.currentUserName}</Text>
                            <Text style={localStyles.userItemTitle}>{item.expertType_String}</Text>
                        </View>
                    </View>))}
                    <View style={styles.breakline} />
                </View>)}
            </ScrollView>
            <AreaDetailPopup modalEnable={areaDetailModalEN} setmodalEnable={setareaDetailModalEN} areaDetail={areaDetail} />
        </View>
    );
};

var localStyles = StyleSheet.create({
    dateTimeView: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 20,
    },
    dateView: {
        flex: 2,
    },
    timeView: {
        flex: 1,
    },
    userItem: {
        width: '90%',
        marginHorizontal: 'auto',
        flexDirection: 'row-reverse',
        borderRadius: 10,
        borderColor: colors.timberwolf,
        borderWidth: 1,
        marginVertical: 5,
    },
    userItemTitle: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 12,
        paddingVertical: 5,
    },
})

export default ReportInfoView;