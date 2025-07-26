import { AppRegistry } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { SendLocation } from './services/locationService';

const LocationTask = async () => {
  console.log('LocationTask started');

  try {
    // درخواست موقعیت فعلی کاربر به صورت Promise
    const position = await new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        resolve,
        reject,
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          forceRequestLocation: true,  // در صورت نیاز به درخواست مجدد مجوز لوکیشن
          showLocationDialog: true,    // برای نمایش دیالوگ فعال کردن لوکیشن در اندروید
        }
      );
    });

    const { latitude, longitude } = position.coords;
    console.log('Got location:', latitude, longitude);

    const locationData = {
      latitude,
      longitude,
      timestamp: new Date().toISOString(),
    };

    // ارسال لوکیشن به سرور
    const response = await SendLocation(locationData);
    if (response.success) {
      console.log('Location sent successfully');
    } else {
      console.log('Failed to send location:', response.error || 'Unknown error');
    }
  } catch (error) {
    console.error('Error in LocationTask:', error);
  }
};


export default LocationTask;
