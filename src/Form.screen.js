import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import styles from './Form.styles';
// import ExampleHooksLogic from './ExampleHooks.logic';

const FormScreen = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (d) => {
    console.log(d);
  };
  return (
    <View style={styles.container}>
      <Text>First name</Text>
      <Controller
        name="firstName"
        control={control}
        render={({value, onChange}) => (
          <TextInput
            style={styles.input}
            value={value}
            // onChangeText={(val) => onChange(val)}
          />
        )}
      />
      <Text>Last name</Text>
      <Controller
        name="firstName"
        control={control}
        render={({value, onChange}) => (
          <TextInput
            style={styles.input}
            value={value}
            // onChangeText={(val) => onChange(val)}
          />
        )}
      />
    </View>
  );
};

export default FormScreen;
