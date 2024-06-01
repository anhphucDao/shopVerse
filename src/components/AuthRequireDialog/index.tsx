import React from 'react';
import styles from './styles';
import {Portal, Dialog, Button} from 'react-native-paper';
import {Text} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthRequireDialogProps} from '../../types/props';

export default function AuthRequireDialog({
  visible,
  setVisible,
}: AuthRequireDialogProps) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onDismissHandler = () => {
    setVisible(false);
  };

  const onLoginButtonPress = () => {
    setVisible(false);
    navigation.navigate('Login');
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
          <Button onPress={() => onDismissHandler()}>
            <Text style={styles.close}>Close</Text>
          </Button>
          <Button onPress={() => onLoginButtonPress()}>
            <Text style={styles.login}>Login</Text>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
