import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      {translateX: -(286 / 2)}, // half of your modal width
      {translateY: -(356 / 2)}, // half of your modal height
    ],
    width: 286,
    height: 356,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  upperView: {
    width: '100%',
    height: 100,
    position: 'absolute',
    backgroundColor: '#0E0C22',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    top: 0,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: 50,
    left: 93,
    resizeMode: 'contain',
  },

  icon: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  textContainer: {
    position: 'absolute',
    top: 160,
    left: 98,
    height: 57,
    width: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
  },
  name: {
    fontFamily: 'DM-Sans',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0E0C22',
  },
  phone: {
    fontFamily: 'DM-Sans',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  buttonGroup: {
    position: 'absolute',
    top: 238,
    left: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  settingsButton: {
    width: 238,
    height: 40,
    backgroundColor: '#F2F3F5',
    borderRadius: 8,
  },
  logoutButton: {
    width: 238,
    height: 40,
    backgroundColor: '#E82857',
    borderRadius: 8,
  },
  loginButton: {
    width: 238,
    height: 40,
    backgroundColor: '#0E0C22',
    borderRadius: 8,
  },
  text: {
    fontFamily: 'DM-Sans',
    fontSize: 16,
    fontWeight: 'medium',
  },
  contentStyle: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
