import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, BackHandler, ToastAndroid, Dimensions, Animated } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
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
import { getAuthData } from '../services/auth';
import { submitMyDamageRequest } from '../services/ser-my-damage';
import { submitMyInstallationRequest } from '../services/ser-my-installation';
import { submitMySiteRequest } from '../services/ser-my-site';
import { submitMyProjectRequest } from '../services/ser-my-project';
import { submitMyPMRequest } from '../services/ser-my-pm';

const Home = (props) => {
    var [menuVisible, setMenuVisible] = useState(false);
    var [tabItem, setTabItem] = useState('Home');
    var [unreadMessagesCount, setunreadMessagesCount] = useState(0);
    var [myRequestCount, setmyRequestCount] = useState(0);
    var [searchEN, setsearchEN] = useState(false);
    var [myMessageList, setmyMessageList] = useState([]);
    var [myDamageRequestsList, setmyDamageRequestsList] = useState([]);
    var [myInstallRequestsList, setmyInstallRequestsList] = useState([]);
    var [mySiteRequestsList, setmySiteRequestsList] = useState([]);
    var [myProjectRequestsList, setmyProjectRequestsList] = useState([]);
    var [myPeriodicRequestsList, setmyPeriodicRequestsList] = useState([]);
    var [activeCase, setActiveCase] = useState(null);

    const { width } = Dimensions.get('window');
    const translateX = useRef(new Animated.Value(0)).current;
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const tabOrder = ['Home', 'requests', 'archives'];

    const handleGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { 
            useNativeDriver: true,
            listener: (event) => {
                const { translationX, velocityX } = event.nativeEvent;
                const threshold = width * 0.1;

                if (Math.abs(velocityX) > 200 || Math.abs(translationX) > threshold) {
                    if (translationX < 0 && currentTabIndex > 0) {
                        // Swipe left (which is actually going to previous in RTL)
                        setCurrentTabIndex(prev => prev - 1);
                        setTabItem(tabOrder[currentTabIndex - 1]);
                    } else if (translationX > 0 && currentTabIndex < tabOrder.length - 1) {
                        // Swipe right (which is actually going to next in RTL)
                        setCurrentTabIndex(prev => prev + 1);
                        setTabItem(tabOrder[currentTabIndex + 1]);
                    }
                }
            }
        }
    );

    const handleGestureEnd = (event) => {
        Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            velocity: event.nativeEvent.velocityX,
            tension: 40,
            friction: 7
        }).start();
    };

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

            myRequestCount = 0;
            var result = await submitMyDamageRequest(0, 50, props.navigation);
            if (result.success) {
                setmyDamageRequestsList(result.data.Data);
                myRequestCount += result.data.TotalCount;
                if(result.data.Data.length > 0) setActiveCase(result.data.Data[0]);
            } else ToastAndroid.show('درخواست‌های من بارگیری نشد.', ToastAndroid.SHORT);

            var result = await submitMyInstallationRequest(0, 50, props.navigation);
            if (result.success) {
                setmyInstallRequestsList(result.data.Data);
                myRequestCount += result.data.TotalCount;
            } else ToastAndroid.show('درخواست‌های من بارگیری نشد.', ToastAndroid.SHORT); 

            var result = await submitMySiteRequest(0, 50, props.navigation);
            if (result.success) {
                setmySiteRequestsList(result.data.Data);
                myRequestCount += result.data.TotalCount;
            } else ToastAndroid.show('درخواست‌های من بارگیری نشد.', ToastAndroid.SHORT); 

            var result = await submitMyProjectRequest(0, 50, props.navigation);
            if (result.success) {
                setmyProjectRequestsList(result.data.Data);
                myRequestCount += result.data.TotalCount;
            } else ToastAndroid.show('درخواست‌های من بارگیری نشد.', ToastAndroid.SHORT); 
            
            var result = await submitMyPMRequest(0, 50, props.navigation);
            if (result.success) {
                setmyPeriodicRequestsList(result.data.Data);
                myRequestCount += result.data.TotalCount;
            } else ToastAndroid.show('درخواست‌های من بارگیری نشد.', ToastAndroid.SHORT); 
            setmyRequestCount(myRequestCount);
        }
        sendRequest();
    }, [tabItem])
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="سامانه تفتان" leftIcon="search" rightIcon="menu" />
                <SearchView popupEN={searchEN} setPopupEN={setsearchEN} navigation={props.navigation} />
                <TabLink tabItemVar={tabItem} setTabItemCallback={setTabItem} unreadMessagesCount={unreadMessagesCount} myRequestCount={myRequestCount} />
                {/* <PanGestureHandler
                    onGestureEvent={handleGestureEvent}
                    onHandlerStateChange={({ nativeEvent }) => {
                        if (nativeEvent.state === 5) { // END state
                            handleGestureEnd({ nativeEvent });
                        }
                    }}
                > */}
                    <Animated.View style={[styles.tabContainer, {
                        transform: [{ translateX }]
                    }]}>
                        {tabItem == 'Home' && (
                            <View style={styles.tabContainer}>
                                <HomeNotif navigation={props.navigation} activeCase={activeCase} />
                                <GridView navigation={props.navigation} />
                                <BottomNav navigation={props.navigation} />
                            </View>
                        )}
                        {tabItem == 'requests' && (
                            <MyRequestsList 
                                myDamageRequestsList={myDamageRequestsList} 
                                myInstallRequestsList={myInstallRequestsList} 
                                mySiteRequestsList={mySiteRequestsList} 
                                myProjectRequestsList={myProjectRequestsList} 
                                myPeriodicRequestsList={myPeriodicRequestsList} 
                                navigation={props.navigation}  
                            />
                        )}
                        {tabItem == 'archives' && (
                            <MessageListView myMessageList={myMessageList} setmyMessageList={setmyMessageList} navigation={props.navigation} />
                        )}
                    </Animated.View>
                {/* </PanGestureHandler> */}
                <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation} />
            </View>
        </GestureHandlerRootView>
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