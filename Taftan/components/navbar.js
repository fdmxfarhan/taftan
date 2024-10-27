// components/NavBar.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed

const NavBar = ({ rightCallback, leftCallback, title, leftIcon, rightIcon}) => {
    return (
        <View style={styles.topBar}>
            <TouchableOpacity style={styles.menuButton} onPress={rightCallback}>
                <Ionicons name={rightIcon} size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>{title}</Text>
            <TouchableOpacity style={styles.searchButton} onPress={leftCallback}>
                <Ionicons name={leftIcon} size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 0,
        backgroundColor: colors.darkBackground,
        height: 70,
    },
    menuButton: {
        position: 'absolute',
        right: 0,
        color: colors.white,
        paddingVertical: 4,
        paddingHorizontal: 17,
        zIndex: 10,
    },
    searchButton: {
        position: 'absolute',
        left: 0,
        color: colors.white,
        paddingVertical: 4,
        paddingHorizontal: 17,
        zIndex: 10,
    },
    pageTitle: {
        color: colors.white,
        fontFamily: 'iransans',
        textAlign: 'center',
        width: '100%',
        paddingTop: 5,
        fontSize: 16,
    },
});

export default NavBar;