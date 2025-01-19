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

const ServiceInstallation = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [installRequests, setInstallRequests] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [serviceConnected, setServiceConnected] = useState(true);
    const [skipValue, setskipValue] = useState(1);
    const [rowsValue, setrowsValue] = useState(10);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        console.log('Search clicked');
    };
    const sendRequest = async (skip, take) => {
        setIsLoading(true);
        var result = await submitInstallRequest(skip, take);
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
        props.navigation.navigate('InstallationReqView', { item });
        // ToastAndroid.show('این آپشن هنوز کار نمیکنه', ToastAndroid.SHORT);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
            <Text style={styles.deviceName}>{item.operationalAreaName} (<Text>{item.customerName}</Text>)</Text>
            <Text style={styles.damageTitle}>{item.serviceName}</Text>
            <Text style={styles.textTitle}>{item.requestId}</Text>

            <View style={styles.stateView}>
                <Text style={styles.state}>{item.persianLastState}</Text>
                <View style={[styles.stateCircle, { backgroundColor: getSLAColor(item.SLAStyle) }]} />
            </View>
            <Text style={styles.date}>{item.persianStartDate}</Text>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    itemContainer: {
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
        textAlign: 'right',
        color: colors.darkBackground,
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
    state: {
        fontFamily: 'iransans',
        fontSize: 11,
        paddingLeft: 10,
    },
});

export default ServiceInstallation;