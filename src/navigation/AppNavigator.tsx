import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/index';
import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLoading ? (
        <RootStack.Screen name="Splash" component={SplashScreen} />
      ) : (
        <RootStack.Screen name="Tab" component={TabNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
