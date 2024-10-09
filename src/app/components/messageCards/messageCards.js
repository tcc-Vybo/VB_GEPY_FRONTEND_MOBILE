import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ParentTouchableOpacity, ParentTouchableOpacityFooter } from './styles'


export default function MessageCards() {

const [statePressed, setStatePressed] = useState(false)


  return (
    <ParentTouchableOpacity
        style={styles.boxWithShadow}
        onPressIn={() => {
            setStatePressed(true)
        }}
    >
        <ParentTouchableOpacityFooter style={[ statePressed && styles.buttonPressed]}/>
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
  buttonPressed:{
    backgroundColor: 'green'
  },
});
