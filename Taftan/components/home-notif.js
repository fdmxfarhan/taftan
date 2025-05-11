import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Animated
} from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons

const HomeNotif = ({ navigation, activeCase }) => {
    const [notifScale] = useState(new Animated.Value(0.9)); // Scale animation
    
    const handleItemPress = (item) => {
        navigation.navigate('DamageReqView', { item });
    };
    useEffect(() => {
        console.log(activeCase);
        Animated.spring(notifScale, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
        }).start();
    }, []);
    if(activeCase == null) return null;
    return (
        <Animated.View
            style={[
                styles.notifView,
                { transform: [{ scale: notifScale }] },
            ]}
        >
            <Text style={styles.notifStat}>{activeCase.currentUserName}</Text>
            <Text style={styles.notifTitle}>درخواست خرابی: {activeCase.requestId}</Text>
            <Text style={styles.notifInfoTitle}>{activeCase.areaName} / {activeCase.customerName} / {activeCase.deviceName}</Text>
            <Text style={styles.notifInfoTitle}>عنوان: {activeCase.serviceName}</Text>
            <Text style={styles.notifDate}>{activeCase.persianInsertedDate}</Text>
            <TouchableOpacity style={styles.notifButton} onPress={() => handleItemPress(activeCase)}>
                <Text style={styles.notifButtonText}>مشاهده جزئیات</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    notifView: {
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 20,
        borderRadius: 15,
        borderColor: colors.uranianBlue,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        position: 'relative',
        height: 120,
        backgroundColor: colors.lightBackground,
        elevation: 5,
        // backgroundColor: colors.white,
    },
    notifStat: {
        position: 'absolute',
        left: 20,
        top: 10,
        color: colors.gray,
        fontFamily: 'iransans',
        fontSize: 14,
        color: colors.emerald,
    },
    notifTitle: {
        fontFamily: 'iransansbold',
        color: colors.blue,
        paddingBottom: 5,
    },
    notifInfoTitle: {
        color: colors.gray,
        fontFamily: 'iransans',
        fontSize: 13,
    },
    notifDate: {
        color: colors.gray,
        fontFamily: 'iransans',
        fontSize: 11,
        textAlign: 'right',
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    notifButton: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        borderColor: colors.blue,
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 4,
        paddingHorizontal: 20,
    },
    notifButtonText: {
        fontFamily: 'iransansbold',
        fontSize: 14,
        color: colors.blue,

    },
});

export default HomeNotif;