import React from 'react';
import ShoppingBag from '../../components/ShoppingBag';
import Avatar from '../../components/Avatar';
import Filter from '../../components/Filter';
import SearchBar from '../../components/SearchBar';
import AssistiveChip from '../../components/AssistiveChip';
import Product from '../../components/Product';
import BottomSheetComponent from '../../components/BottomSheet';
import {FlatList, Text, View} from 'react-native';
import {HomeScreenProps} from './type';
import styles from './styles';
import {useRef} from 'react';
// import { useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

import data from '../../data/productList';

export default function HomeScreen({navigation}: HomeScreenProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  //function to open bottom sheet
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  //function to close bottom sheet
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  //state to manage bottom sheet visibility
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <View style={styles.screenContainer}>
        <View style={styles.container}>
          <ShoppingBag />
          <Avatar />
        </View>
        <View style={styles.discoverFilterContainer}>
          <Text style={styles.headerTitle}>Discover Products</Text>
          <Filter
            openBottomSheet={openBottomSheet}
            closeBottomSheet={closeBottomSheet}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
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
              navigation={navigation}
              itemId={item.id}
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
        {/* <BottomSheet /> */}
      </View>
      <BottomSheetComponent bottomSheetRef={bottomSheetRef} />
    </>
  );
}
