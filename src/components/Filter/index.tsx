import React from 'react';
import {IconButton, useTheme} from 'react-native-paper';
import styles from './styles';
import {FilterProps} from '../../types/props';

export default function Filter({
  openBottomSheet,
  closeBottomSheet,
  isOpen,
  setIsOpen,
}: FilterProps) {
  const theme = useTheme();

  function bottomSheetHandler() {
    if (isOpen) {
      setIsOpen(false);
      closeBottomSheet();
    } else {
      setIsOpen(true);
      openBottomSheet();
    }
  }

  return (
    <IconButton
      icon="filter-variant"
      size={24}
      iconColor={theme.colors.primary}
      style={styles.IconButton}
      onPress={() => {
        bottomSheetHandler();
      }}
    />
  );
}
