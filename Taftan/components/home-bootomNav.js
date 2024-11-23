import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Animated,
    Dimensions
} from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons

const { width, height } = Dimensions.get('window');

const BottomNav = ({ navigation }) => {    
    const [slideAnim] = useState(new Animated.Value(height * 0.7)); // Initial position off screen

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0, // 70% of screen width
            duration: 300,
            useNativeDriver: true,
        }).start();
    });

    return (
        <Animated.View style={[styles.bottomNav, { transform: [{ translateY: slideAnim }] }]}>
            <TouchableOpacity style={styles.bottomNavButton}>
                <Ionicons name={"settings-outline"} style={styles.bottomNavIcon} />
                <Text style={styles.bottomNavText}>تنظیمات</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavButton}>
                <Ionicons name={"time-outline"} style={styles.bottomNavIcon} />
                <Text style={styles.bottomNavText}>تاریخچه</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomNavButton} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name={"person-outline"} style={styles.bottomNavIcon} />
                <Text style={styles.bottomNavText}>حساب کاربری</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    bottomNav: {
        width: '90%',
        margin: 'auto',
        borderRadius: 10,
        position: 'absolute',
        bottom: 30,
        right: '5%',
        backgroundColor: colors.white,
        elevation: 5,
        flexDirection: 'row-reverse',
    },
    bottomNavButton: {
        width: '30%',
        marginHorizontal: '1.56666%',
        marginVertical: 15,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    bottomNavIcon: {
        fontSize: 23,
        color: colors.gray,
    },
    bottomNavText: {
        fontFamily: 'iransans',
        fontSize: 12,
        paddingTop: 3,
        color: colors.gray,
    },
});

export default BottomNav;