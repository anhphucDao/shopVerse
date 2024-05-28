import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    margin: 24,
    paddingHorizontal: 24,
  },
  button: {
    width: 156,
    height: 54,
    borderRadius: 8,
  },
  applyLabel: {
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'medium',
  },
  resetLabel: {
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'medium',
    color: '#0E0C22',
  },
  contentStyle: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
