import React from 'react';
import ShoppingBag from '../../components/ShoppingBag';
import {Button, Text, View} from 'react-native';
import {HomeScreenProps} from './type';
import styles from './styles';

export default function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <ShoppingBag />
    </View>
  );
}
