import React from 'react';
import {Text} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from './styles';

export default function AssistiveChip() {
  return (
    <Chip
      style={styles.chip}
      onPress={() => {
        console.log('Chip pressed');
      }}>
      <Text style={styles.chipText}>electronics</Text>
    </Chip>
  );
}
