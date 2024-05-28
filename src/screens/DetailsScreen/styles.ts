import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    position: 'relative',
    paddingTop: Platform.OS === 'ios' ? 108 : 64,
    paddingBottom: 96,
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  image: {
    width: 313,
    height: 395,
    resizeMode: 'contain',
  },

  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },

  textContainer: {
    marginTop: 16,
  },

  title: {
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0E0C22',
    lineHeight: 30,
  },

  description: {
    fontFamily: 'DM-Sans',
    fontSize: 16,
    color: '#1A1C16',
    fontWeight: 'medium',
    marginTop: 16,
    lineHeight: 26,
  },
});

export default styles;
