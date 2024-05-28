import React from 'react';
import styles from './styles';
import {Avatar} from 'react-native-paper';
import {Pressable} from 'react-native';

export default function AvatarComponent({setVisible}) {
  const pressHandler = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <Pressable
      onPress={() => {
        pressHandler();
      }}>
      <Avatar.Image
        source={require('../../assets/images/profile.png')}
        style={styles.image}
        size={24}
      />
    </Pressable>
  );
}
