import React from 'react';
import {Text} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from './styles';

export default function AssistiveChip({title, onPress}) {
  return (
    <Chip
      style={styles.chip}
      onPress={onPress}>
      <Text style={styles.chipText}>{title}</Text>
    </Chip>
  );
}
