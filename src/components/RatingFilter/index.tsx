import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Chip} from 'react-native-paper';
import {RatingFilterProps} from '../../types/props';

const ratingFilter = [5, 4, 3];

export default function RatingFilter({
  ratingFrom,
  setRatingFrom,
}: RatingFilterProps) {
  const chipPressHandler = (rating: number) => {
    rating === ratingFrom ? setRatingFrom(0) : setRatingFrom(rating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rating</Text>
      <View style={styles.chipContainer}>
        {ratingFilter.map(rating => {
          return (
            <Chip
              style={ratingFrom === rating ? styles.chipSelected : styles.chip}
              textStyle={
                ratingFrom === rating
                  ? styles.chipTextSelected
                  : styles.chipText
              }
              key={rating}
              selected={ratingFrom === rating}
              showSelectedCheck={false}
              onPress={() => chipPressHandler(rating)}>
              {`From ${rating} stars`}
            </Chip>
          );
        })}
      </View>
    </View>
  );
}
