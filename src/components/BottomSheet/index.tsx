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

export default function BottomSheetComponent({bottomSheetRef}) {
  //use this useEffect to initially hide the bottom sheet

  const snapPoints = useMemo(() => ['60%', '70%'], []);

  return (
    // <View style={styles.container}>

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
          <PriceFilter />
        </DismissKeyboard>

        <RatingFilter />
        <ButtonFilter />
      </View>
    </BottomSheet>

    // </View>
  );
}