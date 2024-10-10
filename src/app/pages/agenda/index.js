import React from "react";
import { StyleSheet, Modal } from "react-native";
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
      date: 23,
      title: "Prova",
      description: "No dia marcado na mensagem será realizada uma prova",
      sender: "Gustavo Henrique",
    },
    {
      id: 2,
      date: 24,
      title: "Prova",
      description: "No dia marcado na mensagem será realizada uma prova",
      sender: "Gustavo Henrique",
    },
    {
      id: 3,
      date: 25,
      title: "Prova",
      description: "No dia marcado na mensagem será realizada uma prova",
      sender: "Gustavo Henrique",
    },
    {
      id: 4,
      date: 25,
      title: "Prova",
      description: "No dia marcado na mensagem será realizada uma prova",
      sender: "Gustavo Henrique",
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
            renderItem={({ item }) => (
              <MessageCards
                id={item.id}
                date={item.date}
                title={item.title}
                description={item.description}
                sender={item.sender}
              />
            )}
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
