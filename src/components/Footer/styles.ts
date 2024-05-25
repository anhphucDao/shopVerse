import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    height: 96,
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5, // Negative value to make the shadow go from bottom to top
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10, // This is for Android
  },
  labelStyle: {
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'medium',
    color: '#FFFFFF',
  },
  button: {
    width: 228,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'DM-Sans',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0E0C22',
  },
});

export default styles;
