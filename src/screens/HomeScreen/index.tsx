import React, {useEffect, useState} from 'react';
import ShoppingBag from '../../components/ShoppingBag';
import Avatar from '../../components/Avatar';
import Filter from '../../components/Filter';
import SearchBar from '../../components/SearchBar';
import AssistiveChip from '../../components/AssistiveChip';
import Product from '../../components/Product';
import BottomSheetComponent from '../../components/BottomSheet';
import DismissKeyboard from '../../components/DismissKeyboard';
import ProfileDialog from '../../components/ProfileDialog';
import Loader from '../../components/Loader';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {HomeScreenProps} from './type';
import styles from './styles';
import {useRef} from 'react';
import {Keyboard} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useQuery} from '@tanstack/react-query';
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from '../../services/dataService';
import {Product as ProductI} from '../../types/data';

export default function HomeScreen({navigation}: HomeScreenProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  //function to open bottom sheet
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  //function to close bottom sheet
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
    Keyboard.dismiss();
  };

  //state to manage bottom sheet visibility
  const [isOpen, setIsOpen] = useState(false);

  //state to manage profile modal visibility
  const [profileVisible, setProfileVisible] = useState(false);

  //state to manage chip press
  const [chipPressed, setChipPressed] = useState(false);

  //state to manage chip category
  const [categoryName, setCategoryName] = useState('');

  const chipPressHandler = (category: string) => {
    console.log('Chip Pressed: ', category);
    setChipPressed(true);
    setCategoryName(category);
  };

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const categoryProduct = useQuery({
    queryKey: ['category', categoryName],
    queryFn: () => fetchProductsByCategory(categoryName),
    enabled: chipPressed,
  });

  //since API filter & sort is not implemented, we will use this state to manage UI state
  const [UIState, setUIState] = useState<Array<ProductI>>(
    productsQuery.data || [],
  );

  useEffect(() => {
    setUIState(productsQuery.data || []);
  }, [
    productsQuery.data,
    categoriesQuery.data,
    productsQuery.isLoading,
    categoriesQuery.isLoading,
  ]);

  //useEffect for chip press

  useEffect(() => {
    setUIState(categoryProduct.data || []);
  }, [categoryName, chipPressed, categoryProduct.data]);

  if (
    productsQuery.isLoading ||
    categoriesQuery.isLoading ||
    categoryProduct.isLoading
  ) {
    return <Loader />;
  }

  return (
    <>
      <View style={styles.screenContainer}>
        <ProfileDialog
          visible={profileVisible}
          setVisible={setProfileVisible}
        />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Discover Products</Text>
          <View style={styles.container}>
            <ShoppingBag />
            <Avatar setVisible={setProfileVisible} />
          </View>
        </View>

        <View style={styles.discoverFilterContainer}>
          <DismissKeyboard>
            <SearchBar />
          </DismissKeyboard>

          <Filter
            openBottomSheet={openBottomSheet}
            closeBottomSheet={closeBottomSheet}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </View>
        <ScrollView
          style={styles.assistiveChipContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {categoriesQuery.data &&
            categoriesQuery.data.map((category, index) => (
              <AssistiveChip
                key={index}
                title={category}
                categoryUI={categoryName}
                onPress={() => chipPressHandler(category)}
              />
            ))}
        </ScrollView>

        <FlatList
          data={UIState}
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
          columnWrapperStyle={styles.productsColumn}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{height: 14}} />}
          style={styles.productContainer}
          showsVerticalScrollIndicator={false}
          refreshing={false}
          onRefresh={() => console.log('Refresh')}
        />
      </View>
      <BottomSheetComponent bottomSheetRef={bottomSheetRef} />
    </>
  );
}
