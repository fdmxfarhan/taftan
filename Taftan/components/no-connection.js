import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed

const NotConnected = ({ serviceConnected, refresh }) => {
    if(!serviceConnected){
        return (
            <View style={styles.container}>
                <Ionicons name={'warning'} style={styles.icon} />
                <Text style={styles.text}>عدم اتصال به سرویس</Text>
                <Text style={styles.text}>لطفا اتصال به اینترنت را بررسی فرمایید.</Text>
                <TouchableOpacity style={styles.refreshButton} onPress={refresh}>
                    <Ionicons name={'refresh'} style={styles.refreshIcon} />
                    <Text style={styles.refreshText}>تلاش مجدد</Text>
                </TouchableOpacity>
            </View>
        );
    }else return(null)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        fontSize: 100,
        textAlign: 'center',
        marginTop: 150,
        color: colors.gray,
    },
    text: {
        fontFamily: 'iransans',
        fontSize: 15,
        textAlign: 'center',
        color: colors.gray,
    },
    refreshButton: {
        backgroundColor: colors.blue,
        width: 100,
        marginHorizontal: 'auto',
        marginTop: 10,
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    refreshIcon: {
        color: colors.white,
        textAlign: 'center',
        marginLeft: 5,
    },
    refreshText: {
        color: colors.white,
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 13,
    },
});

export default NotConnected;