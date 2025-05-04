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

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        console.log('Search clicked');
    };
    const sendRequest = async (skip, take) => {
        setIsLoading(true);
        var result = await submitInstallRequest(skip, take, props.navigation);
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
    const renderItem = ({ item, index }) => (
        <View>
            {index == 0 ? (<Text style={styles.sectionSplitter}>{item.preInstallTitle}</Text>) : installRequests[index].preInstallationId != installRequests[index - 1].preInstallationId ? (
                <Text style={styles.sectionSplitter}>{item.preInstallTitle}</Text>
            ) : (<View></View>)}
            <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
                <Text style={styles.deviceName}>{item.operationalAreaName} (<Text>{item.customerName}</Text>)</Text>
                <Text style={styles.damageTitle}>سرویس: {item.serviceName}</Text>
                <Text style={styles.damageTitle}>عنوان: {item.installationServiceName}</Text>
                <Text style={styles.textTitle}>شماره کار: {item.requestId}</Text>

                <View style={styles.stateView}>
                    <Text style={styles.state}>{item.persianLastState}</Text>
                    <View style={[styles.stateCircle, { backgroundColor: getSLAColor(item.SLAStyle) }]} />
                </View>
                <Text style={styles.date}>{item.persianStartDate}</Text>
                <View style={styles.callbuttonsView}>
                    <TouchableOpacity style={styles.callButton} onPress={() => openRequestReport(item)}>
                        <Ionicons name={'document'} style={styles.callIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton} onPress={() => { console.log(index) }}>
                        <Ionicons name={'location'} style={styles.callIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton} onPress={() => { }}>
                        <Ionicons name={'call'} style={styles.callIcon} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
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
            <FlatList data={installRequests} renderItem={renderItem} keyExtractor={item => item.requestId} />
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation} />
        </View>
    );
}


export default ServiceInstallation;