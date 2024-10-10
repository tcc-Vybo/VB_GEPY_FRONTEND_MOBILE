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
  ModalBackgroundViewContentTouchableOpacity,
  ModalBackgroundViewContentTop,
  ModalBackgroundViewContentBottom,
} from "./styles";

export default function MessageCards({ id }) {
  const [statePressed, setStatePressed] = useState(false);
  const closeModal = () => {
    setStatePressed(false);
  };
  return (
    <ParentTouchableOpacity
      style={styles.boxWithShadow}
      onPressIn={() => {
        setStatePressed(true);
      }}
    >
      <Modal
        visible={statePressed === true ? true : false}
        animationType="fade"
        onRequestClose={closeModal}
        transparent={true}
      >
        <ModalBackgroundView>
          <ModalBackgroundViewContent>
            <ModalBackgroundViewContentTop>
              <ModalBackgroundViewContentText>
                This is an alert message!
              </ModalBackgroundViewContentText>
            </ModalBackgroundViewContentTop>
            <ModalBackgroundViewContentBottom>
              <ModalBackgroundViewContentTouchableOpacity onPress={closeModal}>
                <ModalBackgroundViewContentText>
                  OK
                </ModalBackgroundViewContentText>
              </ModalBackgroundViewContentTouchableOpacity>
              <ModalBackgroundViewContentTouchableOpacity onPress={closeModal}>
                <ModalBackgroundViewContentText>
                  Cancel
                </ModalBackgroundViewContentText>
              </ModalBackgroundViewContentTouchableOpacity>
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
