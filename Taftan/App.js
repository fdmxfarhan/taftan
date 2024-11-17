import React, { useEffect, useState } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import colors from './components/colors';

import Home from './screens/home';
import Login from './screens/login';
import Splash from './screens/splash';
import MapPage from './screens/mapPage';
import RequestView from './screens/request-view';
import Profile from './screens/profile';
import ServiceDamage from './screens/service-damage';
import ServiceInstallation from './screens/service-installations';
import ServiceSite from './screens/service-site';
import ServiceProjects from './screens/service-projects';
import ServicePeriodic from './screens/service-periodic';


const App = (props) => {
  return (
    // <View>
    //     <Text>Hello World</Text>
    // </View>
    <NavigationContainer>
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
          name="Login"
          component={Login}
          options={({ route }) => ({ headerShown: false })}
        />
        <Stack.Screen
          name="RequestView"
          component={RequestView}
          options={({ route }) => ({ headerShown: false })}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  )
};

// AppRegistry.registerComponent(appName, () => App);
export default App