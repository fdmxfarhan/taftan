import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, BackHandler, ToastAndroid } from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import TabLink from '../components/home-tabLinks';
import GridView from '../components/home-gridView';
import BottomNav from '../components/home-bootomNav';
import HomeNotif from '../components/home-notif';
import { GetUnreadMessageCount } from '../services/msgbox-unread-count';
import SearchView from '../components/search';
import { loadMyMessageBoxList } from '../services/message-my-list';
import MessageListView from '../components/home-message';
import MyRequestsList from '../components/home-myrequests';
import { loadMyDamageRequestList } from '../services/req-my-requests';
import { getAuthData } from '../services/auth';

const Home = (props) => {
    var [menuVisible, setMenuVisible] = useState(false);
    var [tabItem, setTabItem] = useState('Home');
    var [unreadMessagesCount, setunreadMessagesCount] = useState(0);
    var [myRequestCount, setmyRequestCount] = useState(0);
    var [searchEN, setsearchEN] = useState(false);
    var [myMessageList, setmyMessageList] = useState([]);
    var [myRequestsList, setmyRequestsList] = useState([]);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        setsearchEN(true);
    };
    useEffect(() => {
        const sendRequest = async () => {
            const authData = await getAuthData();
            // console.log(authData.token)
            var result = await GetUnreadMessageCount(props.navigation);
            if (result.success) {
                setunreadMessagesCount(result.data);
            } else ToastAndroid.show('تعداد پیام ها بارگیری نشد.', ToastAndroid.SHORT);

            var result = await loadMyMessageBoxList(0, 50);
            if (result.success) {
                setmyMessageList(result.data.Data);
            } else ToastAndroid.show('پیام های من بارگیری نشد.', ToastAndroid.SHORT);

            var result = await loadMyDamageRequestList(0, 50, props.navigation);
            if (result.success) {
                setmyRequestsList(result.data.Data);
                setmyRequestCount(result.data.TotalCount);
            } else ToastAndroid.show('درخواست‌های من بارگیری نشد.', ToastAndroid.SHORT);

        }
        sendRequest();
    }, [tabItem])
    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="سامانه تفتان" leftIcon="search" rightIcon="menu" />
            <SearchView popupEN={searchEN} setPopupEN={setsearchEN} />
            <TabLink tabItemVar={tabItem} setTabItemCallback={setTabItem} unreadMessagesCount={unreadMessagesCount} myRequestCount={myRequestCount} />
            {tabItem == 'Home' && (
                <View style={styles.tabContainer}>
                    <HomeNotif navigation={props.navigation} />
                    <GridView navigation={props.navigation} />
                    <BottomNav navigation={props.navigation} />
                </View>
            )}
            {tabItem == 'requests' && (
                <MyRequestsList myRequestsList={myRequestsList} setmyRequestsList={setmyRequestsList} navigation={props.navigation} />
            )}
            {tabItem == 'archives' && (
                <MessageListView myMessageList={myMessageList} setmyMessageList={setmyMessageList} navigation={props.navigation} />
            )}

            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: colors.lightBackground,
    },
    tabContainer: {
        flex: 1,
    },
});

export default Home;