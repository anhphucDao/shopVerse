import React, {useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import styles from './styles';
import {useRoute} from '@react-navigation/native';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  debouncedInputValue,
  setDebouncedInputValue,
  // setSuggestionBoxVisible,
  navigation,
}) {
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
      navigation.navigate('search');
    }
  };
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
      onPress={() => handlePress()}
    />
  );
}
