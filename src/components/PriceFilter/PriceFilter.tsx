import React from 'react';
import {View, Text} from 'react-native';
import {RadioButton, TextInput} from 'react-native-paper';
import styles from './styles';

export default function PriceFilter() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price</Text>
      <View style={styles.innerOptionContainer}>
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>From highest to lowest </Text>
          <RadioButton.Android value="first" status="checked" />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>From lowest to highest </Text>
          <RadioButton.Android value="second" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="From $0"
            mode="flat"
            style={styles.textInput}
            keyboardType="numeric"
            outlineStyle={styles.inputOutline}
            textColor="#0E0C22"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
          />
          <View style={styles.divider} />
          <TextInput
            placeholder="To $1000"
            mode="flat"
            style={styles.textInput}
            keyboardType="numeric"
            outlineStyle={styles.inputOutline}
            textColor="#0E0C22"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
          />
        </View>
      </View>
    </View>
  );
}