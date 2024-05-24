import {NavigationProp} from '@react-navigation/native';
type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
  Details: undefined;
};

export type SettingsScreenProps = {
  navigation?: NavigationProp<RootTabParamList, 'Settings'>;
};
