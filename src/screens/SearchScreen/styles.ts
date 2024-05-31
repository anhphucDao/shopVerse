import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 24,
    backgroundColor: '#fff',
    position: 'relative',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxHeight: 48,
    gap: 4,
  },
  headerTitle: {
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0E0C22',
  },
});

export default styles;
