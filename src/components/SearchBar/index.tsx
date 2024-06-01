import React, {useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import useStore from '../../store';
import {useNavigation} from '@react-navigation/native';
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

export default function SearchBar() {
  const navigation = useNavigation();

  const searchQuery = useStore.use.searchQuery();
  const setSearchQuery = useStore.use.setSearchQuery();
  const debouncedInputValue = useStore.use.debouncedInputValue();
  const setDebouncedInputValue = useStore.use.setDebouncedInputValue();
  const UIState = useStore.use.UIState();

  const setTextOnEnter = useStore.use.setTextOnEnter();

  const handleInputChange = (event: string) => {
    setSearchQuery(event);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(searchQuery);
    }, 500);

    console.log('debouncedInputValue', debouncedInputValue);

    return () => clearTimeout(timeoutId);
  }, [
    searchQuery,
    debouncedInputValue,
    setDebouncedInputValue,
    setSearchQuery,
  ]);

  const route = useRoute();

  const handlePress = () => {
    if (route.name === 'home') {
      Keyboard.dismiss();
      navigation.navigate('search');
    }
  };

  const onSubmitEditingHandler = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    console.log('event', event.nativeEvent.text);
    setTextOnEnter(event.nativeEvent.text);
    Keyboard.dismiss();
    navigation.goBack();
  };

  useEffect(() => {
    console.log('UIState', UIState);
  }, [UIState]);

  return (
    <Searchbar
      placeholder="Search Product Name"
      onChangeText={handleInputChange}
      value={searchQuery}
      style={styles.searchBar}
      traileringIconColor="#0E0C22"
      rippleColor="#0E0C22"
      inputStyle={styles.input}
      iconColor="#0E0C22"
      placeholderTextColor="#C4C5C4"
      // onFocus={() => {
      //   setSuggestionBoxVisible(true);
      // }}
      // onBlur={() => {
      //   setSuggestionBoxVisible(false);
      // }}
      onSubmitEditing={event => onSubmitEditingHandler(event)}
      onPress={() => handlePress()}
      numberOfLines={1}
    />
  );
}
