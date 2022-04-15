import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.TouchableOpacity`
  width: ${width / 2 - 16}px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;
