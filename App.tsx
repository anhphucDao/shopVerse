import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';

//config theme
const theme = {
  MD3LightTheme,
  roundness: 8,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0E0C22',
    secondary: '#0E0E0E',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    background: '#FFFFFF',
    tertiary: '#EBEEEF',
    onTeritary: '#1A1C16',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
