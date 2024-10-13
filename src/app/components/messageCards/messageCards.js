import React, { useState } from "react";
import {
  StyleSheet,
  Modal,
} from "react-native";
import {
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
  ModalBackgroundViewContentBottom,
} from "./styles";

import axios from "axios";

export default function MessageCards({ id, date, title, description, sender, status }) {
  const [statePressed, setStatePressed] = useState(false);
  const [stateCallModal, setStateCallModal] = useState(false);

  const [stateMessageNewStatus, setStateMessageNewStatus] = useState(status)
  const [stateCurrentId, setStateCurrentId] = useState(id)
  const closeModal = () => {
    setStateCallModal(false);
  };

  const handleStatusMessage = () => {
    const utlPutMessage = `https://vb-gepy-backend-web.onrender.com/recado-turma`
    axios
    .put(
      utlPutMessage,
      {
        id: stateCurrentId,
        titulo: "TESTE RECADO ALTERADO",
        descricao: "TESTE DESCRIÇÃO RECADO",
        data: "26",
        hora: "18",
        remetente: {
            "id": 1
        },
        destinatario: {
            "id": 1
        },
        status: stateMessageNewStatus
      },
    ).then((response)  => {
      console.log(response.data)
    });
  }
  return (
    <ParentTouchableOpacity
      style={styles.boxWithShadow}
      onPress={() => {
        setStateCallModal(true);
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
                  setStateCurrentId(id)
                  setStateMessageNewStatus('RECEBIDO')
                  handleStatusMessage()
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
      <ParentTouchableOpacitySide
        style={[statePressed && styles.buttonPressed]}
      />
    </ParentTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7
  },
  buttonPressed: {
    backgroundColor: "#6f09ba",
  },
});
