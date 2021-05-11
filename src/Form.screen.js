import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import styles from './Form.styles';
// import ExampleHooksLogic from './ExampleHooks.logic';

const FormScreen = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (d) => {
    console.log(d);
    console.log('errors ', errors);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>First name</Text>
      <Controller
        name="firstName"
        control={control}
        rules={{required: 'required'}}
        defaultValue=""
        render={({value, onChange}) => (
          <TextInput
            style={[
              styles.input,
              {borderColor: errors.firstName ? '#e53935' : '#bdbdbd'},
            ]}
            value={value}
            onChangeText={(val) => onChange(val)}
          />
        )}
      />
      {/* {errors.firstName && <Text>First Name is required.</Text>} */}
      <Text style={styles.textStyles}>Last name</Text>
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        rules={{required: 'required'}}
        render={({value, onChange}) => (
          <TextInput
            style={[
              styles.input,
              {
                borderColor: errors.lastName ? '#e53935' : '#bdbdbd',
              },
            ]}
            value={value}
            onChangeText={(val) => onChange(val)}
          />
        )}
      />
      {/* {errors.lastName && <Text>Last Name is required.</Text>} */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.buttonStyle}>
        <Text style={styles.submitStyles}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormScreen;
