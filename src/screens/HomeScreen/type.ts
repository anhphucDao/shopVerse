import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
  Details: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootTabParamList, 'Home'>;
