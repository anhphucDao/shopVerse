import React from 'react';
import ShoppingBag from '../../components/ShoppingBag';
import Avatar from '../../components/Avatar';
import Filter from '../../components/Filter';
import SearchBar from '../../components/SearchBar';
import AssistiveChip from '../../components/AssistiveChip';
import Product from '../../components/Product';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {HomeScreenProps} from './type';
import styles from './styles';

import data from '../../data/productList';

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
      {/* <View style={styles.productContainer}> */}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Product
            key={item.id}
            name={item.title}
            price={item.price}
            imageUrl={item.image}
          />
        )}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{height: 14}} />}
        style={styles.productContainer}
        showsVerticalScrollIndicator={false}
        refreshing={false}
        onRefresh={() => console.log('Refresh')}
      />
      {/* </View> */}
    </View>
  );
}
