import React from 'react';
import {Portal, Modal, Button, IconButton} from 'react-native-paper';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import useStore from '../../store';
import FastImage from 'react-native-fast-image';

export default function ProfileDialog({visible, setVisible, navigation}) {
  const onDismissHandler = () => {
    setVisible(false);
  };

  const isAuth = useStore.use.isAuth();
  const setIsAuth = useStore.use.setIsAuth();

  const imageSource = isAuth
    ? require('../../assets/images/profileLarge.png')
    : require('../../assets/images/user.png');

  const onAuthButtonPress = () => {
    if (isAuth) {
      setIsAuth(false);
      setVisible(false);
    } else {
      setVisible(false);
      navigation.navigate('Login');
    }
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismissHandler}
        contentContainerStyle={styles.container}>
        <View style={styles.upperView} />
        <FastImage source={imageSource} style={styles.image} />
        <IconButton
          icon="close"
          iconColor="white"
          style={styles.icon}
          onPress={() => setVisible(false)}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{`${isAuth ? 'John Doe' : 'User'}`}</Text>
          <Text style={styles.phone}>
            {' '}
            {`${isAuth ? '(01)324383' : 'no info'}`}
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            mode="contained"
            style={styles.settingsButton}
            icon="cog"
            textColor="#676F81"
            contentStyle={styles.contentStyle}
            onPress={() => {
              console.log('Settings pressed');
            }}>
            <Text style={styles.text}>Settings</Text>
          </Button>
          <Button
            mode="contained"
            style={isAuth ? styles.logoutButton : styles.loginButton}
            icon={isAuth ? 'logout' : 'login'}
            textColor="white"
            contentStyle={styles.contentStyle}
            onPress={() => {
              onAuthButtonPress();
            }}>
            <Text style={styles.text}>{`${isAuth ? 'Logout' : 'Login'}`}</Text>
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}
