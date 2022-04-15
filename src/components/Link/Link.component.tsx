import React from 'react';
import { Text } from 'src/components';

import * as S from './Link.styles';

interface ILink {
  children: any;
  onPress: () => void;
  marginTop?: number;
  marginBottom?: number;
}

const Link = ({ children, onPress, marginBottom, marginTop }: ILink) => {
  return (
    <S.Container onPress={onPress}>
      <Text
        fontWeight="500"
        marginBottom={marginBottom}
        marginTop={marginTop}
        textAlign="center"
      >
        {children}
      </Text>
    </S.Container>
  );
};

export default Link;
