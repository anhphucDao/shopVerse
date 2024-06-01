import {NavigationProp, ParamListBase} from '@react-navigation/native';

type SuggestionBoxProps = {
  position: {
    top: number;
    left: number;
  };
  width: number;
  suggestionBoxVisible: boolean;
};

// type SearchBarProps = {
//   navigation?: NavigationProp<ParamListBase>;
// };

export type {SuggestionBoxProps, SearchBarProps};
