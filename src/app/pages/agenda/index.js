import React from "react";
import { StyleSheet } from "react-native";
import UserHeader from "../../components/userHeader";
import {
  ParentViewContent,
  ChildrenViewContent,
  ParentView,
  ChildrenViewContentFlatList,
} from "./styles";
import MessageCards from "../../components/messageCards/messageCards";

export default function Agenda() {
  const testArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  return (
    <ParentView>
      <UserHeader />
      <ParentViewContent>
        <ChildrenViewContent style={styles.boxWithShadow}>
          <ChildrenViewContentFlatList
            data={testArray}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MessageCards id={item.id} />}
          />
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
