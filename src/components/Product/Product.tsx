import React from 'react';
import styles from './styles';
import {Image, Pressable, Text, View} from 'react-native';

export default function Product({name, price, imageUrl}) {
  console.log('Product Component, imageUrl: ', imageUrl);

  return (
    <Pressable>
      <View style={styles.product}>
        <Image source={{uri: imageUrl}} style={styles.image} />
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
