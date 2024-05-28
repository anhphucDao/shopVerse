import React from 'react';
import {View, Text} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Comment() {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={32} color={'#FB9246'} />
        <Text style={styles.rating}>4.7</Text>
      </View>
      <Chip style={styles.chip}>
        <Text style={styles.chipText}>130 rated</Text>
      </Chip>
    </View>
  );
}