import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.PRIMARY};
`;
