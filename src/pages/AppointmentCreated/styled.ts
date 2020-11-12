import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


const Container = styled.View`

  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const Title = styled.Text`
  font-size: 32px;
  color: #f4ede9;
  font-family: 'RobotoSlab-Medium';
  margin-top: 48px;
  text-align: center;
`;

const Description = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #999591;
  margin-top: 16px;
`;

const OkButton = styled(RectButton)`
  background: #ff9000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
`;

const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;

export { Container, Title, Description, OkButton, OkButtonText }
