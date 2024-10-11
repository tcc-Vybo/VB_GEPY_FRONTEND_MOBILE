import styled from "styled-components/native";
import { Platform } from "react-native";

//TOUCHABLE OPACITY STYLING

const ParentTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 125px;
  background-color: #dedede;
  margin-bottom: 5%;
  border-radius: 10px;
`;

const ParentTouchableOpacitySide = styled.View`
  height: 100%;
  width: 5%;
  margin-left: 95%;
  background-color: #f5e61d;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;


// MODAL STYLING

const ModalBackgroundView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

if (Platform.OS === 'ios'){

}

const ModalBackgroundViewContent = styled.View`
  width: ${Platform.OS === 'ios' ? 80 : 93}%;
  height: ${Platform.OS === 'ios' ? 40 : 50}%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalBackgroundViewContentTop = styled.View`
    width: ${Platform.OS === 'ios' ? 93 : 95}%;
    height: 76%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: #dedede;
    padding: 3%;
`

const ModalBackgroundViewContentTopUpper = styled.View`
    width: 100%;
    height: 20%;
    border-radius: 10px;
    margin-top: 2%;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ModalBackgroundViewContentTopLower = styled.View`
    width: 100%;
    height: 80%;
    padding: 1%;
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
    gap: 10px;
`

const ModalBackgroundViewContentText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 16 : 12}px;;
`;

const ModalBackgroundViewContentTitleDateText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 55 : 40}px;
  font-weight: bold;
`
const ModalBackgroundViewContentTitleNameText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 20 : 20}px;
  font-weight: bold;
`
const ModalBackgroundViewContentTitleSenderText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 20 : 20}px;
`
const  ModalBackgroundViewContentDescriptionText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 16 : 16}px;
`

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
  border: 2px #f5e61d;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export {
  ParentTouchableOpacity,
  ParentTouchableOpacitySide,
  ModalBackgroundView,
  ModalBackgroundViewContent,
  ModalBackgroundViewContentText,
  ModalBackgroundViewContentTitleSenderText,
  ModalBackgroundViewContentTitleNameText,
  ModalBackgroundViewContentTitleDateText,
  ModalBackgroundViewContentDescriptionText,
  ModalBackgroundViewContentTouchableOpacityConfirm,
  ModalBackgroundViewContentTouchableOpacityCancel,
  ModalBackgroundViewContentTop,
  ModalBackgroundViewContentTopUpper,
  ModalBackgroundViewContentTopUpperLeft,
  ModalBackgroundViewContentTopUpperRight,
  ModalBackgroundViewContentTopLower,
  ModalBackgroundViewContentBottom
};
