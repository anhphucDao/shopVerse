import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/index';
import DetailsScreen from '../screens/DetailsScreen/index';
import SearchScreen from '../screens/SearchScreen/index';
import {HomeStackParamList} from '../types/screen';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="details" component={DetailsScreen} />
      <HomeStack.Screen name="search" component={SearchScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
