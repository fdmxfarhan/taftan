// services/picked-device.js
import AsyncStorage from '@react-native-async-storage/async-storage';
const PICKED_DEVICE_KEY = 'picked_device_id';

export const setPickedDevice = async (requestId) => {
  try {
    await AsyncStorage.setItem(PICKED_DEVICE_KEY, requestId.toString());
  } catch (e) {
    console.warn('Error saving picked device:', e);
  }
};

export const getPickedDevice = async () => {
  try {
    return await AsyncStorage.getItem(PICKED_DEVICE_KEY);
  } catch (e) {
    console.warn('Error reading picked device:', e);
    return null;
  }
};

export const clearPickedDevice = async () => {
  try {
    await AsyncStorage.removeItem(PICKED_DEVICE_KEY);
  } catch (e) {
    console.warn('Error clearing picked device:', e);
  }
};
