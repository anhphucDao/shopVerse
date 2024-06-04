import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0E0C22',
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  chip: {
    backgroundColor: '#EBEEEF',
    width: 106,
    height: 32,
    borderRadius: 8,
  },
  chipSelected: {
    backgroundColor: '#0E0C22',
    width: 106,
    height: 32,
    borderRadius: 8,
  },
  chipText: {
    fontFamily: 'DM-Sans',
    fontSize: 12,
    fontWeight: 'regular',
    color: '#0E0C22',
  },
  chipTextSelected: {
    fontFamily: 'DM-Sans',
    fontSize: 12,
    fontWeight: 'regular',
    color: '#fff',
  },
});

export default styles;
