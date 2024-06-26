import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 100,
  },

  image: {
    width: 320,
    height: 210,
    resizeMode: 'cover',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontFamily: 'DM-Sans',
    fontSize: 12,
    color: '#0E0C22',
  },
  inputContainerWrapper: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'column',
    gap: 24,
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 8,
    width: '100%',
  },
  text: {
    fontFamily: 'DM-Sans',
    fontSize: 16,
    fontWeight: 'medium',
    color: '#0E0C22',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0E0C22',
    borderRadius: 10,
    marginTop: 40,
  },
  contentStyle: {
    width: '100%',
    height: '100%',
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'medium',
    color: '#FFFFFF',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'space-between',
    width: '100%',
  },
  forgotPassword: {
    fontFamily: 'DM-Sans',
    fontSize: 16,
    fontWeight: 'medium',
    color: '#0E0C22',
    textDecorationLine: 'underline',
  },
  signUp: {
    fontFamily: 'DM-Sans',
    fontSize: 16,
    fontWeight: 'medium',
    color: '#0E0C22',
  },
});

export default styles;
