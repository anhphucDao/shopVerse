import React from 'react';
import ShoppingBag from '../../components/ShoppingBag';
import Avatar from '../../components/Avatar';
import Filter from '../../components/Filter';
import SearchBar from '../../components/SearchBar';
import AssistiveChip from '../../components/AssistiveChip';
import {Text, View} from 'react-native';
import {HomeScreenProps} from './type';
import styles from './styles';

export default function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <ShoppingBag />
        <Avatar />
      </View>
      <View style={styles.discoverFilterContainer}>
        <Text style={styles.headerTitle}>Discover Products</Text>
        <Filter />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.assistiveChipContainer}>
        <AssistiveChip />
        <AssistiveChip />
        <AssistiveChip />
        <AssistiveChip />
      </View>
    </View>
  );
}
