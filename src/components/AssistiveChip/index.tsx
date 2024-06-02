import React from 'react';
import {Text} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from './styles';
import {AssistiveChipProps} from '../../types/props';

export default function AssistiveChip({
  title,
  onPress,
  categoryUI,
  chipPressed,
}: AssistiveChipProps) {
  return (
    <Chip
      style={styles.chip}
      onPress={onPress}
      selected={categoryUI === title && chipPressed}
      selectedColor="#0E0C22">
      <Text style={styles.chipText}>{title}</Text>
    </Chip>
  );
}
