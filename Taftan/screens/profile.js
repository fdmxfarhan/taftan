import React, { useEffect, useState } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import colors, { white } from '../components/colors';
import NavBar from '../components/navbar';
import SideMenu from '../components/SideMenu';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import ConfirmPopup from '../components/confirm';
import { logout } from '../services/auth';

const Profile = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const [userIconScale] = useState(new Animated.Value(0)); // Scale animation

    useEffect(() => {
        Animated.spring(userIconScale, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
        }).start();
    });

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.navbar}>
                    <TouchableOpacity style={styles.menuButton} onPress={() => { setMenuVisible(!menuVisible); }}>
                        <Ionicons name={"menu"} style={styles.navIcon} />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>پروفایل</Text>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {setLogoutModalVisible(true)}}>
                        <Ionicons name={"exit"} style={styles.navIcon} />
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.userIconView}> */}
                <Animated.View
                    style={[
                        styles.userIconView,
                        { transform: [{ scale: userIconScale }] },
                    ]}
                >
                    <Ionicons name={'person'} style={styles.userIcon} />
                </Animated.View>
                {/* </View> */}
            </View>

            <View style={styles.userInfo}>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>نام:</Text>
                    <Text style={styles.userInfoValue}>فرحان</Text>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>نام خانوادگی:</Text>
                    <Text style={styles.userInfoValue}>دائمی مژدهی</Text>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>نقش کاربر:</Text>
                    <Text style={styles.userInfoValue}>کارشناس</Text>
                </View>
            </View>
            
            <ConfirmPopup 
                modalVisible={logoutModalVisible}
                setModalVisible={setLogoutModalVisible}
                question={'آیا میخواهید خارج شوید؟'}
                onSubmit={() => {
                    logout();
                    props.navigation.navigate('Login');
                }}
                />
            <SideMenu
                isVisible={menuVisible}
                onClose={() => { setMenuVisible(!menuVisible); }}
                navigation={props.navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBackground,
        alignContent: 'center',
        alignItems: 'center',
    },
    topView: {
        backgroundColor: colors.darkBackground,
        width: '100%',
        height: 170,
        alignContent: 'center',
        alignItems: 'center',
    },
    navbar: {
        flexDirection: 'row-reverse',
        paddingVertical: 15,
    },
    menuButton: {
        width: '15%',
    },
    navIcon: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 30,
    },
    pageTitle: {
        width: '70%',
        textAlign: 'center',
        color: colors.white,
        fontSize: 17,
        paddingVertical: 3,
        fontFamily: 'iransans',
    },
    logoutButton: {
        width: '15%',
    },
    userIconView: {
        backgroundColor: white,
        width: 150,
        height: 150,
        marginTop: 0,
        borderRadius: 75,
        alignItems: 'center',
        alignContent: 'center',
        elevation: 7,
        // borderWidth: 1,
        // borderColor: colors.darkBackground,
    },
    userIcon: {
        textAlign: 'center',
        fontSize: 70,
        paddingTop: 30,
    },
    userInfo: {
        marginTop: 70,
        width: '100%'
    },
    userInfoItem: {
        width: '90%',
        marginHorizontal: 'auto',
        marginBottom: 20,
    },
    userInfoTitle: {
        fontFamily: 'iransans',
        fontSize: 16,
    },
    userInfoValue: {
        backgroundColor: colors.lightgray,
        fontFamily: 'iransans',
        fontSize: 15,
        textAlign: 'center',
        color: colors.black,
        paddingVertical: 5,
        borderBottomColor: colors.darkblue,
        borderBottomWidth: 1,
        borderRadius: 5,
    },
});

export default Profile;