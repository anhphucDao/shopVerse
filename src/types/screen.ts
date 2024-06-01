import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeStackParamList = {
  home: undefined;
  details: {itemId: number};
  search: undefined;
};

type TabStackParamList = {
  Home: undefined;
  Wishlist: undefined;
  Cart: undefined;
  Profile: undefined;
  Empty: undefined;
};

type RootStackParamList = {
  Splash: undefined;
  Tab: TabStackParamList;
  Login: undefined;
  Register: undefined;
};

type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'home'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

type DetailsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'details'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

type homeNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamList, 'home'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList>,
    NativeStackNavigationProp<RootStackParamList>
  >
>;

type detailsNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamList, 'details'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList>,
    NativeStackNavigationProp<RootStackParamList>
  >
>;
// type homeNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'home'>;

// type DetailsScreenProps = NativeStackNavigationProp<
//   HomeStackParamList,
//   'details'
// >;

// type EmptyScreenProps = {
//   navigation: NativeStackNavigationProp<TabStackParamList, 'Empty'>;
//   route: {name: string};
// };

type EmptyScreenProps = CompositeScreenProps<
  NativeStackScreenProps<TabStackParamList, 'Empty'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type {
  HomeScreenProps,
  LoginScreenProps,
  RegisterScreenProps,
  DetailsScreenProps,
  HomeStackParamList,
  EmptyScreenProps,
  homeNavigationProp,
  detailsNavigationProp,
  RootStackParamList,
  TabStackParamList,
};
