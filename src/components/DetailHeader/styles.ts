import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 52 : 8,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
    paddingHorizontal: 18,
    backgroundColor: '#ffffff',
  },
});

export default styles;
