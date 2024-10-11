import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import UserHeader from "../../components/userHeader";
import {
  ParentViewContent,
  ChildrenViewContent,
  ParentView,
  ChildrenViewContentFlatList,
} from "./styles";
import MessageCards from "../../components/messageCards/messageCards";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";

export default function Agenda() {
  const focused = useIsFocused();

  const handleGetMessages = () => {
    const urlGetMessages = `https://vb-gepy-backend-web.onrender.com/recado-turma`

    axios({
      method: "get",
      url: urlGetMessages,
    }).then(function (response) {
      console.log(response.data);
    });
    
  }

  const isCurrtentFocusedValidation = () => {
    if (focused === true) {
      handleGetMessages()
    }
  }

  const testFunction = () => {
    console.log("CHAMOU!");
  };

  useEffect(() => {
    isCurrtentFocusedValidation();
  }, [focused]);

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
    elevation: 7
  },
});
