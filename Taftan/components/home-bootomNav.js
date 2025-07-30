import React, { useEffect, useRef } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Dimensions,
} from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const tabs = [
    { key: 'Home', icon: 'home', iconOutline: 'home-outline', label: 'خانه' },
    { key: 'requests', icon: 'git-pull-request', iconOutline: 'git-pull-request-outline', label: 'درخواست‌های من' },
    { key: 'archives', icon: 'chatbubbles', iconOutline: 'chatbubbles-outline', label: 'پیام‌ها' },
];

const BottomNav = ({ tabItemVar, setTabItemCallback, unreadMessagesCount, myRequestCount }) => {
    const slideAnim = useRef(new Animated.Value(height * 0.8)).current;
    const tabAnimations = useRef({});

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        tabs.forEach(tab => {
            if (!tabAnimations.current[tab.key]) {
                tabAnimations.current[tab.key] = new Animated.Value(tabItemVar === tab.key ? -16 : 0);
            } else {
                Animated.timing(tabAnimations.current[tab.key], {
                    toValue: tabItemVar === tab.key ? -4 : 0,
                    duration: 200,
                    useNativeDriver: true,
                }).start();
            }
        });
    }, [tabItemVar]);

    const renderTabItem = (tab) => {
        const isActive = tabItemVar === tab.key;
        const iconName = isActive ? tab.icon : tab.iconOutline;
        const notifCount = tab.key === 'archives' ? unreadMessagesCount : (tab.key === 'requests' ? myRequestCount : 0);

        return (
            <TouchableOpacity key={tab.key} onPress={() => setTabItemCallback(tab.key)} activeOpacity={0.8}>
                <Animated.View style={[
                    styles.tabButton,
                    tab.key === 'requests' && styles.centerTab,
                    isActive && styles.activeItem,
                    { transform: [{ translateY: tabAnimations.current[tab.key] || new Animated.Value(0) }] }
                ]}>
                    <Ionicons name={iconName} style={[styles.icon, isActive && styles.activeIcon]} />
                    <Text style={[styles.label, isActive && styles.activeText]}>
                        {tab.label}
                    </Text>
                    {notifCount > 0 && (
                        <Text style={styles.badge}>{notifCount}</Text>
                    )}
                </Animated.View>
            </TouchableOpacity>
        );
    };

    return (
        <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
            {tabs.map(renderTabItem)}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        backgroundColor: colors.white,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingVertical: 6,
        elevation: 8,
        zIndex: 999,
    },
    tabButton: {
        width: 80,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingHorizontal: 4,
    },
    centerTab: {
        width: 100, 
    },
    activeItem: {
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
    },
    icon: {
        fontSize: 22,
        color: colors.lightDark,
    },
    activeIcon: {
        fontSize: 24,
        color: colors.darkBackground,
    },
    label: {
        fontFamily: 'iransans',
        fontSize: 11,
        paddingTop: 2,
        color: colors.lightDark,
        width: '100%',
        textAlign: 'center',
    },
    activeText: {
        fontFamily: 'iransansbold',
        color: colors.darkBackground,
    },
    badge: {
        position: 'absolute',
        top: 4,
        left: 24,
        backgroundColor: colors.red,
        color: colors.white,
        fontSize: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
        fontFamily: 'iransansbold',
        overflow: 'hidden',
    },
});

export default BottomNav;
