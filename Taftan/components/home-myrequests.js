import React, { useEffect, useRef, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    ToastAndroid
} from 'react-native';
import colors from './colors';
import LoadingView from './loading';
import getSLAColor from '../config/getSLAColor';
import InstallationRequestItem from './InstallationRequestItem';
import DamageRequestItem from './DamageRequestItem';
import SiteRequestItem from './SiteRequestItem';
import ProjectRequestItem from './ProjectRequestItem';
import PMRequestItem from './PMRequestItem';
import { GetDeviceDetail } from '../services/device-detail';
import { Linking } from 'react-native';
import { getRequestDetail } from '../services/req-detail';
import ReportListPopup from './rec-popup-report-list';
import { loadRequestReportActionList } from '../services/report-load-action-list';
import { readFilterPreferences, updateFilter } from '../config/userPreferences';
import { pickRequestService } from '../services/pick-request-service'
import { jwtDecode } from "jwt-decode";
import { getAuthData } from '../services/auth';

const MyRequestsList = ({
    navigation,
    myDamageRequestsList,
    myInstallRequestsList,
    onReloadData,
    mySiteRequestsList,
    myProjectRequestsList,
    myPeriodicRequestsList,
}) => {
    var [DamageFilterEN, setDamageFilterEN] = useState(true);
    var [InstallFilterEN, setInstallFilterEN] = useState(true);
    var [siteFilterEN, setsiteFilterEN] = useState(true);
    var [projectFilterEN, setprojectFilterEN] = useState(true);
    var [periodicFilterEN, setperiodicFilterEN] = useState(true);
    var [isLoading, setIsLoading] = useState(false);
    var [requestDetail, setRequestDetail] = useState(null);
    var [reportInfo, setreportInfo] = useState(null);
    var [reportList, setreportList] = useState([]);
    var [reportlistPopupEN, setreportlistPopupEN] = useState(false);

    // Load saved filter preferences when component mounts
    useEffect(() => {
        loadFilterPreferences();
    }, []);

    // Function to load saved filter preferences
    const loadFilterPreferences = async () => {
        const savedFilters = await readFilterPreferences();
        if (savedFilters) {
            setDamageFilterEN(savedFilters.DamageFilterEN);
            setInstallFilterEN(savedFilters.InstallFilterEN);
            setsiteFilterEN(savedFilters.siteFilterEN);
            setprojectFilterEN(savedFilters.projectFilterEN);
            setperiodicFilterEN(savedFilters.periodicFilterEN);
        }
    };

    // Function to handle filter toggle
    const handleFilterToggle = async (filterName, currentValue) => {
        const newValue = !currentValue;
        await updateFilter(filterName, newValue);

        switch (filterName) {
            case 'DamageFilterEN':
                setDamageFilterEN(newValue);
                break;
            case 'InstallFilterEN':
                setInstallFilterEN(newValue);
                break;
            case 'siteFilterEN':
                setsiteFilterEN(newValue);
                break;
            case 'projectFilterEN':
                setprojectFilterEN(newValue);
                break;
            case 'periodicFilterEN':
                setperiodicFilterEN(newValue);
                break;
        }
    };

    const handleItemPress = (item) => {
        navigation.navigate('DamageReqView', { item });
    };
    const openMapDirection = (item) => {
        GetDeviceDetail(item.deviceId, navigation).then((result) => {
            if (result.success) {
                deviceDetail = result.data;
                const url = `https://www.google.com/maps/dir/?api=1&destination=${deviceDetail.strLatitude},${deviceDetail.strLongitude}`;
                Linking.openURL(url).catch((err) => {
                    // console.log(err);
                })
            } else ToastAndroid.show('اطلاعات دستگاه بارگیری نشد.', ToastAndroid.SHORT);
        })
        setIsLoading(false);
    }
    const openPhoneCall = (item) => {
        setIsLoading(false);
    }
    const openRequestReport = (item) => {
        getRequestDetail(item.requestId, navigation).then((result) => {
            if (result.success) {
                if (result.data != 'داده پیدا نشد') {
                    requestDetail = result.data;
                    setRequestDetail(requestDetail);
                    loadRequestReportActionList(item.requestId).then((result) => {
                        setIsLoading(false);
                        if (result.success) {
                            if (result.data.Data.length == 0) ToastAndroid.show('گزارشی وجود ندارد.', ToastAndroid.SHORT);
                            else if (result.data.Data.length == 1) {
                                reportInfo = result.data.Data[0];
                                setreportInfo(reportInfo);
                                navigation.navigate('Report', { requestDetail, reportInfo })
                            }
                            else {
                                reportList = result.data.Data;
                                setreportList(reportList);
                                setreportlistPopupEN(true);
                            }
                        }
                    })
                }
                else {
                    ToastAndroid.show('داده پیدا نشد!', ToastAndroid.SHORT);
                    navigation.goBack();
                    return;
                }
            }
        })
    }
    const onPickRequest = async (item, action) => {
        try {
            const authData = await getAuthData();

            if (!authData) {
                console.error('خطا: اطلاعات احراز هویت خالی است');
                setIsLoading(false)
                return;
            }


            if (!authData.token) {
                console.error('خطا: فیلد Token در اطلاعات احراز هویت وجود ندارد');
                setIsLoading(false)
                return;
            }

            const decodedToken = jwtDecode(authData.token);

            const req = {
                IsNegativePoint: false,
                Lable: action === 'Pick' ? 2 : 3,
                RequestId: item.requestId,
                UserKey: decodedToken.UserKey
            }
            pickRequestService(req).then((result) => {
                if (result.success) {
                    setIsLoading(false)
                    onReloadData();

                }
            });
        } catch (error) {
            setIsLoading(false)

            console.error('خطا در پردازش توکن:', error);
        }
    }
    return (
        <View>
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <ReportListPopup popupEN={reportlistPopupEN} setPopupEN={setreportlistPopupEN} reportList={reportList} requestDetail={requestDetail} navigation={navigation} />

            <ScrollView horizontal={true} style={styles.typeFiltersView} inverted={true}>
                <TouchableOpacity
                    style={[styles.typeFiltersButton, { backgroundColor: DamageFilterEN ? colors.blue : colors.white }]}
                    onPress={() => handleFilterToggle('DamageFilterEN', DamageFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: DamageFilterEN ? colors.white : colors.blue }]}>خرابی</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.typeFiltersButton, { backgroundColor: InstallFilterEN ? colors.blue : colors.white }]}
                    onPress={() => handleFilterToggle('InstallFilterEN', InstallFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: InstallFilterEN ? colors.white : colors.blue }]}>نصب</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.typeFiltersButton, { backgroundColor: siteFilterEN ? colors.blue : colors.white }]}
                    onPress={() => handleFilterToggle('siteFilterEN', siteFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: siteFilterEN ? colors.white : colors.blue }]}>سایت سازی</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.typeFiltersButton, { backgroundColor: projectFilterEN ? colors.blue : colors.white }]}
                    onPress={() => handleFilterToggle('projectFilterEN', projectFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: projectFilterEN ? colors.white : colors.blue }]}>پروژه</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.typeFiltersButton, { backgroundColor: periodicFilterEN ? colors.blue : colors.white }]}
                    onPress={() => handleFilterToggle('periodicFilterEN', periodicFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: periodicFilterEN ? colors.white : colors.blue }]}>دوره ای</Text>
                </TouchableOpacity>
            </ScrollView>
            <ScrollView style={styles.scrollviwe}>
                <View style={styles.container}>
                    {DamageFilterEN && myDamageRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس خرابی:</Text>
                    )}
                    {DamageFilterEN && myDamageRequestsList.map((item, index) => (

                        <DamageRequestItem
                            key={item.requestId}
                            item={item}
                            handleItemPress={handleItemPress}
                            openRequestReport={openRequestReport}
                            onPickRequest={onPickRequest}
                            isPickedRequests={true}
                            getSLAColor={getSLAColor}
                            setIsLoading={setIsLoading}
                            openMapDirection={openMapDirection}
                            openPhoneCall={openPhoneCall}
                        />
                    ))}
                    {InstallFilterEN && myInstallRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس نصب:</Text>
                    )}
                    {InstallFilterEN && myInstallRequestsList.map((item, index) => (
                        <InstallationRequestItem
                            key={item.requestId}
                            item={item}
                            index={index}
                            installRequests={myInstallRequestsList}
                            handleItemPress={handleItemPress}
                            onPickRequest={onPickRequest}
                            isPickedRequests={true}
                            openRequestReport={openRequestReport}
                            getSLAColor={getSLAColor}
                            setIsLoading={setIsLoading}
                            openMapDirection={openMapDirection}
                            openPhoneCall={openPhoneCall}
                        />
                    ))}
                    {siteFilterEN && mySiteRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس سایت سازی:</Text>
                    )}
                    {siteFilterEN && mySiteRequestsList.map((item, index) => (
                        <SiteRequestItem
                            key={item.requestId}
                            item={item}
                            handleItemPress={handleItemPress}
                            openRequestReport={openRequestReport}
                            onPickRequest={onPickRequest}
                            isPickedRequests={true}
                            getSLAColor={getSLAColor}
                            setIsLoading={setIsLoading}
                            openMapDirection={openMapDirection}
                            openPhoneCall={openPhoneCall}
                        />
                    ))}
                    {projectFilterEN && myProjectRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس پروژه:</Text>
                    )}
                    {projectFilterEN && myProjectRequestsList.map((item, index) => (
                        <ProjectRequestItem
                            key={item.requestId}
                            item={item}
                            handleItemPress={handleItemPress}
                            openRequestReport={openRequestReport}
                            getSLAColor={getSLAColor}
                            onPickRequest={onPickRequest}
                            isPickedRequests={true}
                            setIsLoading={setIsLoading}
                            openMapDirection={openMapDirection}
                            openPhoneCall={openPhoneCall}
                        />
                    ))}
                    {periodicFilterEN && myPeriodicRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس دوره ای:</Text>
                    )}
                    {periodicFilterEN && myPeriodicRequestsList.map((item, index) => (
                        <PMRequestItem
                            key={item.requestId}
                            item={item}
                            handleItemPress={handleItemPress}
                            openRequestReport={openRequestReport}
                            getSLAColor={getSLAColor}
                            onPickRequest={onPickRequest}
                            isPickedRequests={true}
                            setIsLoading={setIsLoading}
                            openMapDirection={openMapDirection}
                            openPhoneCall={openPhoneCall}
                        />
                    ))}

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        direction: 'rtl',
        textAlign: 'right',
        paddingBottom: 300,
        flex: 1,
        padding: 0,
    },
    typeFiltersView: {
        marginVertical: 10,
        flexDirection: 'row-reverse',
    },
    typeFiltersButton: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 7,
        borderColor: colors.blue,
        borderWidth: 1,
        marginHorizontal: 5,
    },
    typeFiltersText: {
        fontFamily: 'iransansbold',
        fontSize: 12,
    },
    itemContainer: {
        width: '100%',
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
        bottom: 15,
        left: 15,
        fontFamily: 'iransans',
        fontSize: 12,
    },
    stateView: {
        position: 'absolute',
        top: 15,
        left: 15,
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
    },
    stateCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    pilotIcon: {
        color: colors.red3,
        fontSize: 15,
    },
    state: {
        fontFamily: 'iransans',
        fontSize: 11,
        paddingLeft: 10,
    },
});

export default MyRequestsList;