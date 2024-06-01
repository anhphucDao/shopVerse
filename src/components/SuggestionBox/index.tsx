import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
// import {SuggestionBoxProps} from '../../types/props/types';
import FastImage from 'react-native-fast-image';
import useStore from '../../store';

export default function SuggestionBox() {
  const UIState = useStore.use.UIState();
  const setSearchQuery = useStore.use.setSearchQuery();
  const setDebouncedInputValue = useStore.use.setDebouncedInputValue();
  const onTextContainerPress = (text: string) => {
    setSearchQuery(text);
    setDebouncedInputValue(text);
  };

  return (
    <View style={styles.container}>
      {UIState.length > 0 ? (
        UIState.slice(0, 10).map(item => (
          <Pressable onPress={() => onTextContainerPress(item.title)}>
            <View key={item.id} style={styles.contentWrapper}>
              <FastImage
                source={{uri: item.image}}
                style={styles.image}
                resizeMode="contain"
              />
              <Text
                style={styles.contentText}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.title}
              </Text>
            </View>
          </Pressable>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <FastImage
            source={require('../../assets/images/empty.png')}
            style={styles.empty}
          />
          <Text style={styles.text}>No results found.</Text>
        </View>
      )}
    </View>
  );
}
