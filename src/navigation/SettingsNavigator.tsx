import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen/index';
import DetailsScreen from '../screens/DetailsScreen/index';

const SettingsStack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
