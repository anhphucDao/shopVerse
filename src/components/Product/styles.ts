import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  product: {
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: 340,
    minHeight: 340,
    backgroundColor: '#FFFFFF',
    minWidth: 158,
    maxWidth: 158,
    gap: 12,
  },
  name: {
    fontFamily: 'DM-Sans',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0E0C22',
    textAlign: 'center',
    maxHeight: 60,
    lineHeight: 20,
  },
  price: {
    fontFamily: 'DM-Sans',
    fontSize: 14,
    fontWeight: 'thin',
    textAlign: 'center',
    color: '#0E0C22',
  },
  image: {
    width: 158,
    height: 240,
    resizeMode: 'contain',
  },
});

export default styles;
