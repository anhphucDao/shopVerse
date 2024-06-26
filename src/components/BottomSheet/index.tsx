import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {useMemo} from 'react';
import {View} from 'react-native';
import PriceFilter from '../PriceFilter';
import RatingFilter from '../RatingFilter';
import ButtonFilter from '../ButtonFilter';
import styles from './styles';
import {Keyboard} from 'react-native';
import DismissKeyboard from '../DismissKeyboard';
import {BottomSheetComponentProps} from '../../types/props';

export default function BottomSheetComponent({
  bottomSheetRef,
  priceOrder,
  setPriceOrder,
  ratingFrom,
  setRatingFrom,
  applySortAndFilter,
  resetSortAndFilter,
  setPriceRange,
  isReset,
}: BottomSheetComponentProps) {
  //use this useEffect to initially hide the bottom sheet

  const snapPoints = useMemo(() => ['60%', '70%'], []);

  return (
    <BottomSheet
      index={-1}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      onAnimate={(fromIndex, toIndex) => {
        if (toIndex < fromIndex) {
          Keyboard.dismiss();
        }
      }}>
      <View style={styles.contentContainer}>
        <DismissKeyboard>
          <PriceFilter
            priceOrder={priceOrder}
            setPriceOrder={setPriceOrder}
            setPriceRange={setPriceRange}
            isReset={isReset}
          />
        </DismissKeyboard>

        <RatingFilter ratingFrom={ratingFrom} setRatingFrom={setRatingFrom} />
        <ButtonFilter
          applySortAndFilter={applySortAndFilter}
          resetSortAndFilter={resetSortAndFilter}
        />
      </View>
    </BottomSheet>
  );
}
