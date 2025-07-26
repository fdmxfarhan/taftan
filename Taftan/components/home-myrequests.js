import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    Linking,
    StyleSheet,
    DeviceEventEmitter,
    PermissionsAndroid,
    Platform,
    NativeModules,
} from 'react-native';

import colors from './colors';
import LoadingView from './loading';
import getSLAColor from '../config/getSLAColor';

import InstallationRequestItem from './InstallationRequestItem';
import DamageRequestItem from './DamageRequestItem';
import SiteRequestItem from './SiteRequestItem';
import ProjectRequestItem from './ProjectRequestItem';
import PMRequestItem from './PMRequestItem';
import ReportListPopup from './rec-popup-report-list';

import { GetDeviceDetail } from '../services/device-detail';
import { getRequestDetail } from '../services/req-detail';
import { loadRequestReportActionList } from '../services/report-load-action-list';
import { readFilterPreferences, updateFilter } from '../config/userPreferences';
import { pickRequestService, SendLocation } from '../services/pick-request-service';
import { getAuthData } from '../services/auth';

import {jwtDecode} from 'jwt-decode';

import { setPickedDevice, getPickedDevice, clearPickedDevice } from '../services/storage';
import Geolocation from 'react-native-geolocation-service';

const { LocationServiceModule } = NativeModules;
const locationEventEmitter = Platform.OS === 'android' ? DeviceEventEmitter : new NativeEventEmitter(LocationServiceModule);

// درخواست مجوز موقعیت (Android & iOS)
const requestLocationPermissions = async () => {
    if (Platform.OS === 'ios') {
        const status = await Geolocation.requestAuthorization('whenInUse');
        return status === 'granted' || status === 'always';
    }

    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
            ]);
            return (
                granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED &&
                granted['android.permission.ACCESS_COARSE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED &&
                (granted['android.permission.ACCESS_BACKGROUND_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED ||
                    granted['android.permission.ACCESS_BACKGROUND_LOCATION'] === undefined) // بعضی دستگاه‌ها ممکنه این پرمیشن رو نخوان
            );
        } catch (error) {
            console.warn('[Permission] Error:', error);
            return false;
        }
    }
    return true;
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
    const [activeRequestId, setActiveRequestId] = useState(null);

    useEffect(() => {
        const init = async () => {
            await loadFilterPreferences();
            await requestLocationPermissions();

            // مقدار اولیه activeRequestId رو از picked_device_id بگیر
            const savedPickedDeviceId = await getPickedDevice();
            if (savedPickedDeviceId) {
                setActiveRequestId(Number(savedPickedDeviceId));
            } else {
                await findPickedRequestId();
            }
        };
        init();

        const subscription = locationEventEmitter.addListener('LocationUpdate', async ({ latitude, longitude }) => {
            if (!activeRequestId) return; // اگر آی‌دی نال هست، ارسال نکن

            const auth = await getAuthData();
            const decoded = jwtDecode(auth.token);
            const payload = {
                lat: latitude.toString(),
                lng: longitude.toString(),
                requestId: activeRequestId,
                userKey: decoded.UserKey,
                subsystemId: 4
            };
            try {
                await SendLocation(payload);
            } catch (error) {
                console.error('Error sending location to server:', error);
            }
        });

        return () => {
            subscription.remove();
        };
    }, [activeRequestId]);

    const findPickedRequestId = async () => {
        const allRequests = [
            ...myDamageRequestsList,
            ...myInstallRequestsList,
            ...mySiteRequestsList,
            ...myProjectRequestsList,
            ...myPeriodicRequestsList,
        ];

        const pickedItem = allRequests.find(item => item.lastLable === 'Pick');
        if (pickedItem) {
            setActiveRequestId(pickedItem.requestId);
            await setPickedDevice(pickedItem.requestId);
        } else {
            setActiveRequestId(null);
            await clearPickedDevice();
        }
    };

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

        const permissionGranted = await requestLocationPermissions();
        if (!permissionGranted) {
            ToastAndroid.show('دسترسی موقعیت داده نشده است.', ToastAndroid.SHORT);
            setIsLoading(false);
            return;
        }

        try {
            const auth = await getAuthData();
            const decoded = jwtDecode(auth.token);
            const req = {
                IsNegativePoint: false,
                Lable: action === 'Pick' ? 2 : 3,
                RequestId: item.requestId,
                UserKey: decoded.UserKey,
            };

            const res = await pickRequestService(req);

            if (res.success) {
                onReloadData();

                if (action === 'Pick') {
                    setActiveRequestId(item.requestId);
                    await setPickedDevice(item.requestId);

                    Geolocation.getCurrentPosition(
                        async (position) => {
                            const { latitude, longitude } = position.coords;
                            const payload = {
                                lat: latitude.toString(),
                                lng: longitude.toString(),
                                requestId: item.requestId,
                                userKey: decoded.UserKey,
                                subsystemId: 4
                            };
                            await SendLocation(payload);
                        },
                        (error) => {
                            console.error('Location error:', error);
                        },
                        { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
                    );

                    LocationServiceModule.start();
                } else {
                    setActiveRequestId(null);
                    await clearPickedDevice();
                    LocationServiceModule.stop();
                }
            } else {
                ToastAndroid.show('عملیات موفقیت‌آمیز نبود.', ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error('onPickRequest error:', error);
            ToastAndroid.show('خطا در انجام عملیات.', ToastAndroid.SHORT);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <View>
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <ReportListPopup
                popupEN={reportlistPopupEN}
                setPopupEN={setreportlistPopupEN}
                reportList={reportList}
                requestDetail={requestDetail}
                navigation={navigation}
            />

            <ScrollView horizontal style={styles.typeFiltersView} inverted>
                {[
                    { name: 'خرابی', value: DamageFilterEN, key: 'DamageFilterEN' },
                    { name: 'نصب', value: InstallFilterEN, key: 'InstallFilterEN' },
                    { name: 'سایت سازی', value: siteFilterEN, key: 'siteFilterEN' },
                    { name: 'پروژه', value: projectFilterEN, key: 'projectFilterEN' },
                    { name: 'دوره ای', value: periodicFilterEN, key: 'periodicFilterEN' },
                ].map((filter) => (
                    <TouchableOpacity
                        key={filter.key}
                        style={[
                            styles.typeFiltersButton,
                            { backgroundColor: filter.value ? colors.blue : colors.white },
                        ]}
                        onPress={() => handleFilterToggle(filter.key, filter.value)}
                    >
                        <Text
                            style={[
                                styles.typeFiltersText,
                                { color: filter.value ? colors.white : colors.blue },
                            ]}
                        >
                            {filter.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <ScrollView style={styles.scrollviwe}>
                <View style={styles.container}>
                    {DamageFilterEN && myDamageRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس خرابی:</Text>
                    )}
                    {DamageFilterEN &&
                        myDamageRequestsList.map((item) => (
                            <DamageRequestItem
                                key={item.requestId}
                                item={item}
                                handleItemPress={handleItemPress}
                                openRequestReport={openRequestReport}
                                onPickRequest={onPickRequest}
                                isPickedRequests
                                getSLAColor={getSLAColor}
                                setIsLoading={setIsLoading}
                                openMapDirection={openMapDirection}
                            />
                        ))}

                    {InstallFilterEN && myInstallRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس نصب:</Text>
                    )}
                    {InstallFilterEN &&
                        myInstallRequestsList.map((item, index) => (
                            <InstallationRequestItem
                                key={item.requestId}
                                item={item}
                                index={index}
                                installRequests={myInstallRequestsList}
                                handleItemPress={handleItemPress}
                                onPickRequest={onPickRequest}
                                isPickedRequests
                                openRequestReport={openRequestReport}
                                getSLAColor={getSLAColor}
                                setIsLoading={setIsLoading}
                                openMapDirection={openMapDirection}
                            />
                        ))}

                    {siteFilterEN && mySiteRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس سایت سازی:</Text>
                    )}
                    {siteFilterEN &&
                        mySiteRequestsList.map((item) => (
                            <SiteRequestItem
                                key={item.requestId}
                                item={item}
                                handleItemPress={handleItemPress}
                                openRequestReport={openRequestReport}
                                onPickRequest={onPickRequest}
                                isPickedRequests
                                getSLAColor={getSLAColor}
                                setIsLoading={setIsLoading}
                                openMapDirection={openMapDirection}
                            />
                        ))}

                    {projectFilterEN && myProjectRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس پروژه:</Text>
                    )}
                    {projectFilterEN &&
                        myProjectRequestsList.map((item) => (
                            <ProjectRequestItem
                                key={item.requestId}
                                item={item}
                                handleItemPress={handleItemPress}
                                openRequestReport={openRequestReport}
                                onPickRequest={onPickRequest}
                                isPickedRequests
                                getSLAColor={getSLAColor}
                                setIsLoading={setIsLoading}
                                openMapDirection={openMapDirection}
                            />
                        ))}

                    {periodicFilterEN && myPeriodicRequestsList.length > 0 && (
                        <Text style={styles.sectionSplitter}>سرویس دوره ای:</Text>
                    )}
                    {periodicFilterEN &&
                        myPeriodicRequestsList.map((item) => (
                            <PMRequestItem
                                key={item.requestId}
                                item={item}
                                handleItemPress={handleItemPress}
                                openRequestReport={openRequestReport}
                                onPickRequest={onPickRequest}
                                isPickedRequests
                                getSLAColor={getSLAColor}
                                setIsLoading={setIsLoading}
                                openMapDirection={openMapDirection}
                            />
                        ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { direction: 'rtl', textAlign: 'right', paddingBottom: 300, flex: 1 },
    typeFiltersView: { marginVertical: 10, flexDirection: 'row-reverse' },
    typeFiltersButton: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 7,
        borderColor: colors.blue,
        borderWidth: 1,
        marginHorizontal: 5,
    },
    typeFiltersText: { fontFamily: 'iransansbold', fontSize: 12 },
    sectionSplitter: {
        fontFamily: 'iransansbold',
        fontSize: 13,
        color: colors.darkblue,
        marginVertical: 5,
        marginHorizontal: 10,
    },
});

export default MyRequestsList;
