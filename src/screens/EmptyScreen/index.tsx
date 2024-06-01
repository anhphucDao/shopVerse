import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {EmptyScreenProps} from '../../types/screen';
export default function EmptyScreen({route}: EmptyScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.innerText}>{route.name}</Text> {'\n'} is Coming
        soon!
      </Text>
      <Image
        source={require('../../assets/images/comingSoon.png')}
        style={styles.image}
      />
    </View>
  );
}
