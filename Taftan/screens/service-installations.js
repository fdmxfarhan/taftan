import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import LoadingView from '../components/loading';
import { submitInstallRequest } from '../services/ser-install';
import NotConnected from '../components/no-connection';
import getSLAColor from '../config/getSLAColor';
import ReqGridController from '../components/req-grid-controller';
import styles from '../styles/requestList';
import { getRequestDetail } from '../services/req-detail';
import { loadRequestReportActionList } from '../services/report-load-action-list';
import InstallationRequestItem from '../components/InstallationRequestItem';
import { GetDeviceDetail } from '../services/device-detail';
import { Linking } from 'react-native';
import CheckBox from '../components/checkbox';

const ServiceInstallation = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [installRequests, setInstallRequests] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [serviceConnected, setServiceConnected] = useState(true);
    const [skipValue, setskipValue] = useState(1);
    const [rowsValue, setrowsValue] = useState(10);
    var [reportlistpopupEN, setreportlistPopupEN] = useState(false);
    var [reportList, setreportList] = useState([]);
    var [requestDetail, setRequestDetail] = useState(null);
    var [deviceDetail, setdeviceDetail] = useState([]);
    var [branchInfo, setbranchInfo] = useState([]);
    var [reportInfo, setreportInfo] = useState(null);
    var [isPickedRequests, setIsPickedRequests] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        console.log('Search clicked');
    };
    const sendRequest = async (skip, take) => {
        var optionFilters = [];
        if (isPickedRequests) {
            optionFilters.push({ field: "lastLable", operator: "Eq", value: 'Pick' });
            optionFilters.push({ field: "IsArchived", operator: "Eq", value: 0 })
        }
        setIsLoading(true);
        var result = await submitInstallRequest(skip, take, props.navigation, optionFilters);
        if (result.success) {
            setInstallRequests(result.data.Data);
            setIsLoading(false);
            setServiceConnected(true);
        }
        else {
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.LONG);
            setIsLoading(false);
            setServiceConnected(false);
        }
    }
    const requestPickChange = () => {
        setIsPickedRequests(prev => !prev);
    }
    useEffect(() => {
        sendRequest(skipValue, rowsValue);
    }, [isPickedRequests]);
    useEffect(() => {
        sendRequest(skipValue, rowsValue);
    }, []);
    const handleItemPress = (item) => {
        props.navigation.navigate('DamageReqView', { item });
    };
    const openRequestReport = async (item) => {
        var result = await getRequestDetail(item.requestId, props.navigation);
        if (result.success) {
            if (result.data != 'داده پیدا نشد') {
                requestDetail = result.data;
                setRequestDetail(requestDetail);
                result = await loadRequestReportActionList(item.requestId);
                setIsLoading(false);
                if (result.success) {
                    if (result.data.Data.length == 0) ToastAndroid.show('گزارشی وجود ندارد.', ToastAndroid.SHORT);
                    else if (result.data.Data.length == 1) {
                        reportInfo = result.data.Data[0];
                        setreportInfo(reportInfo);
                        props.navigation.navigate('Report', { requestDetail, reportInfo })
                    }
                    else {
                        reportList = result.data.Data;
                        setreportList(reportList);
                        setreportlistPopupEN(true);
                    }
                }
            }
            else {
                ToastAndroid.show('داده پیدا نشد!', ToastAndroid.SHORT);
                props.navigation.goBack();
                return;
            }
        }
    }
    const openMapDirection = async (item) => {
        GetDeviceDetail(item.deviceId, props.navigation).then((result) => {
            if (result.success) {
                deviceDetail = result.data;
                setdeviceDetail(deviceDetail);
                const url = `https://www.google.com/maps/dir/?api=1&destination=${deviceDetail.strLatitude},${deviceDetail.strLongitude}`;
                Linking.openURL(url).catch((err) => {
                    console.log(err);
                })
            } else ToastAndroid.show('اطلاعات دستگاه بارگیری نشد.', ToastAndroid.SHORT);
            setIsLoading(false);
        })
    }
    const openPhoneCall = async (item) => {
        setIsLoading(false);
    }
    const renderItem = ({ item, index }) => (
        <InstallationRequestItem
            item={item}
            index={index}
            installRequests={installRequests}
            handleItemPress={handleItemPress}
            isPickedRequests={false}
            openRequestReport={openRequestReport}
            openMapDirection={openMapDirection}
            openPhoneCall={openPhoneCall}
            getSLAColor={getSLAColor}
        />
    );

    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="سرویس‌های نصب" leftIcon="search" rightIcon="menu" />
            <ReqGridController
                currentPage={skipValue}
                skipValue={skipValue}
                setskipValue={setskipValue}
                numOfRowsValue={rowsValue}
                setnumOfRowsValue={setrowsValue}
                setData={(skip, rows) => {
                    setskipValue(skip);
                    setrowsValue(rows);
                    sendRequest(skip, rows);
                }} />
            <NotConnected serviceConnected={serviceConnected} refresh={sendRequest} />
            <CheckBox enabled={true} value={isPickedRequests} onChange={requestPickChange} text={'درخواست های انتخاب شده توسط کاربر'} />
            <FlatList data={installRequests} renderItem={renderItem} keyExtractor={item => item.requestId} />
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation} />
        </View>
    );
}


export default ServiceInstallation;