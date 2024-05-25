import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import DetailHeader from '../../components/DetailHeader';
import Comment from '../../components/Comment';
import styles from './styles';

export default function DetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <DetailHeader />
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/product/bag.png')}
            style={styles.image}
          />
        </View>
        <Comment />
      </View>
    </ScrollView>
  );
}
