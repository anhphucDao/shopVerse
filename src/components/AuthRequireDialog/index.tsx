import React, {useEffect} from 'react';
import styles from './styles';
import {Portal, Dialog, Button} from 'react-native-paper';
import {Text} from 'react-native';

export default function AuthRequireDialog({visible, setVisible}) {
  const onDismissHandler = () => {
    setVisible(false);
  };

  return (
    <Portal>
      <Dialog
        visible={visible}
        dismissible={true}
        onDismiss={() => onDismissHandler()}
        style={styles.dialog}>
        <Dialog.Title style={styles.title}>Sign In to Add to Cart</Dialog.Title>
        <Dialog.Content>
          <Text>
            Please sign in or create an account to add items to your cart.
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)}>
            <Text style={styles.close}>Close</Text>
          </Button>
          <Button onPress={() => setVisible(false)}>
            <Text style={styles.login}>Login</Text>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
