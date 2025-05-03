import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import NavBar from '../components/navbar';
import LoadingView from '../components/loading';
import ReportTabLink from '../components/report-tabLinks';
import { GetJobTitleByReportTypeId } from '../services/get-job-title-list';
import ReportRecognition from '../components/report-recognize';
import ReportActions from '../components/report-Actions';
import { loadReportDetail } from '../services/report-get-detail';
import ReportUploadView from '../components/report-upload';
import ReportInfoView from '../components/report-info';
import { GetServiceTitleListByDeviceId } from '../services/get-service-title-list2';
import ReportInstallation from '../components/report-installation';
import ReportcomponentsView from '../components/report-components';
import ReportGarantiView from '../components/report-garanti';
import ReportDamageBeforeUseView from '../components/report-damageBeforeUse';
import ReportQuestionnaire from '../components/report-questionnaire';

const Report = (props) => {
    var reportInfo = props.route.params.reportInfo;
    var requestDetail = props.route.params.requestDetail;
    var [isLoading, setIsLoading] = useState(true);
    var [damageReason, setdamageReason] = useState({ Title: 'نوع خرابی' });
    var [recognitionExpert, setrecognitionExpert] = useState({ title: 'تشخیص سطح دوم' });
    var [description, setdescription] = useState(0);
    var [descriptionAction, setdescriptionAction] = useState(0);
    var [tabItem, setTabItem] = useState('tab1');
    var [jobTitle, setjobTitle] = useState({ title: 'نوع خرابی' });
    var [reportDetail, setreportDetail] = useState(null);
    var [damageReasonsList, setdamageReasonsList] = useState([]);
    var [recognitionExpertList, setrecognitionExpertList] = useState([]);
    var [JobTitleList, setJobTitleList] = useState([]);
    var [newRecognitionList, setNewRecognitionList] = useState([]);
    var [secondReportReason, setsecondReportReason] = useState({ title: 'انتخاب کنید' });
    var [provinceName, setprovinceName] = useState({ "id": 8, "provinceName": "تهران", "isActive": true, "coordinateId": 1 });
    var [cityName, setcityName] = useState({ "id": 10528, "cityName": "تهران", "provinceId": 8, "isActive": true });
    var [zoneName, setzoneName] = useState({"id": 36,"title": "منطقه 1-آجودانیه","cityId": 0,"isActive": true});
    var [moduleGroup, setModuleGroup] = useState({Title: 'انتخاب کنید'});
    var [selectedNewModule, setselectedNewModule] = useState({ModuleTitle: 'انتخاب کنید'});
    var [selectedPreviousModule, setselectedPreviousModule] = useState({Title: 'انتخاب کنید'});
    var [officeKey, setOfficeKey] = useState('00000000-0000-0000-0000-000000000000');
    var [moduleGroupKey, setmoduleGroupKey] = useState('00000000-0000-0000-0000-000000000000');
    var [moduleListBrand, setmoduleListBrand] = useState([]);
    var [moduleInUserStoreList, setmoduleInUserStoreList] = useState([]);
    var [usedComponents, setusedComponents] = useState(false);
    var [newactionList, setnewactionList] = useState([]);
    var [garantieConflict, setgarantieConflict] = useState(false);
    var [softwareProcess, setsoftwareProcess] = useState(false);
    var [serviceAndRepair, setserviceAndRepair] = useState(false);
    var [moduleExchange, setmoduleExchange] = useState(false);
    var [moduleoldSerial, setModuleoldSerial] = useState('');
    var [moduleNewSerial, setModuleNewSerial] = useState('');
    var [componentChangesList, setcomponentChangesList] = useState([]);
    var [selectedDOAReason, setselectedDOAReason] = useState('انتخاب کنید');
    var [installationReportInfo, setinstallationReportInfo] = useState({
        sourceAddress: '',
        destinationAddress: '',
        deviceName: '',
        deviceSerial: '',
        deviceTerminal: '',
        deviceCodeNumber: '',
        longitude: '',
        latitude: '',
    });
    const handleSearchPress = () => {
        props.navigation.goBack();
    };
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    const getServiceID = (detail) => {
        if (detail.requestInfo.serviceGroup == 1) return detail.damageInfo.id;
        if (detail.requestInfo.serviceGroup == 2) return detail.pmInfo.id;
        if (detail.requestInfo.serviceGroup == 3) return detail.installInfo.id;
        if (detail.requestInfo.serviceGroup == 6) return detail.siteInfo.id;
        if (detail.requestInfo.serviceGroup == 7) return detail.projectInfo.id;
        if (detail.requestInfo.serviceGroup == 8) return detail.damageInfo.id;
        if (detail.requestInfo.serviceGroup == 9) return detail.siteInfo.id;
        if (detail.requestInfo.serviceGroup == 10) return detail.siteInfo.id;
        if (detail.requestInfo.serviceGroup == 11) return detail.siteInfo.id;
    }
    const sendRequest = async () => {
        var result = await loadReportDetail(requestDetail.requestInfo.requestId, reportInfo.reportId, reportInfo.id);
        if (result.success) {
            reportDetail = result.data;
            setreportDetail(reportDetail);
            setinstallationReportInfo(reportDetail.installReportInfo);
        }
        else ToastAndroid.show('جزئیات لود نشد', ToastAndroid.SHORT);

        result = await GetServiceTitleListByDeviceId(reportDetail.requestReportInfo.deviceId, reportDetail.requestReportInfo.serviceGroupId);
        if (result.success) {
            setdamageReasonsList(result.data);
        } else ToastAndroid.show('عدم اتصال به سرویس', ToastAndroid.SHORT);

        result = await GetJobTitleByReportTypeId(requestDetail.requestInfo.reportTypeId);
        if (result.success) {
            setJobTitleList(result.data);
        } else ToastAndroid.show('عدم اتصال به سرویس', ToastAndroid.SHORT);

        setIsLoading(false);
    }
    useEffect(() => {
        sendRequest();
    }, [])
    return (
        <View style={styles.container}>
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <NavBar rightCallback={() => { props.navigation.navigate('Home') }} leftCallback={() => props.navigation.goBack()} title="گزارش کار" leftIcon="arrow-back" rightIcon="home" />
            <ReportTabLink tabItemVar={tabItem} setTabItemCallback={(name) => { setTabItem(name); sendRequest(); }} reportDetail={reportDetail} />
            {tabItem == 'tab1' && (
                <View style={{ flex: 1, }}>
                    <ReportInfoView reportDetail={reportDetail} isLoading={isLoading} secondReportReason={secondReportReason} setsecondReportReason={setsecondReportReason} />
                    <View style={styles.buttonsControlView}>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab2')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'tab2' && (
                <View style={{ flex: 1, }}>
                    {reportDetail.requestReportInfo.serviceGroupId == 1 && (
                        <ReportRecognition damageReasonsList={damageReasonsList} damageReason={damageReason} setdamageReason={setdamageReason} recognitionExpertList={recognitionExpertList} setrecognitionExpertList={setrecognitionExpertList} recognitionExpert={recognitionExpert} setrecognitionExpert={setrecognitionExpert} description={description} setdescription={setdescription} reportDetail={reportDetail} newRecognitionList={newRecognitionList} setNewRecognitionList={setNewRecognitionList} />
                    )}
                    {reportDetail.requestReportInfo.serviceGroupId == 3 && (
                        <ReportInstallation reportDetail={reportDetail} provinceName={provinceName} setprovinceName={setprovinceName} cityName={cityName} setcityName={setcityName}  zoneName={zoneName} setzoneName={setzoneName} installationReportInfo={installationReportInfo} setinstallationReportInfo={setinstallationReportInfo} />
                    )}
                    <View style={styles.buttonsControlView}>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab1')}>
                            <Text style={styles.nextTabButtonText}>قبلی</Text>
                            <Ionicons name={'arrow-forward'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab3')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'tab3' && (
                <View style={{ flex: 1, }}>
                    <ReportActions JobTitleList={JobTitleList} setjobTitle={setjobTitle} jobTitle={jobTitle} descriptionAction={descriptionAction} setdescriptionAction={setdescriptionAction} reportDetail={reportDetail} newactionList={newactionList} setnewactionList={setnewactionList} />
                    <View style={styles.buttonsControlView}>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab2')}>
                            <Text style={styles.nextTabButtonText}>قبلی</Text>
                            <Ionicons name={'arrow-forward'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab3.5')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'tab3.5' && (
                <View style={{ flex: 1, }}>
                    <ReportQuestionnaire />
                    <View style={styles.buttonsControlView}>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab3')}>
                            <Text style={styles.nextTabButtonText}>قبلی</Text>
                            <Ionicons name={'arrow-forward'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab4')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'tab4' && (
                <View style={{ flex: 1, }}>
                    <ReportGarantiView 
                        garantieConflict={garantieConflict}
                        setgarantieConflict={setgarantieConflict}
                        softwareProcess={softwareProcess}
                        setsoftwareProcess={setsoftwareProcess}
                        serviceAndRepair={serviceAndRepair}
                        setserviceAndRepair={setserviceAndRepair}
                        moduleExchange={moduleExchange}
                        setmoduleExchange={setmoduleExchange}
                        reportDetail={reportDetail}
                    />
                    <View style={styles.buttonsControlView}>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab3.5')}>
                            <Text style={styles.nextTabButtonText}>قبلی</Text>
                            <Ionicons name={'arrow-forward'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab5')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'tab5' && (
                <View style={{ flex: 1, }}>
                    <ReportcomponentsView reportDetail={reportDetail} moduleGroup={moduleGroup} setModuleGroup={setModuleGroup} officeKey={officeKey} setOfficeKey={setOfficeKey} moduleGroupKey={moduleGroupKey} moduleListBrand={moduleListBrand} setmoduleListBrand={setmoduleListBrand} selectedNewModule={selectedNewModule} setselectedNewModule={setselectedNewModule} selectedPreviousModule={selectedPreviousModule} setselectedPreviousModule={setselectedPreviousModule} moduleInUserStoreList={moduleInUserStoreList} setmoduleInUserStoreList={setmoduleInUserStoreList} usedComponents={usedComponents} setusedComponents={setusedComponents} moduleoldSerial={moduleoldSerial} setModuleoldSerial={setModuleoldSerial} moduleNewSerial={moduleNewSerial} setModuleNewSerial={setModuleNewSerial} componentChangesList={componentChangesList} setcomponentChangesList={setcomponentChangesList} selectedDOAReason={selectedDOAReason} setselectedDOAReason={setselectedDOAReason} />
                    <View style={styles.buttonsControlView}>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab4')}>
                            <Text style={styles.nextTabButtonText}>قبلی</Text>
                            <Ionicons name={'arrow-forward'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab6')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'tab6' && (
                <View style={{ flex: 1, }}>
                    <ReportDamageBeforeUseView />
                    <View style={styles.buttonsControlView}>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab5')}>
                            <Text style={styles.nextTabButtonText}>قبلی</Text>
                            <Ionicons name={'arrow-forward'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab7')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'tab7' && (
                <View style={{ flex: 1, }}>
                    <ReportUploadView />
                    <View style={styles.buttonsControlView}>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('tab6')}>
                            <Text style={styles.nextTabButtonText}>قبلی</Text>
                            <Ionicons name={'arrow-forward'} style={styles.nextTabButtonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.nextTabButton, { backgroundColor: colors.emerald }]} onPress={() => notWorking()}>
                            <Text style={styles.nextTabButtonText}>تایید و ثبت گزارش کار</Text>
                            {/* <Ionicons name={'checkmark'} style={styles.nextTabButtonIcon} /> */}
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: colors.white,
        // backgroundColor: colors.lightBackground,
        paddingBottom: 5,
    },
    contents: {
        width: '100%',
        backgroundColor: colors.lightBackground,
    },
    content: {
        backgroundColor: colors.white,
        paddingVertical: 15,
    },
    sectionTitle: {
        fontFamily: 'iransansbold',
        fontSize: 12,
        width: '85%',
        marginHorizontal: 'auto',
        marginTop: 10,
        color: colors.black,
    },
    label: {
        color: colors.text,
        fontSize: 11,
        marginTop: 5,
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
        paddingVertical: 2,
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
    dropdown: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 7,
        width: '85%',
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
    dropdownContainer: {
        padding: 0,
    },
    submitButtonsView: {
        width: '100%',
        flexDirection: 'row-reverse',
        marginTop: 25,
    },
    submitButton: {
        width: '85%',
        marginHorizontal: '7.5%',
        marginTop: 15,
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
    checkboxView: {
        flexDirection: 'row-reverse',
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 10,
    },
    checkboxIcon: {
        marginLeft: 10,
        paddingTop: 3,
        fontSize: 18,
    },
    checkboxText: {
        fontFamily: 'iransans',
        fontSize: 13,
    },
    buttonsControlView: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 10,
        paddingTop: 10,
        height: 60,
    },
    nextTabButton: {
        backgroundColor: colors.blue,
        flex: 1,
        marginHorizontal: '2%',
        marginBottom: 10,
        borderRadius: 7,
        paddingVertical: 7,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    nextTabButtonText: {
        color: colors.white,
        fontFamily: 'iransansbold',
        fontSize: 14,
        textAlign: 'center',
    },
    nextTabButtonIcon: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingRight: 10,
    },
});

export default Report;