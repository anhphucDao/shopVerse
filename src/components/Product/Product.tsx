import React from 'react';
import styles from './styles';
import {Image, Pressable, Text, View} from 'react-native';

export default function Product({name, price, imageUrl, navigation, itemId}) {
  //   console.log('Product Component, imageUrl: ', imageUrl);
  console.log('Product ID: ', itemId);
  return (
    <Pressable
      onPress={() => {
        console.log('Product Pressed');
        navigation.navigate('details', {
          itemId: itemId,
        });
      }}>
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
