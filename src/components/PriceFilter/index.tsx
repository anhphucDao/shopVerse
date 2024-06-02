import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import {RadioButton, TextInput} from 'react-native-paper';
import styles from './styles';
import {PriceFilterProps} from '../../types/props';

export default function PriceFilter({
  priceOrder,
  setPriceOrder,
  setPriceRange,
  isReset,
}: PriceFilterProps) {
  const optionHandler = (order: string) => {
    setPriceOrder(order);
  };

  const [textFrom, setTextFrom] = useState('');
  const [textTo, setTextTo] = useState('');

  const [isFromError, setIsFromError] = useState(false);
  const [isToError, setIsToError] = useState(false);

  useEffect(() => {
    //condition to satisfy the range

    if (textFrom === '' && textTo === '') {
      setIsFromError(false);
      setIsToError(false);
      setPriceRange({
        from: textFrom,
        to: textTo,
      });
    } else if (
      Number(textFrom) >= 0 &&
      Number(textTo) >= 0 &&
      Number(textTo) > Number(textFrom)
    ) {
      setIsFromError(false);
      setIsToError(false);
      setPriceRange({
        from: textFrom,
        to: textTo,
      });
    } else {
      setIsFromError(true);
      setIsToError(true);
    }
  }, [textFrom, textTo, setPriceRange]);

  useEffect(() => {
    if (isReset) {
      setTextFrom('');
      setTextTo('');
    }
  }, [isReset]);

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
        <DismissKeyboard>
          <View style={styles.inputContainer}>
            <TextInput
              value={textFrom}
              placeholder="From $0"
              mode="flat"
              error={isFromError}
              style={styles.textInput}
              keyboardType="default"
              outlineStyle={styles.inputOutline}
              textColor="#0E0C22"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              onChange={text => {
                setTextFrom(text.nativeEvent.text);
              }}
            />

            <View style={styles.divider} />
            <TextInput
              value={textTo}
              placeholder="To $1000"
              mode="flat"
              error={isToError}
              style={styles.textInput}
              keyboardType="default"
              outlineStyle={styles.inputOutline}
              textColor="#0E0C22"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              onChange={text => {
                setTextTo(text.nativeEvent.text);
              }}
            />
          </View>
        </DismissKeyboard>
      </View>
    </View>
  );
}
