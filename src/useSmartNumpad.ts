import React, { useState } from 'react';
import { handleSmartNumpadKeyDown } from './handleSmartNumpad';

type Options = {
  commaDecimal?: boolean;
};

export function useSmartNumpad(initialValue = '', options: Options = {}) {
  const [value, setValue] = useState(initialValue);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>
    handleSmartNumpadKeyDown(event, setValue, options);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return { value, onChange, onKeyDown, setValue };
}