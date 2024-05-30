import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import styles from './styles';
import {Button, TextInput} from 'react-native-paper';
import SnackBar from '../../components/SnackBar';
import {Pressable} from 'react-native';

const unableToLoginMessage =
  'Unable to login \nPlease check your email or password again';

export default function LoginScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false);

  //state to handle visibility of snackbar
  const [isVisible, setIsVisible] = useState(false);

  //function to toggle snack bar visibility
  const toggleSnackBar = () => {
    setIsVisible(!isVisible);
  };

  const eyeIconHandler = () => {
    setShowPassword(prevState => !prevState);
  };

  const signUpPress = () => {
    navigation.navigate('Register');
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <SnackBar
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          message={unableToLoginMessage}
        />
        <Image
          source={require('../../assets/shopVerse.png')}
          style={styles.image}
        />
        <View style={styles.inputContainerWrapper}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Email</Text>

            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              textColor="#0E0C22"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="enter your password"
              textColor="#0E0C22"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye-off' : 'eye'}
                  color="#838589"
                  onPress={() => {
                    eyeIconHandler();
                  }}
                />
              }
            />
          </View>
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.contentStyle}
          textColor="#FFF"
          onPress={() => {
            toggleSnackBar();
            console.log('Pressed');
          }}>
          Sign In
        </Button>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Pressable onPress={() => signUpPress()}>
            <Text style={styles.signUp}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </DismissKeyboard>
  );
}
