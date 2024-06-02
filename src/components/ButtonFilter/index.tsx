import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-paper';
import {ButtonFilterProps} from '../../types/props';
export default function ButtonFilter({
  applySortAndFilter,
  resetSortAndFilter,
}: ButtonFilterProps) {
  return (
    <View style={styles.container}>
      <Button
        mode="outlined"
        style={styles.button}
        labelStyle={styles.resetLabel}
        onPress={() => {
          console.log('Reset button pressed');
          resetSortAndFilter();
        }}
        contentStyle={styles.contentStyle}>
        Reset
      </Button>
      <Button
        mode="elevated"
        buttonColor="#0E0C22"
        textColor="#FFF"
        style={styles.button}
        labelStyle={styles.applyLabel}
        contentStyle={styles.contentStyle}
        onPress={() => {
          console.log('Apply button pressed');
          applySortAndFilter();
        }}>
        Apply
      </Button>
    </View>
  );
}
