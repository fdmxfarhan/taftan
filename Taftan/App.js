import React, { useEffect, useRef, useState } from 'react';
import { AppRegistry, BackHandler, Text, View } from 'react-native';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import colors from './components/colors';

import Home from './screens/home';
import Login from './screens/login';
import Splash from './screens/splash';
import MapPage from './screens/mapPage';
import DamageReqView from './screens/request-view';
import Profile from './screens/profile';
import ServiceDamage from './screens/service-damage';
import ServiceInstallation from './screens/service-installations';
import ServiceSite from './screens/service-site';
import ServiceProjects from './screens/service-projects';
import ServicePeriodic from './screens/service-periodic';
// import InstallationReqView from './screens/request-view-installation';
import Icons from './screens/icons';
import AddRequest from './screens/request-add';
import Report from './screens/report';
import DeviceListView from './screens/deviceList';
import DeviceDetailView from './screens/deviceDetail';
import CameraScan from './screens/cameraScan';


const App = (props) => {
  const navigationRef = useRef();
  useEffect(() => {
    const backAction = () => {
      const currentRoute = navigationRef.current.getCurrentRoute().name;
      if (currentRoute === 'Home') {
        BackHandler.exitApp();
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, []);
  return (
    // <View>
    //     <Text>Hello World</Text>
    // </View>
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="Icons"
          component={Icons}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="DamageReqView"
          component={DamageReqView}
          options={({ route }) => ({ headerShown: false })}
        />
        {/* <Stack.Screen
          name="InstallationReqView"
          component={InstallationReqView}
          options={({ route }) => ({ headerShown: false })}
        /> */}
        <Stack.Screen
          name="MapPage"
          component={MapPage}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="ServiceDamage"
          component={ServiceDamage}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="ServiceInstallation"
          component={ServiceInstallation}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="ServiceSite"
          component={ServiceSite}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="ServiceProjects"
          component={ServiceProjects}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="ServicePeriodic"
          component={ServicePeriodic}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="AddRequest"
          component={AddRequest}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="DeviceListView"
          component={DeviceListView}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="DeviceDetailView"
          component={DeviceDetailView}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="CameraScan"
          component={CameraScan}
          options={({ route }) => ({ headerShown: false })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

// AppRegistry.registerComponent(appName, () => App);
export default App