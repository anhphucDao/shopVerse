import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // container: {
  //   ...StyleSheet.absoluteFillObject, // This will position the BottomSheet absolutely
  //   justifyContent: 'flex-end', // This will align the BottomSheet to the bottom
  // },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
  },
});

export default styles;
