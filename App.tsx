import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation';
import {MD3LightTheme, PaperProvider, configureFonts} from 'react-native-paper';

//font config
const fontConfig = {
  default: {
    regular: {
      fontFamily: 'DMSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'DMSans-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'DMSans-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'DMSans-Thin',
      fontWeight: 'normal',
    },
    semiBold: {
      fontFamily: 'DMSans-SemiBold',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'DMSans-Bold',
      fontWeight: 'normal',
    },
    black: {
      fontFamily: 'DMSans-Black',
      fontWeight: 'normal',
    },
  },
};

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
  fonts: configureFonts({config: fontConfig}),
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
