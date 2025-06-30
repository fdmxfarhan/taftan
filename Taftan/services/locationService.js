import { NativeModules, Platform } from 'react-native';

const { LocationService } = NativeModules;

export const startLocationService = async () => {
    if (Platform.OS === 'android') {
        try {
            await LocationService.startService();
            console.log('Location service started successfully');
        } catch (error) {
            console.error('Failed to start location service:', error);
        }
    }
};

export const stopLocationService = async () => {
    if (Platform.OS === 'android') {
        try {
            await LocationService.stopService();
            console.log('Location service stopped successfully');
        } catch (error) {
            console.error('Failed to stop location service:', error);
        }
    }
}; 