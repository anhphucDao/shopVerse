import React from 'react';
import {View, Text} from 'react-native';
import {Portal, Snackbar} from 'react-native-paper';
import styles from './styles';

export default function SnackBar({isVisible, setIsVisible, message}) {
  return (
    <Portal>
      <Snackbar
        visible={isVisible}
        wrapperStyle={styles.wrapper}
        onDismiss={() => {
          setIsVisible(false);
        }}
        onIconPress={() => {
          setIsVisible(false);
        }}
        icon="close"
        duration={5000}>
        <Text style={styles.text}>{message}</Text>
      </Snackbar>
    </Portal>
  );
}
