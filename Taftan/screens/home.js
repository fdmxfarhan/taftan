import React, { useEffect, useRef, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
// import firebase from '@react-native-firebase/app';
import TabLink from '../components/home-tabLinks';
import GridView from '../components/home-gridView';
import BottomNav from '../components/home-bootomNav';
import HomeNotif from '../components/home-notif';
import PersianDatePicker from '../components/persian-date-picker';
import SimpleScrollPicker from '../components/Picker';
import { GetUnreadMessageCount } from '../services/msgbox-unread-count';

// const firebaseConfig = {

// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

const Home = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [tabItem, setTabItem] = useState('Home');
    var   [unreadMessagesCount, setunreadMessagesCount] = useState(0);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        props.navigation.navigate('Icons');
    };
    useEffect(() => {
        const sendRequest = async () => {
            var result = await GetUnreadMessageCount();
            if (result.success) {
                console.log(result.data)
                setunreadMessagesCount(result.data);
            } else ToastAndroid.show('لیست دسترسی‌ها بارگیری نشد.', ToastAndroid.SHORT);
        }
        sendRequest();
    }, [])
    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="سامانه تفتان" leftIcon="search" rightIcon="menu" />
            <TabLink tabItemVar={tabItem} setTabItemCallback={setTabItem} unreadMessagesCount={unreadMessagesCount} />
            {tabItem == 'Home' && (
                <View style={styles.tabContainer}>
                    <HomeNotif navigation={props.navigation} />
                    <GridView navigation={props.navigation} />
                    <BottomNav navigation={props.navigation} />
                </View>
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