import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DollarScreen from './screens/DollarScreen';
import EuroScreen from './screens/EuroScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dólar">
        <Drawer.Screen name="Dólar" component={DollarScreen} />
        <Drawer.Screen name="Euro" component={EuroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}