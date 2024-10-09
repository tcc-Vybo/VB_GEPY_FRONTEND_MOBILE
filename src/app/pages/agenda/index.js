import React from "react";
import { StyleSheet } from "react-native";
import UserHeader from "../../components/userHeader";
import { ParentViewContent, ChildrenViewContent, ParentView } from "./styles";
import MessageCards from "../../components/messageCards/messageCards";


export default function Agenda() {
  return (
    <ParentView>
      <UserHeader />
      <ParentViewContent>
        <ChildrenViewContent style={styles.boxWithShadow}>
          <MessageCards/>
          <MessageCards/>
          <MessageCards/>
        </ChildrenViewContent>
      </ParentViewContent>
    </ParentView>
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
});
