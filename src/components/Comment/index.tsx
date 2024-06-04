import React from 'react';
import {View, Text} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommentProps} from '../../types/props';

export default function Comment({rating}: CommentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={32} color={'#FB9246'} />
        <Text style={styles.rating}>{rating.rate}</Text>
      </View>
      <Chip style={styles.chip}>
        <Text style={styles.chipText}>{rating.count} rated</Text>
      </Chip>
    </View>
  );
}
