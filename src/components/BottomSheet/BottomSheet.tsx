import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {useMemo} from 'react';
import {View, Text, Button} from 'react-native';
import PriceFilter from '../PriceFilter';
import styles from './styles';

export default function BottomSheetComponent({bottomSheetRef}) {
  //use this useEffect to initially hide the bottom sheet

  const snapPoints = useMemo(() => ['50%', '75%'], []);

  return (
    // <View style={styles.container}>
    <BottomSheet
      index={-1}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      enablePanDownToClose={true}>
      <View style={styles.contentContainer}>
        <PriceFilter />
      </View>
    </BottomSheet>
    // </View>
  );
}
