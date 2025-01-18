import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
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
const { saveData, readData } = require('../config/save');
import Geolocation from 'react-native-geolocation-service';
import MapLibreGL from "@maplibre/maplibre-react-native";
import { WebView } from 'react-native-webview';
import { MAP_API_KEY } from '../config/consts';
import { getDevicesOnMap } from '../services/device-get-on-map';

MapLibreGL.setAccessToken(null);


// import Mapir from 'mapir-react-native-sdk';
// import MapView, { PROVIDER_OSM  } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const { width, height } = Dimensions.get('window');


const MapPage = (props) => {
  const [location, setLocation] = useState({ latitude: 30, longitude: 51 });
  const [menuVisible, setMenuVisible] = useState(false);
  const [devicelist, setdevicelist] = useState([]);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    requestLocationPermission();
    getCurrentLocation();
    sendRequest();
  }, []);
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
  const sendRequest = async () => {
    var result = await getDevicesOnMap();
    if (result.success) {
      setdevicelist(result.data.Data);
      console.log(result.data.Data);
    }
    else {
      ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.SHORT);
    }
  }
  return (
    <View style={styles.container}>
      <NavBar
        rightCallback={() => { setMenuVisible(!menuVisible); }}
        leftCallback={() => { props.navigation.goBack(); }}
        title="نقشه"
        leftIcon="arrow-back"
        rightIcon="menu"
      />
      <WebView
        source={{
          html: `
          <!DOCTYPE html>
          <html lang="fa">
          <head>
              <meta charset="UTF-8"/>
              <meta name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
              <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
              <title>Neshan Leaflet Map</title>

              <link rel="stylesheet" href="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.css"/>
              <script src="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.js"></script>

              <style>
                  body {
                      height: 100vh;
                      width: 100vw;
                      margin: 0;
                  }

                  #map {
                      height: 100%;
                      width: 100%;
                  }
              </style>
          </head>
          <body>
          <div id="map"></div>
          <script>

              // Create a Leaflet map
              const neshanMap = new L.Map("map", {
                  key: "${MAP_API_KEY}",
                  maptype: "neshan",
                  poi: true,
                  traffic: true,
                  center: [${location.latitude}, ${location.longitude}],
                  zoom: 12,
              })

              // add marker to map
              let marker = L.marker([${location.latitude}, ${location.longitude}]).addTo(neshanMap);

          </script>
          </body>
          </html>
        ` }}
        // onMessage={handleWebViewMessage}
        style={styles.webviewmap}
      />


      {/* <MapLibreGL.MapView
              style={styles.map}
              styleURL="https://demotiles.maplibre.org/style.json" // Default MapLibre style
              // styleURL="https://maps.tilehosting.com/styles/streets/style.json" // Default MapLibre style
            >
              <MapLibreGL.Camera
                zoomLevel={2}
                centerCoordinate={[12.4924, 41.8902]} // Longitude, Latitude for Rome, Italy
              />
              <MapLibreGL.MarkerView coordinate={[12.4924, 41.8902]}>
                <View style={styles.markerContainer}>
                  <View style={styles.marker} />
                </View>
              </MapLibreGL.MarkerView>
            </MapLibreGL.MapView>
            {location ? (
              <View></View>
             ) : (
                <Text>Fetching location...</Text>
            )}
            <Button title="Share Location" onPress={getCurrentLocation} /> */}

      <SideMenu
        isVisible={menuVisible}
        onClose={() => { setMenuVisible(!menuVisible); }}
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
  webviewmap: {
    width: width,
    height: height * 0.5,
  },
});

export default MapPage;