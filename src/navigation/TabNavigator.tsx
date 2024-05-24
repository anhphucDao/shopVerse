/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
// import SettingsNavigator from './SettingsNavigator';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const screens = [
  {
    name: 'Home',
    component: HomeNavigator,
    iconName: 'home-variant-outline',
  },
  {
    name: 'Wishlist',
    component: HomeNavigator,
    iconName: 'heart-outline',
  },
  {
    name: 'Cart',
    component: HomeNavigator,
    iconName: 'shopping-outline',
  },
  {
    name: 'Profile',
    component: HomeNavigator,
    iconName: 'account-outline',
  },
];

const TabNavigator = () => {
  const theme = useTheme(); // Access the theme here

  console.log(theme);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: -1},
          elevation: 10, // This is for Android
        },
      }}>
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
                    color: focused ? theme.colors.primary : color,
                  }}>
                  {screen.name.toUpperCase()}
                </Text>
              ),
              tabBarIcon: ({focused, color}) => (
                <Icon
                  name={screen.iconName}
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
