import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import LoadingView from '../components/loading';
import NotConnected from '../components/no-connection';
import ReqGridController from '../components/req-grid-controller';
import SearchView from '../components/search';
import { getDeviceList } from '../services/device-get-list';

const DeviceListView = (props) => {    
    const [menuVisible, setMenuVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [serviceConnected, setServiceConnected] = useState(true);
    const [skipValue, setskipValue] = useState(1);
    const [rowsValue, setrowsValue] = useState(10);
    const [searchEN, setsearchEN] = useState(false);
    const [devicelist, setdevicelist] = useState([])
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        setsearchEN(true);
    };
    const sendRequest = async (skip, take) => {
        setIsLoading(true);
        console.log(take)
        var result = await getDeviceList(skip, take);
        if(result.success){
            setdevicelist(result.data.Data);
            setIsLoading(false);
            setServiceConnected(true);
        }
        else{
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.SHORT);
            setIsLoading(false);
            setServiceConnected(false);
        }
    }
    useEffect(() => {
        sendRequest(skipValue, rowsValue);
    }, []);
    const handleItemPress = (item) => {
        props.navigation.navigate('DeviceDetailView', { item });
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)} style={styles.itemContainer}>
            <Text style={styles.deviceName}>{item.customerName} (<Text>{item.deviceName}</Text>)</Text>
            <Text style={styles.damageTitle}>دفتر: {item.areaName}</Text>
            <Text style={styles.damageTitle}>مدل: {item.deviceModelTitle}</Text>
            <Text style={styles.textTitle}>سریال: {item.deviceSerial}</Text>
            <View style={styles.stateView}>
                <Text style={styles.state}>{item.deviceTypeTitle}</Text>
            </View>
            <Text style={styles.date}>ترمینال: {item.deviceTerminal}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="لیست دستگاه‌ها" leftIcon="search" rightIcon="menu" />
            <SearchView popupEN={searchEN} setPopupEN={setsearchEN} />
            <ReqGridController 
                currentPage={skipValue} 
                skipValue={skipValue}
                setskipValue={setskipValue}
                setData={(skip, rows) => {
                    setskipValue(skip);
                    setrowsValue(rows);
                    sendRequest(skip, rows);
                }}/>
            <NotConnected serviceConnected={serviceConnected} refresh={sendRequest} />
            <FlatList data={devicelist} renderItem={renderItem} keyExtractor={item => item.id} />
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation}/>
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
        direction: 'rtl',
        color: colors.darkBackground,
        textAlign: 'right',
    },
    damageTitle: {
        fontSize: 12,
        fontFamily: 'iransansbold',
        color: colors.gray,
        textAlign: 'right',
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
        paddingLeft: 5,
    },
    stateView: {
        position: 'absolute',
        top: 15,
        left: 15,
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
    },
    stateCircle:{
        width: 10, 
        height: 10,
        borderRadius: 5,
    },
    pilotIcon: {
        color: colors.red3,
        fontSize: 15,
    },
    state: {
        color: colors.darkcyan,
        fontFamily: 'iransansbold',
        fontSize: 12,
        paddingLeft: 5,
    },
});

export default DeviceListView;