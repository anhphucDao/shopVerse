import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/index';
import DetailsScreen from '../screens/DetailsScreen/index';
import {useTheme} from 'react-native-paper';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  const theme = useTheme();

  console.log('theme', theme);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
