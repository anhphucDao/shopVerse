import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: 20,
  },
  screenContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  discoverFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
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
    flexDirection: 'row',
    maxWidth: '100%',
    gap: 4,
    
    flexWrap: 'wrap',
  },
});

export default styles;
