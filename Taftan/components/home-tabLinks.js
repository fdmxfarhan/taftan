import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons

const TabLink = ({ tabItemVar, setTabItemCallback, unreadMessagesCount }) => {    
    return (
        <View style={styles.tabLinksView}>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'Home' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('Home')}>
                <Ionicons name={tabItemVar == 'Home' ? "home" : "home-outline"} style={[styles.tabLinkIcon, tabItemVar == 'Home' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'Home' ? styles.activeText : styles.deactive]}>خانه</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'requests' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('requests')}>
                <Ionicons name={tabItemVar == 'requests' ? "git-pull-request" : "git-pull-request-outline"} style={[styles.tabLinkIcon, tabItemVar == 'requests' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'requests' ? styles.activeText : styles.deactive]}>درخواست‌های من</Text>
                <Text style={styles.tabLinkNotif}>{unreadMessagesCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'archives' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('archives')}>
                <Ionicons name={tabItemVar == 'archives' ? "notifications" : "notifications-outline"} style={[styles.tabLinkIcon, tabItemVar == 'archives' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'archives' ? styles.activeText : styles.deactive]}>پیام‌ها</Text>
                <Text style={styles.tabLinkNotif}>{unreadMessagesCount}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabLinksView: {
        flexDirection: 'row-reverse',
        marginTop: 10,
        width: '100%',
        marginHorizontal: 'auto',
    },
    tabLinkItem: {
        width: '33.33%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 2,
        position: 'relative',
    },
    tabLinkNotif: {
        position: 'absolute',
        backgroundColor: colors.red2,
        color: colors.white,
        paddingVertical: 1,
        paddingHorizontal: 7,
        paddingBottom: 0,
        fontFamily: 'iransans',
        fontSize: 10,
        borderRadius: 12,
        top: 5,
        left: 32,
    },
    activeButton: {
        borderBottomColor: colors.darkBackground,
        borderBottomWidth: 3,
    },
    tabLinkIcon: {
        fontSize: 20,
        color: colors.lightDark
    },
    tabLinkText: {
        fontFamily: 'iransans',
        fontSize: 12,
        paddingTop: 4,
        color: colors.lightDark
    },
    activeIcon: {
        color: colors.darkBackground,
    },
    activeText: {
        color: colors.darkBackground,
    },
});

export default TabLink;