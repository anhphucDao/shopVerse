import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/index';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {RootStackParamList} from '../types/screen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

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
        <RootStack.Group>
          <RootStack.Screen name="Tab" component={TabNavigator} />
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Register" component={RegisterScreen} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
