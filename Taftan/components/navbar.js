// components/NavBar.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed

const NavBar = ({ rightCallback, leftCallback, title, leftIcon, rightIcon }) => {
    return (
        <View style={styles.topBar}>
            <TouchableOpacity style={styles.menuButton} onPress={rightCallback}>
                <Ionicons name={rightIcon} size={24} color="white" />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Text style={styles.brand}>تفتان</Text>
                <Image source={require('../assets/logo.png')} style={styles.toplogo} />
            </View>

            <TouchableOpacity style={styles.searchButton} onPress={leftCallback}>
                <Ionicons name={leftIcon} size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.darkBackground,
        height: 50,
        position: 'relative',
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    brand: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    toplogo: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    menuButton: {
        position: 'absolute',
        right: 0,
        paddingVertical: 4,
        paddingHorizontal: 17,
        zIndex: 10,
    },
    searchButton: {
        position: 'absolute',
        left: 0,
        paddingVertical: 4,
        paddingHorizontal: 17,
        zIndex: 10,
    },
});


export default NavBar;