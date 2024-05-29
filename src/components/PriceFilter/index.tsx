import React from 'react';
import {View, Text} from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import {RadioButton, TextInput} from 'react-native-paper';
import styles from './styles';

export default function PriceFilter({priceOrder, setPriceOrder}) {
  const optionHandler = order => {
    setPriceOrder(order);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price</Text>
      <View style={styles.innerOptionContainer}>
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>From highest to lowest </Text>
          <RadioButton.Android
            value="highestToLowest"
            color="#0E0C22"
            uncheckedColor="#0E0C22"
            onPress={() => optionHandler('highestToLowest')}
            status={priceOrder === 'highestToLowest' ? 'checked' : 'unchecked'}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>From lowest to highest </Text>
          <RadioButton.Android
            value="LowestToHighest"
            color="#0E0C22"
            uncheckedColor="#0E0C22"
            onPress={() => optionHandler('LowestToHighest')}
            status={priceOrder === 'LowestToHighest' ? 'checked' : 'unchecked'}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="From $0"
            mode="flat"
            style={styles.textInput}
            keyboardType="default"
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
            keyboardType="default"
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
