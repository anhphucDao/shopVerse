import React from 'react';
import styles from './styles';
import {Avatar} from 'react-native-paper';
import {Pressable} from 'react-native';
import useStore from '../../store';

export default function AvatarComponent({setVisible}) {
  const isAuth = useStore.use.isAuth();

  const imageSource = isAuth
    ? require('../../assets/images/profile.png')
    : require('../../assets/images/profile-small.png');

  const pressHandler = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <Pressable
      onPress={() => {
        pressHandler();
      }}>
      <Avatar.Image source={imageSource} style={styles.image} size={24} />
    </Pressable>
  );
}
