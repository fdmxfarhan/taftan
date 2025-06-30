import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { startLocationService, stopLocationService } from '../services/locationService';

const LocationTest = () => {
    useEffect(() => {
        console.log('[LocationTest] Component mounted');
        return () => {
            console.log('[LocationTest] Component unmounted');
        };
    }, []);

    const handleStartService = async () => {
        console.log('[LocationTest] Starting location service...');
        try {
            await startLocationService();
            console.log('[LocationTest] Location service started successfully');
        } catch (error) {
            console.error('[LocationTest] Failed to start location service:', error);
        }
    };

    const handleStopService = async () => {
        console.log('[LocationTest] Stopping location service...');
        try {
            await stopLocationService();
            console.log('[LocationTest] Location service stopped successfully');
        } catch (error) {
            console.error('[LocationTest] Failed to stop location service:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Location Service Test</Text>
            <TouchableOpacity style={styles.button} onPress={handleStartService}>
                <Text style={styles.buttonText}>Start Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.stopButton]} onPress={handleStopService}>
                <Text style={styles.buttonText}>Stop Service</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        width: '80%',
        marginBottom: 15,
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