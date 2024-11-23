import React, { useEffect, useRef, useState } from 'react';
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

const GridView = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity is 0

    const fadeIn = () => {
        // Fade in the view over 1000ms
        Animated.timing(fadeAnim, {
            toValue: 1, // Target opacity
            duration: 500, // Duration of the animation in ms
            useNativeDriver: true, // Use native driver for better performance
        }).start();
    };
    useEffect(() => {
        fadeIn();
    })
    return (
        <Animated.View style={[styles.gridView, {opacity: fadeAnim}]}>
            <View style={styles.gridRow}>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServiceDamage')}>
                    <Ionicons style={[styles.gridButtonIcon, { backgroundColor: colors.orange }]} name={'construct-outline'} />
                    <Text style={styles.gridButtonText}>سرویس خرابی</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServiceInstallation')}>
                    <Ionicons style={[styles.gridButtonIcon, { backgroundColor: colors.yellow }]} name={'hammer-outline'} />
                    <Text style={styles.gridButtonText}>سرویس نصب</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServiceSite')}>
                    <Ionicons style={[styles.gridButtonIcon, { backgroundColor: colors.blue }]} name={'business-outline'} />
                    <Text style={styles.gridButtonText}>سایت سازی</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.gridRow}>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServiceProjects')}>
                    <Ionicons style={[styles.gridButtonIcon, { backgroundColor: colors.lightDark }]} name={'clipboard'} />
                    <Text style={styles.gridButtonText}>سرویس پروژه</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServicePeriodic')}>
                    <Ionicons style={[styles.gridButtonIcon, { backgroundColor: colors.darkGreen }]} name={'repeat-outline'} />
                    <Text style={styles.gridButtonText}>سرویس دوره‌ای</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('MapPage')}>
                    <Ionicons style={[styles.gridButtonIcon, { backgroundColor: colors.darkblue }]} name={'map-outline'} />
                    <Text style={styles.gridButtonText}>نقشه</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    gridView: {
        width: '100%',
        marginHorizontal: 'auto',
        marginTop: 10,
    },
    gridRow: {
        flexDirection: 'row-reverse',
    },
    gridButton: {
        width: '30%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: '1.56666%',
    },
    gridButtonIcon: {
        fontSize: 25,
        backgroundColor: colors.blue,
        color: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        // elevation: 5,
    },
    gridButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        paddingTop: 5,
        color: colors.text,
    },
});

export default GridView;