import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {IconButton, Badge, useTheme} from 'react-native-paper';

export default function ShoppingBag() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <IconButton
        icon="shopping-outline"
        size={24}
        iconColor={theme.colors.primary}
        style={styles.icon}
        onPress={() => {
          console.log('Shopping bag pressed');
        }}
      />
      <Badge style={styles.badge} size={16}>
        3
      </Badge>
    </View>
  );
}