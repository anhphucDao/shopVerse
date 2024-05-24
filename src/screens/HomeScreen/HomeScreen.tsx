import React from 'react';
import {Button, Text, View} from 'react-native';
import {HomeScreenProps} from './type';
import styles from './styles';

export default function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'DMSans-SemiBold'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, atque.
        Alias nesciunt sunt perferendis explicabo, officia ab impedit ut magni
        dolorem, ipsum architecto blanditiis veritatis rem quia? Facere, dicta
        similique!
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation?.navigate('Details')}
      />
    </View>
  );
}
