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
            <Text>🙂</Text>
          </CardNewsViewRight>
        </CardNewsView>
      ) : (
        <CardNewsView>
          <CardNewsViewLeft></CardNewsViewLeft>
          <CardNewsImageViewRight>
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
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
