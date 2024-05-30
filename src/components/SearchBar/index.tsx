import React, {useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import styles from './styles';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  debouncedInputValue,
  setDebouncedInputValue,
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
    />
  );
}
