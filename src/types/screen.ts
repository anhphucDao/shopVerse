import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeStackParamList = {
  home: undefined;
  details: {itemId: number};
  search: undefined;
};

type TabStackParamList = {
  Home: HomeStackParamList;
  Wishlist: undefined;
  Cart: undefined;
  Profile: undefined;
};

type RootStackParamList = {
  Splash: undefined;
  Tab: TabStackParamList;
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'home'>;
};

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
};

export type {HomeScreenProps, LoginScreenProps, RegisterScreenProps};
