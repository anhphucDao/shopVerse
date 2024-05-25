import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 20,
  },
  image: {
    width: 313,
    height: 395,
    resizeMode: 'contain',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'flex-start',
    // maxWidth: 62,
    // rowGap: 12,
  },
  imageContainer: {
    flex: 1,
    marginTop: 12,
    alignItems: 'center',
  },
  rating: {
    fontSize: 20,
    fontFamily: 'DM-Sans',
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#FB9246',
  },
  chip: {
    backgroundColor: '#EBEEEF',
    borderRadius: 16,
    // alignSelf: 'fl',
    
  },
  chipText: {
    color: '#1A1C16',
    fontSize: 12,
    fontFamily: 'DM-Sans',
    fontWeight: 'bold',
  },
});

export default styles;
