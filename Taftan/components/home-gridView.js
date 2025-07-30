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
        <Animated.View style={[styles.gridView]}>
            <View style={styles.gridRow}>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServiceDamage')}>
                    <Ionicons style={[styles.gridButtonIcon, { color: colors.red2 }]} name={'construct-outline'} />
                    <Text style={styles.gridButtonText}>سرویس خرابی</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServiceInstallation')}>
                    <Ionicons style={[styles.gridButtonIcon, { color: colors.darkGreen }]} name={'hammer-outline'} />
                    <Text style={styles.gridButtonText}>سرویس نصب</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('DeviceListView')}>
                    <Ionicons style={[styles.gridButtonIcon, { color: colors.specialBlue }]} name={'calculator'} />
                    <Text style={styles.gridButtonText}>دستگاه های من</Text>
                </TouchableOpacity>
          
            </View>
            <View style={styles.gridRow}>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServiceProjects')}>
                    <Ionicons style={[styles.gridButtonIcon, { color: colors.specialOrange }]} name={'settings'} />
                    <Text style={styles.gridButtonText}>سرویس پروژه</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServicePeriodic')}>
                    <Ionicons style={[styles.gridButtonIcon, { color: colors.specialYellow }]} name={'repeat'} />
                    <Text style={styles.gridButtonText}>سرویس دوره‌ای</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('CameraScan')}>
                    <Ionicons style={[styles.gridButtonIcon, { color: colors.purple }]} name={'barcode-outline'} />
                    <Text style={styles.gridButtonText}>اسکن بارکد</Text>
                </TouchableOpacity>
           
            </View>
            <View style={styles.gridRow}>
            
                {/* <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('Icons')}>
                    <Ionicons style={[styles.gridButtonIcon, { backgroundColor: colors.lightblue }]} name={'information'} />
                    <Text style={styles.gridButtonText}>آیکون ها(تست)</Text>
                </TouchableOpacity> */}
          
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('MapPage')}>
                    <Ionicons style={[styles.gridButtonIcon, { color: colors.specialGreen }]} name={'map-outline'} />
                    <Text style={styles.gridButtonText}>نقشه</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('ServiceSite')}>
                    <Ionicons style={[styles.gridButtonIcon, { color: colors.blue }]} name={'storefront-outline'} />
                    <Text style={styles.gridButtonText}>سایت سازی</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('LocationTest')}>
                    <Ionicons style={[styles.gridButtonIcon, { color: colors.darkcyan }]} name={'location-outline'} />
                    <Text style={styles.gridButtonText}>اشتراک موقعیت</Text>
                </TouchableOpacity> */}
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
        shadowColor: '#c9c9c9',
        elevation: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: '1.56666%',
    },
    gridButtonIcon: {
        fontSize: 30,
        backgroundColor: colors.white,
        color: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        // elevation: 5,
    },
    gridButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        paddingTop: 1,
        color: colors.text,
    },
});

export default GridView;