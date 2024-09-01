import { StyleSheet, View } from "react-native";
import {
  CardNewsView,
  CardNewsViewLeft,
  CardNewsViewRight,
  CardNewsImageViewLeft,
  CardNewsImageViewRight,
  CardNewsImage,
} from "./styles";
import { useEffect, useState } from "react";
import DropShadow from "react-native-drop-shadow";

export default function NewsCards({ cardTipe }) {
  const [stateTest, setStateTest] = useState();

  useEffect(() => {
    setStateTest(cardTipe);
  }, [cardTipe]);

  return (
    <>
      {stateTest === 1 ? (
        <CardNewsView>
          <DropShadow
            style={{
              shadowColor: "#171717",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.4,
              shadowRadius: 2,
              elevation: 5, 
            }}
          >
            <CardNewsImageViewLeft>
              <CardNewsImage
                source={{ uri: "https://placehold.co/400.png?text=Image+1" }}
              />
            </CardNewsImageViewLeft>
          </DropShadow>
          <CardNewsViewRight></CardNewsViewRight>
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
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    // Para Android:
    elevation: 5, // Utilize apenas para Android
  },
});
