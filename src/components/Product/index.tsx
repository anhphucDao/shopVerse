import React from 'react';
import styles from './styles';
import {Image, Pressable, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function Product({name, price, imageUrl, navigation, itemId}) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('details', {
          itemId: itemId,
        });
      }}>
      <View style={styles.product}>
        <FastImage
          source={{
            uri: imageUrl,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.image}
        />
        <Text style={styles.name} numberOfLines={3}>
          {name}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          {`$${price}`}
        </Text>
      </View>
    </Pressable>
  );
}
