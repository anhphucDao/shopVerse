import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import styles from './styles';
import {Button, TextInput} from 'react-native-paper';
import SnackBar from '../../components/SnackBar';

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

  //function to toggle snack bar visibility
  const toggleSnackBar = () => {
    setIsVisible(!isVisible);
  };

  const eyeIconHandler = () => {
    setShowPassword(prevState => !prevState);
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

  const onSignUpPress = () => {
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
