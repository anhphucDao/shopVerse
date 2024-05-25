import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import DetailHeader from '../../components/DetailHeader';
import styles from './styles';

export default function DetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <DetailHeader />
      </View>
    </ScrollView>
  );
}
