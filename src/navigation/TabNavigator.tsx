/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
// import DetailsScreen from '../screens/DetailsScreen';
import EmptyScreen from '../screens/EmptyScreen';
import LoginScreen from '../screens/LoginScreen';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Platform} from 'react-native';
const Tab = createBottomTabNavigator();

const screens = [
  {
    name: 'Home',
    component: HomeNavigator,
    iconName: 'home-variant-outline',
    iconNameFocused: 'home-variant',
  },
  {
    name: 'Wishlist',
    component: EmptyScreen,
    iconName: 'heart-outline',
    iconNameFocused: 'heart',
  },
  {
    name: 'Cart',
    component: EmptyScreen,
    iconName: 'basket-outline',
    iconNameFocused: 'basket',
  },
  {
    name: 'Profile',
    component: LoginScreen,
    iconName: 'account-outline',
    iconNameFocused: 'account',
  },
];

const TabNavigator = () => {
  const theme = useTheme(); // Access the theme here

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          display:
            getFocusedRouteNameFromRoute(route) === 'details' ? 'none' : 'flex',
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: -1},
          elevation: 10, // This is for Android
          ...(Platform.OS === 'android' && {
            height: 60,
            paddingBottom: 10,
            paddingTop: 10,
          }),
        },
      })}>
      {screens.map(screen => {
        return (
          <Tab.Screen
            name={screen.name}
            key={screen.name}
            component={screen.component}
            options={{
              tabBarLabel: ({focused, color}) => (
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'DMSans-Medium',
                    color: focused ? theme.colors.primary : color,
                  }}>
                  {screen.name.toUpperCase()}
                </Text>
              ),
              tabBarIcon: ({focused, color}) => (
                <Icon
                  name={focused ? screen.iconNameFocused : screen.iconName}
                  color={focused ? theme.colors.primary : color}
                  size={24}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
