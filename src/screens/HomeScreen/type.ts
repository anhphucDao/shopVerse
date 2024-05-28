import {NavigationProp} from '@react-navigation/native';

type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
  Details: undefined;
  // navigate: (screen: string) => void;
};

export type HomeScreenProps = {
  navigation?: NavigationProp<RootTabParamList, 'Home'>;
};
