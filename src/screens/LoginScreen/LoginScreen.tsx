import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import styles from './styles';
import {Button, TextInput} from 'react-native-paper';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const eyeIconHandler = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Image
          source={require('../../assets/shopVerse.png')}
          style={styles.image}
        />
        {/* <TextInput label="Email" mode="outlined" style={styles.input} />
      <TextInput label="Password" mode="outlined" style={styles.input} /> */}
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
          onPress={() => console.log('Pressed')}>
          Sign In
        </Button>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Text style={styles.signUp}>Sign Up</Text>
        </View>
      </View>
    </DismissKeyboard>
  );
}
