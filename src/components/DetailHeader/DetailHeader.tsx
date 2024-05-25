import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {IconButton, useTheme} from 'react-native-paper';

export default function DetailHeader({navigation}) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <IconButton
        icon="keyboard-backspace"
        onPress={() => {
          console.log('Go back');
          navigation.goBack();
        }}
        size={28}
        iconColor={theme.colors.primary}
      />
      <IconButton
        icon="heart-outline"
        onPress={() => console.log('Heart pressed')}
        size={24}
        iconColor={theme.colors.primary}
      />
    </View>
  );
}
