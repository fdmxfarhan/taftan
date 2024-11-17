import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import firebase from '@react-native-firebase/app';
import TabLink from '../components/home-tabLinks';
import GridView from '../components/home-gridView';
import BottomNav from '../components/home-bootomNav';
import HomeNotif from '../components/home-notif';

const firebaseConfig = {

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Home = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [tabItem, setTabItem] = useState('Home');

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        console.log('Search clicked');
    };

    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="سامانه تفتان" leftIcon="search" rightIcon="menu" />

            <TabLink tabItemVar={tabItem} setTabItemCallback={setTabItem} />
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
    },
    tabContainer: {
        flex: 1,
        // backgroundColor: colors.white,
    },
    
});

export default Home;