import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: 8,
    flexDirection: 'column',
    width: '100%',
    gap: 12,
    marginTop: 16,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderBottomWidth: 1,
  },
  contentWrapper: {
    height: 40,
    width: '100%',
    overflow: 'hidden',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 16,
  },
  contentText: {
    fontFamily: 'DM-Sans',
    fontSize: 16,
    color: '#0E0C22',
    fontWeight: 'semibold',
    marginLeft: 8,
  },

  image: {
    width: 32,
    height: 32,
  },
});

export default styles;
