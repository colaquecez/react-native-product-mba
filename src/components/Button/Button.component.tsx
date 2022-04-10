import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import Text from '../Text/Text.component';
import * as S from './Button.styles';

interface IButton extends TouchableOpacityProps {
  children: string;
  isLoading?: boolean;
}

const Button = ({ isLoading, children, ...rest }: IButton) => {
  return (
    <S.Container disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text color="white" fontSize={16} fontWeight="600">
          {children}
        </Text>
      )}
    </S.Container>
  );
};

export default Button;
