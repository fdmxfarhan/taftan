import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import LoadingView from '../components/loading';
import { submitPeriodicRequest } from '../services/ser-periodic';
import NotConnected from '../components/no-connection';
import getSLAColor from '../config/getSLAColor';
import ReqGridController from '../components/req-grid-controller';

const ServicePeriodic = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [periodicRequests, setPeriodicRequests] = useState([])
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
        var result = await submitPeriodicRequest(skip, take);
        if (result.success) {
            setPeriodicRequests(result.data.Data);
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
        ToastAndroid.show('این آپشن هنوز کار نمیکنه', ToastAndroid.SHORT);
        // props.navigation.navigate('RequestView', { item }); // Navigate to 'Request' screen, passing the item as a prop
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
            <Text style={styles.deviceName}>{item.deviceName} (<Text>{item.customerName}</Text>)</Text>
            <Text style={styles.damageTitle}>{item.pmTitle}</Text>
            <Text style={styles.textTitle}>{item.requestId}</Text>

            <View style={styles.stateView}>
                <Text style={styles.state}>{item.persianLastState}</Text>
                <View style={[styles.stateCircle, { backgroundColor: getSLAColor(item.SLAStyle) }]} />
            </View>
            <Text style={styles.date}>{item.persianInsertedDate}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <NavBar
                rightCallback={toggleMenu}
                leftCallback={handleSearchPress}
                title="سرویس‌های دوره‌ای"
                leftIcon="search"
                rightIcon="menu"
            />
            <ReqGridController
                currentPage={skipValue}
                skipValue={skipValue}
                setskipValue={setskipValue}
                setData={(skip, rows) => {
                    setskipValue(skip);
                    setrowsValue(rows);
                    sendRequest(skip, rows);
                }} />
            <NotConnected serviceConnected={serviceConnected} refresh={sendRequest} />
            <FlatList
                data={periodicRequests}
                renderItem={renderItem}
                keyExtractor={item => item.requestId}
            />
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

export default ServicePeriodic;