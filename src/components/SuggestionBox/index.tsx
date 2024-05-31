import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
// import {SuggestionBoxProps} from '../../types/props/types';
import FastImage from 'react-native-fast-image';

const content = [
  {
    id: 1,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
  {
    id: 2,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
  {
    id: 3,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
  {
    id: 4,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
  {
    id: 5,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
  {
    id: 6,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
  {
    id: 7,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
  {
    id: 8,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
  {
    id: 9,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
  {
    id: 10,
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    source: require('../../assets/images/product/bag.png'),
  },
];

export default function SuggestionBox() {
  return (
    <View style={styles.container}>
      {content.map(item => (
        <View key={item.id} style={styles.contentWrapper}>
          <FastImage
            source={item.source}
            style={styles.image}
            resizeMode="contain"
          />
          <Text
            style={styles.contentText}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
}
