import React from 'react';
import { TextInputProps } from 'react-native';
import { Text } from 'src/components';

import * as S from './Input.styles';

interface IInput extends TextInputProps {
  value?: string;
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
}

const Input = ({
  value,
  onChangeText,
  placeholder,
  label,
  ...rest
}: IInput) => {
  return (
    <>
      {label && (
        <Text fontWeight="500" marginLeft={8} marginBottom={8}>
          {label}
        </Text>
      )}
      <S.InputWrapper
        {...rest}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
