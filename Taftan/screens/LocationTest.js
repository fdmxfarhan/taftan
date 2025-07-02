import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { startLocationService, stopLocationService } from '../services/locationService';
import NavBar from '../components/navbar';
import colors from '../components/colors';

const LocationTest = (props) => {
    var [isStarted, setIsStarted] = useState(false);
    useEffect(() => {
        // console.log('[LocationTest] Component mounted');
        return () => {
            // console.log('[LocationTest] Component unmounted');
        };
    }, []);

    const handleStartService = async () => {
        console.log('[LocationTest] Starting location service...');
        try {
            await startLocationService();
            console.log('[LocationTest] Location service started successfully');
            setIsStarted(true);
        } catch (error) {
            console.error('[LocationTest] Failed to start location service:', error);
        }
    };

    const handleStopService = async () => {
        console.log('[LocationTest] Stopping location service...');
        try {
            await stopLocationService();
            console.log('[LocationTest] Location service stopped successfully');
            setIsStarted(false);
        } catch (error) {
            console.error('[LocationTest] Failed to stop location service:', error);
        }
    };

    return (
        <View style={styles.container}>
            <NavBar rightCallback={() => { props.navigation.navigate('Home') }} leftCallback={() => props.navigation.goBack()} title="گزارش کار" leftIcon="arrow-back" rightIcon="home" />
            <View style={styles.content}>
                <Text style={styles.title}>اشتراک گذاری مکان</Text>
                {isStarted ? (
                    <TouchableOpacity style={[styles.button, styles.stopButton]} onPress={handleStopService}>
                        <Text style={styles.buttonText}>توقف اشتراک گذاری</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button} onPress={handleStartService}>
                        <Text style={styles.buttonText}>شروع اشتراک گذاری</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: colors.white,
        paddingBottom: 5,
    },
    content: {
        padding: 15,
    },
    title: {
        fontSize: 24,
        marginBottom: 30,
        textAlign: 'center',
        marginTop: 200,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        width: '90%',
        marginBottom: 15,
        marginHorizontal: 'auto',
    },
    stopButton: {
        backgroundColor: '#FF3B30',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LocationTest; 