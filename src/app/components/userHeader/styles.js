import styled from 'styled-components/native';

export const SafeHeader = styled.SafeAreaView`
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: 105px;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1;
`;

export const LoggedUser = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const LoggedUserName = styled.Text`
  font-weight: bold;
  color: #6700b3;
  margin-right: 4%;
`;

export const Logo = styled.Image`
  width: 84px;
  height: 67px;
  margin-left: 4%;
`;
