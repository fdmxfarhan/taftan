import React, { useEffect, useState } from 'react';
import {
    Button,
    Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import colors from '../components/colors';
import NavBar from '../components/navbar';
import SideMenu from '../components/SideMenu';
const {saveData, readData} = require('../config/save');
import Geolocation from 'react-native-geolocation-service';
import MapLibreGL from "@maplibre/maplibre-react-native";

MapLibreGL.setAccessToken(null);


// import Mapir from 'mapir-react-native-sdk';
// import MapView, { PROVIDER_OSM  } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


const MapPage = (props) => {    
    const [location, setLocation] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    
    useEffect(() => {
        requestLocationPermission();
    });

    const requestLocationPermission = async () => {
        if (Platform === 'android') {
          PermissionsAndroid.requestMultiple(
            [
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            ],
            {
              title: 'Give Location Permission',
              message: 'App needs location permission to find your position.',
            }
          )
            .then((granted) => {
              console.log(granted);
              resolve();
            })
            .catch((err) => {
              console.warn(err);
              reject(err);
            });
        }
    };
    
    const getCurrentLocation = async () => {
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            shareLocation(latitude, longitude);
            console.log([latitude, longitude]);
          },
          (error) => {
            console.warn(error.message);
            requestLocationPermission();
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
          }
        );
      };

    const shareLocation = async () => {
        if (location) {
            try {
                // await fetch('https://your-server.com/api/location', {
                //   method: 'POST',
                //   headers: {
                //     'Content-Type': 'application/json',
                //   },
                //   body: JSON.stringify({
                //     latitude: location.latitude,
                //     longitude: location.longitude,
                //   }),
                // });
                ToastAndroid.show(`location: ${Math.round(location.latitude)}, ${Math.round(location.longitude)}`, ToastAndroid.SHORT);
            } catch (error) {
                console.error('Error sharing location:', error);
            }
        }
    };

    return(
        <View style={styles.container}>
            <NavBar
                rightCallback={() => {setMenuVisible(!menuVisible);}} 
                leftCallback={() => {props.navigation.goBack();}} 
                title="نقشه" 
                leftIcon="arrow-back"
                rightIcon="menu"
            />
            <MapLibreGL.MapView
              style={styles.map}
              logoEnabled={false}
              styleURL="https://demotiles.maplibre.org/style.json"
            />
            {location ? (
              <View></View>
             ) : (
                <Text>Fetching location...</Text>
            )}
            <Button title="Share Location" onPress={getCurrentLocation} />

            <SideMenu 
                isVisible={menuVisible} 
                onClose={() => {setMenuVisible(!menuVisible);}} 
                navigation={props.navigation}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBackground,
        alignContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 300,
    },
    title: {
        fontFamily: 'iransans',
        fontSize: 22,
        color: colors.lightBackground,
        marginTop: 20,
        fontWeight: 'bold',
    },
    mapContainer: {
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      flex: 1,
      width: '100%',
      height: 400,
    },
});

export default MapPage;