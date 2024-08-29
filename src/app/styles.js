import styled from 'styled-components/native';
import DropShadow from 'react-native-drop-shadow';

export const Safe = styled.SafeAreaView`
  flex: 1;
  background-color: #d7a1ff;
`;
export const IconViewFocused = styled.View``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 30px;
  border-radius: 50px;
  padding: 50px;
  padding-bottom: -50px;
`;

export const LoginLogo = styled.Image`
  width: 250px;
  height: 206px;
  margin-bottom: 70px;
`;

export const FormContainer = styled.View`
  margin-bottom: 10px;
  width: 100%;
`;

export const LoginText = styled.Text`
  color: #6700b3;
  font-weight: bold;
`;

export const LoginInput = styled.TextInput`
  border-color: #6700b3;
  margin-bottom: 30px;
  border-bottom-width: 2px;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-bottom: 50px;
  border: 2px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 20px;
  border-color: #6700b3;
`;

export const LoginButtonText = styled.Text`
  color: #6700b3;
  font-weight: bold;
`;

export const ForgotText = styled.Text`
  margin-bottom: 30px;
  color: #6700b3;
`;
