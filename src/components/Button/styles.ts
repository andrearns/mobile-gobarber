import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: #ff9000;
  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';

`;
