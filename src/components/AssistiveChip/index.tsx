import React from 'react';
import {Text} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from './styles';

export default function AssistiveChip({title, onPress, categoryUI}) {
  return (
    <Chip
      style={styles.chip}
      onPress={onPress}
      selected={categoryUI === title}
      selectedColor="#0E0C22">
      <Text style={styles.chipText}>{title}</Text>
    </Chip>
  );
}
