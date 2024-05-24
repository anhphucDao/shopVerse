import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
