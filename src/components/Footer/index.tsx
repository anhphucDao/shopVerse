import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';

export default function Footer({setVisible, price}) {
  const handlePress = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.price}>{`$${price}`}</Text>
      <Button
        mode="contained"
        style={styles.button}
        buttonColor="#0E0C22"
        labelStyle={styles.labelStyle}
        contentStyle={styles.contentStyle}
        onPress={() => {
          console.log('Add to cart pressed');
          handlePress();
        }}>
        Add to cart
      </Button>
    </View>
  );
}
