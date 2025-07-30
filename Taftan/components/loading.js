import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
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
        right: 0,
        bottom: 0,
        backgroundColor: colors.modal,
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'center',
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