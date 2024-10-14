import React, { useState } from "react";
import { StyleSheet, Modal } from "react-native";
import {
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
  ModalBackgroundViewContentBottom,
} from "./styles";

import axios from "axios";

export default function MessageCards({
  id,
  date,
  hour,
  title,
  description,
  sender,
  sender_ID,
  recipient_ID,
  status,
}) {
  const [statePressed, setStatePressed] = useState(false);
  const [stateCallModal, setStateCallModal] = useState(false);

  const [stateCurrentId, setStateCurrentId] = useState(id);
  const [stateCurrentDate, setStateCurrentDate] = useState(date);
  const [stateCurrentHour, setStateCurrentHour] = useState(hour);
  const [stateCurrentTitle, setStateCurrentTitle] = useState(title);
  const [stateCurrentDescription, setStateCurrentDescription] =
    useState(description);
  const [stateCurrentSender_ID, setStateCurrentSender_ID] = useState(sender_ID);
  const [stateCurrentRecipient_ID, setStateCurrentRecipient_ID] =
    useState(recipient_ID);
  const [stateMessageNewStatus, setStateMessageNewStatus] = useState(status);

  const closeModal = () => {
    setStateCallModal(false);
  };

  const handleStatusMessage = () => {
    const utlPutMessage = `https://vb-gepy-backend-web.onrender.com/recado-turma`;
    axios
      .put(utlPutMessage, {
        id: stateCurrentId,
        titulo: stateCurrentTitle,
        descricao: stateCurrentDescription,
        data: stateCurrentDate,
        hora: stateCurrentHour,
        remetente: {
          id: stateCurrentSender_ID,
        },
        destinatario: {
          id: stateCurrentRecipient_ID,
        },
        status: stateMessageNewStatus,
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <ParentTouchableOpacity
      style={styles.boxWithShadow}
      onPress={() => {
        setStateCallModal(true);
        setStateCurrentId(id);
        setStateCurrentDate(date);
        setStateCurrentHour(hour);
        setStateCurrentTitle(title);
        setStateCurrentDescription(description);
        setStateCurrentSender_ID(sender_ID);
        setStateCurrentRecipient_ID(recipient_ID);
      }}
    >
      <Modal
        visible={stateCallModal === true ? true : false}
        animationType="fade"
        onRequestClose={closeModal}
        transparent={true}
      >
        <ModalBackgroundView>
          <ModalBackgroundViewContent>
            <ModalBackgroundViewContentTop style={styles.boxWithShadow}>
              <ModalBackgroundViewContentTopUpper>
                <ModalBackgroundViewContentTopUpperLeft>
                  <ModalBackgroundViewContentTitleDateText>
                    {date}
                  </ModalBackgroundViewContentTitleDateText>
                </ModalBackgroundViewContentTopUpperLeft>
                <ModalBackgroundViewContentTopUpperRight>
                  <ModalBackgroundViewContentTitleNameText>
                    {title}
                  </ModalBackgroundViewContentTitleNameText>
                  <ModalBackgroundViewContentTitleSenderText>
                    {sender}
                  </ModalBackgroundViewContentTitleSenderText>
                </ModalBackgroundViewContentTopUpperRight>
              </ModalBackgroundViewContentTopUpper>
              <ModalBackgroundViewContentTopLower>
                <ModalBackgroundViewContentDescriptionText>
                  {description}
                </ModalBackgroundViewContentDescriptionText>
              </ModalBackgroundViewContentTopLower>
            </ModalBackgroundViewContentTop>
            <ModalBackgroundViewContentBottom>
              <ModalBackgroundViewContentTouchableOpacityConfirm
                onPress={() => {
                  closeModal();
                  setStatePressed(true);
                  setStateMessageNewStatus("RECEBIDO");
                  handleStatusMessage();
                }}
              >
                <ModalBackgroundViewContentText>
                  Confirmar
                </ModalBackgroundViewContentText>
              </ModalBackgroundViewContentTouchableOpacityConfirm>
              <ModalBackgroundViewContentTouchableOpacityCancel
                onPress={() => {
                  closeModal();
                  setStatePressed(false);
                }}
              >
                <ModalBackgroundViewContentText>
                  Cancelar
                </ModalBackgroundViewContentText>
              </ModalBackgroundViewContentTouchableOpacityCancel>
            </ModalBackgroundViewContentBottom>
          </ModalBackgroundViewContent>
        </ModalBackgroundView>
      </Modal>
      <ParentTouchableOpacityContent>
        <ParentTouchableOpacityContentLeft>
          <ParentTouchableOpacityContentContentTitleDateText>
            {date}
          </ParentTouchableOpacityContentContentTitleDateText>
        </ParentTouchableOpacityContentLeft>
        <ParentTouchableOpacityContentRight>
          <ParentTouchableOpacityContentRightUp>
            <ParentTouchableOpacityContentContentTitleNameText>
              {title}
            </ParentTouchableOpacityContentContentTitleNameText>
          </ParentTouchableOpacityContentRightUp>
          <ParentTouchableOpacityContentRightDown>
            <ParentTouchableOpacityContentContentText>
              {id ? "Clique para expandir recado ->" : "Erro"}
            </ParentTouchableOpacityContentContentText>
          </ParentTouchableOpacityContentRightDown>
        </ParentTouchableOpacityContentRight>

        <ParentTouchableOpacitySide
        style={[statePressed && styles.buttonPressed]}
      />
      </ParentTouchableOpacityContent>
      
    </ParentTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  buttonPressed: {
    backgroundColor: "#6f09ba",
  },
});
