import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

export default function SplashImage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/shopVerse.png')}
        style={styles.image}
      />
    </View>
  );
}
