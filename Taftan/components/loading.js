import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed

const LoadingView = ({ isLoading, text }) => {
    if(isLoading){
        return (
            <View style={styles.blackModal}>
                <View style={styles.loadingView}>
                    <ActivityIndicator size="large" color="#00ff00" />
                    <Text style={styles.loadingText}>{text}</Text>
                </View>
            </View>
        );
    }else return(null)
};

const styles = StyleSheet.create({
    blackModal: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: colors.modal,
        zIndex: 100,
        alignItems: 'center',
        alignContent: 'center',
    },
    loadingView: {
        marginTop: 350,
    },
    loadingText: {
        fontFamily: 'iransans',
        fontSize: 15,
        color: colors.white,
        textAlign: 'center',
    },
});

export default LoadingView;