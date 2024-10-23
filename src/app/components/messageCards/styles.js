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

const ParentTouchableOpacityContent = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`

const ParentTouchableOpacityContentLeft = styled.View`
  width: 27%;
  height: 90%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const ParentTouchableOpacityContentRight = styled.View`
  width: 65%;
  height: 100%;
  border-radius: 10px;
`

const ParentTouchableOpacityContentRightUp = styled.View`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: ${Platform.OS === 'ios' ? 0 : -2}%;
`

const ParentTouchableOpacityContentRightDown = styled.View`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ParentTouchableOpacityContentContentText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 14 : 12}px;
  font-style: italic;
  text-decoration: underline;
`;

const ParentTouchableOpacityContentContentTitleDateText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 55 : 40}px;
  font-weight: bold;
`
const ParentTouchableOpacityContentContentTitleNameText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 18 : 14}px;
  font-weight: bold;
`

const ParentTouchableOpacitySide = styled.View`
  height: 100%;
  width: 5%; 
  margin-right: ${Platform.OS === 'ios' ? -3 : -3}%;;
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
  width: ${Platform.OS === 'ios' ? 90 : 90}%;
  height: ${Platform.OS === 'ios' ? 45 : 50}%;
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
  font-size: ${Platform.OS === 'ios' ? 16 : 16}px;
  font-weight: bold;
`
const ModalBackgroundViewContentTitleSenderText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 16 : 16}px;
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
  ParentTouchableOpacityContent,    
  ParentTouchableOpacityContentLeft,
  ParentTouchableOpacityContentRight,
  ParentTouchableOpacityContentRightUp,
  ParentTouchableOpacityContentRightDown,
  ParentTouchableOpacityContentContentText,
  ParentTouchableOpacityContentContentTitleDateText,
  ParentTouchableOpacityContentContentTitleNameText,
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
