// components/NavBar.js

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

const ReportInfoView = ({ reportDetail }) => {
    var [testVal, setTestVal] = useState('-');
    var testList = [{ title: 'label1' }, { title: 'label2' }, { title: 'label3' }, { title: 'label4' }, { title: 'label5' }, { title: 'label6' }, { title: 'label7' }, { title: 'label8' }, { title: 'label9' }, { title: 'label10' },]
    var [areaDetailModalEN, setareaDetailModalEN] = useState(false);
    var [areaDetail, setareaDetail] = useState(null);

    useEffect(() => {
        console.log(reportDetail)
    }, [reportDetail])
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
                {reportDetail != null && (<View>
                    <View style={[styles.dualInputView, {paddingHorizontal: 0}]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>شماره کار</Text>
                            <TextInput style={styles.textInput} placeholder="شماره کار" value={reportDetail.requestReportInfo.requestId.toString()} />
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>مشتری</Text>
                            <TextInput style={styles.textInput} placeholder="مشتری" value={reportDetail.requestReportInfo.customerName} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, {paddingHorizontal: 0}]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>سرویس</Text>
                            <TextInput style={styles.textInput} placeholder="سرویس" value={serviceObject(reportDetail).serviceName} />
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>تاریخ ثبت درخواست</Text>
                            <TextInput style={styles.textInput} placeholder="تاریخ ثبت درخواست" value={reportDetail.requestReportInfo.insertedDateTime} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, {paddingHorizontal: 0}]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>دفتر عملیاتی</Text>
                            <View style={styles.inputWithActionView}>
                                <TextInput style={[styles.inputWithActionInput, { width: '64%' }]} placeholder="دفتر عملیاتی" value={reportDetail.requestReportInfo.areaName} />
                                <TouchableOpacity style={[styles.inputWithActionButton, { width: '20%' }]} onPress={() => { openAreaPopup()}}>
                                    <Ionicons style={styles.inputWithActionIcon} name={'information-circle'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>گروه سرویس</Text>
                            <TextInput style={styles.textInput} placeholder="گروه سرویس" value={reportDetail.requestReportInfo.serviceGroupName} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, {paddingHorizontal: 0}]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>نام دستگاه</Text>
                            <TextInput style={styles.textInput} placeholder="نام دستگاه" value={reportDetail.requestReportInfo.deviceName} />
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>سریال دستگاه</Text>
                            <TextInput style={styles.textInput} placeholder="سریال دستگاه" value={reportDetail.requestReportInfo.deviceSerial} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, {paddingHorizontal: 0}]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>ترمینال دستگاه</Text>
                            <View style={styles.inputWithActionView}>
                                <TextInput style={[styles.inputWithActionInput, { width: '64%' }]} placeholder="ترمینال دستگاه" value={reportDetail.requestReportInfo.deviceTerminal} />
                                <TouchableOpacity style={[styles.inputWithActionButton, { width: '20%' }]} onPress={() => { }}>
                                    <Ionicons style={styles.inputWithActionIcon} name={'information-circle'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>نام واحد سازمانی</Text>
                            <TextInput style={styles.textInput} placeholder="نام واحد سازمانی" value={reportDetail.requestReportInfo.branchName} />
                        </View>
                    </View>
                    <View style={[styles.dualInputView, {paddingHorizontal: 0}]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>کد واحد سازمانی</Text>
                            <View style={styles.inputWithActionView}>
                                <TextInput style={[styles.inputWithActionInput, { width: '64%' }]} placeholder="کد واحد سازمانی" value={reportDetail.requestReportInfo.branchCode} />
                                <TouchableOpacity style={[styles.inputWithActionButton, { width: '20%' }]} onPress={() => { }}>
                                    <Ionicons style={styles.inputWithActionIcon} name={'information-circle'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>مدل دستگاه</Text>
                            <TextInput style={styles.textInput} placeholder="مدل دستگاه" value={reportDetail.requestReportInfo.deviceModelName} />
                        </View>
                    </View>
                </View>)}
            </ScrollView>
            <AreaDetailPopup modalEnable={areaDetailModalEN} setmodalEnable={setareaDetailModalEN} areaDetail={areaDetail} />
        </View>
    );
};


export default ReportInfoView;