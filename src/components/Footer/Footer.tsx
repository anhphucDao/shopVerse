import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>$9.85</Text>
      <Button
        mode="contained"
        style={styles.button}
        buttonColor="#0E0C22"
        labelStyle={styles.labelStyle}
        contentStyle={styles.contentStyle}
        onPress={() => {
          console.log('Add to cart pressed');
        }}>
        Add to cart
      </Button>
    </View>
  );
}
