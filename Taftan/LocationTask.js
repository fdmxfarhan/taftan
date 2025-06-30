// LocationTask.js
import Geolocation from 'react-native-geolocation-service';

let watchId = null;
let lastLocation = null;
const DISTANCE_THRESHOLD = 100; // meters

// Calculate distance between two coordinates using Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c; // Distance in meters
};

const shareLocation = async (latitude, longitude) => {
    try {
        console.log('[LocationTask] Sharing location:', { latitude, longitude });
        // TODO: Replace with your actual API endpoint
        // await fetch('your-api-endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         latitude,
        //         longitude,
        //         timestamp: new Date().toISOString(),
        //     }),
        // });
    } catch (error) {
        console.log('[LocationTask] Error sharing location:', error);
    }
};

export default async (event) => {
    console.log('[LocationTask] Starting background location task');
    console.log('[LocationTask] Event data:', event);
    
    try {
        // Clear any existing watch
        if (watchId !== null) {
            Geolocation.clearWatch(watchId);
        }

        // Start watching position
        watchId = Geolocation.watchPosition(
            (position) => {
                console.log('[LocationTask] New location received:', position);
                
                const { latitude, longitude } = position.coords;
                
                if (lastLocation) {
                    const distance = calculateDistance(
                        lastLocation.latitude,
                        lastLocation.longitude,
                        latitude,
                        longitude
                    );
                    
                    console.log('[LocationTask] Distance moved:', distance, 'meters');
                    
                    if (distance >= DISTANCE_THRESHOLD) {
                        console.log('[LocationTask] Threshold exceeded, sharing location');
                        shareLocation(latitude, longitude);
                        lastLocation = { latitude, longitude };
                    }
                } else {
                    // First location received
                    console.log('[LocationTask] First location received, sharing');
                    shareLocation(latitude, longitude);
                    lastLocation = { latitude, longitude };
                }
            },
            (error) => {
                console.log('[LocationTask] Error watching location:', error);
            },
            {
                enableHighAccuracy: true,
                distanceFilter: 10, // Minimum distance (meters) between updates
                interval: 5000, // Minimum time (milliseconds) between updates
                fastestInterval: 2000, // Fastest rate in milliseconds at which your app can handle updates
            }
        );

        console.log('[LocationTask] Location watching started with ID:', watchId);

    } catch (error) {
        console.log('[LocationTask] Error in background location task:', error);
    }
};
  