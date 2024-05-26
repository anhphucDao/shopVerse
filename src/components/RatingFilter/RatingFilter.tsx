import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Chip} from 'react-native-paper';

const ratingFilter = [5, 4, 3];

export default function RatingFilter() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rating</Text>
      <View style={styles.chipContainer}>
        {ratingFilter.map(rating => {
          return (
            <Chip
              style={styles.chip}
              textStyle={styles.chipText}
              key={rating}
              onPress={() => {
                console.log('Rating Filter Pressed');
              }}>
              {`From ${rating} stars`}
            </Chip>
          );
        })}
      </View>
    </View>
  );
}
