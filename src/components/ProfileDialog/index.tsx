import React from 'react';
import {Portal, Modal, Button, IconButton} from 'react-native-paper';
import {Text, View, Image} from 'react-native';
import styles from './styles';

export default function ProfileDialog({visible, setVisible}) {
  const onDismissHandler = () => {
    setVisible(false);
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismissHandler}
        contentContainerStyle={styles.container}>
        <View style={styles.upperView} />
        <Image
          source={require('../../assets/images/profileLarge.png')}
          style={styles.image}
        />
        <IconButton
          icon="close"
          iconColor="white"
          style={styles.icon}
          onPress={() => setVisible(false)}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.phone}>(01)324383</Text>
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
            style={styles.logoutButton}
            icon="logout"
            textColor="white"
            contentStyle={styles.contentStyle}
            onPress={() => {
              console.log('Logout pressed');
            }}>
            <Text style={styles.text}>Logout</Text>
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}
