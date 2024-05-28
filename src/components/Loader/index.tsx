import React from 'react';
import {View, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="#0E0C22" />
      <Text style={styles.text}>Just A Moment...</Text>
    </View>
  );
}
