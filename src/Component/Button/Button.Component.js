import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Button.Styles';

const ButtonComponent = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.submitStyles}>Submit</Text>
  </TouchableOpacity>
);

export default ButtonComponent;
