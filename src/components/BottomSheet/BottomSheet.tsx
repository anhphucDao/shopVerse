import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {useMemo} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

export default function BottomSheetComponent({bottomSheetRef}) {
  //use this useEffect to initially hide the bottom sheet

  const snapPoints = useMemo(() => ['50%', '60%'], []);

  return (
    // <View style={styles.container}>
    <BottomSheet
      index={-1}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      enablePanDownToClose={true}>
      <View style={styles.contentContainer}>
        <Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
        {/* <Button title="Close Sheet" onPress={handleClosePress} /> */}
      </View>
    </BottomSheet>
    // </View>
  );
}
