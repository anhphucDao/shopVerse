import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    paddingBottom: 16,
    width: '100%',
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderBottomColor: '#D9D9D9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0E0C22',
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#0E0C22',
  },

  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 44,
  },
  innerOptionContainer: {
    paddingTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  textInput: {
    height: 50,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    minWidth: 144,
    maxWidth: 144,
    fontFamily: 'DM-Sans',
    fontSize: 12,
    fontWeight: 'regular',
    textAlign: 'center',
  },
  divider: {
    backgroundColor: '#EBEEEF',
    height: 2,
    width: 20,
  },
  inputOutline: {
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default styles;
