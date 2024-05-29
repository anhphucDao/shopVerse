import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxHeight: 48,
    alignItems: 'flex-start',
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 48,
  },
  screenContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 24,
    backgroundColor: '#fff',
  },
  discoverFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    rowGap: 40,
  },
  headerTitle: {
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0E0C22',
  },
  searchBarContainer: {
    marginTop: 12,
  },
  assistiveChipContainer: {
    marginTop: 12,
    minHeight: 32,
  },
  productContainer: {
    marginTop: 16,
  },
  productsColumn: {
    justifyContent: 'space-around',
  },
});

export default styles;
