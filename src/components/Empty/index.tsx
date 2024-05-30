import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

export default function Empty() {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../assets/images/empty.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>No results found.</Text>
    </View>
  );
}
