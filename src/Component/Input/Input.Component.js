import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './Input.Styles';

const InputComponent = ({onChange, onBlur, value}) => (
  <TextInput
    style={[styles.input]}
    onBlur={onBlur}
    onChangeText={(value) => onChange(value)}
    value={value}
  />
);

export default InputComponent;
