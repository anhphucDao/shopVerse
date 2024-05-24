import React from 'react';
import {IconButton, useTheme} from 'react-native-paper';
import styles from './styles';

export default function Filter() {
  const theme = useTheme();

  return (
    <IconButton
      icon="filter-variant"
      size={24}
      iconColor={theme.colors.primary}
      style={styles.IconButton}
      onPress={() => {
        console.log('Filter pressed');
      }}
    />
  );
}
