import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation';
import {MD3LightTheme, PaperProvider, configureFonts} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {enableScreens} from 'react-native-screens';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const fontConfig = {
  fontFamily: 'DMSans',
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

const queryClient = new QueryClient();

export default function App() {
  React.useEffect(() => {
    enableScreens(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <BottomSheetModalProvider>
              <AppNavigator />
            </BottomSheetModalProvider>
          </NavigationContainer>
        </PaperProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
