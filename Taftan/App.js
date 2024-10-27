import React, { useEffect, useState } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import colors from './components/colors';

import Home from './screens/home';
import Login from './screens/login';
import Splash from './screens/splash';
import MapPage from './screens/mapPage';
import RequestView from './screens/request-view';


const App = (props) => {
  return(
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
      </Stack.Navigator>
    </NavigationContainer>
  )
};

// AppRegistry.registerComponent(appName, () => App);
export default App