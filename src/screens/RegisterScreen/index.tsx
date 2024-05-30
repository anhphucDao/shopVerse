import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import styles from './styles';
import {Button, TextInput} from 'react-native-paper';
import SnackBar from '../../components/SnackBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const emailError = 'Email is not valid';
const passwordError = 'Password requires 6 characters and a special character';

const bothError = emailError + '\n' + passwordError;

const createAccountMessage =
  'Account created successfully\nYou will be redirected to the login page in';

export default function RegisterScreen({navigation}) {
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

  const [countdown, setCountdown] = useState(0);

  const [isCountdownRunning, setIsCountdownRunning] = useState(false);

  //state to catch error state when connnect to async storage
  const [isError, setIsError] = useState(false);

  //function to set account into async storage
  const storeAccount = async () => {
    try {
      const account = {
        email: debounceEmail,
        password: debouncePassword,
        // ... other account data ...
      };

      const previousData = await getFromStorage();

      if (previousData.length === 0 && message === 'Error register account') {
        return;
      }
      //check if there is already an account in async storage
      console.log(
        'previousData.some:',
        previousData.some(account => account.email === debounceEmail),
      );

      //check if there is already an account in async storage
      const accountExists = previousData.some(
        account => account.email === debounceEmail,
      );

      console.log('accountExists:', accountExists);

      if (accountExists) {
        // setIsExisted(true);
        console.log('Account already exists');
        setMessage('Account already exists');
        return accountExists;
      }

      if (previousData.length > 0) {
        const updatedData = [...previousData, account];
        await AsyncStorage.setItem('account', JSON.stringify(updatedData));
      } else {
        await AsyncStorage.setItem('account', JSON.stringify([account]));
      }

      return false;
    } catch (e) {
      // saving error
      setIsError(true);
      setMessage('Error register account');
    }
  };

  //function to check if account already exists in async storage
  //   const checkAccount = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('account');
  //       if (value !== null) {
  //         // value previously stored
  //         //loop through the account data, to check if the email already exists
  //         const accountData = JSON.parse(value);

  //         return accountData.some(account => account.email === debounceEmail);
  //       }

  //       return false;
  //     } catch (e) {
  //       // error reading value

  //       setMessage('Error register account');
  //       return false;
  //     }
  //   };

  //function to delete accountData in async storage

  const deleteAccount = async () => {
    try {
      await AsyncStorage.removeItem('account');
    } catch (e) {
      // remove error
      console.log('Error deleting account');
    }
  };

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
      setIsError(true);
      setMessage('Error register account');
      return [];
    }
  };

  //function to toggle snack bar visibility
  const toggleSnackBar = () => {
    setIsVisible(!isVisible);
  };

  const eyeIconHandler = () => {
    setShowPassword(prevState => !prevState);
    // await deleteAccount();
  };

  const alreadySignUp = () => {
    navigation.navigate('Login');
  };

  const handleInputChange = (event: string) => {
    setEmail(event);
  };

  const handlePasswordChange = (event: string) => {
    setPassword(event);
  };

  const validateEmail = (emailInput: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailInput).toLowerCase());
  };

  const validatePassword = (passwordInput: string) => {
    // Check if password length is greater than 6
    if (passwordInput.length <= 6) {
      return false;
    }

    // Check if password contains at least one special character
    const specialCharacterRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!specialCharacterRegex.test(passwordInput)) {
      return false;
    }

    return true;
  };

  const onSignUpPress = async () => {
    if (!validateEmail(debounceEmail) || !validatePassword(debouncePassword)) {
      if (
        !validateEmail(debounceEmail) &&
        !validatePassword(debouncePassword)
      ) {
        setMessage(bothError);
      } else if (!validateEmail(debounceEmail)) {
        setMessage(emailError);
      } else {
        setMessage(passwordError);
      }

      setIsVisible(true);
    } else {
      const accountExists = await storeAccount();

      if (accountExists || isError) {
        console.log('code ran here');

        setIsVisible(true);
        return;
      }
      setMessage(createAccountMessage);
      setIsVisible(true);
      setIsCountdownRunning(true);

      // Start the countdown
      let seconds = 3;
      setCountdown(seconds);
      const countdownTimer = setInterval(() => {
        seconds -= 1;
        setCountdown(seconds);

        if (seconds <= 0) {
          //clear the input fields
          setEmail('');
          setPassword('');
          clearInterval(countdownTimer);
          setIsCountdownRunning(false);
          // Redirect to the login screen
          navigation.navigate('Login'); // Replace 'Login' with the name of your login screen
        }
      }, 1000);
    }
  };

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

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <SnackBar
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          message={message}
          countdown={countdown}
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
              value={email}
              onChangeText={handleInputChange}
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
              value={password}
              onChangeText={handlePasswordChange}
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
          style={isCountdownRunning ? styles.disableButton : styles.button}
          contentStyle={
            isCountdownRunning
              ? styles.disableContentStyle
              : styles.contentStyle
          }
          disabled={isCountdownRunning}
          textColor="#FFF"
          onPress={() => {
            onSignUpPress();
          }}>
          Sign Up
        </Button>
        <View style={styles.bottomTextContainer}>
          <Pressable onPress={() => alreadySignUp()}>
            <Text style={styles.alreadySignUp}>Already have an account?</Text>
          </Pressable>
        </View>
      </View>
    </DismissKeyboard>
  );
}
