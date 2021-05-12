import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Controller,
  FormProvider,
  useFormContext,
  useForm,
  useWatch,
} from 'react-hook-form';

import styles from './Form.styles';
import {EMAIL_REGEX} from './utils';
import {InputComponent, ButtonComponent} from './Component';
import UseFormContextExample from './UseFormContextExample';

const FormScreen = () => {
  const method = useForm();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = method;

  const onSubmit = (d) => {
    console.log(d);
  };

  const UseWatch = ({control}) => {
    const watch = useWatch({
      control,
      defaultValue: '',
    });

    return (
      <View>
        <Text>First name : {watch.firstName}</Text>
        <Text>Phone number : {watch.phone}</Text>
        <Text>Email : {watch.email}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>React Hook{'\n'}Form Example</Text>
      <FormProvider {...method}>
        <Text style={styles.textStyles}>First Name</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <InputComponent onChange={onChange} onBlur={onBlur} value={value} />
          )}
          name="firstName"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.firstName && (
          <Text style={styles.errorText}>First name required</Text>
        )}

        <Text style={styles.textStyles}>Phone Number</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <InputComponent onChange={onChange} onBlur={onBlur} value={value} />
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

        <Text style={styles.textStyles}>Email</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <InputComponent onChange={onChange} onBlur={onBlur} value={value} />
          )}
          name="email"
          rules={{
            required: true,
            pattern: EMAIL_REGEX,
          }}
          // defaultValue=""
        />
        {errors.email?.type === 'pattern' && (
          <Text style={styles.errorText}>Type must email</Text>
        )}
        {errors.email?.type === 'required' && (
          <Text style={styles.errorText}>Email required</Text>
        )}

        <Text style={styles.textStyles}>Hobby</Text>
        <UseFormContextExample />
        <ButtonComponent onPress={handleSubmit(onSubmit)} />
        <Text style={styles.previewStyles}>Preview useWatch</Text>
        <UseWatch control={control} />
      </FormProvider>
    </View>
  );
};

export default FormScreen;
