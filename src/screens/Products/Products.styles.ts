import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export const Container = styled.TouchableOpacity`
  width: ${width / 2 - 16}px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

export const Text = styled.Text`
  font-weight: 500;
`;
