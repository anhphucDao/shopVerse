import React from 'react';
import {View, Text} from 'react-native';
import {Portal, Snackbar} from 'react-native-paper';
import styles from './styles';

export default function SnackBar({isVisible, setIsVisible}) {
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
        <Text style={styles.text}>Unable to login</Text>
        <Text style={styles.textUnder}>
          Please check your email or password again
        </Text>
      </Snackbar>
    </Portal>
  );
}
