import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

import {InputComponent} from './Component/';

const Component = () => {
  const method = useFormContext();
  return (
    <Controller
      control={method.control}
      render={({field: {onChange, onBlur, value}}) => (
        <InputComponent onChange={onChange} onBlur={onBlur} value={value} />
      )}
      name="hobby"
      rules={{
        required: true,
      }}
    />
  );
};

export default Component;
