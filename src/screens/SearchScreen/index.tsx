import React from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../../components/SearchBar';
import SuggestionBox from '../../components/SuggestionBox';
import DismissKeyboard from '../../components/DismissKeyboard';
import styles from './styles';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
export default function SearchScreen() {
  const route = useNavigation();
  const onBackPress = () => {
    route.goBack();
  };

  return (
    <DismissKeyboard>
      <View style={styles.screenContainer}>
        <View style={styles.header}>
          <IconButton
            icon="arrow-left"
            size={28}
            onPress={() => onBackPress()}
            iconColor="#0E0C22"
          />
          <Text style={styles.headerTitle}>Browse Product</Text>
        </View>

        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>

        <SuggestionBox />
      </View>
    </DismissKeyboard>
  );
}
