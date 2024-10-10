import styled from "styled-components/native";

//TOUCHABLE OPACITY STYLING

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


// MODAL STYLING

const ModalBackgroundView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBackgroundViewContent = styled.View`
  width: 80%;
  height: 40%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalBackgroundViewContentTop = styled.View`
    width: 90%;
    height: 76%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
`

const ModalBackgroundViewContentTopUpper = styled.View`
    width: 100%;
    height: 20%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ModalBackgroundViewContentTopUpperLeft = styled.View`
    width: 30%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ModalBackgroundViewContentTopUpperRight = styled.View`
    width: 70%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ModalBackgroundViewContentTopLower = styled.View`
    width: 100%;
    height: 80%;
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

const ModalBackgroundViewContentTouchableOpacityConfirm = styled.TouchableOpacity`
  width: 50%;
  height: 30px;
  border-radius: 7px;
  border: 2px green;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const ModalBackgroundViewContentTouchableOpacityCancel = styled.TouchableOpacity`
  width: 30%;
  height: 30px;
  border-radius: 7px;
  border: 2px red;
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
  ModalBackgroundViewContentTouchableOpacityConfirm,
  ModalBackgroundViewContentTouchableOpacityCancel,
  ModalBackgroundViewContentTop,
  ModalBackgroundViewContentTopUpper,
  ModalBackgroundViewContentTopUpperLeft,
  ModalBackgroundViewContentTopUpperRight,
  ModalBackgroundViewContentTopLower,
  ModalBackgroundViewContentBottom
};
