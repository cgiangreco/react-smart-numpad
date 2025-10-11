/**
 * react-smart-numpad
 * MIT License © 2025 Christian Giangreco
 */
import React from 'react';
type Options = {
  commaDecimal?: boolean; // default for the decimal is ".". Can be set to true to use "," instead (Europe)
};

export function handleSmartNumpadKeyDown(
  event: React.KeyboardEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  options: Options = {}
) {
  const { commaDecimal = false } = options;

  const numpadMap: Record<string, string> = {
    Numpad0: '0',
    Numpad1: '1',
    Numpad2: '2',
    Numpad3: '3',
    Numpad4: '4',
    Numpad5: '5',
    Numpad6: '6',
    Numpad7: '7',
    Numpad8: '8',
    Numpad9: '9',
    NumpadDecimal: (commaDecimal ? ',' : '.')
  };

  if (numpadMap[event.code]) {
    event.preventDefault();
    setValue((prev) => prev + numpadMap[event.code]);
  }
}
