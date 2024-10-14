import React, { useEffect, useState } from "react";
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

  const [stateMessageArray, setStateMessageArray] = useState([])

  const handleGetMessages = () => {
    const urlGetMessages = `https://vb-gepy-backend-web.onrender.com/recado-turma`
    const tempArray = []
    axios({
      method: "get",
      url: urlGetMessages,
    }).then((response)  => {
      response.data.map((items, index) => {
        tempArray.push({
          id: response.data[index].id,
          date: response.data[index].data,
          hour: response.data[index].hora,
          title: response.data[index].titulo,
          sender: response.data[index].remetente.nomeCompleto,
          sender_id: response.data[index].remetente.id,
          recipient_id: response.data[index].destinatario.id,
          description: response.data[index].descricao,
          status: response.data[index].status
        })

        console.log(response.data[index].destinatario.id)
      })
      
      setStateMessageArray(tempArray)
      console.log(stateMessageArray)
    });
  }

  const isCurrtentFocusedValidation = () => {
    if (focused === true) {
      handleGetMessages()
    }
  }

  useEffect(() => {
    isCurrtentFocusedValidation();
  }, [focused]);

  return (
    <ParentView>
      <UserHeader />
      <ParentViewContent>
        <ChildrenViewContent style={styles.boxWithShadow}>
          <ChildrenViewContentFlatList
            data={stateMessageArray}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MessageCards
                id={item.id}
                date={item.date}
                hour={item.hour}
                title={item.title}
                description={item.description}
                sender={item.sender}
                sender_ID={item.sender_id}
                recipient_ID={item.recipient_id}
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
