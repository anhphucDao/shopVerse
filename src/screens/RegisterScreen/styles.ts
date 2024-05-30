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

    justifyContent: 'flex-end',
    width: '100%',
  },
  alreadySignUp: {
    fontFamily: 'DM-Sans',
    fontSize: 16,
    fontWeight: 'medium',
    color: '#0E0C22',
    textDecorationLine: 'underline',
  },

  disableButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#EBEEEF',
    borderRadius: 10,
    marginTop: 40,
  },

  disableContentStyle: {
    width: '100%',
    height: '100%',
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'medium',
    color: '#838589',
  },
});

export default styles;
