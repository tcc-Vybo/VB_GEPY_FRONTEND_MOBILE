import styled from "styled-components/native";

const ParentTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 125px;
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
`;
const ParentTouchableOpacityFooter = styled.View`
  height: 10%;
  width: 100%;
  margin-top: 33%;
  background-color: #6700b3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ModalBackgroundView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBackgroundViewContent = styled.View`
  width: 80%;
  height: 40%;
  gap: 10px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalBackgroundViewContentTop = styled.View`
    width: 90%;
    height: 70%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ModalBackgroundViewContentBottom = styled.View`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10%;
`

const ModalBackgroundViewContentText = styled.Text`
  font-size: 16px;
`;

const ModalBackgroundViewContentTouchableOpacity = styled.TouchableOpacity`
  width: 40%;
  height: 30px;
  border-radius: 10px;
  border: 1px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export {
  ParentTouchableOpacity,
  ParentTouchableOpacityFooter,
  ModalBackgroundView,
  ModalBackgroundViewContent,
  ModalBackgroundViewContentText,
  ModalBackgroundViewContentTouchableOpacity,
  ModalBackgroundViewContentTop,
  ModalBackgroundViewContentBottom
};
