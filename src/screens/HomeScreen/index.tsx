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
import Empty from '../../components/Empty';
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

  //function to apply sort and filter
  const applySortAndFilter = () => {
    //perform sorting and filtering on the UIState, through priceOrder and ratingFrom

    let sortedAndFiltered: Array<ProductI> = [];

    // if (UIState.length === 0) {
    //   if (chipPressed && categoryProduct.data) {
    //     sortedAndFiltered = [...categoryProduct.data];
    //   } else if (productsQuery.data) {
    //     sortedAndFiltered = [...productsQuery.data];
    //   }
    // } else {
    //   sortedAndFiltered = [...UIState];
    // }

    //if both priceOrder and ratingFrom are empty, return
    if (priceOrder === '' && ratingFrom === 0) {
      return;
    }

    chipPressed
      ? (sortedAndFiltered = [...(categoryProduct.data || [])])
      : (sortedAndFiltered = [...(productsQuery.data || [])]);

    // sort based on priceOrder
    sortedAndFiltered.sort((a: ProductI, b: ProductI) => {
      if (priceOrder === 'highestToLowest') {
        return Number(b.price) - Number(a.price);
      } else if (priceOrder === 'LowestToHighest') {
        return Number(a.price) - Number(b.price);
      } else {
        return 0;
      }
    });

    //filter based on priceRange
    if (priceRange.from !== '' && priceRange.to !== '') {
      sortedAndFiltered = sortedAndFiltered.filter(
        product =>
          Number(product.price) >= Number(priceRange.from) &&
          Number(product.price) <= Number(priceRange.to),
      );
    }

    //filter based on ratingFrom
    sortedAndFiltered = sortedAndFiltered.filter(
      product => product.rating.rate >= ratingFrom,
    );
    //set the sorted and filtered products to UIState
    setUIState(sortedAndFiltered);

    closeBottomSheet();
  };

  //function to reset priceOrder and ratingFrom
  const resetSortAndFilter = () => {
    setPriceOrder('');
    setRatingFrom(0);

    //reset priceRange
    setPriceRange({
      from: '',
      to: '',
    });

    //if the category is pressed, set the UIState to the categoryProduct.data
    chipPressed
      ? setUIState(categoryProduct.data || [])
      : setUIState(productsQuery.data || []);

    closeBottomSheet();

    setIsReset(true);

    // Delay the second setIsReset call
    setTimeout(() => {
      setIsReset(false);
    }, 0);
  };

  //state to manage bottom sheet visibility
  const [isOpen, setIsOpen] = useState(false);

  //state to manage profile modal visibility
  const [profileVisible, setProfileVisible] = useState(false);

  //state to manage chip press
  const [chipPressed, setChipPressed] = useState(false);

  //state to manage chip category
  const [categoryName, setCategoryName] = useState('');

  //state to manage input value
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  //state to manage price sorting order

  const [priceOrder, setPriceOrder] = useState('');

  //state to manage rating filter

  const [ratingFrom, setRatingFrom] = useState(0);

  // //state to manage priceRange

  const [priceRange, setPriceRange] = useState({
    from: '',
    to: '',
  });

  const [isReset, setIsReset] = useState(false);

  const chipPressHandler = (category: string) => {
    console.log('Chip Pressed: ', category);
    // setChipPressed(true);
    // setCategoryName(category);

    //reset filter and sort
    resetSortAndFilter();

    //toggle chip press
    setChipPressed(!chipPressed);
    category ? setCategoryName(category) : setCategoryName('');
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

  //useEffect to print UIState
  useEffect(() => {
    console.log('UIState: ', UIState);
  }, [UIState]);

  //useEffect to search product
  useEffect(() => {
    if (debouncedInputValue === '') {
      chipPressed
        ? setUIState(categoryProduct.data || [])
        : setUIState(productsQuery.data || []);

      resetSortAndFilter();
    } else {
      const filteredProducts: Array<ProductI> = [];

      if (chipPressed) {
        categoryProduct.data?.forEach(product => {
          if (
            product.title
              .toLowerCase()
              .includes(debouncedInputValue.toLowerCase())
          ) {
            filteredProducts.push(product);
          }
        });
      } else {
        productsQuery.data?.forEach(product => {
          if (
            product.title
              .toLowerCase()
              .includes(debouncedInputValue.toLowerCase())
          ) {
            filteredProducts.push(product);
          }
        });
      }
      // console.log('categoryProduct status: ', categoryProduct.status);
      // console.log('filteredProducts: ', filteredProducts);
      // console.log('categoryProduct.data: in if', categoryProduct.data);
      // console.log('debouncedInputValue: in if', debouncedInputValue);

      setUIState(filteredProducts);
    }
  }, [
    debouncedInputValue,
    productsQuery.data,
    categoryProduct.data,
    chipPressed,
  ]);

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
          navigation={navigation}
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
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              debouncedInputValue={debouncedInputValue}
              setDebouncedInputValue={setDebouncedInputValue}
            />
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
                chipPressed={chipPressed}
              />
            ))}
        </ScrollView>
        {UIState.length === 0 ? (
          <Empty />
        ) : (
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
        )}
      </View>
      <BottomSheetComponent
        bottomSheetRef={bottomSheetRef}
        priceOrder={priceOrder}
        setPriceOrder={setPriceOrder}
        ratingFrom={ratingFrom}
        setRatingFrom={setRatingFrom}
        applySortAndFilter={applySortAndFilter}
        resetSortAndFilter={resetSortAndFilter}
        setPriceRange={setPriceRange}
        isReset={isReset}
      />
    </>
  );
}
