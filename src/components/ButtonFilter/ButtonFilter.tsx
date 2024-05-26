import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-paper';
export default function ButtonFilter() {
  return (
    <View style={styles.container}>
      <Button
        mode="outlined"
        style={styles.button}
        labelStyle={styles.resetLabel}>
        Reset
      </Button>
      <Button
        mode="elevated"
        buttonColor="#0E0C22"
        textColor="#FFF"
        style={styles.button}
        labelStyle={styles.applyLabel}>
        Apply
      </Button>
    </View>
  );
}
