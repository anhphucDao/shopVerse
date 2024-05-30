import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Portal, Snackbar} from 'react-native-paper';
import styles from './styles';

export default function SnackBar({
  isVisible,
  setIsVisible,
  message,
  countdown = 0,
}) {
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isVisible, setIsVisible]);

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
        <Text style={styles.text}>{`${message} ${
          countdown > 0 ? countdown : ''
        }`}</Text>
      </Snackbar>
    </Portal>
  );
}
