import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import styles from './Form.styles';

const FormScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (d) => {
    console.log(d);
    console.log('errors ', errors);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>React Hook{'\n'}Form Example</Text>
      <Text style={styles.textStyles}>First Name</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {borderColor: errors.firstName ? '#e53935' : '#bdbdbd'},
            ]}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.firstName && (
        <Text style={styles.errorText}>First name required</Text>
      )}
      <Text style={styles.textStyles}>Last Name</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {borderColor: errors.lastName ? '#e53935' : '#bdbdbd'},
            ]}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.lastName && (
        <Text style={styles.errorText}>Last name required</Text>
      )}
      <Text style={styles.textStyles}>Phone Number</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {borderColor: errors.phone ? '#e53935' : '#bdbdbd'},
            ]}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="phone"
        rules={{required: true, maxLength: 12, minLength: 11}}
        defaultValue=""
      />
      {(errors.phone?.type === 'maxLength' ||
        errors.phone?.type === 'minLength') && (
        <Text style={styles.errorText}>Length must 11 or 12 number</Text>
      )}
      {errors.phone?.type === 'required' && (
        <Text style={styles.errorText}>Phone number required</Text>
      )}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.buttonStyle}>
        <Text style={styles.submitStyles}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormScreen;
