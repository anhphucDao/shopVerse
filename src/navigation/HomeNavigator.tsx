import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import HomeScreen from '../screens/HomeScreen/index';
import DetailsScreen from '../screens/DetailsScreen/index';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
