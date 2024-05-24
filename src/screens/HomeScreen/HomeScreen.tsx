import React from 'react';
import ShoppingBag from '../../components/ShoppingBag';
import Avatar from '../../components/Avatar';
import {View} from 'react-native';
import {HomeScreenProps} from './type';
import styles from './styles';

export default function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <ShoppingBag />
      <Avatar />
    </View>
  );
}
