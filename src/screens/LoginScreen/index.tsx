import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import styles from './styles';
import {Button, TextInput} from 'react-native-paper';
import SnackBar from '../../components/SnackBar';
import {Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useStore from '../../store';

const unableToLoginMessage =
  'Unable to login \nPlease check your email or password again';

const emailError = 'Email is not valid';
const passwordError = 'Password is not valid';

const bothError = emailError + '\n' + passwordError;

export default function LoginScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false);

  //state to handle visibility of snackbar
  const [isVisible, setIsVisible] = useState(false);

  //state to manage email input value
  const [email, setEmail] = useState('');

  //state to manage password input value
  const [password, setPassword] = useState('');

  //state to manage debounce email input value
  const [debounceEmail, setDebounceEmail] = useState('');

  //state to manage debounce password input value
  const [debouncePassword, setDebouncePassword] = useState('');

  //state to manage error message
  const [message, setMessage] = useState('');

  //useEffect to handle debounce email input value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceEmail(email);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [email]);

  //useEffect to handle debounce password input value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncePassword(password);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [password]);

  //function get the function from the store
  const setIsAuth = useStore.use.setIsAuth();

  //function to get all items in async storage
  const getFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('account');

      if (value !== null) {
        // value previously stored
        //loop through the account data, to check if the email already exists
        const accountData = JSON.parse(value);

        console.log('accountData:', accountData);

        return accountData;
      } else {
        console.log('Not found');
        return [];
      }
    } catch (e) {
      // error reading value
      console.log('Error reading value');
      return [];
    }
  };

  const validateEmail = (emailInput: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailInput).toLowerCase());
  };

  //function to validate input
  const validateInput = () => {
    if (!validateEmail(debounceEmail) && debouncePassword === '') {
      setMessage(bothError);
      return false;
    } else if (!validateEmail(debounceEmail)) {
      setMessage(emailError);
      return false;
    } else if (debouncePassword === '') {
      setMessage(passwordError);
      return false;
    }

    return true;
  };

  //function to check if email and password match
  const checkEmailAndPassword = async () => {
    const accountData = await getFromStorage();

    if (accountData.length > 0) {
      const account = accountData.find(
        account =>
          account.email === debounceEmail &&
          account.password === debouncePassword,
      );

      if (account) {
        return true;
      }
    }

    return false;
  };

  const handleEmailChange = (event: string) => {
    setEmail(event);
  };

  const handlePasswordChange = (event: string) => {
    setPassword(event);
  };

  //function to toggle snack bar visibility
  const eyeIconHandler = () => {
    setShowPassword(prevState => !prevState);
  };

  const signUpPress = () => {
    navigation.navigate('Register');
  };

  const onSignInPress = async () => {
    if (validateInput()) {
      const isEmailAndPasswordMatch = await checkEmailAndPassword();

      if (isEmailAndPasswordMatch) {
        setIsAuth(true);

        //clear the email and password input
        setEmail('');
        setPassword('');

        navigation.navigate('Home');
      } else {
        setMessage(unableToLoginMessage);
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <SnackBar
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          message={message}
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
              value={email}
              placeholder="example@gmail.com"
              textColor="#0E0C22"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              onChangeText={handleEmailChange}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Password</Text>

            <TextInput
              style={styles.input}
              value={password}
              placeholder="enter your password"
              textColor="#0E0C22"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              onChangeText={handlePasswordChange}
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
            onSignInPress();
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
