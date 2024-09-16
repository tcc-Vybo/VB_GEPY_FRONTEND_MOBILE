import { StyleSheet, Text } from "react-native";
import {
  CardNewsView,
  CardNewsViewLeft,
  CardNewsViewRight,
  CardNewsImageViewLeft,
  CardNewsImageViewRight,
  CardNewsImage,
} from "./styles";
import { useEffect, useState } from "react";

export default function NewsCards({ cardTipe }) {
  const [stateTest, setStateTest] = useState();

  useEffect(() => {
    setStateTest(cardTipe);
  }, [cardTipe]);

  return (
    <>
      {stateTest === 1 ? (
        <CardNewsView>
            <CardNewsImageViewLeft style={styles.boxWithShadow}>
              <CardNewsImage
                source={{ uri: "https://placehold.co/400.png?text=Image+1" }}
              />
            </CardNewsImageViewLeft>
          <CardNewsViewRight style={styles.boxWithShadow}>
          </CardNewsViewRight>
        </CardNewsView>
      ) : (
        <CardNewsView>
          <CardNewsViewLeft style={styles.boxWithShadow}></CardNewsViewLeft>
          <CardNewsImageViewRight style={styles.boxWithShadow}>
            <CardNewsImage
              source={{ uri: "https://placehold.co/400.png?text=Image+2" }}
            />
          </CardNewsImageViewRight>
        </CardNewsView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
  }
});
