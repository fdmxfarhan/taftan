import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';
import colors from './colors';

const HomeNotif = ({ navigation, activeCase }) => {
    const [notifScale] = useState(new Animated.Value(0.95));

    const handleItemPress = (item) => {
        navigation.navigate('DamageReqView', { item });
    };

    useEffect(() => {
        Animated.spring(notifScale, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
        }).start();
    }, []);

    if (!activeCase) return null;

    return (
        <TouchableWithoutFeedback onPress={() => handleItemPress(activeCase)}>
            <Animated.View
                style={[
                    styles.notifView,
                    { transform: [{ scale: notifScale }] },
                ]}
            >
                <View style={styles.headerRow}>
                    <Text style={styles.notifDate}>{activeCase.persianInsertedDate}</Text>
                    <Text style={styles.notifStat}>{activeCase.currentUserName}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.valueBlue}>{activeCase.requestId}</Text>
                    <Text style={styles.label}>شماره درخواست:</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.value}>{activeCase.areaName} / {activeCase.customerName} / {activeCase.deviceName}</Text>
                    <Text style={styles.label}>نقش:</Text>
                </View>


                <View style={styles.row}>
                    <Text style={styles.value}>{activeCase.serviceName}</Text>
                    <Text style={styles.label}>عنوان:</Text>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },

    label: {
        fontSize: 13,
        color: '#434343',
        fontFamily: 'iransansbold',
        textAlign: 'right',
    },

    value: {
        fontFamily: 'irans',
        fontSize: 14,
        color: '#626262',
        textAlign: 'left',
    },
    valueBlue: {
        fontFamily: 'iransansbold',
        fontSize: 14,
        color:colors.blue,
        textAlign: 'left',
    },

    notifView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 12,
        borderRadius: 12,
        borderColor: '#D0E8FF',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#F9FCFF',
        elevation: 2,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    notifStat: {
        fontFamily: 'iransans',
        fontSize: 13,
        color: '#555',
    },
    notifDate: {
        fontFamily: 'iransans',
        fontSize: 11,
        color: '#555',
    },
    notifTitle: {
        fontFamily: 'iransans',
        fontSize: 13,
        color: '#555',
        marginBottom: 3,
    },
    requestId: {
        fontFamily: 'iransansbold',
        fontSize: 14,
        color: '#007BFF',
    },
    notifInfoTitle: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: '#666',
        marginBottom: 2,
    },
});

export default HomeNotif;
