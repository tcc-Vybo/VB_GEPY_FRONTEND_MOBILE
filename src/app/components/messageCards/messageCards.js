import React, { useState } from "react";
import {
  StyleSheet,
  Modal,
  Button,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
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
  ModalBackgroundViewContentBottom,
} from "./styles";

export default function MessageCards({ date, title, description, sender }) {
  const [statePressed, setStatePressed] = useState(false);
  const [stateCallModal, setStateCallModal] = useState(false);
  const closeModal = () => {
    setStateCallModal(false);
  };
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
              <ModalBackgroundViewContentTopUpper style={styles.boxWithShadow}>
                <ModalBackgroundViewContentTopUpperLeft>
                  <ModalBackgroundViewContentText>
                    {date}
                  </ModalBackgroundViewContentText>
                </ModalBackgroundViewContentTopUpperLeft>
                <ModalBackgroundViewContentTopUpperRight>
                  <ModalBackgroundViewContentText>
                    {title}
                  </ModalBackgroundViewContentText>
                  <ModalBackgroundViewContentText>
                    {sender}
                  </ModalBackgroundViewContentText>
                </ModalBackgroundViewContentTopUpperRight>
              </ModalBackgroundViewContentTopUpper>
              <ModalBackgroundViewContentTopLower style={styles.boxWithShadow}>
                <ModalBackgroundViewContentText>
                  {description}
                </ModalBackgroundViewContentText>
              </ModalBackgroundViewContentTopLower>
            </ModalBackgroundViewContentTop>
            <ModalBackgroundViewContentBottom>
              <ModalBackgroundViewContentTouchableOpacityConfirm
                onPress={() => {
                  closeModal();
                  setStatePressed(true);
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
      <ParentTouchableOpacityFooter
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
    elevation: 7.5,
  },
  buttonPressed: {
    backgroundColor: "green",
  },
});
