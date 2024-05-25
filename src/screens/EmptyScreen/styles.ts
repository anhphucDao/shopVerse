import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 16,
    marginTop: 36,
  },
  text: {
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'medium',
    color: '#0E0C22',
    marginTop: 24,
    textAlign: 'center',
  },
  innerText: {
    fontFamily: 'DM-Sans',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0E0C22',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default styles;
