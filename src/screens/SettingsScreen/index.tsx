import React from 'react';
import {Button, Text, View} from 'react-native';
import {SettingsScreenProps} from './type';
import styles from './styles';

export default function SettingsScreen({navigation}: SettingsScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
