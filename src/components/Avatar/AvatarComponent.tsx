import React from 'react';
import styles from './styles';
import {Avatar} from 'react-native-paper';

export default function AvatarComponent() {
  return (
    <Avatar.Image
      source={require('../../assets/images/profile.png')}
      style={styles.image}
      size={24}
    />
  );
}
