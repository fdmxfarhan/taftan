import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    ToastAndroid,
    Linking,
    PermissionsAndroid,
    Platform,
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
import { getRequestDetail } from '../services/req-detail';
import ReportListPopup from './rec-popup-report-list';
import { loadRequestReportActionList } from '../services/report-load-action-list';
import { readFilterPreferences, updateFilter } from '../config/userPreferences';
import { pickRequestService, SendLocation } from '../services/pick-request-service';
import { jwtDecode } from "jwt-decode";
import { getAuthData } from '../services/auth';
import BackgroundService from 'react-native-background-actions';
import Geolocation from 'react-native-geolocation-service';

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

// درخواست دسترسی‌ها برای لوکیشن و استوریج
const requestLocationAndStoragePermissions = async () => {
    if (Platform.OS !== 'android') return true;
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
        ]);
        const allGranted = Object.values(granted).every(status => status === PermissionsAndroid.RESULTS.GRANTED);
        if (!allGranted) console.log('[Permission] Not all permissions granted:', granted);
        return allGranted;
    } catch (err) {
        console.log('[Permission] Error:', err);
        return false;
    }
};

// سرویس بکگراند برای ارسال لوکیشن
const backgroundTask = async (taskData) => {
    const { delay } = taskData;
    const authData = await getAuthData();
    if (!authData?.token) return;
    const decoded = jwtDecode(authData.token);
    console.log('[BackgroundTask] started loop');
    while (BackgroundService.isRunning()) {
        Geolocation.getCurrentPosition(
            async (position) => {
                console.log('[BackgroundTask] لوکیشن:', position.coords);
                await SendLocation({
                    userKey: decoded.UserKey,
                    subsystemId: 4,
                    requestId: 5,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => {
                console.log('[BackgroundTask] خطا در لوکیشن:', error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
        );
        await sleep(delay);
    }
};

const setupBackgroundTask = async () => {
    console.log('[BackgroundTask] setup called');
    const options = {
        taskName: 'SendLocationTask',
        taskTitle: 'تفتان - کار پیک شده است',
        taskDesc: 'در حال ارسال موقعیت ...',
        taskIcon: {
            name: 'ic_launcher',
            type: 'mipmap',
        },
        color: '#00aaff',
        parameters: { delay: 60000 }, // هر ۱ دقیقه
    };
    try {
        console.log('[BackgroundTask] about to start service');
        await BackgroundService.start(backgroundTask, options);
        console.log('[BackgroundTask] service started');
    } catch (e) {
        console.log('[BackgroundTask] failed to start:', e);
    }
};

const MyRequestsList = ({
    navigation,
    myDamageRequestsList,
    myInstallRequestsList,
    onReloadData,
    mySiteRequestsList,
    myProjectRequestsList,
    myPeriodicRequestsList,
}) => {
    const [DamageFilterEN, setDamageFilterEN] = useState(true);
    const [InstallFilterEN, setInstallFilterEN] = useState(true);
    const [siteFilterEN, setsiteFilterEN] = useState(true);
    const [projectFilterEN, setprojectFilterEN] = useState(true);
    const [periodicFilterEN, setperiodicFilterEN] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [requestDetail, setRequestDetail] = useState(null);
    const [reportInfo, setreportInfo] = useState(null);
    const [reportList, setreportList] = useState([]);
    const [reportlistPopupEN, setreportlistPopupEN] = useState(false);

    useEffect(() => {
        loadFilterPreferences();
        requestLocationAndStoragePermissions(); // در شروع دسترسی‌ها
        return () => { BackgroundService.stop(); };
    }, []);

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

    const handleFilterToggle = async (filterName, currentValue) => {
        const newValue = !currentValue;
        await updateFilter(filterName, newValue);
        switch (filterName) {
            case 'DamageFilterEN': setDamageFilterEN(newValue); break;
            case 'InstallFilterEN': setInstallFilterEN(newValue); break;
            case 'siteFilterEN': setsiteFilterEN(newValue); break;
            case 'projectFilterEN': setprojectFilterEN(newValue); break;
            case 'periodicFilterEN': setperiodicFilterEN(newValue); break;
        }
    };

    const handleItemPress = (item) => {
        navigation.navigate('DamageReqView', { item });
    };

    const openMapDirection = (item) => {
        setIsLoading(true);
        GetDeviceDetail(item.deviceId, navigation).then((result) => {
            if (result.success) {
                const deviceDetail = result.data;
                const url = `https://www.google.com/maps/dir/?api=1&destination=${deviceDetail.strLatitude},${deviceDetail.strLongitude}`;
                Linking.openURL(url).catch(() => { });
            } else {
                ToastAndroid.show('اطلاعات دستگاه بارگیری نشد.', ToastAndroid.SHORT);
            }
            setIsLoading(false);
        });
    };

    const openRequestReport = (item) => {
        setIsLoading(true);
        getRequestDetail(item.requestId, navigation).then((result) => {
            if (result.success && result.data !== 'داده پیدا نشد') {
                const requestDetail = result.data;
                setRequestDetail(requestDetail);
                loadRequestReportActionList(item.requestId).then((result) => {
                    setIsLoading(false);
                    if (result.success) {
                        const data = result.data.Data;
                        if (data.length === 0) {
                            ToastAndroid.show('گزارشی وجود ندارد.', ToastAndroid.SHORT);
                        } else if (data.length === 1) {
                            setreportInfo(data[0]);
                            navigation.navigate('Report', { requestDetail, reportInfo: data[0] });
                        } else {
                            setreportList(data);
                            setreportlistPopupEN(true);
                        }
                    }
                });
            } else {
                ToastAndroid.show('داده پیدا نشد!', ToastAndroid.SHORT);
                navigation.goBack();
                setIsLoading(false);
            }
        });
    };

    const onPickRequest = async (item, action) => {
        setIsLoading(true);
        try {
            const hasPermissions = await requestLocationAndStoragePermissions();
            if (!hasPermissions) {
                ToastAndroid.show('دسترسی لازم داده نشد!', ToastAndroid.SHORT);
                setIsLoading(false);
                return;
            }
            const authData = await getAuthData();
            if (!authData?.token) return;
            const decoded = jwtDecode(authData.token);
            const req = {
                IsNegativePoint: false,
                Lable: action === 'Pick' ? 2 : 3,
                RequestId: item.requestId,
                UserKey: decoded.UserKey
            };
            const result = await pickRequestService(req);
            if (result.success) {
                onReloadData();
                Geolocation.getCurrentPosition(
                    async (position) => {
                        console.log('اولین لوکیشن ارسال شد');
                        await SendLocation({ userKey: decoded.UserKey,requestId: 4, subsystemId: 4, lat: position.coords.latitude, lng: position.coords.longitude });
                    },
                    (error) => console.log('خطا در دریافت لوکیشن:', error),
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
                );
                await setupBackgroundTask();
            }
        } catch (e) {
            console.error('خطا در pick:', e);
        }
        setIsLoading(false);
    };

    return (
        <View>
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <ReportListPopup popupEN={reportlistPopupEN} setPopupEN={setreportlistPopupEN} reportList={reportList} requestDetail={requestDetail} navigation={navigation} />
            <ScrollView horizontal style={styles.typeFiltersView} inverted>
                {[
                    { name: 'خرابی', value: DamageFilterEN, key: 'DamageFilterEN' },
                    { name: 'نصب', value: InstallFilterEN, key: 'InstallFilterEN' },
                    { name: 'سایت سازی', value: siteFilterEN, key: 'siteFilterEN' },
                    { name: 'پروژه', value: projectFilterEN, key: 'projectFilterEN' },
                    { name: 'دوره ای', value: periodicFilterEN, key: 'periodicFilterEN' },
                ].map(filter => (
                    <TouchableOpacity
                        key={filter.key}
                        style={[styles.typeFiltersButton, { backgroundColor: filter.value ? colors.blue : colors.white }]}
                        onPress={() => handleFilterToggle(filter.key, filter.value)}>
                        <Text style={[styles.typeFiltersText, { color: filter.value ? colors.white : colors.blue }]}>{filter.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <ScrollView style={styles.scrollviwe}>
                <View style={styles.container}>
                    {DamageFilterEN && myDamageRequestsList.length > 0 && <Text style={styles.sectionSplitter}>سرویس خرابی:</Text>}
                    {DamageFilterEN && myDamageRequestsList.map((item) => (
                        <DamageRequestItem key={item.requestId} item={item} handleItemPress={handleItemPress} openRequestReport={openRequestReport} onPickRequest={onPickRequest} isPickedRequests getSLAColor={getSLAColor} setIsLoading={setIsLoading} openMapDirection={openMapDirection} />
                    ))}
                    {InstallFilterEN && myInstallRequestsList.length > 0 && <Text style={styles.sectionSplitter}>سرویس نصب:</Text>}
                    {InstallFilterEN && myInstallRequestsList.map((item, index) => (
                        <InstallationRequestItem key={item.requestId} item={item} index={index} installRequests={myInstallRequestsList} handleItemPress={handleItemPress} onPickRequest={onPickRequest} isPickedRequests openRequestReport={openRequestReport} getSLAColor={getSLAColor} setIsLoading={setIsLoading} openMapDirection={openMapDirection} />
                    ))}
                    {siteFilterEN && mySiteRequestsList.length > 0 && <Text style={styles.sectionSplitter}>سرویس سایت سازی:</Text>}
                    {siteFilterEN && mySiteRequestsList.map((item) => (
                        <SiteRequestItem key={item.requestId} item={item} handleItemPress={handleItemPress} openRequestReport={openRequestReport} onPickRequest={onPickRequest} isPickedRequests getSLAColor={getSLAColor} setIsLoading={setIsLoading} openMapDirection={openMapDirection} />
                    ))}
                    {projectFilterEN && myProjectRequestsList.length > 0 && <Text style={styles.sectionSplitter}>سرویس پروژه:</Text>}
                    {projectFilterEN && myProjectRequestsList.map((item) => (
                        <ProjectRequestItem key={item.requestId} item={item} handleItemPress={handleItemPress} openRequestReport={openRequestReport} onPickRequest={onPickRequest} isPickedRequests getSLAColor={getSLAColor} setIsLoading={setIsLoading} openMapDirection={openMapDirection} />
                    ))}
                    {periodicFilterEN && myPeriodicRequestsList.length > 0 && <Text style={styles.sectionSplitter}>سرویس دوره ای:</Text>}
                    {periodicFilterEN && myPeriodicRequestsList.map((item) => (
                        <PMRequestItem key={item.requestId} item={item} handleItemPress={handleItemPress} openRequestReport={openRequestReport} onPickRequest={onPickRequest} isPickedRequests getSLAColor={getSLAColor} setIsLoading={setIsLoading} openMapDirection={openMapDirection} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { direction: 'rtl', textAlign: 'right', paddingBottom: 300, flex: 1 },
    typeFiltersView: { marginVertical: 10, flexDirection: 'row-reverse' },
    typeFiltersButton: { paddingHorizontal: 15, paddingVertical: 7, borderRadius: 7, borderColor: colors.blue, borderWidth: 1, marginHorizontal: 5 },
    typeFiltersText: { fontFamily: 'iransansbold', fontSize: 12 },
    sectionSplitter: { fontFamily: 'iransansbold', fontSize: 13, color: colors.darkblue, marginVertical: 5, marginHorizontal: 10 }
});

export default MyRequestsList;
